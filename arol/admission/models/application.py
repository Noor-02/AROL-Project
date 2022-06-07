from django.db import models
from django.utils.translation import gettext as _
from .advertisement import Advertisement
from .profile import Profile


class Application(models.Model):

    application_id = models.CharField(
        _("Application ID"), unique=True, max_length=17, editable=False
    )
    date_applied = models.DateField(_("Applied on"), auto_now_add=True, editable=False)
    applicant_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    advertisement_id = models.ForeignKey(Advertisement, on_delete=models.CASCADE)
    payment_id = models.CharField(
        _("Payment ID"), unique=True, max_length=255, blank=True, null=True
    )
    is_approved = models.BooleanField(_("Is Approved"))

    def __str__(self):
        return self.application_id

    def save(self, *args, **kwargs):
        self.application_id = str(self.advertisement_id) + "-" + str(self.applicant_id)
        super(Application, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Application")
        verbose_name_plural = _("Applications")
        ordering = ["application_id"]
        constraints = [
            models.UniqueConstraint(
                fields=["applicant_id", "advertisement_id"],
                name="Unique Application ID",
            )
        ]
