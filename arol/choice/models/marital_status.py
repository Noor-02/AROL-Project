from django.db import models
from django.utils.translation import gettext as _


class Marital_Status(models.Model):
    marital_status = models.CharField(
        _("Marital Status"), primary_key=True, max_length=255
    )

    def __str__(self):
        return self.marital_status

    class Meta:
        verbose_name = _("Marital Status")
        verbose_name_plural = _("Marital Status")
        ordering = ["marital_status"]
