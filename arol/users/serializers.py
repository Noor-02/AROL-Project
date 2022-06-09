from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.utils.encoding import DjangoUnicodeDecodeError, force_str
from django.utils.http import urlsafe_base64_decode
from django.utils.translation import gettext as _
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from .models import Account


class Registration_Serializer(serializers.ModelSerializer):
    password1 = serializers.CharField(
        label=_("Password"),
        required=True,
        style={"input_type": "password"},
        write_only=True,
    )
    password2 = serializers.CharField(
        label=_("Confirm Password"),
        required=True,
        style={"input_type": "password"},
        write_only=True,
    )

    class Meta:
        model = Account
        fields = ("email", "password1", "password2")

    def save(self):
        account = Account(email=self.validated_data["email"])
        password1 = self.validated_data["password1"]
        password2 = self.validated_data["password2"]

        if password1 != password2:
            raise serializers.ValidationError({"password": "Passwords should match"})

        try:
            validate_password(password1)
        except ValidationError as e:
            raise serializers.ValidationError({"error": list(e)})

        account.set_password(password1)
        account.is_active = False
        account.save()
        account.groups.set([1])
        account.send_verification_mail()

        return account


class Email_Verification_Serializer(serializers.ModelSerializer):
    token = serializers.CharField()

    class Meta:
        model = Account
        fields = ["token"]


class Login_Serializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        data["email"] = self.user.email
        data["groups"] = self.user.groups.values_list("name", flat=True)
        return data


class Change_Password_Serializer(serializers.Serializer):
    old_password = serializers.CharField(
        label=_("Old Password"),
        required=True,
        style={"input_type": "password"},
        write_only=True,
    )
    new_password1 = serializers.CharField(
        label=_("New Password"),
        required=True,
        style={"input_type": "password"},
        write_only=True,
    )
    new_password2 = serializers.CharField(
        label=_("Confirm Password"),
        required=True,
        style={"input_type": "password"},
        write_only=True,
    )

    def is_valid(self):
        validity = super(Change_Password_Serializer, self).is_valid()
        if validity:
            password1 = self.validated_data["new_password1"]
            password2 = self.validated_data["new_password2"]
            if password1 != password2:
                raise serializers.ValidationError({"error": "Passwords should match"})
        return validity

    class Meta:
        fields = ["old_password", "new_password1", "new_password2"]


class Reset_Password_Serializer(serializers.Serializer):
    email = serializers.EmailField()
    class Meta:
        fields = ["email"]


class Set_Password_Serializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, style={"input_type": "password"}, write_only=True, required=True
    )
    uidb64 = serializers.CharField(write_only=True, required=True)
    token = serializers.CharField(write_only=True, required=True)

    class Meta:
        fields = ["password", "uidb64", "token"]

    def validate(self, attrs):
        try:
            password = attrs.get("password")
            uidb64 = attrs.get("uidb64")
            token = attrs.get("token")

            email = force_str(urlsafe_base64_decode(uidb64))
            user = Account.objects.get(email=email)

            if not PasswordResetTokenGenerator().check_token(user, token):
                raise ObjectDoesNotExist({"error": "The Reset Link is invalid"})

            validate_password(password)
            user.set_password(password)
            user.save()

            return user

        except (ObjectDoesNotExist, DjangoUnicodeDecodeError):
            raise serializers.ValidationError({"error": "The Reset Link is invalid"})


class Logout_Serializer(serializers.Serializer):
    refresh_token = serializers.CharField(required=True)

    def validate(self, attrs):
        self.token = attrs.get("refresh_token")
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            raise serializers.ValidationError(
                {"bad_token": "Token is expired or invalid."}
            )
