from django.http import HttpResponse
from openpyxl import Workbook

from ..models import Application


def generate_xlsx(request, queryset):
    if not (request.user.is_staff):
        return HttpResponse(
            "Error: 404 Not Found",
            content_type="text/html",
        )

    response = HttpResponse(
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    )
    response["Content-Disposition"] = "attachment; filename=applications.xlsx"

    workbook = Workbook()
    worksheet = workbook.active
    worksheet.title = "Applications"
    row_num = 2
    columns = [
        "Application ID",
        "Applicant ID",
        "Advertisement ID",
        "Payment ID",
        "Approved",
        "Date of Application",
    ]

    for col_num, column_title in enumerate(columns, start=1):
        cell = worksheet.cell(row=row_num, column=col_num)
        cell.value = column_title

    for application in queryset:
        row_num += 1
        row = [
            application.application_id,
            application.applicant_id,
            application.advertisement_id,
            application.payment_id,
            application.is_approved,
            application.date_applied,
        ]

        for col_num, cell_value in enumerate(row, 1):
            cell = worksheet.cell(row=row_num, column=col_num)
            cell.value = str(cell_value)

    workbook.save(response)
    return response


def generate_xlsx_by_year(request, year):
    queryset = Application.objects.filter(date_applied__year=year)
    return generate_xlsx(request, queryset)
