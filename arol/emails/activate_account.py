from django.conf import settings
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.urls import reverse
from django.utils.encoding import smart_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template


class Activate_Account:
    def __init__(self, user):
        self.user = user
        self.subject = "Activate your IITI AROL Account"
        self.full_name = user.full_name
        self.uidb64 = urlsafe_base64_encode(smart_bytes(user.email))
        self.token = PasswordResetTokenGenerator().make_token(user)
        self.domain = settings.FRONTEND_URL
        self.relative_link = reverse(
            "reset_password", kwargs={"uidb64": self.uidb64, "token": self.token}
        )
        self.message = """
        Hello {full_name},
        
        To activate your IITI AROL Account, please click on the following link and change your password:
        {domain}{relative_link}
        
        Regards
        IIT Indore""".format(
            domain=self.domain,
            relative_link=self.relative_link,
        )

    def send(self):
        self.content = EmailMultiAlternatives(
            self.subject, self.message, None, [self.user.email]
        )
        self.html_template = get_template("emails/activate_account.html").render(
            {"name": self.full_name, "abs_url": self.domain + self.relative_link}
        )
        self.content.attach_alternative(self.html_template, "text/html")
        self.content.send()
