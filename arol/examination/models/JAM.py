from admission.models import Application
from django.db import models
from django.utils.translation import gettext as _


class JAM(models.Model):

    application_id = models.OneToOneField(Application, on_delete=models.CASCADE)
    registration_number = models.CharField(_("Registration Number"), max_length=25)
    year_of_appearance = models.IntegerField()
    examination_code = models.CharField(_("Examination Paper Code"), max_length=255)
    marks = models.IntegerField(_("Marks"))
    candidates_appeared = models.IntegerField(_("Number of Candidates Appeared"))
    air = models.IntegerField(_("All India Rank"))
    validity = models.DateField(_("Valid Up to"))

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    class Meta:
        verbose_name = _("JAM")
        verbose_name_plural = _("JAM")
        ordering = ["application_id"]
