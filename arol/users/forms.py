from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import Account


class AccountCreationForm(UserCreationForm):
    class Meta:
        model = Account
        fields = ("email",)


class AccountChangeForm(UserChangeForm):
    class Meta:
        model = Account
        fields = ("email", "password", "is_active", "is_admin", "is_staff")
