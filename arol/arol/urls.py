"""arol URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import include, path
from django.utils.translation import gettext as _
from rest_framework_simplejwt import views as jwt_views
from users.views import (
    Change_Password_View,
    Generate_Verification_View,
    Logout_View,
    Login_View,
    Registration_View,
    Verify_Email_View,
    Reset_Password_View,
    Password_Token_View,
    Set_Password_View,
)

admin.AdminSite.site_title = _("AROL IITI")
admin.AdminSite.site_header = _("AROL IIT Indore")
admin.AdminSite.index_title = _("AROL Administration")


api_patterns = [
    path("admission/", include("admission.urls")),
    path("login/", Login_View.as_view(), name="token_obtain_pair"),
    path("login/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("register/", Registration_View.as_view(), name="register"),
    path(
        "verify_email/<signed_email>/<token>/",
        Verify_Email_View.as_view(),
        name="verify_email",
    ),
    path(
        "generate_verification_link/<signed_email>/",
        Generate_Verification_View.as_view(),
        name="generate_verification_link",
    ),
    path("change_password/", Change_Password_View.as_view(), name="change_password"),
    path(
        "forgot_password/",
        Reset_Password_View.as_view(),
        name="forgot_password",
    ),
    path(
        "reset_password/<uidb64>/<token>/",
        Password_Token_View.as_view(),
        name="reset_password",
    ),
    path(
        "reset_password_complete/",
        Set_Password_View.as_view(),
        name="reset_password_complete",
    ),
    path("logout/", Logout_View.as_view(), name="logout"),
]
urlpatterns = [
    path("admin/", include("django.contrib.auth.urls")),
    path("admin/", admin.site.urls),
    path(
        "admin/password_reset/",
        auth_views.PasswordResetView.as_view(),
        name="admin_password_reset",
    ),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include(api_patterns)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
