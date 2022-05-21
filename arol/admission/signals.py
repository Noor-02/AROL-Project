from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver

from .models import Advertisement


@receiver(pre_save, sender=Advertisement)
def update_file(sender, instance, **kwargs):
    if not instance._state.adding:
        Advertisement.objects.get(
            advertisement_id=instance.advertisement_id
        ).file.delete(False)


@receiver(post_delete, sender=Advertisement)
def delete_file(sender, instance, **kwargs):
    instance.file.delete(False)
