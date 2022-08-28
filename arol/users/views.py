from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.exceptions import ValidationError
from django.core.signing import Signer
from django.utils.encoding import smart_str
from django.utils.http import urlsafe_base64_decode
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Account
from .serializers import (
    Change_Password_Serializer,
    Login_Serializer,
    Logout_Serializer,
    Registration_Serializer,
    Reset_Password_Serializer,
    Set_Password_Serializer,
)


class Registration_View(generics.CreateAPIView):
    serializer_class = Registration_Serializer
    permission_classes = [AllowAny]


class Verify_Email_View(APIView):
    permission_classes = [AllowAny]

    def get(self, request, signed_email, token):
        try:
            email = Signer().unsign(signed_email)
            user = Account.objects.get(email=email)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response(
                    {"error": "Invalid URL, check your URL or request for a new link."},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
            if user.is_active:
                return Response(
                    {"response": "Account has already been verified."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            user.is_active = True
            user.save()
            return Response(
                {"response": "Your account has been verified."},
                status=status.HTTP_200_OK,
            )

        except:
            return Response(
                {"error": "Invalid URL, check your URL or request for a new link."},
                status=status.HTTP_404_NOT_FOUND,
            )


class Generate_Verification_View(APIView):
    permission_classes = [AllowAny]

    def get(self, request, signed_email):
        try:
            email = Signer().unsign(signed_email)
            user = Account.objects.get(email=email)
            if user.is_active:
                return Response(
                    {"response": "Account has already been verified."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            else:
                user.send_verification_mail()
                return Response(
                    {"response": "Check your Email for further instructions."},
                    status=status.HTTP_200_OK,
                )

        except:
            return Response(
                {"error": "Invalid URL."},
                status=status.HTTP_404_NOT_FOUND,
            )


class Login_View(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = Login_Serializer


class Change_Password_View(generics.UpdateAPIView):
    serializer_class = Change_Password_Serializer
    model = Account
    permission_classes = [IsAuthenticated]

    def get_object(self, queryset=None):
        return self.request.user

    def partial_update(self, request):
        return Response(
            {"error": "Partial updates are forbidden"}, status=status.HTTP_403_FORBIDDEN
        )

    def update(self, request):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():

            if not self.object.check_password(
                serializer.validated_data.get("old_password")
            ):
                return Response(
                    {"error": "Wrong password. Enter Correct Password"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            new_password = serializer.validated_data.get("new_password1")
            try:
                validate_password(new_password)
                self.object.set_password(new_password)
                self.object.save()
                response = {
                    "message": "Password updated successfully",
                }

                return Response(response)
            except ValidationError as exception:
                response = {"error": exception.messages}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Reset_Password_View(generics.CreateAPIView):
    serializer_class = Reset_Password_Serializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data.get("email", "")

            if Account.objects.filter(email=email).exists():
                user = Account.objects.get(email=email)
                user.send_reset_password_mail()
                return Response(
                    {"success": "We have sent you a link to reset your password"},
                    status=status.HTTP_200_OK,
                )
            return Response(
                {"error": "Email not found, try a different email."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Password_Token_View(generics.ListAPIView):
    # TODO Redirects
    permission_classes = [AllowAny]

    def get(self, request, uidb64, token):

        try:
            email = smart_str(urlsafe_base64_decode(uidb64))
            user = Account.objects.get(email=email)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response(
                    {"error": "Invalid URL, check your URL or request for a new one."},
                    status=status.HTTP_401_UNAUTHORIZED,
                )

            return Response(
                {
                    "success": True,
                    "message": "Credentials Valid",
                    "uidb64": uidb64,
                    "token": token,
                },
                status=status.HTTP_200_OK,
            )

        except:

            return Response(
                {"error": "Invalid URL, check your URL or request for a new one."},
                status=status.HTTP_404_NOT_FOUND,
            )


class Set_Password_View(generics.GenericAPIView):
    serializer_class = Set_Password_Serializer
    permission_classes = [AllowAny]

    def put(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            return Response(
                {
                    "success": True,
                    "message": "Password reset success, you can now login using this password",
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Logout_View(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = Logout_Serializer

    # Token must be deleted from LocalStorage using FrontEnd

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_205_RESET_CONTENT)
