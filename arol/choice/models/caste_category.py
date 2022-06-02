from django.db import models
from django.utils.translation import gettext as _


class Caste_Category(models.Model):
    caste_category = models.CharField(_("Caste Category"), unique=True, max_length=255)

    def __str__(self):
        return self.caste_category

    class Meta:
        verbose_name = _("Caste Category")
        verbose_name_plural = _("Caste Categories")
        ordering = ["caste_category"]
