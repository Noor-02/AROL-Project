from django.http import HttpResponse
from rest_framework.permissions import BasePermission


class IsSelf(BasePermission):
    def has_permission(self, request, view):
        return super().has_permission(request, view)

    def has_object_permission(self, request, view, obj):
        return obj.account == request.user


class IsSelf_Applicant(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.applicant_id == request.user.profile


class IsSelf_Application(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.application_id in request.user.profile.application


def IsStaff(request):
    if not (request.user.is_staff):
        return HttpResponse(
            "Error: 404 Not Found",
            content_type="text/html",
        )
