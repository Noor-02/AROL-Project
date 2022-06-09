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
            raise ValidationError({"error": "Applicant_ID is not valid"})
        return super().validate(attrs)


class Education_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Education_Detail
        fields = "__all__"

    def validate(self, attrs):
        if attrs["applicant_id"].account != self.context["request"].user:
            raise ValidationError({"error": "Applicant_ID is not valid"})
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
        fields = "__all__"


class Recommendation_File_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = ["letter_of_recommendation"]
