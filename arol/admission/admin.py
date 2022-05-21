from django.contrib import admin
from .models import Profile
# Register your models here.

class Profile_Admin(admin.ModelAdmin):
    model = Profile
    ordering = ("applicant_id",)
    search_fields = ("applicant_id", "full_name")
    list_display = ("applicant_id", "full_name")
    filter_horizontal = ()


admin.site.register(Profile, Profile_Admin)