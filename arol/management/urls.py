from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from .views import Department_View, Program_View

router = DefaultRouter()
router.register(r"department", Department_View, "department")
router.register(r"program", Program_View, "program")

urlpatterns = [
    path("", include(router.urls)),
]
