from django.db import models
from django.utils.translation import gettext as _

class Gender(models.Model):
    gender = models.CharField(primary_key=True, max_length=255)

    def __str__(self):
        return self.gender

    class Meta:
        verbose_name = _("Gender")
        verbose_name_plural = _("Gender")
        ordering = ["gender"]


class Caste_Category(models.Model):
    caste_category = models.CharField(primary_key=True, max_length=255)

    def __str__(self):
        return self.caste_category

    class Meta:
        verbose_name = _("Caste Category")
        verbose_name_plural = _("Caste Category")
        ordering = ["caste_category"]

# class Department(models.Model):
#     pass