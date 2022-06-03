from django.db import models
from django.utils.translation import gettext as _
from choice.models import Qualifying_Exam

from .profile import Profile


def upload_document(instance, filename):
    file_path = "admission/{application_id}/document_{examination}.{extension}".format(
        application_id=instance.application_id,
        examination=instance.examination,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Qualifying_Examination(models.Model):

    applicant_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    examination = models.ForeignKey(Qualifying_Exam, on_delete=models.PROTECT)
    registration_number = models.CharField(_("Registration Number"), max_length=255)
    document = models.FileField(_("Document"), upload_to=upload_document)

    def __str__(self):
        return self.applicant_id + "-" + self.examination

    class Meta:
        verbose_name = _("Qualifying Examination")
        verbose_name_plural = _("Qualifying Examinations")
        ordering = ["applicant_id"]
