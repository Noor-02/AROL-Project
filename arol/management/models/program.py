from django.db import models
from django.utils.translation import gettext as _
from .department import Department


class Program(models.Model):
    program_code = models.CharField(
        _("Program Code"),
        max_length=2,
        help_text=_("2-digit Numeric Code allotted to the program"),
    )
    full_program_code = models.CharField(
        _("Full Program Code"),
        max_length=4,
        editable=False,
        help_text=_("4-digit Numeric Code uniquely identifying a program"),
        unique=True,
    )
    program_name = models.CharField(_("Program Name"), max_length=255)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.department.department_id + " " + self.program_name

    def save(self, *args, **kwargs):
        self.full_program_code = self.program_code + self.department.department_code
        super(Program, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Program")
        verbose_name_plural = _("Programs")
        ordering = ["full_program_code"]
