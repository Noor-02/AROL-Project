from datetime import timedelta

import environ

from . import *

env = environ.Env()
environ.Env.read_env()

SECRET_KEY = env("SECRET_KEY")
DEBUG = False
ALLOWED_HOSTS = ["127.0.0.1"]
CORS_ALLOWED_ORIGINS = ["http://localhost:8000", "http://127.0.0.1:8000"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "HOST": env("DATABASE_HOST"),
        "PORT": env("DATABASE_PORT"),
        "USER": env("DATABASE_USER"),
        "PASSWORD": env("DATABASE_PASSWORD"),
        "NAME": env("DATABASE_NAME"),
    },
}

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly"
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "EXCEPTION_HANDLER": "arol.exception_handler.exception_handler",
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 50,
}

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "root": {"level": "INFO", "handlers": ["file_warning", "file_info"]},
    "handlers": {
        "file_warning": {
            "level": "WARNING",
            "class": "logging.FileHandler",
            "filename": BASE_DIR / "warning.log",
            "formatter": "app",
        },
        "file_info": {
            "level": "INFO",
            "class": "logging.FileHandler",
            "filename": BASE_DIR / "info.log",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["file_info", "file_warning"],
            "level": "INFO",
            "propagate": True,
        },
    },
    "formatters": {
        "app": {
            "format": (
                "%(asctime)s [%(levelname)-8s] " "(%(module)s.%(funcName)s) %(message)s"
            ),
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
    },
}

SIMPLE_JWT = {
    "USER_ID_FIELD": "email",
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=int(env("ACCESS_TOKEN_LIFETIME"))),
    "REFRESH_TOKEN_LIFETIME": timedelta(minutes=int(env("REFRESH_TOKEN_LIFETIME"))),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "SIGNING_KEY": env("SIGNING_KEY"),
    "ISSUER": "AROL IITI",
}

DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")

FRONTEND_URL = env("FRONTEND_URL")
