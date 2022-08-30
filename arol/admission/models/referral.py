from django.db import models
from django.utils.translation import gettext as _

from .recommendation import Recommendation


class Referral(models.Model):

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

    recommendation_id = models.OneToOneField(
        Recommendation, on_delete=models.CASCADE, editable=False
    )

    overall_intellectual_ability = models.CharField(
        _("Overall Intellectual Ability"),
        max_length=255,
        choices=OPTIONS,
        default="Uncertain",
    )
    analytical_ability = models.CharField(
        _("Analytical Ability"), max_length=255, choices=OPTIONS, default="Uncertain"
    )
    goal_clarity = models.CharField(
        _("Clarity of Goal"), max_length=255, choices=OPTIONS, default="Uncertain"
    )
    overall_potential = models.CharField(
        _("Overall Potential"), max_length=255, choices=OPTIONS, default="Uncertain"
    )
    oral_expression_english = models.CharField(
        _("Oral Expression in English"),
        max_length=255,
        choices=OPTIONS,
        default="Uncertain",
    )
    written_expression_english = models.CharField(
        _("written Expression in English"),
        max_length=255,
        choices=OPTIONS,
        default="Uncertain",
    )
    work_independently = models.CharField(
        _("Ability to Work Independently"),
        max_length=255,
        choices=OPTIONS,
        default="Uncertain",
    )
    work_with_others = models.CharField(
        _("Ability to Work with Others"),
        max_length=255,
        choices=OPTIONS,
        default="Uncertain",
    )
    research_potential = models.CharField(
        _("Research Potential"), max_length=255, choices=OPTIONS, default="Uncertain"
    )
    motivation = models.CharField(
        _("Motivation"), max_length=255, choices=OPTIONS, default="Uncertain"
    )
    recommendation = models.CharField(
        _("You Recommend this applicant"),
        max_length=255,
        choices=RECOMMENDATION,
        default="Uncertain",
    )

    def __str__(self):
        return "{application_id}".format(
            application_id=self.recommendation_id.application_id
        )

    class Meta:
        verbose_name = _("Referral")
        verbose_name_plural = _("Referrals")
        ordering = ["recommendation_id"]
