import re
from django.shortcuts import get_object_or_404
from emails import Letter_of_Recommendation
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import redirect
from rest_framework.permissions import (
    AllowAny,
    DjangoModelPermissionsOrAnonReadOnly,
    IsAdminUser,
    IsAuthenticated,
)
from rest_framework.response import Response
from .forms import xlxsForm

from .file_exports import export_pdf, generate_xlsx_by_year, generate_zip_by_year, generate_xlsx
from .models import (
    Advertisement,
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Recommendation,
    Referral,
)
from .permissions import IsSelf, IsSelf_Applicant, IsSelf_Application
from .serializers import (
    Advertisement_Serializer,
    Application_Serializer,
    Education_Serializer,
    Employment_Serializer,
    Profile_Serializer,
    Project_Serializer,
    Recommendation_Serializer,
    Referral_Serializer,
)


class Advertisement_Viewset(viewsets.ModelViewSet):
    serializer_class = Advertisement_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly,)

    def get_queryset(self):
        return Advertisement.objects.all()


class Application_Viewset(viewsets.ModelViewSet):

    serializer_class = Application_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    @action(detail=True, methods=["GET"], permission_classes=[IsAdminUser])
    def generate_pdf(self, request, pk=None):
        """
        Generate a PDF for this application.
        """
        return export_pdf(request, pk)

    @action(
        detail=False,
        methods=["GET"],
        permission_classes=[IsAdminUser],
        url_path="export_xlsx/(?P<year>[^/.]+)",
    )
    def generate_xlsx(self, request, year):
        return generate_xlsx_by_year(request, year)

    @action(
        detail=False,
        methods=["GET"],
        permission_classes=[IsAdminUser],
        url_path="export_xlsx/(?P<year>[^/.]+)",
    )
    def generate_xlsx(self, request, year):
        return generate_xlsx_by_year(request, year)

    @action(
        detail=False,
        methods=["GET"],
        permission_classes=[IsAdminUser],
        url_path="export_zip/(?P<year>[^/.]+)",
    )
    def generate_zip(self, request, year):
        return generate_zip_by_year(request, year)

    def get_queryset(self):
        user = self.request.user
        return Application.objects.filter(applicant_id__account=user)


class Education_Viewset(viewsets.ModelViewSet):
    serializer_class = Education_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsSelf_Applicant,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Education_Detail.objects.filter(applicant_id__account=user)

    def create(self, request):
        data = []
        partial = True
        queryset = self.get_queryset()
        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)

        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            data.append(serializer.data)

        return Response(data, status=status.HTTP_201_CREATED)


class Employment_Viewset(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = Employment_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Employment.objects.filter(applicant_id__account=user)

    def create(self, request):
        data = []
        partial = True
        queryset = self.get_queryset()
        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)

        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            data.append(serializer.data)

        return Response(data, status=status.HTTP_201_CREATED)


class Profile_Viewset(viewsets.ModelViewSet):
    serializer_class = Profile_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsSelf,
        IsAuthenticated,
        DjangoModelPermissionsOrAnonReadOnly,
    )

    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(account=user)


class Project_Viewset(viewsets.ModelViewSet):
    serializer_class = Project_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Project_Detail.objects.filter(applicant_id__account=user)

    def create(self, request):
        data = []
        partial = True
        queryset = self.get_queryset()
        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)

        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            data.append(serializer.data)

        return Response(data, status=status.HTTP_201_CREATED)


class Recommendation_Viewset(
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = Recommendation_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsSelf_Application,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    @action(
        detail=True,
        methods=["GET"],
        permission_classes=[IsAdminUser],
        url_path="send_referral",
    )
    def send_referral(self, request, pk=None):
        instance = Recommendation.objects.get(pk=pk)
        mail = Letter_of_Recommendation(instance)
        mail.send()
        return Response({"success": "Mail sent successfully"})

    def get_queryset(self):
        user = self.request.user
        return Recommendation.objects.filter(application_id__applicant_id__account=user)

    def create(self, request):
        data = []
        partial = True
        queryset = self.get_queryset()
        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)

        for i in request.data:
            if "id" in i:
                instance = get_object_or_404(queryset, pk=i["id"])
                serializer = self.get_serializer(
                    instance, data=i, partial=partial)
            else:
                serializer = self.get_serializer(data=i)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            data.append(serializer.data)

        return Response(data, status=status.HTTP_201_CREATED)


class Referral_Viewset(
    mixins.DestroyModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    lookup_field = "recommendation_id__referral_id"
    serializer_class = Referral_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return Referral.objects.all()


def exp(request):

    form = xlxsForm(request.POST)
    print(form)
    return generate_xlsx(request, request.POST['data'], form)

    # return redirect("/admin/admission/application/")
