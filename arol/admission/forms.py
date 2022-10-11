from math import fabs
from django import forms

class xlxsForm(forms.Form):
    personal_profile=forms.BooleanField(required=False)
    educational_information = forms.BooleanField(required=False)
    employment_details = forms.BooleanField(required=False)
    project_details=forms.BooleanField(required=False)