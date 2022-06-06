import zipfile
from io import BytesIO

from django.http import HttpResponse

from .generate_pdf import generate_pdf
from ..models import Application


def generate_zip(request, year):
    response = HttpResponse(content_type="application/zip")
    response["Content-Disposition"] = "attachment; filename=application_forms.zip"

    buffer = BytesIO()
    with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as archive:
        applications = Application.objects.filter(date_applied__year=year)
        for application in applications:
            file_buffer = generate_pdf(request, application.application_id)
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
