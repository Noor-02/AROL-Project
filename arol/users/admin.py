from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext as _
from import_export.admin import ImportMixin


from .forms import AccountChangeForm, AccountCreationForm
from .models import Account
from .resources import Account_Resource


@admin.register(Account)
class AccountAdmin(ImportMixin, UserAdmin):
    form = AccountChangeForm
    add_form = AccountCreationForm
    model = Account

    ordering = ("date_joined",)
    search_fields = ("email", "full_name")
    list_display = ("email", "full_name", "date_joined")
    list_filter = ("groups",)

    filter_horizontal = ()
    readonly_fields = ("date_joined", "last_login")
    fieldsets = (
        (None, {"fields": ("email", "full_name", "password")}),
        (
            _("Permissions"),
            {"fields": ("groups", ("is_active", "is_staff", "is_admin"))},
        ),
        (_("Important Dates"), {"fields": ("date_joined", "last_login")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2", "groups"),
            },
        ),
    )
    resource_class = Account_Resource
