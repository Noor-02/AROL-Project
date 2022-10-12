from admission.models import Application
from django.db import models
from django.utils.translation import gettext as _


class CAT(models.Model):

    application_id = models.OneToOneField(Application, on_delete=models.CASCADE)
    registration_number = models.CharField(_("Registration Number"), max_length=25)
    date_of_appearance = models.DateField(_("Date of Appearance"))
    varc_percentile = models.DecimalField(
        _("Verbal Ability and Reading Comprehension Percentile"),
        max_digits=5,
        decimal_places=2,
    )
    dilr_percentile = models.DecimalField(
        _("Data Interpretation and Logical Reasoning Percentile"),
        max_digits=5,
        decimal_places=2,
    )
    qa_percentile = models.DecimalField(
        _("Quantitative Ability Percentile"), max_digits=5, decimal_places=2
    )
    overall_percentile = models.DecimalField(
        _("Overall Percentile"), max_digits=5, decimal_places=2
    )
    validity = models.DateField(_("Valid Up to"))

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    class Meta:
        verbose_name = _("CAT")
        verbose_name_plural = _("CAT")
        ordering = ["application_id"]
