from rest_framework import viewsets
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from .models import (
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Qualifying_Examination,
    Recommendation,
)
from .serializers import (
    Application_Serializer,
    Education_Serializer,
    Education_File_Serializer,
    Employment_Serializer,
    Examination_Serializer,
    Profile_Serializer,
    Project_Serializer,
    Recommendation_Serializer,
    Recommendation_File_Serializer,
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
        return Application.objects.all()


class Education_Viewset(viewsets.ModelViewSet):
    serializer_class = Education_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]
    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.request.method == "PUT":
            serializer_class = Education_File_Serializer
        return serializer_class

    def update(self, request, pk=None):
        instance = self.get_object()
        if instance.marksheet:
            request.data.pop("marksheet")
        if instance.certificate:
            request.data.pop("certificate")
        return super(Education_Viewset, self).update(request, pk)

    def get_queryset(self):
        return Education_Detail.objects.all()


class Employment_Viewset(viewsets.ModelViewSet):
    serializer_class = Employment_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        return Employment.objects.all()


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
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        return Profile.objects.all()


class Project_Viewset(viewsets.ModelViewSet):
    serializer_class = Project_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_queryset(self):
        return Project_Detail.objects.all()


class Recommendation_Viewset(viewsets.ModelViewSet):
    serializer_class = Recommendation_Serializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ["s_no", "name", "occupation"]

    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.request.method == "PUT":
            serializer_class = Recommendation_File_Serializer
        return serializer_class

    def update(self, request, pk=None):
        instance = self.get_object()
        if instance.letter_of_recommendation:
            return Response({"response": "File has already been uploaded."})
        return super(Recommendation_Viewset, self).update(request, pk)

    def get_queryset(self):
        return Recommendation.objects.all()
