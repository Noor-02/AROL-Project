from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework.reverse import reverse


class Letter_of_Recommendation:
    def __init__(self, instance):
        self.instance = instance
        self.uuid = instance.referral_id
        self.recipient = instance.referree_email
        self.subject = "Request for Letter of Recommendation"
        self.domain = settings.FRONTEND_URL
        self.relative_link = reverse("recommendation-detail", args=[self.uuid])

        self.attachment = (
            instance.application_id.advertisement_id.letter_of_recommendation
        )
        self.message = """
        Please fill the following recommendation form.
        {domain}{relative_link}

        Regards
        IIT Indore
        """.format(
            domain=self.domain, relative_link=self.relative_link
        )

    def send(self):
        mail = EmailMessage(self.subject, self.message, None, [self.recipient])
        mail.attach_file("media/" + self.attachment.name)
        mail.send()
