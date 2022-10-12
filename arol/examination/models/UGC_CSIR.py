from admission.models import Application
from django.db import models
from django.utils.translation import gettext as _


class UGC_CSIR(models.Model):

    application_id = models.OneToOneField(Application, on_delete=models.CASCADE)
    ref_number = models.CharField(_("Reference Number"), max_length=25)
    date_issued = models.DateField(_("With Effective From"))
    subject = models.CharField(_("Subject"), max_length=25)
    qualified_jrf = models.BooleanField(_("Eligible for Junior Research Fellowship"))
    jrf_validity = models.DateField(_("JRF Valid Up to"))
    qualified_ap = models.BooleanField(_("Eligible for Assistant Professor"))
    ap_validity = models.CharField(
        _("Assistant Professor Validity in Years"), null=True, blank=True, max_length=25
    )

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    class Meta:
        verbose_name = _("UGC CSIR")
        verbose_name_plural = _("UGC CSIR")
        ordering = ["application_id"]
