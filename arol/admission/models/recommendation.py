from django.db import models
from django.utils.translation import gettext as _
from .application import Application


def upload_recommendation(instance, filename):
    file_path = "admission/educational_information/{application_id}/recommendation_{referral_id}.{extension}".format(
        application_id=instance.application_id,
        referral_id=instance.referral_id,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Recommendation(models.Model):

    referral_id = models.CharField(_("Referral ID"), max_length=255, unique=True)
    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    referree_email = models.EmailField(_("Referree Email"))
    letter_of_recommendation = models.FileField(
        _("Document"), upload_to=upload_recommendation
    )

    def __str__(self):
        return self.referral_id

    class Meta:
        verbose_name = _("Recommendation")
        verbose_name_plural = _("Recommendations")
        ordering = ["referral_id"]
