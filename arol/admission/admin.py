from django.contrib import admin

from .models import (
    Advertisement,
    Application,
    Education_Detail,
    Employment,
    Profile,
    Project_Detail,
    Qualifying_Examination,
    Recommendation,
)


class Advertisement_Admin(admin.ModelAdmin):
    model = Advertisement
    ordering = ("-advertisement_id",)
    search_fields = ("advertisement_id",)
    list_display = ("advertisement_id", "programme")
    list_filter = ("academic_year", "programme", "session")
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "advertisement_id",
                    "academic_year",
                    "programme",
                    "session",
                    "advertisement_number",
                    ("begins_from", "deadline"),
                    "file",
                )
            },
        ),
    )

    def get_readonly_fields(self, request, obj=None):
        # if obj:
        #     return [
        #         "advertisement_id",
        #         "advertisement_number",
        #         "session",
        #         "academic_year",
        #         "programme",
        #         "file",
        #     ]
        # else:
        return ["advertisement_id"]


class Application_Admin(admin.ModelAdmin):
    model = Application
    ordering = ("application_id",)
    search_fields = ("application_id", "applicant_id__applicant_id")
    list_display = ("application_id", "applicant_id", "advertisement_id")
    list_filter = ("advertisement_id",)
    readonly_fields = ("application_id",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    ("applicant_id", "advertisement_id"),
                    "payment_id",
                )
            },
        ),
    )


class Education_Admin(admin.ModelAdmin):
    model = Education_Detail
    ordering = ("applicant_id",)
    search_fields = ("applicant_id__applicant_id", "qualification")
    list_display = ("applicant_id", "qualification")
    list_filter = ("qualification",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "applicant_id",
                    "qualification",
                    ("examination", "university"),
                    "duration",
                    ("status", "year_of_passing"),
                    "marks_type",
                    ("percent", "out_of"),
                    "division",
                    "specialization",
                    ("marksheet", "certificate"),
                )
            },
        ),
    )


class Employment_Admin(admin.ModelAdmin):
    model = Employment
    ordering = ("applicant_id",)
    search_fields = ("applicant_id__applicant_id",)
    list_display = ("applicant_id",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "applicant_id",
                    ("organization", "post_held"),
                    "work_type",
                    ("from_date", "to_date"),
                    "duration",
                    "responsibilities",
                    "emoluments",
                )
            },
        ),
    )


class Examination_Admin(admin.ModelAdmin):
    model = Qualifying_Examination
    ordering = ("applicant_id",)
    search_fields = ("applicant_id__applicant_id", "registration_number")
    list_display = ("applicant_id", "examination")
    list_filter = ("examination",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "applicant_id",
                    "examination",
                    "registration_number",
                    "document",
                )
            },
        ),
    )


class Profile_Admin(admin.ModelAdmin):
    model = Profile
    ordering = ("applicant_id",)
    search_fields = ("applicant_id", "full_name")
    list_display = ("applicant_id", "full_name")
    list_filter = ("pwd", "gender", "caste_category", "type_of_applicant")
    readonly_fields = ("applicant_id", "image_preview")

    def image_preview(self, obj):
        return obj.image_preview

    image_preview.short_description = "Image Preview"
    image_preview.allow_tags = True

    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("applicant_id", "account"),
                    ("type_of_applicant", "nationality"),
                    "full_name",
                    ("photograph", "image_preview"),
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


class Project_Admin(admin.ModelAdmin):
    model = Project_Detail
    ordering = ("applicant_id",)
    search_fields = ("applicant_id__applicant_id", "title")
    list_display = ("applicant_id", "title")
    list_filter = ("degree",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "applicant_id",
                    ("degree", "university"),
                    "year_of_submission",
                    "supervisor",
                    "title",
                )
            },
        ),
    )


class Recommendation_Admin(admin.ModelAdmin):
    model = Recommendation
    ordering = ("application_id",)
    search_fields = ("application_id__application_id", "referree_email")
    list_display = ("application_id",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    "referree_email",
                    "letter_of_recommendation",
                    "referral_id",
                )
            },
        ),
    )


admin.site.register(Advertisement, Advertisement_Admin)
admin.site.register(Application, Application_Admin)
admin.site.register(Education_Detail, Education_Admin)
admin.site.register(Employment, Employment_Admin)
admin.site.register(Qualifying_Examination, Examination_Admin)
admin.site.register(Profile, Profile_Admin)
admin.site.register(Project_Detail, Project_Admin)
admin.site.register(Recommendation, Recommendation_Admin)
