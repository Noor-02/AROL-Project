# Generated by Django 4.0.4 on 2022-06-07 16:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('management', '0001_initial'),
        ('choice', '0001_initial'),
        ('admission', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='account',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='profile',
            name='caste_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.caste_category'),
        ),
        migrations.AddField(
            model_name='profile',
            name='gender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.gender'),
        ),
        migrations.AddField(
            model_name='profile',
            name='marital_status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.marital_status'),
        ),
        migrations.AddField(
            model_name='employment',
            name='applicant_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile'),
        ),
        migrations.AddField(
            model_name='employment',
            name='work_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.work_type'),
        ),
        migrations.AddField(
            model_name='education_detail',
            name='applicant_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile'),
        ),
        migrations.AddField(
            model_name='application',
            name='advertisement_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.advertisement'),
        ),
        migrations.AddField(
            model_name='application',
            name='applicant_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile'),
        ),
        migrations.AddField(
            model_name='advertisement',
            name='programme',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='management.programme'),
        ),
        migrations.AddConstraint(
            model_name='application',
            constraint=models.UniqueConstraint(fields=('applicant_id', 'advertisement_id'), name='Unique Application ID'),
        ),
    ]
