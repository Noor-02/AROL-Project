from django.contrib import admin
from .models import Profile, Advertisement


class Profile_Admin(admin.ModelAdmin):
    model = Profile
    ordering = ("applicant_id",)
    search_fields = ("applicant_id", "full_name")
    list_display = ("applicant_id", "full_name")
    list_filter = ("pwd", "gender", "caste_category", "type_of_applicant")
    readonly_fields = ("applicant_id",)

    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("applicant_id"),
                    ("type_of_applicant", "nationality"),
                    "full_name",
                    "father_or_spouse_name",
                    "marital_status",
                    "date_of_birth",
                    ("gender", "caste_category"),
                    ("contact_number", "parent_contact_number"),
                    ("pwd", "disability"),
                )
            },
        ),
        (
            "Address for Correspondence",
            {
                "fields": (("c_address"), ("c_city", "c_state"), "c_pin"),
                "classes": ("collapse",),
            },
        ),
        (
            "Permanent Address",
            {
                "fields": (("p_address"), ("p_city", "p_state"), "p_pin"),
                "classes": ("collapse",),
            },
        ),
    )


class Advertisement_Admin(admin.ModelAdmin):
    model = Advertisement
    ordering = ("advertisement_id",)
    search_fields = ("advertisement_id",)
    list_display = ("advertisement_id", "academic_year", "department", "programme")
    list_filter = ("academic_year", "department", "programme")
    filter_horizontal = ()
    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("advertisement_id"),
                    "academic_year",
                    ("department", "programme"),
                    "file",
                )
            },
        ),
    )


admin.site.register(Profile, Profile_Admin)
admin.site.register(Advertisement, Advertisement_Admin)
