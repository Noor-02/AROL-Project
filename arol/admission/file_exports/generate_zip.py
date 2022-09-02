import zipfile
from io import BytesIO

from django.http import HttpResponse

from ..models import Application
from ..permissions import IsStaff
from .generate_pdf import export_pdf


def generate_zip(request, queryset):
    """
    Generate a zip file for the queryset.
    """

    IsStaff(request)
    if len(queryset) <= 1:
        return export_pdf(request, queryset.first().application_id)

    response = HttpResponse(content_type="application/zip")
    response["Content-Disposition"] = "attachment; filename=application_forms.zip"

    buffer = BytesIO()
    with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as archive:
        for application in queryset:
            file_buffer = export_pdf(request, application.application_id)
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


def generate_zip_by_year(request, year):
    queryset = Application.objects.filter(date_applied__year=year)
    return generate_zip(request, queryset)
