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

pdf_name = "./static/sample_application_form.pdf"
pdf = SimpleDocTemplate(
    filename=pdf_name,
    title="Application Form",
    topMargin=40,
    leftMargin=40,
    rightMargin=40,
    bottomMargin=0,
)


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


flowables = []
frames = [[]]


def create_frame(page, x1, y1, width, height, showBoundary=1):
    frames[page - 1].append(Frame(x1, y1, width, height, showBoundary=showBoundary))


def fill_field(label, input):
    field_label = Paragraph(
        "{label}".format(label=label), field_label_style(sample_style_sheet)
    )
    field_input = Paragraph(
        "<b>{input}</b>".format(input=input), field_input_style(sample_style_sheet)
    )
    flowables.append(field_label)
    flowables.append(field_input)
    flowables.append(FrameBreak())


create_frame(1, pdf.leftMargin, 725, 86, 86, 0)
flowables.append(logo("./static/logo.png"))
flowables.append(FrameBreak())

create_frame(1, pdf.leftMargin + 120, 725, 335, 75, 0)
title = Paragraph(
    "Indian Institute of Technology, Indore", title_style(sample_style_sheet)
)
subtitle = Paragraph("APPLICATION FORM", subtitle_style(sample_style_sheet))
flowables.append(title)
flowables.append(subtitle)
flowables.append(FrameBreak())

create_frame(1, pdf.leftMargin, 645, 200, 40)
fill_field("Application ID", "2201010202-220001")

create_frame(1, pdf.leftMargin + 200, 645, 140, 40)
fill_field("Academic Year", "2022")

create_frame(1, pdf.leftMargin, 605, 340, 40)
fill_field("Full Name", "Raja Krishnappa Bairya")

create_frame(1, pdf.leftMargin, 565, 170, 40)
fill_field("Department", "CSE")
create_frame(1, pdf.leftMargin + 170, 565, 170, 40)
fill_field("Programme", "PhD")

create_frame(1, pdf.leftMargin, 525, 170, 40)
fill_field("Applicant", "Indian Applicant")
create_frame(1, pdf.leftMargin + 170, 525, 170, 40)
fill_field("Nationality", "India")

create_frame(1, pdf.leftMargin + 340, 525, 170, 160)
flowables.append(profile("./static/sample_profile_picture.png"))
flowables.append(FrameBreak())

create_frame(1, pdf.leftMargin, 475, 510, 40, 0)
subheading = Paragraph("Personal Profile", subheading_style(sample_style_sheet))
flowables.append(subheading)
flowables.append(FrameBreak())

create_frame(1, pdf.leftMargin, 445, 170, 40)
fill_field("Date of Birth", "21-12-2000")
create_frame(1, pdf.leftMargin + 170, 445, 340, 40)
fill_field("Father's/Spouse Name", "Raja Krishnappa Bairya")

create_frame(1, pdf.leftMargin, 405, 170, 40)
fill_field("Marital Status", "Married")
create_frame(1, pdf.leftMargin + 170, 405, 170, 40)
fill_field("Gender", "Male")
create_frame(1, pdf.leftMargin + 340, 405, 170, 40)
fill_field("Caste Category", "General")

create_frame(1, pdf.leftMargin, 365, 225, 40)
fill_field("Contact Number", "1234567890")
create_frame(1, pdf.leftMargin + 225, 365, 285, 40)
fill_field("Parent Contact Number", "1234567890")

create_frame(1, pdf.leftMargin, 325, 225, 40)
fill_field("Persons with Disabilities", "No")
create_frame(1, pdf.leftMargin + 225, 325, 285, 40)
fill_field("Type of Disability", "-")


create_frame(1, pdf.leftMargin, 275, 510, 40, 0)
subheading = Paragraph(
    "Address for Correspondence", subheading_style(sample_style_sheet)
)
flowables.append(subheading)
flowables.append(FrameBreak())

create_frame(1, pdf.leftMargin, 125, 510, 40)
fill_field("Address", "7, Lok Kalyan Marg")
create_frame(1, pdf.leftMargin, 85, 170, 40)
fill_field("City", "New Delhi")
create_frame(1, pdf.leftMargin + 170, 85, 170, 40)
fill_field("State", "Delhi")
create_frame(1, pdf.leftMargin + 340, 85, 170, 40)
fill_field("Pin/Zip", "110011")

create_frame(1, pdf.leftMargin, 155, 510, 40, 0)
subheading = Paragraph("Permanent Address ", subheading_style(sample_style_sheet))
flowables.append(subheading)
flowables.append(FrameBreak())

create_frame(1, pdf.leftMargin, 125, 510, 40)
fill_field("Address", "7, Lok Kalyan Marg")
create_frame(1, pdf.leftMargin, 85, 170, 40)
fill_field("City", "New Delhi")
create_frame(1, pdf.leftMargin + 170, 85, 170, 40)
fill_field("State", "Delhi")
create_frame(1, pdf.leftMargin + 340, 85, 170, 40)
fill_field("Pin/Zip", "110011")
create_frame(1, pdf.leftMargin, 45, 510, 40, 0)
flowables.append(NextPageTemplate("second_page"))
flowables.append(PageBreak())


frames.append([])
create_frame(2, pdf.leftMargin, 735, 510, 40, 0)
subheading = Paragraph("Educational Details", subheading_style(sample_style_sheet))
flowables.append(subheading)
flowables.append(FrameBreak())

create_frame(2, pdf.leftMargin, 705, 170, 40)
fill_field("Examination", "Graduation")
create_frame(2, pdf.leftMargin + 170, 705, 340, 40)
fill_field("Name of Examination", "IIT Boards")

create_frame(2, pdf.leftMargin, 665, 340, 40)
fill_field("Board/Institute/University", "IIT Boards")
create_frame(2, pdf.leftMargin + 340, 665, 170, 40)
fill_field("Duration of Degree", "4 years")

create_frame(2, pdf.leftMargin, 625, 340, 40)
fill_field("Expected Year of Passing", "2022")
create_frame(2, pdf.leftMargin + 340, 625, 170, 40)
fill_field("Status", "Completed")

create_frame(2, pdf.leftMargin, 585, 170, 40)
fill_field("% of Marks or CPI/CGPA", "% of Marks")
create_frame(2, pdf.leftMargin + 170, 585, 170, 40)
fill_field("% or CPI/CGPA", "85")
create_frame(2, pdf.leftMargin + 340, 585, 170, 40)
fill_field("Out of CPI/CGPA", "100")

create_frame(2, pdf.leftMargin, 545, 170, 40)
fill_field("Class/Division", "First")
create_frame(2, pdf.leftMargin + 170, 545, 340, 40)
fill_field("Specialization", "IT")

pdf.addPageTemplates(
    [
        PageTemplate(id="first_page", frames=frames[0]),
        PageTemplate(id="second_page", frames=frames[1]),
    ]
)
pdf.build(flowables)
