from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Department, Program
from .serializers import Department_Serializer, Program_Serializer


class Department_View(generics.ListAPIView):
    serializer_class = Department_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Department.objects.all()


class Program_View(generics.ListAPIView):
    serializer_class = Program_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Program.objects.all()
