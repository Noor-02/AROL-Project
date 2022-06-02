from django.db import models
from django.utils.translation import gettext as _
from .department import Department


class Programme(models.Model):
    programme_code = models.CharField(
        _("Programme Code"),
        max_length=2,
        help_text=_("2-digit Numeric Code allotted to the programme"),
    )
    full_programme_code = models.CharField(
        _("Full Programme Code"),
        max_length=4,
        editable=False,
        help_text=_("4-digit Numeric Code uniquely identifying a programme"),
    )
    programme_name = models.CharField(_("Programme Name"), max_length=255)
    programme_id = models.CharField(_("Programme ID"), unique=True, max_length=255)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.department.department_id + " " + self.programme_id
    
    def save(self, *args, **kwargs):
        self.full_programme_code = self.department.department_code + self.programme_code
        super(Programme, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Programme")
        verbose_name_plural = _("Programmes")
        ordering = ["programme_code"]
