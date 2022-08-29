import imp
from ..models import Advertisement
from ..models import Education_Detail
from ..models import Employment
from ..models import Project_Detail
from ..models import Qualifying_Examination
from ..models import Application
from ..models import Profile
from email.mime import application
from io import BytesIO

from django.http import HttpResponse
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Frame,
    FrameBreak,
    Image,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    SimpleDocTemplate,
)


sample_style_sheet = getSampleStyleSheet()


def title_style(sample_style_sheet):
    title_style = sample_style_sheet["Title"]
    title_style.alignment = 0
    return title_style


def subtitle_style(sample_style_sheet):
    subtitle_style = sample_style_sheet["Heading1"]
    subtitle_style.alignment = 1
    subtitle_style.fontSize = 14
    return subtitle_style


def field_label_style(sample_style_sheet):
    field_label_style = sample_style_sheet["Normal"]
    field_label_style.alignment = 0
    field_label_style.fontSize = 12
    field_label_style.fontName = "Helvetica"
    return field_label_style


def field_input_style(sample_style_sheet):
    field_input_style = sample_style_sheet["Code"]
    field_input_style.alignment = 2
    field_input_style.fontSize = 12
    return field_input_style


def subheading_style(sample_style_sheet):
    subheading_style = sample_style_sheet["Heading2"]
    subheading_style.alignment = 0
    return subheading_style


def logo(filename):
    image = Image(filename)
    image.drawHeight = 1 * inch
    image.drawWidth = 1 * inch
    return image


def profile(filename):
    image = Image(filename)
    image.drawHeight = 2 * inch
    image.drawWidth = 2 * inch
    return image


def create_frame(frames, page, x1, y1, width, height, showBoundary=1):
    frames[page - 1].append(Frame(x1, y1, width, height, showBoundary=showBoundary))


def fill_field(flowables, label, input):
    field_label = Paragraph(
        "{label}".format(label=label), field_label_style(sample_style_sheet)
    )
    field_input = Paragraph(
        "<b>{input}</b>".format(input=input), field_input_style(sample_style_sheet)
    )
    flowables.append(field_label)
    flowables.append(field_input)
    flowables.append(FrameBreak())


def export_pdf_wrapper(request, application_id):

    response = HttpResponse(content_type="application/pdf")
    response[
        "Content-Disposition"
    ] = "attachment; filename={application_id}.pdf".format(
        application_id=application_id
    )
    buffer = generate_pdf(request, application_id)
    # print(application_id.applicant_id)
    response.write(buffer.getvalue())
    buffer.close()
    return response


