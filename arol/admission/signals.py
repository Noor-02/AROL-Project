from django.db.models.signals import post_save
from django.dispatch import receiver
from emails import Letter_of_Recommendation

from .models import Recommendation, Referral


@receiver(post_save, sender=Recommendation)
def send_recommendation(sender, instance, created, **kwargs):
    if created:
        Referral.objects.create(recommendation_id = instance)
        mail = Letter_of_Recommendation(instance)
        mail.send()
