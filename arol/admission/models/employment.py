from django.db import models
from django.utils.translation import gettext as _

from choice.models import Work_Type
from .profile import Profile


class Employment(models.Model):

    applicant_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    organization = models.CharField(_("Name of Organization"), max_length=255)
    post_held = models.CharField(_("Post Held"), max_length=255)
    work_type = models.ForeignKey(Work_Type, on_delete=models.PROTECT)
    from_date = models.DateField(_("From"))
    to_date = models.DateField(_("To"))
    duration = models.IntegerField(_("Period of Employment in Months"))
    responsibilities = models.CharField(_("Nature of Responsibilities"), max_length=255)
    emoluments = models.CharField(_("Gross Emoluments"), max_length=255)

    def __str__(self):
        return "{applicant_id}-{organization}".format(
            applicant_id=self.applicant_id, organization=self.organization
        )

    class Meta:
        verbose_name = _("Employment Detail")
        verbose_name_plural = _("Employment Details")
        ordering = ["applicant_id"]
