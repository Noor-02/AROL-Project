from django.forms import ValidationError
from rest_framework import serializers

from admission.models import (
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Qualifying_Examination,
    Recommendation,
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


class Education_File_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Education_Detail
        fields = ["marksheet", "certificate"]


class Employment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employment
        fields = "__all__"


class Examination_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Qualifying_Examination
        fields = "__all__"


class Profile_Serializer(serializers.ModelSerializer):
    account = serializers.PrimaryKeyRelatedField(
        read_only=True, default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Profile
        fields = "__all__"


class Project_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Project_Detail
        fields = "__all__"


class Recommendation_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = [
            "application_id",
            "referree_email",
            "referree_name",
            "referree_designation",
            "referree_organization",
        ]


class Recommendation_Referral_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = [
            "overall_intellectual_ability",
            "analytical_ability",
            "goal_clarity",
            "overall_potential",
            "oral_expression_english",
            "written_expression_english",
            "work_independently",
            "work_with_others",
            "research_potential",
            "motivation",
            "recommendation",
        ]