def generate_pdf(request, application_id):
    if not (request.user.is_staff):
        return HttpResponse(
            "Error: 404 Not Found",
            content_type="text/html",
        )

    application = Application.objects.get(application_id=application_id)
    applicant_id = application.applicant_id
    applicant_profile = Profile.objects.get(applicant_id=applicant_id)
    advertisement_ids = application_id.split("-")
    advertisement_id = advertisement_ids[0]
    advertisement = Advertisement.objects.get(advertisement_id=advertisement_id)
    program = advertisement.program
    educations = Education_Detail.objects.filter(applicant_id=applicant_id)
    employments = Employment.objects.filter(applicant_id=applicant_id)
    projects = Project_Detail.objects.filter(applicant_id=applicant_id)

    buffer = BytesIO()

    pdf = SimpleDocTemplate(
        buffer,
        title="Application Form",
        topMargin=40,
        leftMargin=40,
        rightMargin=40,
        bottomMargin=0,
    )

    flowables = []
    frames = [[]]
    pageTemplates = []
    create_frame(frames, 1, pdf.leftMargin, 725, 86, 86, 0)
    flowables.append(logo("./static/logo.png"))
    flowables.append(FrameBreak())

    create_frame(frames, 1, pdf.leftMargin + 120, 725, 335, 75, 0)
    title = Paragraph(
        "Indian Institute of Technology, Indore", title_style(sample_style_sheet)
    )
    subtitle = Paragraph("APPLICATION FORM", subtitle_style(sample_style_sheet))
    flowables.append(title)
    flowables.append(subtitle)
    flowables.append(FrameBreak())

    create_frame(frames, 1, pdf.leftMargin, 645, 200, 40)
    fill_field(flowables, "Application ID", application_id)

    create_frame(frames, 1, pdf.leftMargin + 200, 645, 140, 40)
    fill_field(flowables, "Academic Year", "2022")

    create_frame(frames, 1, pdf.leftMargin, 605, 340, 40)
    fill_field(flowables, "Full Name", applicant_profile.full_name)

    create_frame(frames, 1, pdf.leftMargin, 565, 170, 40)
    fill_field(flowables, "Department", program.department.department_id)
    create_frame(frames, 1, pdf.leftMargin + 170, 565, 170, 40)
    fill_field(flowables, "Program", "PhD")

    create_frame(frames, 1, pdf.leftMargin, 525, 170, 40)
    type_of_applicant = (
        "Indian Applicant"
        if applicant_profile.type_of_applicant
        else "Foreign Applicant"
    )
    fill_field(flowables, "Applicant", type_of_applicant)
    create_frame(frames, 1, pdf.leftMargin + 170, 525, 170, 40)
    fill_field(flowables, "Nationality", applicant_profile.nationality)

    create_frame(frames, 1, pdf.leftMargin + 340, 525, 170, 160)
    flowables.append(profile(applicant_profile.photograph))
    flowables.append(FrameBreak())

    create_frame(frames, 1, pdf.leftMargin, 475, 510, 40, 0)
    subheading = Paragraph("Personal Profile", subheading_style(sample_style_sheet))
    flowables.append(subheading)
    flowables.append(FrameBreak())

    create_frame(frames, 1, pdf.leftMargin, 445, 170, 40)
    fill_field(flowables, "Date of Birth", applicant_profile.date_of_birth)
    create_frame(frames, 1, pdf.leftMargin + 170, 445, 340, 40)
    fill_field(
        flowables, "Father's/Spouse Name", applicant_profile.father_or_spouse_name
    )

    create_frame(frames, 1, pdf.leftMargin, 405, 170, 40)
    fill_field(flowables, "Marital Status", applicant_profile.marital_status)
    create_frame(frames, 1, pdf.leftMargin + 170, 405, 170, 40)
    fill_field(flowables, "Gender", applicant_profile.gender)
    create_frame(frames, 1, pdf.leftMargin + 340, 405, 170, 40)
    fill_field(flowables, "Category", applicant_profile.category)

    create_frame(frames, 1, pdf.leftMargin, 365, 225, 40)
    fill_field(flowables, "Contact Number", applicant_profile.contact_number)
    create_frame(frames, 1, pdf.leftMargin + 225, 365, 285, 40)
    fill_field(
        flowables, "Parent Contact Number", applicant_profile.parent_contact_number
    )

    create_frame(frames, 1, pdf.leftMargin, 325, 225, 40)
    pwd = "YES" if applicant_profile.pwd else "NO"
    fill_field(flowables, "Persons with Disabilities", pwd)
    create_frame(frames, 1, pdf.leftMargin + 225, 325, 285, 40)
    fill_field(flowables, "Type of Disability", applicant_profile.disability)

    create_frame(frames, 1, pdf.leftMargin, 275, 510, 40, 0)
    subheading = Paragraph(
        "Address for Correspondence", subheading_style(sample_style_sheet)
    )
    flowables.append(subheading)
    flowables.append(FrameBreak())

    create_frame(frames, 1, pdf.leftMargin, 245, 510, 40)
    fill_field(flowables, "Address", applicant_profile.c_address)
    create_frame(frames, 1, pdf.leftMargin, 205, 170, 40)
    fill_field(flowables, "City", applicant_profile.c_city)
    create_frame(frames, 1, pdf.leftMargin + 170, 205, 170, 40)
    fill_field(flowables, "State", applicant_profile.c_state)
    create_frame(frames, 1, pdf.leftMargin + 340, 205, 170, 40)
    fill_field(flowables, "Pin/Zip", applicant_profile.c_pin)

    create_frame(frames, 1, pdf.leftMargin, 155, 510, 40, 0)
    subheading = Paragraph("Permanent Address ", subheading_style(sample_style_sheet))
    flowables.append(subheading)
    flowables.append(FrameBreak())

    create_frame(frames, 1, pdf.leftMargin, 125, 510, 40)
    fill_field(flowables, "Address", applicant_profile.p_address)
    create_frame(frames, 1, pdf.leftMargin, 85, 170, 40)
    fill_field(flowables, "City", applicant_profile.p_city)
    create_frame(frames, 1, pdf.leftMargin + 170, 85, 170, 40)
    fill_field(flowables, "State", applicant_profile.p_state)
    create_frame(frames, 1, pdf.leftMargin + 340, 85, 170, 40)
    fill_field(flowables, "Pin/Zip", applicant_profile.p_pin)
    create_frame(frames, 1, pdf.leftMargin, 45, 510, 40, 0)
    flowables.append(NextPageTemplate(1))
    flowables.append(PageBreak())
    pageTemplates.append(PageTemplate(id=0, frames=frames[0]))
    frames.append([])
    i = 0
    page_number = 1
    
    check = 0
    l = len(educations)
    print(l)
    last_filled_page = True
    for education in educations:
        last_filled_page = False
        check = check + 1
        create_frame(frames, page_number+1, pdf.leftMargin, 745-(40*i), 510, 40, 0)
        subheading = Paragraph("Educational Details", subheading_style(sample_style_sheet))
        flowables.append(subheading)
        flowables.append(FrameBreak())
        create_frame(frames, page_number + 1, pdf.leftMargin, 705 - (40 * i), 170, 40)
        fill_field(flowables, "Examination", education.qualification)
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 170, 705 - (40 * i), 340, 40
        )
        fill_field(flowables, "Name of Examination", education.examination)

        create_frame(frames, page_number + 1, pdf.leftMargin, 665 - (40 * i), 340, 40)
        fill_field(flowables, "Board/Institute/University", "IIT Boards")
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 340, 665 - (40 * i), 170, 40
        )
        fill_field(flowables, "Duration of Degree", "4 years")

        create_frame(frames, page_number + 1, pdf.leftMargin, 625 - (40 * i), 340, 40)
        fill_field(flowables, "Expected Year of Passing", "2022")
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 340, 625 - (40 * i), 170, 40
        )
        fill_field(flowables, "Status", "Completed")

        create_frame(frames, page_number + 1, pdf.leftMargin, 585 - (40 * i), 170, 40)
        fill_field(flowables, "% of Marks or CPI/CGPA", "% of Marks")
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 170, 585 - (40 * i), 170, 40
        )
        fill_field(flowables, "% or CPI/CGPA", "85")
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 340, 585 - (40 * i), 170, 40
        )
        fill_field(flowables, "Out of CPI/CGPA", "100")

        create_frame(frames, page_number + 1, pdf.leftMargin, 545 - (40 * i), 170, 40)
        fill_field(flowables, "Class/Division", "First")
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 170, 545 - (40 * i), 340, 40
        )
        fill_field(flowables, "Specialization", "IT")
        i=i+6
        if 545-(40*(i+6)) <= 0:
            last_filled_page = True
            flowables.append(NextPageTemplate(page_number))
            flowables.append(PageBreak())
            pageTemplates.append(
                PageTemplate(id=page_number, frames=frames[page_number])
            )
            page_number = page_number + 1
            i = 0
            frames.append([])
    
    # if l!=0 & last_filled_page == False:        
    #     print(page_number)
    #     flowables.append(NextPageTemplate(page_number))
    #     flowables.append(PageBreak())
    #     pageTemplates.append(PageTemplate(id = page_number, frames=frames[page_number]))
    #     page_number=page_number+1
    #     i=0
    #     frames.append([])
    
    for employment in employments:
        create_frame(
            frames, page_number + 1, pdf.leftMargin, 745 - (40 * i), 510, 40, 0
        )
        subheading = Paragraph(
            "Employment Details", subheading_style(sample_style_sheet)
        )
        flowables.append(subheading)
        flowables.append(FrameBreak())
        create_frame(frames, page_number + 1, pdf.leftMargin, 705 - (40 * i), 170, 40)
        fill_field(flowables, "Post Held", employment.post_held)
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 170, 705 - (40 * i), 340, 40
        )
        fill_field(flowables, "Name of Organisation", employment.organization)

        create_frame(frames, page_number + 1, pdf.leftMargin, 665 - (40 * i), 340, 40)
        fill_field(flowables, "From", employment.from_date)
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 340, 665 - (40 * i), 170, 40
        )
        fill_field(flowables, "To", employment.to_date)

        create_frame(frames, page_number + 1, pdf.leftMargin, 625 - (40 * i), 340, 40)
        fill_field(flowables, "Work Type", employment.work_type)
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 340, 625 - (40 * i), 170, 40
        )
        fill_field(flowables, "Duration", employment.duration)
        create_frame(frames, page_number + 1, pdf.leftMargin, 585 - (40 * i), 170, 40)
        fill_field(flowables, "Nature of Responsibilities", employment.responsibilities)
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 170, 585 - (40 * i), 170, 40
        )
        fill_field(flowables, "Gross Emoluments", employment.emoluments)
        create_frame(
            frames, page_number + 1, pdf.leftMargin + 340, 585 - (40 * i), 170, 40
        )
        fill_field(flowables, "Currently Employed", "-")
        i = i + 6
        if 545 - (40 * (i + 6)) <= 0:
            print(page_number)
            flowables.append(NextPageTemplate(page_number))
            flowables.append(PageBreak())
            pageTemplates.append(
                PageTemplate(id=page_number, frames=frames[page_number])
            )
            page_number = page_number + 1
            i = 0
            frames.append([])

    print(pageTemplates)
    pdf.addPageTemplates(pageTemplates)
    pdf.build(flowables)
    return buffer
