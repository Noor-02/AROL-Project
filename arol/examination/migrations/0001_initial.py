# Generated by Django 4.0.4 on 2022-10-12 11:50

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
                ('subject', models.CharField(max_length=25, verbose_name='Subject')),
                ('qualified_jrf', models.BooleanField(verbose_name='Eligible for Junior Research Fellowship')),
                ('jrf_validity', models.DateField(verbose_name='JRF Valid Up to')),
                ('qualified_ap', models.BooleanField(verbose_name='Eligible for Assistant Professor')),
                ('ap_validity', models.CharField(blank=True, max_length=25, null=True, verbose_name='Assistant Professor Validity in Years')),
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
            name='GRE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_number', models.CharField(max_length=25, verbose_name='Registration Number')),
                ('date_of_exam', models.DateField(verbose_name='Date of Examination')),
                ('vr_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Verbal Reasoning Percentile')),
                ('aw_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Analytical Writing Percentile')),
                ('qr_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Quantitative Reasoning Percentile')),
                ('validity', models.DateField(verbose_name='Valid Up to')),
                ('application_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='admission.application')),
            ],
            options={
                'verbose_name': 'GRE',
                'verbose_name_plural': 'GRE',
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
        migrations.CreateModel(
            name='CAT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_number', models.CharField(max_length=25, verbose_name='Registration Number')),
                ('date_of_appearance', models.DateField(verbose_name='Date of Appearance')),
                ('varc_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Verbal Ability and Reading Comprehension Percentile')),
                ('dilr_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Data Interpretation and Logical Reasoning Percentile')),
                ('qa_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Quantitative Ability Percentile')),
                ('overall_percentile', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Overall Percentile')),
                ('validity', models.DateField(verbose_name='Valid Up to')),
                ('application_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='admission.application')),
            ],
            options={
                'verbose_name': 'CAT',
                'verbose_name_plural': 'CAT',
                'ordering': ['application_id'],
            },
        ),
    ]
