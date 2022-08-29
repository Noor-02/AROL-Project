import zipfile
from io import BytesIO

from django.http import HttpResponse

from .generate_pdf import export_pdf_wrapper
from ..models import Application


def generate_zip(request, queryset):
    if not (request.user.is_staff):
        return HttpResponse(
            "Error: 404 Not Found",
            content_type="text/html",
        )
    if len(queryset) > 1:
        response = HttpResponse(content_type="application/zip")
        response["Content-Disposition"] = "attachment; filename=application_forms.zip"

        buffer = BytesIO()
        with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as archive:
            for application in queryset:
                file_buffer = export_pdf_wrapper(request, application.application_id)
                archive.writestr(
                    "{application_id}.pdf".format(
                        application_id=application.application_id
                    ),
                    file_buffer.getvalue(),
                )
                file_buffer.close()
        buffer.flush()
        ret_zip = buffer.getvalue()
        buffer.close()
        response.write(ret_zip)
        return response
    return export_pdf_wrapper(request, queryset.first().application_id)


def generate_zip_by_year(request, year):
    queryset = Application.objects.filter(date_applied__year=year)
    return generate_zip(request, queryset)
