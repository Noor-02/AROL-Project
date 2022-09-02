from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from .views import GATE_Viewset, JAM_Viewset, UGC_CSIR_Viewset

router = DefaultRouter()
router.register(r"GATE", GATE_Viewset, "GATE")
router.register(r"JAM", JAM_Viewset, "JAM")
router.register(r"UGC_CSIR", UGC_CSIR_Viewset, "UGC_CSIR")

urlpatterns = [
    path("", include(router.urls)),
]
