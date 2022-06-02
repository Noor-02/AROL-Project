from django.db import models
from django.utils.translation import gettext as _


class Department(models.Model):
    department_code = models.CharField(
        _("Department Code"),
        max_length=2,
        unique=True,
        help_text=_("2-digit Numeric Code allotted to the Department"),
    )
    department_name = models.CharField(_("Department Name"), max_length=255)
    department_id = models.CharField(_("Department ID"), unique=True, max_length=255)
    year_of_establishment = models.SmallIntegerField(_("Year of Establishment"))
    year_of_termination = models.SmallIntegerField(
        _("Year of Termination"), null=True, blank=True
    )

    def __str__(self):
        return self.department_name

    class Meta:
        verbose_name = _("Department")
        verbose_name_plural = _("Departments")
        ordering = ["department_code"]
