from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from import_export import fields, resources
from import_export.widgets import ManyToManyWidget

from .models import Account


class Account_Resource(resources.ModelResource):

    groups = fields.Field(
        column_name="groups",
        attribute="groups",
        widget=ManyToManyWidget(Group, ",", "name"),
    )
    password = fields.Field(
        column_name="password",
        attribute="password",
    )

    def before_import_row(self, row, **kwargs):
        password = BaseUserManager().make_random_password(length=15)
        row["password"] = make_password(password)
        row["groups"] = "Student"

    def after_save_instance(self, instance, using_transactions, dry_run):
        if not dry_run:
            instance.send_activation_mail()

    class Meta:
        model = Account
        fields = ("email", "full_name")
        export_order = ("email", "full_name")
        import_id_fields = ("email",)
