from django.contrib import admin
from django.contrib.admin.models import LogEntry
from django.utils.translation import gettext as _

from .models import Department, Programme

admin.site.unregister(LogEntry)


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


class Department_Admin(admin.ModelAdmin):
    model = Department
    ordering = ("department_code",)
    search_fields = ("department_id", "department_name")
    list_display = ("department_code", "department_name", "department_id")


class Programme_Admin(admin.ModelAdmin):
    model = Programme
    ordering = ("programme_code",)
    search_fields = ("programme_id", "programme_name")
    readonly_fields = ("full_programme_code",)
    list_display = (
        "full_programme_code",
        "programme_name",
        "programme_id",
        "get_department_id",
    )
    list_filter = ("department", "programme_id")

    @admin.display(description="Department")
    def get_department_id(self, obj):
        return obj.department.department_id


admin.site.register(Department, Department_Admin)
admin.site.register(Programme, Programme_Admin)
