from django.db import models
from django.utils.translation import gettext as _


class Gender(models.Model):
    gender = models.CharField(_("Gender"), unique=True, max_length=255)

    def __str__(self):
        return self.gender

    class Meta:
        verbose_name = _("Gender")
        verbose_name_plural = _("Genders")
        ordering = ["gender"]
