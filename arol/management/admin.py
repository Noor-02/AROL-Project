from django.contrib import admin
from django.contrib.admin.models import LogEntry
from django.utils.translation import gettext as _

from .models import Caste_Category, Department


@admin.register(LogEntry)
class LogEntryAdmin(admin.ModelAdmin):
    date_hierarchy = "action_time"
    list_filter = ["user", "content_type", "action_flag"]

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
    ordering = ("department_id",)
    search_fields = ("department_id", "department_name")
    list_display = ("department_id", "department_name", "department_code")


admin.site.register(Caste_Category)
admin.site.register(Department, Department_Admin)
