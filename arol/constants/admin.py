from django.contrib import admin
from .models import Caste_Category, Gender
from django.utils.translation import gettext as _

# Register your models here.

admin.site.register(Gender)
admin.site.register(Caste_Category)
admin.AdminSite.site_title = _("AROL IITI")
admin.AdminSite.site_header = _("AROL IIT Indore")
admin.AdminSite.index_title = _("AROL Administration")