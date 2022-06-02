from django.db import models
from django.utils.translation import gettext as _
from choice.models import Qualifying_Exam

from .application import Application


def upload_document(instance, filename):
    file_path = "admission/educational_information/{application_id}/document_{examination}.{extension}".format(
        application_id=instance.application_id,
        examination=instance.examination,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Qualifying_Examination(models.Model):

    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    examination = models.ForeignKey(Qualifying_Exam, on_delete=models.PROTECT)
    registration_number = models.CharField(_("Registration Number"), max_length=255)
    document = models.FileField(_("Document"), upload_to=upload_document)

    def __str__(self):
        return self.application_id + " " + self.examination

    class Meta:
        verbose_name = _("Qualifying Examination")
        verbose_name_plural = _("Qualifying Examinations")
        ordering = ["application_id"]
