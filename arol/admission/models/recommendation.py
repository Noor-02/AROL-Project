from uuid import uuid4

from django.db import models
from django.utils.translation import gettext as _

from .application import Application


class Recommendation(models.Model):

    OPTIONS = [
        ("Uncertain", _("Uncertain")),
        ("Below 50%", _("Below 50%")),
        ("Top 50%", _("Top 50%")),
        ("Top 20%", _("Top 20%")),
        ("Top 10%", _("Top 10%")),
        ("Top 5%", _("Top 5%")),
        ("Top 1%", _("Top 1%")),
    ]

    RECOMMENDATION = [
        ("Uncertain", _("Uncertain")),
        ("Not Recommended", _("Not Recommended")),
        ("Unenthusiastically", _("Unenthusiastically")),
        ("Fairly Strongly", _("Fairly Strongly")),
        ("Strongly", _("Strongly")),
        (
            "Enthusiastically, without reservation",
            _("Enthusiastically, without reservation"),
        ),
    ]

    referral_id = models.UUIDField(
        _("Referral ID"), default=uuid4, editable=False, unique=True
    )
    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)

    referree_email = models.EmailField(_("Referree Email"))
    referree_name = models.CharField(_("Referree Name"), max_length=255)
    referree_designation = models.CharField(_("Referree Designation"), max_length=255)
    referree_organization = models.CharField(_("Referree Organization"), max_length=255)

    overall_intellectual_ability = models.CharField(
        _("Overall Intellectual Ability"), max_length=255, choices=OPTIONS
    )
    analytical_ability = models.CharField(
        _("Analytical Ability"), max_length=255, choices=OPTIONS
    )
    goal_clarity = models.CharField(
        _("Clarity of Goal"), max_length=255, choices=OPTIONS
    )
    overall_potential = models.CharField(
        _("Overall Potential"), max_length=255, choices=OPTIONS
    )
    oral_expression_english = models.CharField(
        _("Oral Expression in English"), max_length=255, choices=OPTIONS
    )
    written_expression_english = models.CharField(
        _("written Expression in English"), max_length=255, choices=OPTIONS
    )
    work_independently = models.CharField(
        _("Ability to Work Independently"), max_length=255, choices=OPTIONS
    )
    work_with_others = models.CharField(
        _("Ability to Work with Others"), max_length=255, choices=OPTIONS
    )
    research_potential = models.CharField(
        _("Research Potential"), max_length=255, choices=OPTIONS
    )
    motivation = models.CharField(_("Motivation"), max_length=255, choices=OPTIONS)
    recommendation = models.CharField(
        _("You Recommend this applicant"), max_length=255, choices=RECOMMENDATION
    )

    def __str__(self):
        return "{application_id}".format(application_id=self.application_id)

    class Meta:
        verbose_name = _("Recommendation")
        verbose_name_plural = _("Recommendations")
        ordering = ["referral_id"]
