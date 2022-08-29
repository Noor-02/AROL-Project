from django import forms
from django.utils.translation import gettext as _

from .models import Referral


class Referral_Form(forms.ModelForm):
    class Meta:
        model = Referral
        fields = "__all__"

    overall_intellectual_ability = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    analytical_ability = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    goal_clarity = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    overall_potential = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    oral_expression_english = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    written_expression_english = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    work_independently = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    work_with_others = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    research_potential = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    motivation = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.OPTIONS)
    )
    recommendation = forms.CharField(
        widget=forms.widgets.RadioSelect(choices=Referral.RECOMMENDATION)
    )
