# Generated by Django 4.0.4 on 2022-09-01 04:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('admission', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UGC_CSIR',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roll_number', models.CharField(max_length=25, verbose_name='Registration Number')),
                ('date_issued', models.DateField(verbose_name='With Effective From')),
                ('qualified_jrf', models.BooleanField(verbose_name='Eligible for Junior Research Fellowship')),
                ('jrf_validity', models.IntegerField(blank=True, null=True, verbose_name='JRF Validity in Years')),
                ('qualified_ap', models.BooleanField(verbose_name='Eligible for Assistant Professor')),
                ('ap_validity', models.IntegerField(blank=True, null=True, verbose_name='Assistant Professor Validity in Years')),
                ('application_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='admission.application')),
            ],
            options={
                'verbose_name': 'UGC CSIR',
                'verbose_name_plural': 'UGC CSIR',
                'ordering': ['application_id'],
            },
        ),
        migrations.CreateModel(
            name='JAM',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_number', models.CharField(max_length=25, verbose_name='Registration Number')),
                ('year_of_appearance', models.IntegerField()),
                ('examination_code', models.CharField(max_length=255, verbose_name='Examination Paper Code')),
                ('marks', models.IntegerField(verbose_name='Marks')),
                ('candidates_appeared', models.IntegerField(verbose_name='Number of Candidates Appeared')),
                ('air', models.IntegerField(verbose_name='All India Rank')),
                ('validity', models.DateField(verbose_name='Valid Up to')),
                ('application_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='admission.application')),
            ],
            options={
                'verbose_name': 'JAM',
                'verbose_name_plural': 'JAM',
                'ordering': ['application_id'],
            },
        ),
        migrations.CreateModel(
            name='GATE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_number', models.CharField(max_length=25, verbose_name='Registration Number')),
                ('year_of_appearance', models.IntegerField()),
                ('examination_code', models.CharField(max_length=255, verbose_name='Examination Paper Code')),
                ('gate_score', models.IntegerField(verbose_name='Gate Score')),
                ('marks', models.IntegerField(verbose_name='Marks Out of 100')),
                ('candidates_appeared', models.IntegerField(verbose_name='Number of Candidates Appeared')),
                ('air', models.IntegerField(verbose_name='All India Rank')),
                ('validity', models.DateField(verbose_name='Valid Up to')),
                ('application_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='admission.application')),
            ],
            options={
                'verbose_name': 'GATE',
                'verbose_name_plural': 'GATE',
                'ordering': ['application_id'],
            },
        ),
    ]
