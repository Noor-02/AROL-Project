from django.db import models
from django.utils.translation import gettext as _
from .application import Application


class Employment(models.Model):

    WORK_TYPE = [
        ("Regular", _("Regular")),
        ("Temporary", _("Temporary")),
        ("Permanent", _("Permanent")),
        ("Contract", _("Contract")),
    ]

    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    organization = models.CharField(_("Name of Organization"), max_length=255)
    post_held = models.CharField(_("Post Held"), max_length=255)
    work_type = models.CharField(_("Type of Work"), max_length=255, choices=WORK_TYPE)
    from_date = models.DateField(_("From"))
    to_date = models.DateField(_("To"))
    duration = models.IntegerField(_("Period of Employment in Months"))
    responsibilities = models.CharField(_("Nature of Responsibilities"), max_length=255)
    emoluments = models.CharField(_("Gross Emoluments"), max_length=255)

    def __str__(self):
        return self.application_id + " " + self.organization

    class Meta:
        verbose_name = _("Employment Detail")
        verbose_name_plural = _("Employment Details")
        ordering = ["application_id"]
