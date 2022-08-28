from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import (
    Academic_Year,
    Category,
    Gender,
    Marital_Status,
    Qualifying_Exam,
    Work_Type,
)
from .serializers import (
    Academic_Year_Serializer,
    Category_Serializer,
    Gender_Serializer,
    Marital_Status_Serializer,
    Qualifying_Exam_Serializer,
    Work_Type_Serializer,
)


class Academic_Year_View(generics.ListAPIView):
    serializer_class = Academic_Year_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Academic_Year.objects.all()


class Category_View(generics.ListAPIView):
    serializer_class = Category_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Category.objects.all()


class Gender_View(generics.ListAPIView):
    serializer_class = Gender_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Gender.objects.all()


class Marital_Status_View(generics.ListAPIView):
    serializer_class = Marital_Status_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Marital_Status.objects.all()


class Qualifying_Exam_View(generics.ListAPIView):
    serializer_class = Qualifying_Exam_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Qualifying_Exam.objects.all()


class Work_Type_View(generics.ListAPIView):
    serializer_class = Work_Type_Serializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Work_Type.objects.all()
