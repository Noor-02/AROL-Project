from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from .views import (
    Application_Viewset,
    Education_Viewset,
    Employment_Viewset,
    Profile_Viewset,
    Project_Viewset,
    Recommendation_Viewset,
    Referral_Viewset,
)

router = DefaultRouter()
router.register(r"application", Application_Viewset, "application")
router.register(r"education", Education_Viewset, "education")
router.register(r"employment", Employment_Viewset, "employment")
router.register(r"profile", Profile_Viewset, "profile")
router.register(r"project", Project_Viewset, "project")
router.register(r"recommendation", Recommendation_Viewset, "recommendation")
router.register(r"referral", Referral_Viewset, "referral")

urlpatterns = [
    path("", include(router.urls)),
]
