from django.db import models


class Gender(models.Model):
    gender = models.CharField(primary_key=True, max_length=255)

    def __str__(self):
        return self.gender

    class Meta:
        verbose_name = "Gender"
        verbose_name_plural = "Gender"
        ordering = ["gender"]


class Caste_Category(models.Model):
    caste_category = models.CharField(primary_key=True, max_length=255)

    def __str__(self):
        return self.caste_category

    class Meta:
        verbose_name = "Caste Category"
        verbose_name_plural = "Caste Category"
        ordering = ["caste_category"]

# class Department(models.Model):
#     pass