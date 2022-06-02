from django.db import models
from django.utils.translation import gettext as _
from datetime import datetime
from management.models import Programme
from datetime import datetime


def upload_file(instance, filename):
    file_path = "admission/advertisement/{advertisement_id}.{extension}".format(
        advertisement_id=instance.advertisement_id,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Advertisement(models.Model):
    advertisement_id = models.CharField(
        _("Advertisement ID"),
        unique=True,
        max_length=6,
        editable=False,
    )
    advertisement_number = models.CharField(
        _("Advertisement Number"),
        help_text=_("2-digit Advertisement Number"),
        max_length=2,
    )
    session = models.CharField(
        _("Session"), help_text=_("2-digit Session code"), max_length=2
    )
    begins_from = models.DateField(_("Admission Begins from"))
    deadline = models.DateField(_("Admission Deadline"))
    academic_year = models.IntegerField(_("Academic Year"), default=datetime.now().year)
    programme = models.ForeignKey(Programme, on_delete=models.PROTECT)
    file = models.FileField(_("Advertisement File"), upload_to=upload_file)

    def __str__(self):
        return str(self.advertisement_id)

    def save(self, *args, **kwargs):
        current_year = str(datetime.now().year)[-2:]
        programme_code = self.programme.full_programme_code
        self.advertisement_id = (
            current_year + programme_code + self.session + self.advertisement_number
        )
        super(Advertisement, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Advertisement")
        verbose_name_plural = _("Advertisements")
        ordering = ["-advertisement_id"]
