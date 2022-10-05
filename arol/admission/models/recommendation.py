from statistics import mode
from uuid import uuid4

from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext as _

from .application import Application


class Recommendation(models.Model):

    referral_id = models.UUIDField(
        _("Referral ID"), default=uuid4, editable=False, unique=True
    )
    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)

    referree_name = models.CharField(_("Referree Name"), max_length=255)
    referree_email = models.EmailField(_("Referree Email"))
    referree_designation = models.CharField(_("Referree Designation"), max_length=255)
    referree_organization = models.CharField(_("Referree Organization"), max_length=255)

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    def clean(self):
        if (
            Recommendation.objects.filter(application_id=self.application_id).count()
            >= 4
        ):
            raise ValidationError(_("Only 4 referrals per Application allowed"))

    class Meta:
        verbose_name = _("Recommendation")
        verbose_name_plural = _("Recommendations")
        ordering = ["application_id"]
