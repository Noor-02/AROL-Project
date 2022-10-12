# Generated by Django 4.0.4 on 2022-10-12 12:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('admission', '0001_initial'),
        ('management', '0001_initial'),
        ('choice', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='account',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='profile',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.category'),
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
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='admission.advertisement'),
        ),
        migrations.AddField(
            model_name='application',
            name='applicant_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile'),
        ),
        migrations.AddField(
            model_name='advertisement',
            name='academic_year',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.academic_year'),
        ),
        migrations.AddField(
            model_name='advertisement',
            name='program',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='management.program'),
        ),
        migrations.AddConstraint(
            model_name='application',
            constraint=models.UniqueConstraint(fields=('applicant_id', 'advertisement_id'), name='Unique Application ID'),
        ),
    ]
