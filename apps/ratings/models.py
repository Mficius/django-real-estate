from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import TimeStampedUUIDModel
from apps.profiles.models import Profile
from real_estate.settings.base import AUTH_USER_MODEL


class Rating(TimeStampedUUIDModel):

    class Range(models.IntegerChoices):
        RATTING_1 = 1, _("Poor")
        RATTING_2 = 2, _("Fair")
        RATTING_3 = 3, _("Good")
        RATTING_4 = 4, _("Very Good")
        RATTING_5 = 5, _("Excellent")

    rater = models.ForeignKey(AUTH_USER_MODEL, verbose_name=_("User provifing the rating"), 
        on_delete=models.SET_NULL, null=True)
    agent = models.ForeignKey(Profile, verbose_name=_("Agent being rated"), related_name="agent_review", on_delete=models.SET_NULL, null=True)
    rating = models.IntegerField(verbose_name=_("Rating"), choices=Range.choices, 
        help_text="1=Poor, 2=Pair, 3=Good, 4=Very Good, 5=Excellent", default=0)

    comment = models.TextField(verbose_name=_("Comment"))

    class Meta:
        unique_together = ["rater", "agent"]

    def __str__(self):
        return f"{self.agent} rated at {self.rating}"

