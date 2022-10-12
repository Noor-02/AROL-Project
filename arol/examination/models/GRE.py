from admission.models import Application
from django.db import models
from django.utils.translation import gettext as _


class GRE(models.Model):

    application_id = models.OneToOneField(Application, on_delete=models.CASCADE)
    registration_number = models.CharField(_("Registration Number"), max_length=25)
    date_of_exam = models.DateField(_("Date of Examination"))
    vr_percentile = models.DecimalField(
        _("Verbal Reasoning Percentile"), max_digits=5, decimal_places=2
    )
    aw_percentile = models.DecimalField(
        _("Analytical Writing Percentile"), max_digits=5, decimal_places=2
    )
    qr_percentile = models.DecimalField(
        _("Quantitative Reasoning Percentile"), max_digits=5, decimal_places=2
    )
    validity = models.DateField(_("Valid Up to"))

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    class Meta:
        verbose_name = _("GRE")
        verbose_name_plural = _("GRE")
        ordering = ["application_id"]
