from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext as _

from .application import Application


class Project_Detail(models.Model):

    DEGREE = [
        ("Bachelors", _("Bachelors")),
        ("Masters", _("Masters")),
        ("Others", _("Others")),
    ]

    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    degree = models.CharField(_("Degree"), max_length=255, choices=DEGREE)
    university = models.CharField(_("Name of University/Institute"), max_length=255)
    year_of_submission = models.IntegerField(_("Year of Submission"))
    supervisor = models.CharField(_("Name of Supervisor"), max_length=255)
    title = models.CharField(_("Title"), max_length=255)

    def __str__(self):
        return str(self.application_id)

    def clean(self):
        if (
            Project_Detail.objects.filter(application_id=self.application_id).count()
            >= 4
        ):
            raise ValidationError(_("Only 4 referrals per Application allowed"))

    class Meta:
        verbose_name = _("Project Detail")
        verbose_name_plural = _("Project Details")
        ordering = ["application_id"]
