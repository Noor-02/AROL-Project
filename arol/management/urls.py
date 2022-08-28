from django.urls import path

from .views import Department_View, Program_View


urlpatterns = [
    path("department", Department_View.as_view(), "department"),
    path("program", Program_View.as_view(), "program"),
]
