from django.urls import path

from .views import (
    Academic_Year_View,
    Category_View,
    Gender_View,
    Marital_Status_View,
    Qualifying_Exam_View,
    Work_Type_View,
)

urlpatterns = [
    path("academic_year/", Academic_Year_View.as_view(), name="academic_year"),
    path("category/", Category_View.as_view(), name="category"),
    path("gender/", Gender_View.as_view(), name="gender"),
    path("marital_status/", Marital_Status_View.as_view(), name="marital_status"),
    path("qualifying_exam/", Qualifying_Exam_View.as_view(), name="qualifying_exam"),
    path("work_type/", Work_Type_View.as_view(), name="work_type"),
]
