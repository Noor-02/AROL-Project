from django.contrib import admin
from django.utils.translation import gettext as _

from .models import (
    Academic_Year,
    Category,
    Gender,
    Marital_Status,
    Qualifying_Exam,
    Work_Type,
)

admin.site.register(Academic_Year)
admin.site.register(Category)
admin.site.register(Gender)
admin.site.register(Marital_Status)
admin.site.register(Qualifying_Exam)
admin.site.register(Work_Type)
