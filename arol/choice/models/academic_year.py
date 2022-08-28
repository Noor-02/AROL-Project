from django.db import models
from django.utils.translation import gettext as _


class Academic_Year(models.Model):
    academic_year = models.CharField(_("Academic_Year"), unique=True, max_length=255)

    def __str__(self):
        return self.academic_year

    class Meta:
        verbose_name = _("Academic Year")
        verbose_name_plural = _("Academic Years")
        ordering = ["academic_year"]
