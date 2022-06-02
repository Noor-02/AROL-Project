from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver

from .models import Advertisement


@receiver(pre_save, sender=Advertisement)
def update_file(sender, instance, **kwargs):
    if not instance._state.adding:
        Advertisement.objects.get(id=instance.id).file.delete(False)


# @receiver(post_save, sender=Advertisement)
# def create_advertisement_id(sender, instance, created, **kwargs):
#     if created:
#         current_year = str(datetime.now().year)[-2:]
#         programme_code = instance.programme.full_programme_code
#         session = instance.session
#         instance.advertisement_id = (
#             current_year + programme_code + session + format(instance.id, "02d")
#         )
#         instance.save()


@receiver(post_delete, sender=Advertisement)
def delete_file(sender, instance, **kwargs):
    instance.file.delete(False)
