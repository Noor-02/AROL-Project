from django.db import models
from django.utils.translation import gettext as _
from datetime import datetime


def upload_file(instance, filename):
    print(filename)
    file_path = "admission/files/{advertisement_id}.{extension}".format(
        advertisement_id=instance.advertisement_id,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Advertisement(models.Model):
    advertisement_id = models.BigIntegerField(_("Advertisement ID"), primary_key=True)
    academic_year = models.IntegerField(_("Academic Year"), default=datetime.now().year)
    department = models.CharField(max_length=255)
    programme = models.CharField(max_length=255)
    file = models.FileField(upload_to=upload_file)

    def __str__(self):
        return str(self.advertisement_id)

    class Meta:
        verbose_name = "Advertisement"
        verbose_name_plural = "Advertisements"
        ordering = ["advertisement_id"]
