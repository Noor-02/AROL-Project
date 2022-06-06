from rest_framework import serializers

from admission.models import (
    Advertisement,
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Qualifying_Examination,
    Recommendation,
)


class Advertisement_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        fields = "__all__"


class Application_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = "__all__"


class Education_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Education_Detail
        fields = "__all__"


class Employment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employment
        fields = "__all__"


class Examination_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Qualifying_Examination
        fields = "__all__"


class Profile_Serializer(serializers.ModelSerializer):
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
