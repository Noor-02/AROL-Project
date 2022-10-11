from django.forms import ValidationError
from rest_framework import serializers

from .models import (
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Recommendation,
    Referral,
)


class Application_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = "__all__"

    def validate(self, attrs):
        if attrs["applicant_id"].account != self.context["request"].user:
            raise ValidationError({"error": "Applicant ID is not valid"})
        return super().validate(attrs)


class Education_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Education_Detail
        fields = "__all__"

    def validate(self, attrs):
        if attrs["applicant_id"].account != self.context["request"].user:
            raise ValidationError({"error": "Applicant ID is not valid"})
        return super().validate(attrs)


class Employment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employment
        fields = "__all__"


class Profile_Serializer(serializers.ModelSerializer):
    account = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Profile
        exclude = ("applicant_number",)


class Project_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Project_Detail
        fields = "__all__"


class Recommendation_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = "__all__"


class Referral_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Referral
        fields = "__all__"
