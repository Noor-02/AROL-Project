from django.db import models
from django.utils.translation import gettext as _
from datetime import datetime
from management.models import Department


def upload_file(instance, filename):
    file_path = "admission/files/{advertisement_id}.{extension}".format(
        advertisement_id=instance.advertisement_id,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Advertisement(models.Model):
    advertisement_id = models.BigIntegerField(_("Advertisement ID"), unique=True)
    academic_year = models.IntegerField(_("Academic Year"), default=datetime.now().year)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    programme = models.CharField(max_length=255)
    file = models.FileField(upload_to=upload_file)

    def __str__(self):
        return str(self.advertisement_id)

    class Meta:
        verbose_name = _("Advertisement")
        verbose_name_plural = _("Advertisements")
        ordering = ["advertisement_id"]
