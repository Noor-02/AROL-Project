from django.conf import settings
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
            subject = "Activate your IITI AROL Account"
            message = """
            Hello {full_name},
            
            To activate your IITI AROL Account, please click on the following link and change your password:
            {link}
            
            Regards
            IIT Indore""".format(
                full_name=instance.full_name,
                link="http://127.0.0.1:8000/change_password/",
            )
            from_email = settings.EMAIL_HOST_USER
            instance.email_user(subject=subject, message=message, from_email=from_email)

    class Meta:
        model = Account
        fields = ("email", "full_name")
        export_order = ("email", "full_name")
        import_id_fields = ("email",)
