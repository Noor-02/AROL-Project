# from django.db.models.signals import pre_save
# from django.dispatch import receiver
# from django.core.files.storage import FileSystemStorage
# from .models import Advertisement


# @receiver(pre_save, sender=Advertisement)
# def update_file(sender, instance, **kwargs):
#     if not instance._state.adding:
#         saved_instance = Advertisement.objects.get(id=instance.id)
#         file_change = saved_instance.file != instance.file
#         saved_instance.academic_year !=  instance.academic_year or
#         saved_instance.programme.full_programme_code != instance.programme.full_programme_code
        
#         uploaded_file = instance.file
#         print(original_file, uploaded_file)
#         print(original_file.name, uploaded_file.name)
#         original_file.delete(False)

#         if original_file.name == uploaded_file.name:
#             new_file_name = new_file_path(uploaded_file, instance)
#             FileSystemStorage().save(name=new_file_name, content=uploaded_file)
