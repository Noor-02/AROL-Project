from django.db import models
from django.utils.translation import gettext as _

from .profile import Profile


def upload_marksheet(instance, filename):
    file_path = "admission/{applicant_id}/marksheet_{qualification}/{filename}".format(
        applicant_id=instance.applicant_id,
        qualification=instance.qualification,
        filename=filename,
    )
    return file_path


def upload_certificate(instance, filename):
    file_path = (
        "admission/{applicant_id}/certificate_{qualification}/{filename}".format(
            applicant_id=instance.applicant_id,
            qualification=instance.qualification,
            filename=filename,
        )
    )
    return file_path


class Education_Detail(models.Model):

    STATUS = [("Completed", _("Completed")), ("Pursuing", _("Pursuing"))]
    DIVISION = [
        ("First", _("First")),
        ("Second", _("Second")),
        ("Third", _("Third")),
        ("Not Applicable", _("Not Applicable")),
    ]
    MARKS_TYPE = [
        ("Percent of Marks", _("Percent of Marks")),
        ("CPI/CGPA", _("CPI/CGPA")),
    ]

    applicant_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    qualification = models.CharField(_("Examination"), max_length=255)
    examination = models.CharField(_("Name of Examination Passed"), max_length=255)
    university = models.CharField(_("Board/ Institute/ University"), max_length=255)
    duration = models.IntegerField(_("Duration of Degree/Diploma in Years"))
    status = models.CharField(_("Status"), max_length=255, choices=STATUS)
    year_of_passing = models.IntegerField(_("Expected Year of Passing"))

    marks_type = models.CharField(
        _("Percent of Marks or CPI/CGPA"), max_length=255, choices=MARKS_TYPE
    )
    percent = models.DecimalField(
        _("Percent or CPI/CGPA"), max_digits=5, decimal_places=2
    )
    out_of = models.IntegerField(_("Out of CPI/CGPA"))
    division = models.CharField(_("Class/Division"), max_length=255, choices=DIVISION)
    specialization = models.CharField(
        _("Specialization (if any)"), max_length=255, null=True, blank=True
    )
    marksheet = models.FileField(
        _("Marksheet"), upload_to=upload_marksheet, null=True, blank=True
    )
    certificate = models.FileField(
        _("Certificate"), upload_to=upload_certificate, null=True, blank=True
    )

    def __str__(self):
        return "{applicant_id}-{qualification}".format(
            applicant_id=self.applicant_id, qualification=self.qualification
        )

    def __unicode__(self):
        return "{applicant_id}-{qualification}".format(
            applicant_id=self.applicant_id, qualification=self.qualification
        )

    def delete(self, *args, **kwargs):
        self.marksheet.delete()
        self.certificate.delete()
        super(Education_Detail, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Educational Information")
        verbose_name_plural = _("Educational Information")
        ordering = ["applicant_id"]
