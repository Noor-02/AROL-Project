from math import fabs
from django import forms

PROFILE_CHOICES = (
        (0,"All"),
        (1,"Full Name"),
        (2,"Father's/Spouse Name"),
        (3,"Date of Birth"),
        (4,"Indian Applicant"),
        (5,"Nationality"),
        (6,"Maritial Status"),
        (7,"Gender"),
        (8,"Category"),
        (9,"Contact Number"),
        (10,"Parent Contact Number"),
        (11,"Correspondence Address"),
        (12,"Correspondence City"),
        (13,"Correspondence State"),
        (14,"Correspondence Pin/Zip"),
        (15,"Permanent Address"),
        (16,"Permanent City"),
        (17,"Permanent State"),
        (18,"Permanent Pin/Zip"),
        (19,"Person With Disability"),
    )

EDUCATION_CHOICES = (
        (0,"All"),
        (1,"Examination"),
        (2,"Name of Examination Passed"),
        (3,"Board/Institute/University"),
        (4,"Duartion of Degree in Years"),
        (5,"Status"),
        (6,"Expected Year of Passing"),
        (7,"Percentage of marks or CPI/CGPA"),
        (8,"Percent or CPI/CGPA"),
        (9,"Out of CPI/CGPA"),
        (10,"Class/Division"),
        (11,"Specialization (if any)"),
    )

EMPLOYMENT_CHOICES = (
        (0,"All"),
        (1,"Employment-Name of Organization "),
        (2,"Post Held"),
        (3,"Work Type"),
        (4,"From"),
        (5,"To"),
        (6,"Period of Employment in Months"),
        (7,"Nature of Responsibilities"),
        (8,"Gross Emoluments")
    )

PROJECT_CHOICES = (
    (0,"All"),
    (1,"Project Name"),
    (2,"Degree"),
    (3,"Name of University/Institute"),
    (4,"Year of Submission"),
    (5,"Name of Supervisor")
)

class xlxsForm(forms.Form):
    personal_profile = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple,choices=PROFILE_CHOICES)
    educational_details=forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple,choices=EDUCATION_CHOICES)
    employment_details=forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple,choices=EMPLOYMENT_CHOICES)
    project_details=forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple,choices=PROJECT_CHOICES)