from uuid import uuid4

from django.db import models
from django.utils.translation import gettext as _

from .application import Application


def upload_recommendation(instance, filename):
    file_path = "admission/{application_id}/recommendation.{extension}".format(
        application_id=instance.application_id,
        extension=filename.rsplit(".", 1)[-1],
    )
    return file_path


class Recommendation(models.Model):

    referral_id = models.UUIDField(
        _("Referral ID"), default=uuid4, editable=False, primary_key=True
    )
    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    # Should Application ID be unique?
    referree_email = models.EmailField(_("Referree Email"))
    letter_of_recommendation = models.FileField(
        _("Letter of Recommendation"),
        upload_to=upload_recommendation,
        null=True,
        blank=True,
    )

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    def delete(self, *args, **kwargs):
        self.letter_of_recommendation.delete()
        super(Recommendation, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Recommendation")
        verbose_name_plural = _("Recommendations")
        ordering = ["referral_id"]
