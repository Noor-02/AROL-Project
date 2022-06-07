from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import EmailMessage
from django.conf import settings
from .models import Recommendation


@receiver(post_save, sender=Recommendation)
def send_recommendation(sender, instance, created, **kwargs):
    if created:
        url = instance.referral_id
        author = settings.EMAIL_HOST_USER
        recipient = instance.referree_email
        subject = "Request for Letter of Recommendation"
        attachment = instance.application_id.advertisement_id.letter_of_recommendation
        message = "http://127.0.0.1:8000/api/admission/recommendation/{url}/".format(
            url=url
        )
        mail = EmailMessage(subject, message, author, [recipient])
        mail.attach_file("media/" + attachment.name)
        mail.send()
