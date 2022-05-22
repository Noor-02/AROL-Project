from django.db import models
from django.utils.translation import gettext as _
from .application import Application


def upload_marksheet(instance, filename):
    file_path = "admission/educational_information/{application_id}/marksheet_{qualification}.{extension}".format(
        application_id=instance.application_id,
        qualification=instance.qualification,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


def upload_certificate(instance, filename):
    file_path = "admission/educational_information/{application_id}/certificate_{qualiifcation}.{extension}".format(
        application_id=instance.application_id,
        qualification=instance.qualification,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Education_Detail(models.Model):

    STATUS = [("Completed", _("Completed"))]
    DIVISION = [("First", _("First"))]
    MARKS_TYPE = [
        ("Percent of Marks", _("Percent of Marks")),
        ("CPI/CGPA", _("CPI/CGPA")),
    ]

    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    qualification = models.CharField(_("Examination"), max_length=255)
    examination = models.CharField(_("Name of Examination Passed"), max_length=255)
    university = models.CharField(_("Board/ Institute/ University"), max_length=255)
    duration = models.IntegerField(_("Duration of Degree/Diploma in Years"))
    status = models.CharField(_("Status"), max_length=255, choices=STATUS)
    year_of_passing = models.IntegerField(_("Expected Year of Passing"))

    marks_type = models.CharField(
        _("Percent of Marks or CPI/CGPA"), max_length=255, choices=MARKS_TYPE
    )
    percent = models.IntegerField(_("Percent or CPI/CGPA"))
    out_of = models.IntegerField(_("Out of CPI/CGPA"))
    division = models.CharField(_("Class/Division"), max_length=255, choices=DIVISION)
    specialization = models.CharField(
        _("Specialization (if any)"), max_length=255, null=True, blank=True
    )
    marksheet = models.FileField(_("Marksheet"), upload_to=upload_marksheet)
    certificate = models.FileField(_("Certificate"), upload_to=upload_certificate)

    def __str__(self):
        return self.application_id + " " + self.qualification

    class Meta:
        verbose_name = _("Educationional Information")
        verbose_name_plural = _("Educational Information")
        ordering = ["application_id"]
