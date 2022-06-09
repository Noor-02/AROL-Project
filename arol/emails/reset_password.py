from django.conf import settings
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.urls import reverse
from django.utils.encoding import smart_bytes
from django.utils.http import urlsafe_base64_encode


class Reset_Password:
    def __init__(self, user):
        self.user = user
        self.subject = "Reset your Password"
        self.uidb64 = urlsafe_base64_encode(smart_bytes(user.email))
        self.token = PasswordResetTokenGenerator().make_token(user)
        self.domain = settings.FRONTEND_URL
        self.relative_link = reverse(
            "reset_password", kwargs={"uidb64": self.uidb64, "token": self.token}
        )
        self.message = """
        Dear User,

        To reset your password visit:
        {domain}{relative_link}
        
        If you have not initiated this request, you can safely ignore this mail.

        Regards
        IIT Indore
        """.format(
            domain=self.domain, relative_link=self.relative_link
        )

    def send(self):
        self.user.email_user(self.subject, self.message)
