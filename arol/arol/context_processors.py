from django.contrib import admin


def admin_site_processor(request):
    site_header = getattr(admin.AdminSite, "site_header")
    site_title = getattr(admin.AdminSite, "site_title")
    index_title = getattr(admin.AdminSite, "index_title")

    return {
        "site_header": site_header,
        "site_title": site_title,
        "index_title": index_title,
    }
