from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.utils.translation import gettext as _

from .application import Application


class Qualifying_Examination(models.Model):

    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    year_of_appearance = models.IntegerField()
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey("content_type", "object_id")

    def __str__(self):
        return "{applicant_id}".format(applicant_id=self.applicant_id)

    class Meta:
        verbose_name = _("Qualifying Examination")
        verbose_name_plural = _("Qualifying Examinations")
        ordering = ["application_id"]


class GATE(models.Model):

    registration_number = models.CharField(_("Registration Number"), max_length=25)
    examination_code = models.CharField(_("Examination Paper Code"), max_length=255)
    gate_score = models.IntegerField(_("Gate Score"))
    marks = models.ImageField(_("Marks"))
    candidates_appeared = models.IntegerField(_("Number of Candidates Appeared"))
    air = models.IntegerField(_("All India Rank"))
    validity = models.DateField(_("Valid Up to"))
class JAM(models.Model):

    registration_number = models.CharField(_("Registration Number"), max_length=25)
    examination_code = models.CharField(_("Examination Paper Code"), max_length=255)
    marks = models.ImageField(_("Marks"))
    candidates_appeared = models.IntegerField(_("Number of Candidates Appeared"))
    air = models.IntegerField(_("All India Rank"))
    validity = models.DateField(_("Valid Up to"))

