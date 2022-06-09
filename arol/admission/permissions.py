from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    def has_permission(self, request, view):
        return super().has_permission(request, view)

    def has_object_permission(self, request, view, obj):
        return obj.account == request.user


class IsOwner_Applicant(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.applicant_id == request.user.profile


class IsOwner_Application(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.application_id in request.user.profile.application
