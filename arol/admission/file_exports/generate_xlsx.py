from django.http import HttpResponse
from django.utils.timezone import now
from openpyxl import Workbook

from ..models import Profile


def generate_xlsx(request):
    queryset = Profile.objects.all()
    response = HttpResponse(
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    )
    response[
        "Content-Disposition"
    ] = "attachment; filename={year}-Profiles.xlsx".format(
        year=now().strftime("%y"),
    )
    workbook = Workbook()
    worksheet = workbook.active
    worksheet.title = "Profiles"

    columns = [
        "Applicant ID",
        "Account",
        "Type of Applicant",
        "Nationality",
        "Full Name",
        "Father's/Spouse Name",
        "Marital Status",
        "Date of Birth",
        "Gender",
        "Caste Category",
        "Contact Number",
        "Parent Contact Number",
        "PwD",
        "Type of Disability",
        "Address",
        "City",
        "State",
        "Pin/Zip",
        "Address",
        "City",
        "State",
        "Pin/Zip",
    ]
    row_num = 1

    for col_num, column_title in enumerate(columns, start=1):
        cell = worksheet.cell(row=row_num, column=col_num)
        cell.value = column_title

    for profile in queryset:
        row_num += 1

        # Define the data for each cell in the row
        row = [
            profile.applicant_id,
            profile.account,
            "Indian Applicant" if profile.type_of_applicant else "Foreign Applicant",
            profile.nationality,
            profile.full_name,
            profile.father_or_spouse_name,
            profile.marital_status,
            profile.date_of_birth,
            profile.gender,
            profile.caste_category,
            profile.contact_number,
            profile.parent_contact_number,
            profile.pwd,
            profile.disability,
            profile.c_address,
            profile.c_city,
            profile.c_state,
            profile.c_pin,
            profile.p_address,
            profile.p_city,
            profile.p_state,
            profile.p_pin,
        ]

        for col_num, cell_value in enumerate(row, 1):
            cell = worksheet.cell(row=row_num, column=col_num)
            cell.value = str(cell_value)

    workbook.save(response)

    return response
