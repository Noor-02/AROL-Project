# Generated by Django 4.0.4 on 2022-05-22 18:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('admission', '0002_profile_account'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='applicant_id',
            field=models.CharField(max_length=255, unique=True, verbose_name='Applicant ID'),
        ),
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('application_id', models.CharField(max_length=255, unique=True, verbose_name='Application ID')),
                ('payment_id', models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='Payment ID')),
                ('advertisement_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.advertisement')),
                ('applicant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile')),
            ],
            options={
                'verbose_name': 'Application',
                'verbose_name_plural': 'Applications',
                'ordering': ['application_id'],
            },
        ),
    ]
