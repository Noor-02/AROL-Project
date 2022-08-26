"""Advertisements for the Admissions of different Programs."""

from django.db import models
from django.forms import ValidationError
from django.utils.translation import gettext as _
from management.models import Program
from choice.models import Academic_Year


def upload_advertisement(instance, filename):
    file_path = "admission/advertisement/{advertisement_id}/{filename}".format(
        advertisement_id=instance.advertisement_id, filename=filename
    )
    return file_path


def upload_document(instance, filename):
    file_path = "admission/document/{advertisement_id}/{filename}".format(
        advertisement_id=instance.advertisement_id, filename=filename
    )
    return file_path


class Advertisement(models.Model):
    """
    The Users will only be allowed to update the begins_from and deadline fields.
    The rest fields will not be allowed to update.
    """

    is_cleaned = False

    advertisement_id = models.CharField(
        _("Advertisement ID"),
        unique=True,
        max_length=10,
        editable=False,
    )
    advertisement_number = models.CharField(
        _("Advertisement Number"),
        help_text=_("2-digit Advertisement Number"),
        max_length=2,
    )
    session = models.CharField(
        _("Session"), help_text=_("2-digit Session Code"), max_length=2
    )
    begins_from = models.DateField(_("Admission Begins from"))
    deadline = models.DateField(_("Admission Deadline"))
    academic_year = models.ForeignKey(Academic_Year, on_delete=models.PROTECT)
    program = models.ForeignKey(Program, on_delete=models.PROTECT)
    document = models.FileField(
        _("Advertisement File"),
        upload_to=upload_advertisement,
    )
    other_document = models.FileField(
        _("Any Other Document"), upload_to=upload_document, null=True, blank=True
    )

    def __str__(self):
        return "{advertisement_id}".format(advertisement_id=self.advertisement_id)

    def save(self, *args, **kwargs):
        if not self.is_cleaned:
            self.clean()
        if self.id is None:
            program_code = self.program.full_program_code
            self.advertisement_id = (
                str(self.academic_year)[-2:]
                + program_code
                + self.session
                + self.advertisement_number
            )
        super(Advertisement, self).save(*args, **kwargs)

    def clean(self):
        if self.id is not None:
            obj = Advertisement.objects.get(id=self.id)
            error_messages = {}
            flag = False
            if obj.advertisement_number != self.advertisement_number:
                flag = True
                error_messages["advertisement_number"] = "This field can't be updated"
            if obj.session != self.session:
                flag = True
                error_messages["session"] = "This field can't be updated"
            if obj.academic_year != self.academic_year:
                flag = True
                error_messages["academic_year"] = "This field can't be updated"
            if obj.program != self.program:
                flag = True
                error_messages["program"] = "This field can't be updated"
            if flag:
                raise ValidationError(error_messages)
        self.is_cleaned = True

    def delete(self, *args, **kwargs):
        self.document.delete()
        self.other_document.delete()
        super(Advertisement, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Advertisement")
        verbose_name_plural = _("Advertisements")
        ordering = ["-advertisement_id"]
