from django.db import models
from django.utils.translation import gettext as _


class Qualifying_Exam(models.Model):
    qualifying_exam = models.CharField(
        _("Qualifying Exam"), unique=True, max_length=255
    )

    def __str__(self):
        return self.qualifying_exam

    class Meta:
        verbose_name = _("Qualifying Exam")
        verbose_name_plural = _("Qualifying Exams")
        ordering = ["qualifying_exam"]
