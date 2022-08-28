from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from .views import (
    Academic_Year_View,
    Category_View,
    Gender_View,
    Marital_Status_View,
    Qualifying_Exam_View,
    Work_Type_View,
)

router = DefaultRouter()
router.register(r"academic_year", Academic_Year_View, "academic_year")
router.register(r"category", Category_View, "category")
router.register(r"gender", Gender_View, "gender")
router.register(r"marital_status", Marital_Status_View, "marital_status")
router.register(r"qualifying_exam", Qualifying_Exam_View, "qualifying_exam")
router.register(r"work_type", Work_Type_View, "work_type")

urlpatterns = [
    path("", include(router.urls)),
]
