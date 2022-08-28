from django.db import models
from django.utils.translation import gettext as _


class Category(models.Model):
    category = models.CharField(_("Category"), unique=True, max_length=255)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        ordering = ["category"]
