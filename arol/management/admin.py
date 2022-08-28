from django.contrib import admin
from django.contrib.admin.models import LogEntry
from django.utils.translation import gettext as _

from .models import Department, Program


@admin.register(LogEntry)
class LogEntryAdmin(admin.ModelAdmin):
    date_hierarchy = "action_time"
    list_filter = ["content_type", "action_flag"]

    search_fields = ["action_flag", "user__email"]

    list_display = [
        "action_time",
        "user",
        "content_type",
        "action_flag",
    ]

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_view_permission(self, request, obj=None):
        return request.user.is_admin


@admin.register(Department)
class Department_Admin(admin.ModelAdmin):
    model = Department
    ordering = ("department_code",)
    search_fields = ("department_id", "department_name")
    list_display = ("department_code", "department_name", "department_id")


@admin.register(Program)
class Program_Admin(admin.ModelAdmin):
    model = Program
    ordering = ("program_code",)
    search_fields = ("program_name",)
    readonly_fields = ("full_program_code",)
    list_display = (
        "__str__",
        "full_program_code",
        "get_department_id",
        "program_name",
    )
    list_filter = ("department", "program_name")

    @admin.display(description="Department")
    def get_department_id(self, obj):
        return obj.department.department_id
