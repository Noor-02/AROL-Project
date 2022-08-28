from rest_framework import serializers

from .models import Department, Program


class Department_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"


class Program_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = "__all__"
