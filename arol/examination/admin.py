from datetime import date

from dateutil.relativedelta import relativedelta
from django.contrib import admin

from .models import CAT, GATE, GRE, JAM, UGC_CSIR


class CAT_Inline(admin.StackedInline):
    model = CAT
    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("registration_number", "date_of_appearance"),
                    "varc_percentile",
                    "dilr_percentile",
                    "qa_percentile",
                    "overall_percentile",
                    "validity",
                )
            },
        ),
    )


@admin.register(CAT)
class CAT_Admin(admin.ModelAdmin):
    model = CAT
    ordering = ("application_id",)
    search_fields = (
        "application_id__application_id",
        "registration_number",
    )
    list_display = ("application_id", "overall_percentile", "is_valid")

    def is_valid(self, obj):
        return date.today() >= obj.validity

    is_valid.boolean = True
    is_valid.short_description = "Validity"
    is_valid.allow_tags = True

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    ("registration_number", "date_of_appearance"),
                    "varc_percentile",
                    "dilr_percentile",
                    "qa_percentile",
                    "overall_percentile",
                    "validity",
                )
            },
        ),
    )


class GATE_Inline(admin.StackedInline):
    model = GATE
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "registration_number",
                    ("month_of_appearance", "year_of_appearance"),
                    "examination_code",
                    ("marks", "gate_score"),
                    ("candidates_appeared", "air"),
                    "validity",
                )
            },
        ),
    )


@admin.register(GATE)
class GATE_Admin(admin.ModelAdmin):
    model = GATE
    ordering = ("application_id",)
    search_fields = (
        "application_id__application_id",
        "registration_number",
        "examination_code",
    )
    list_display = ("application_id", "examination_code", "air", "is_valid")

    def is_valid(self, obj):
        return date.today() >= obj.validity

    is_valid.boolean = True
    is_valid.short_description = "Validity"
    is_valid.allow_tags = True

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    "registration_number",
                    ("month_of_appearance", "year_of_appearance"),
                    "examination_code",
                    ("marks", "gate_score"),
                    ("candidates_appeared", "air"),
                    "validity",
                )
            },
        ),
    )



class GRE_Inline(admin.StackedInline):
    model = GRE
    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("registration_number", "date_of_exam"),
                    "vr_percentile",
                    "aw_percentile",
                    "qr_percentile",
                    "validity",
                )
            },
        ),
    )


@admin.register(GRE)
class GRE_Admin(admin.ModelAdmin):
    model = GRE
    ordering = ("application_id",)
    search_fields = (
        "application_id__application_id",
        "registration_number",
    )
    list_display = ("application_id", "is_valid")

    def is_valid(self, obj):
        return date.today() >= obj.validity

    is_valid.boolean = True
    is_valid.short_description = "Validity"
    is_valid.allow_tags = True

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    ("registration_number", "date_of_exam"),
                    "vr_percentile",
                    "aw_percentile",
                    "qr_percentile",
                    "validity",
                )
            },
        ),
    )

class JAM_Inline(admin.StackedInline):
    model = JAM
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "registration_number",
                    ("month_of_appearance", "year_of_appearance"),
                    "examination_code",
                    "marks",
                    ("candidates_appeared", "air"),
                    ("qualified","validity"),
                )
            },
        ),
    )


@admin.register(JAM)
class JAM_Admin(admin.ModelAdmin):
    model = JAM
    ordering = ("application_id",)
    search_fields = (
        "application_id__application_id",
        "registration_number",
        "examination_code",
    )
    list_display = ("application_id", "examination_code", "air", "is_valid")

    def is_valid(self, obj):
        return date.today() >= obj.validity

    is_valid.boolean = True
    is_valid.short_description = "Validity"
    is_valid.allow_tags = True

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    "registration_number",
                    ("month_of_appearance", "year_of_appearance"),
                    "examination_code",
                    "marks",
                    ("candidates_appeared", "air"),
                    ("qualified","validity"),
                )
            },
        ),
    )


class UGC_CSIR_Inline(admin.StackedInline):
    model = UGC_CSIR
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    "subject",
                    ("roll_number", "date_issued"),
                    ("qualified_ap", "ap_validity"),
                    ("qualified_jrf", "jrf_validity"),
                )
            },
        ),
    )


@admin.register(UGC_CSIR)
class UGC_CSIR_Admin(admin.ModelAdmin):
    model = UGC_CSIR
    ordering = ("application_id",)
    search_fields = (
        "application_id__application_id",
        "ref_number",
    )
    list_display = ("application_id", "ref_number", "jrf_is_valid", "ap_is_valid")

    def jrf_is_valid(self, obj):
        if obj.qualified_jrf:
            return date.today() >= obj.date_issued + relativedelta(
                years=obj.jrf_validity
            )

        return False

    def ap_is_valid(self, obj):
        if obj.qualified_ap:
            return date.today() >= obj.date_issued + relativedelta(
                years=obj.ap_validity
            )

        return False

    jrf_is_valid.boolean = True
    jrf_is_valid.short_description = "JRF Validity"
    jrf_is_valid.allow_tags = True

    ap_is_valid.boolean = True
    ap_is_valid.short_description = "Assistant Prof. Validity"
    ap_is_valid.allow_tags = True

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "application_id",
                    "subject",
                    ("ref_number", "date_issued"),
                    ("qualified_ap", "ap_validity"),
                    ("qualified_jrf", "jrf_validity"),
                )
            },
        ),
    )
