from admission.permissions import IsSelf_Application
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import (
    DjangoModelPermissionsOrAnonReadOnly,
    IsAuthenticated,
)

from .models import GATE, JAM, UGC_CSIR
from .serializers import GATE_Serializer, JAM_Serializer, UGC_CSIR_Serializer


class GATE_Viewset(viewsets.ModelViewSet):
    serializer_class = GATE_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsSelf_Application,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    def get_view_name(self):
        return "GATE Viewset"

    def get_queryset(self):
        user = self.request.user
        return GATE.objects.filter(application_id__applicant_id__account=user)


class JAM_Viewset(viewsets.ModelViewSet):
    serializer_class = JAM_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsSelf_Application,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    def get_view_name(self):
        return "JAM Viewset"

    def get_queryset(self):
        user = self.request.user
        return JAM.objects.filter(application_id__applicant_id__account=user)


class UGC_CSIR_Viewset(viewsets.ModelViewSet):
    serializer_class = UGC_CSIR_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsSelf_Application,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    def get_view_name(self):
        return "UGC CSIR Viewset"

    def get_queryset(self):
        user = self.request.user
        return UGC_CSIR.objects.filter(application_id__applicant_id__account=user)
