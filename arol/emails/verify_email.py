from django.core.signing import Signer
from django.conf import settings
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.urls import reverse


class Verify_Email:
    def __init__(self, user):
        self.user = user
        self.subject = "Verify your Email"
        self.signed_email = Signer().sign(user.email)
        self.token = PasswordResetTokenGenerator().make_token(user)
        self.domain = settings.FRONTEND_URL
        self.verification_link = reverse(
            "verify_email",
            kwargs={"signed_email": self.signed_email, "token": self.token},
        )
        self.generate_verification_link = reverse(
            "generate_verification_link",
            kwargs={"signed_email": self.signed_email},
        )
        self.message = """
        Dear User,

        To verify your account visit:
        {domain}{verification_link}
        
        If the link has expired, click the link below to generate a new link
        {domain}{generate_verification_link}

        Regards
        IIT Indore
        """.format(
            domain=self.domain,
            verification_link=self.verification_link,
            generate_verification_link=self.generate_verification_link,
        )

    def send(self):
        self.user.email_user(self.subject, self.message)
