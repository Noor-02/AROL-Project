from django.contrib import admin
from .models import Profile, Advertisement


class Profile_Admin(admin.ModelAdmin):
    model = Profile
    ordering = ("applicant_id",)
    search_fields = ("applicant_id", "full_name")
    list_display = ("applicant_id", "full_name")
    filter_horizontal = ()

    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("applicant_id"),
                    ("type", "marital_status"),
                    "full_name",
                    "father_or_spouse_name",
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


admin.site.register(Profile, Profile_Admin)
admin.site.register(Advertisement)