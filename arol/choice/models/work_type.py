from django.db import models
from django.utils.translation import gettext as _


class Work_Type(models.Model):
    work_type = models.CharField(_("Work Type"), primary_key=True, max_length=255)

    def __str__(self):
        return self.work_type

    class Meta:
        verbose_name = _("Work Type")
        verbose_name_plural = _("Work Types")
        ordering = ["work_type"]
