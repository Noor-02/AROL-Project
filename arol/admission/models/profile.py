from django.db import models
from django.utils.translation import gettext as _
from management.models import Caste_Category


class Profile(models.Model):
    TYPES = [(True, _("Indian Applicant")), (False, _("Foreign Applicant"))]
    MARITAL_STATUS = [(True, _("Married")), (False, _("Unmarried"))]
    GENDER = [("Male", _("Male")), ("Female", _("Female")), ("Other", _("Other"))]
    PWD = [(True, _("Yes")), (False, _("No"))]

    applicant_id = models.BigIntegerField(_("Applicant ID"), unique=True)
    type_of_applicant = models.BooleanField(
        _("Type of Applicant"), choices=TYPES, default=True
    )
    nationality = models.CharField(_("Nationality"), max_length=255, default="India")
    marital_status = models.BooleanField(_("Marital Status"), choices=MARITAL_STATUS)
    full_name = models.CharField(_("Full Name"), max_length=255)
    father_or_spouse_name = models.CharField(_("Father's/Spouse Name"), max_length=255)
    date_of_birth = models.DateField(_("Date of Birth"))
    gender = models.CharField(_("Gender"), choices=GENDER, max_length=255)
    caste_category = models.ForeignKey(Caste_Category, on_delete=models.PROTECT)
    contact_number = models.BigIntegerField(_("Contact Number"))
    parent_contact_number = models.BigIntegerField(_("Parent Contact Number"))
    pwd = models.BooleanField(_("Persons with Disabilities (PwD)"))
    disability = models.CharField(_("Type of Disability"), null=True, max_length=255)

    # For Correspondence
    c_address = models.TextField(_("Address"))
    c_city = models.CharField(_("City"), max_length=255)
    c_state = models.CharField(_("State"), max_length=255)
    c_pin = models.IntegerField(_("Pin/Zip"))

    # Permanent Address
    p_address = models.TextField(_("Address"))
    p_city = models.CharField(_("City"), max_length=255)
    p_state = models.CharField(_("State"), max_length=255)
    p_pin = models.IntegerField(_("Pin/Zip"))

    def __str__(self):
        return str(self.applicant_id)

    def save(self, *args, **kwargs):
        if not self.pwd:
            self.disability = None
        super(Profile, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Personal Profile")
        verbose_name_plural = _("Personal Profile")
        ordering = ["applicant_id"]
