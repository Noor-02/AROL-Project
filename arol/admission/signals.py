from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Recommendation
from emails import Letter_of_Recommendation


@receiver(post_save, sender=Recommendation)
def send_recommendation(sender, instance, created, **kwargs):
    if created:
        mail = Letter_of_Recommendation()
        mail.send()
