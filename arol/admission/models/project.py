from django.db import models
from django.utils.translation import gettext as _
from .profile import Profile


class Project_Detail(models.Model):

    DEGREE = [("Bachelors", _("Bachelors")), ("Masters", _("Masters"))]

    applicant_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    degree = models.CharField(_("Degree"), max_length=255, choices=DEGREE)
    university = models.CharField(_("Name of University/Institute"), max_length=255)
    year_of_submission = models.IntegerField(_("Year of Submission"))
    supervisor = models.CharField(_("Name of Supervisor"), max_length=255)
    title = models.CharField(_("Title"), max_length=255)

    def __str__(self):
        return "{applicant_id}-{title}".format(
            applicant_id=self.applicant_id, title=self.title
        )

    class Meta:
        verbose_name = _("Project Detail")
        verbose_name_plural = _("Project Details")
        ordering = ["applicant_id"]
