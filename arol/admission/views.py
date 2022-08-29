from rest_framework import mixins, viewsets
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import (
    AllowAny,
    DjangoModelPermissionsOrAnonReadOnly,
    IsAuthenticated,
)

from .models import (
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Qualifying_Examination,
    Recommendation,
    Referral,
)
from .permissions import (
    IsOwner,
    IsOwner_Applicant,
    IsOwner_Application,
)
from .serializers import (
    Application_Serializer,
    Education_Serializer,
    Employment_Serializer,
    Examination_Serializer,
    Profile_Serializer,
    Project_Serializer,
    Recommendation_Serializer,
    Referral_Serializer,
)


class Application_Viewset(viewsets.ModelViewSet):
    """
    Returns a list of all **active** accounts in the system.
    For more details on how accounts are activated please [see here][ref].

    [ref]: http://example.com/activating-accounts
    """

    serializer_class = Application_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Application.objects.filter(applicant_id__account=user)


class Education_Viewset(viewsets.ModelViewSet):
    serializer_class = Education_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsOwner_Applicant,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Education_Detail.objects.filter(applicant_id__account=user)


class Employment_Viewset(viewsets.ModelViewSet):
    serializer_class = Employment_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Employment.objects.filter(applicant_id__account=user)


class Examination_Viewset(viewsets.ModelViewSet):
    serializer_class = Examination_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        return Qualifying_Examination.objects.all()


class Profile_Viewset(viewsets.ModelViewSet):
    serializer_class = Profile_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    permission_classes = (
        IsOwner,
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
        IsOwner_Application,
        IsAuthenticated,
        # DjangoModelPermissionsOrAnonReadOnly,
    )
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        user = self.request.user
        return Recommendation.objects.filter(application_id__applicant_id__account=user)


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
