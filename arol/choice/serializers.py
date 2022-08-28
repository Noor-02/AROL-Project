from rest_framework import serializers

from .models import (
    Academic_Year,
    Category,
    Gender,
    Marital_Status,
    Qualifying_Exam,
    Work_Type,
)


class Academic_Year_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Academic_Year
        fields = "__all__"


class Category_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class Gender_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = "__all__"


class Marital_Status_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Marital_Status
        fields = "__all__"


class Qualifying_Exam_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Qualifying_Exam
        fields = "__all__"


class Work_Type_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Work_Type
        fields = "__all__"
