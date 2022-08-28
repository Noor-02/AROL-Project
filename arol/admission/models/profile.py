from django.db import models
from django.forms import ValidationError
from django.utils.html import mark_safe
from django.utils.translation import gettext as _
from django.utils.timezone import now
from choice.models import Category, Marital_Status, Gender
from users.models import Account


def upload_disability_certificate(instance, filename):
    file_path = "admission/{applicant_id}/disability_certificate/{filename}".format(
        applicant_id=instance.applicant_id, filename=filename
    )
    return file_path


def upload_serviceman_certificate(instance, filename):
    file_path = "admission/{applicant_id}/serviceman_certificate/{filename}".format(
        applicant_id=instance.applicant_id,
        filename=filename,
    )
    return file_path


def upload_photograph(instance, filename):
    file_path = "admission/{applicant_id}/photograph/{filename}".format(
        applicant_id=instance.applicant_id,
        filename=filename,
    )
    return file_path


def upload_signature(instance, filename):
    file_path = "admission/{applicant_id}/signature/{filename}".format(
        applicant_id=instance.applicant_id,
        filename=filename,
    )
    return file_path


def next_applicant_number():
    max_applicant_number = (
        Profile._base_manager.filter(date_created__year=now().year).aggregate(
            max_applicant_number=models.Max("applicant_number")
        )["max_applicant_number"]
        or 0
    )

    return max_applicant_number + 1


class Profile(models.Model):
    TYPES = [(True, _("Indian Applicant")), (False, _("Foreign Applicant"))]
    PWD = [(True, _("Yes")), (False, _("No"))]

    applicant_id = models.CharField(
        _("Applicant ID"),
        unique=True,
        max_length=6,
        editable=False,
    )
    applicant_number = models.IntegerField(
        _("Applicant Number of this year"),
        default=next_applicant_number,
        editable=False,
    )
    date_created = models.DateField(auto_now_add=True, editable=False)
    account = models.OneToOneField(Account, on_delete=models.CASCADE)
    type_of_applicant = models.BooleanField(
        _("Type of Applicant"), choices=TYPES, default=True
    )
    nationality = models.CharField(_("Nationality"), max_length=255, default="India")

    full_name = models.CharField(_("Full Name"), max_length=255)
    signature = models.FileField(_("Signature"), upload_to=upload_signature)
    photograph = models.ImageField(
        _("Passport Sized Photograph"), upload_to=upload_photograph
    )

    # Check for image extensions
    father_or_spouse_name = models.CharField(_("Father's/Spouse Name"), max_length=255)
    date_of_birth = models.DateField(_("Date of Birth"))

    marital_status = models.ForeignKey(Marital_Status, on_delete=models.PROTECT)
    gender = models.ForeignKey(Gender, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    contact_number = models.BigIntegerField(_("Contact Number"))
    parent_contact_number = models.BigIntegerField(_("Parent Contact Number"))

    pwd = models.BooleanField(_("Persons with Disabilities (PwD)"))
    disability = models.CharField(
        _("Type of Disability"), null=True, blank=True, max_length=255
    )
    disability_certificate = models.FileField(
        _("Disability Certificate"),
        upload_to=upload_disability_certificate,
        null=True,
        blank=True,
    )
    percentage_disability = models.BooleanField(
        "Percentage Disability (Greater or Equal to 40%)"
    )
    ex_serviceman = models.BooleanField(_("Ex-Serviceman"))
    serviceman_certificate = models.FileField(
        _("Ex-Serviceman Certificate"),
        upload_to=upload_serviceman_certificate,
        null=True,
        blank=True,
    )

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
        return self.applicant_id

    def save(self, *args, **kwargs):
        if not self.pwd:
            self.disability = None
            self.percentage_disability = False
        if not self.ex_serviceman:
            self.serviceman_certificate = None
        self.applicant_id = now().strftime("%y") + format(self.applicant_number, "04d")
        super(Profile, self).save(*args, **kwargs)

    def clean(self):
        if self.pwd and self.disability == None:
            raise ValidationError(
                {"disability": _("Please mention Type of Disability if you are a PwD")}
            )
        if self.pwd and self.disability_certificate == None:
            raise ValidationError(
                {
                    "disability_certificate": _(
                        "Please upload your Disability Certificate"
                    )
                }
            )
        if self.ex_serviceman and self.serviceman_certificate == None:
            raise ValidationError(
                {
                    "serviceman_certificate": _(
                        "Please upload your Ex-Serviceman Certificate"
                    )
                }
            )

    def delete(self, *args, **kwargs):
        self.photograph.delete()
        self.signature.delete()
        self.disability_certificate.delete()
        self.serviceman_certificate.delete()
        super(Profile, self).delete(*args, **kwargs)

    @property
    def image_preview(self):
        if self.photograph:
            return mark_safe(
                '<img src="{}" width="100" height="100" />'.format(self.photograph.url)
            )
        return ""

    class Meta:
        verbose_name = _("Personal Profile")
        verbose_name_plural = _("Personal Profile")
        ordering = ["applicant_id"]
