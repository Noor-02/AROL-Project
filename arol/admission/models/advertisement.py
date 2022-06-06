"""Advertisements for the Admissions of different Programmes."""

from django.db import models
from django.forms import ValidationError
from django.utils.translation import gettext as _
from django.utils.timezone import now
from management.models import Programme


def upload_file(instance, filename):
    file_path = "admission/advertisement/{advertisement_id}.{extension}".format(
        advertisement_id=instance.advertisement_id,
        extension=filename.rsplit(".", 1)[-1],
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
    academic_year = models.IntegerField(_("Academic Year"), default=now().year)
    programme = models.ForeignKey(Programme, on_delete=models.PROTECT)
    file = models.FileField(
        _("Advertisement File"),
        upload_to=upload_file,
    )

    def __str__(self):
        return str(self.advertisement_id)

    def save(self, *args, **kwargs):
        if not self.is_cleaned:
            self.clean()
        if self.id is None:
            programme_code = self.programme.full_programme_code
            self.advertisement_id = (
                str(self.academic_year)[-2:]
                + programme_code
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
            if obj.programme != self.programme:
                flag = True
                error_messages["programme"] = "This field can't be updated"
            if obj.file != self.file:
                flag = True
                error_messages["file"] = "This field can't be updated"
            if flag:
                raise ValidationError(error_messages)
        self.is_cleaned = True

    def delete(self, *args, **kwargs):
        self.file.delete()
        super(Advertisement, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Advertisement")
        verbose_name_plural = _("Advertisements")
        ordering = ["-advertisement_id"]
