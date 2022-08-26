from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from .views import (
    Application_Viewset,
    Education_Viewset,
    Employment_Viewset,
    Examination_Viewset,
    Profile_Viewset,
    Project_Viewset,
    Recommendation_Viewset,
    Recommendation_Referral_Viewset,
)
from .file_exports import export_pdf_wrapper
from .file_exports import generate_xlsx
from .file_exports import generate_zip_by_year

router = DefaultRouter()
router.register(r"application", Application_Viewset, "application")
router.register(r"education", Education_Viewset, "education")
router.register(r"employment", Employment_Viewset, "employment")
router.register(r"examination", Examination_Viewset, "examination")
router.register(r"profile", Profile_Viewset, "profile")
router.register(r"project", Project_Viewset, "project")
router.register(r"recommendation", Recommendation_Viewset, "recommendation")
router.register(
    r"recommendation_referral",
    Recommendation_Referral_Viewset,
    "recommendation_referral",
)

urlpatterns = [
    path("", include(router.urls)),
    path("export_xlsx/<year>", generate_xlsx, name="export_xlsx_by_year"),
    path("export_pdf/<application_id>", export_pdf_wrapper, name="export_pdf"),
    path("export_zip/<year>", generate_zip_by_year, name="export_zip"),
]
