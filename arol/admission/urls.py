from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from .views import (
    Advertisement_Viewset,
    Application_Viewset,
    Education_Viewset,
    Employment_Viewset,
    Examination_Viewset,
    Profile_Viewset,
    Project_Viewset,
    Recommendation_Viewset,
)
from .file_exports.generate_pdf import export_pdf_wrapper
from .file_exports.generate_xlsx import generate_xlsx
from .file_exports.generate_zip import generate_zip_by_year

router = DefaultRouter()
router.register(r"advertisement", Advertisement_Viewset, "advertisement")
router.register(r"application", Application_Viewset, "application")
router.register(r"education", Education_Viewset, "education")
router.register(r"employment", Employment_Viewset, "employment")
router.register(r"examination", Examination_Viewset, "examination")
router.register(r"profile", Profile_Viewset, "profile")
router.register(r"project", Project_Viewset, "project")
router.register(r"recommendation", Recommendation_Viewset, "recommendation")

urlpatterns = [
    path("", include(router.urls)),
    path("export_xlsx/",generate_xlsx),
    path("export_pdf/<application_id>", export_pdf_wrapper),
    path("export_zip/<year>", generate_zip_by_year),
]
