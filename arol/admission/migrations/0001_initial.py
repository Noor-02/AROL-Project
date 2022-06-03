# Generated by Django 3.2.7 on 2022-06-02 13:40

import admission.models.advertisement
import admission.models.education
import admission.models.examination
import admission.models.profile
import admission.models.recommendation
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('choice', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Advertisement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advertisement_id', models.CharField(editable=False, max_length=6, unique=True, verbose_name='Advertisement ID')),
                ('advertisement_number', models.CharField(help_text='2-digit Advertisement Number', max_length=2, verbose_name='Advertisement Number')),
                ('session', models.CharField(help_text='2-digit Session code', max_length=2, verbose_name='Session')),
                ('begins_from', models.DateField(verbose_name='Admission Begins from')),
                ('deadline', models.DateField(verbose_name='Admission Deadline')),
                ('academic_year', models.IntegerField(default=2022, verbose_name='Academic Year')),
                ('file', models.FileField(upload_to=admission.models.advertisement.upload_file, verbose_name='Advertisement File')),
            ],
            options={
                'verbose_name': 'Advertisement',
                'verbose_name_plural': 'Advertisements',
                'ordering': ['-advertisement_id'],
            },
        ),
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('application_id', models.CharField(editable=False, max_length=13, unique=True, verbose_name='Application ID')),
                ('payment_id', models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='Payment ID')),
                ('is_approved', models.BooleanField(verbose_name='Is Approved')),
            ],
            options={
                'verbose_name': 'Application',
                'verbose_name_plural': 'Applications',
                'ordering': ['application_id'],
            },
        ),
        migrations.CreateModel(
            name='Education_Detail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qualification', models.CharField(max_length=255, verbose_name='Examination')),
                ('examination', models.CharField(max_length=255, verbose_name='Name of Examination Passed')),
                ('university', models.CharField(max_length=255, verbose_name='Board/ Institute/ University')),
                ('duration', models.IntegerField(verbose_name='Duration of Degree/Diploma in Years')),
                ('status', models.CharField(choices=[('Completed', 'Completed'), ('Pursuing', 'Pursuing')], max_length=255, verbose_name='Status')),
                ('year_of_passing', models.IntegerField(verbose_name='Expected Year of Passing')),
                ('marks_type', models.CharField(choices=[('Percent of Marks', 'Percent of Marks'), ('CPI/CGPA', 'CPI/CGPA')], max_length=255, verbose_name='Percent of Marks or CPI/CGPA')),
                ('percent', models.IntegerField(verbose_name='Percent or CPI/CGPA')),
                ('out_of', models.IntegerField(verbose_name='Out of CPI/CGPA')),
                ('division', models.CharField(choices=[('First', 'First'), ('Second', 'Second'), ('Third', 'Third'), ('Not Applicable', 'Not Applicable')], max_length=255, verbose_name='Class/Division')),
                ('specialization', models.CharField(blank=True, max_length=255, null=True, verbose_name='Specialization (if any)')),
                ('marksheet', models.FileField(upload_to=admission.models.education.upload_marksheet, verbose_name='Marksheet')),
                ('certificate', models.FileField(upload_to=admission.models.education.upload_certificate, verbose_name='Certificate')),
            ],
            options={
                'verbose_name': 'Educationional Information',
                'verbose_name_plural': 'Educational Information',
                'ordering': ['applicant_id'],
            },
        ),
        migrations.CreateModel(
            name='Employment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('organization', models.CharField(max_length=255, verbose_name='Name of Organization')),
                ('post_held', models.CharField(max_length=255, verbose_name='Post Held')),
                ('from_date', models.DateField(verbose_name='From')),
                ('to_date', models.DateField(verbose_name='To')),
                ('duration', models.IntegerField(verbose_name='Period of Employment in Months')),
                ('responsibilities', models.CharField(max_length=255, verbose_name='Nature of Responsibilities')),
                ('emoluments', models.CharField(max_length=255, verbose_name='Gross Emoluments')),
            ],
            options={
                'verbose_name': 'Employment Detail',
                'verbose_name_plural': 'Employment Details',
                'ordering': ['applicant_id'],
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('applicant_id', models.CharField(editable=False, max_length=6, unique=True, verbose_name='Applicant ID')),
                ('applicant_number', models.IntegerField(default=admission.models.profile.next_applicant_number, editable=False, verbose_name='Applicant Number this year')),
                ('date_created', models.DateField(auto_now_add=True)),
                ('type_of_applicant', models.BooleanField(choices=[(True, 'Indian Applicant'), (False, 'Foreign Applicant')], default=True, verbose_name='Type of Applicant')),
                ('nationality', models.CharField(default='India', max_length=255, verbose_name='Nationality')),
                ('full_name', models.CharField(max_length=255, verbose_name='Full Name')),
                ('photograph', models.FileField(upload_to=admission.models.profile.upload_photograph, verbose_name='Passport Sized Photograph')),
                ('father_or_spouse_name', models.CharField(max_length=255, verbose_name="Father's/Spouse Name")),
                ('date_of_birth', models.DateField(verbose_name='Date of Birth')),
                ('contact_number', models.BigIntegerField(verbose_name='Contact Number')),
                ('parent_contact_number', models.BigIntegerField(verbose_name='Parent Contact Number')),
                ('pwd', models.BooleanField(verbose_name='Persons with Disabilities (PwD)')),
                ('disability', models.CharField(max_length=255, null=True, verbose_name='Type of Disability')),
                ('c_address', models.TextField(verbose_name='Address')),
                ('c_city', models.CharField(max_length=255, verbose_name='City')),
                ('c_state', models.CharField(max_length=255, verbose_name='State')),
                ('c_pin', models.IntegerField(verbose_name='Pin/Zip')),
                ('p_address', models.TextField(verbose_name='Address')),
                ('p_city', models.CharField(max_length=255, verbose_name='City')),
                ('p_state', models.CharField(max_length=255, verbose_name='State')),
                ('p_pin', models.IntegerField(verbose_name='Pin/Zip')),
            ],
            options={
                'verbose_name': 'Personal Profile',
                'verbose_name_plural': 'Personal Profile',
                'ordering': ['applicant_id'],
            },
        ),
        migrations.CreateModel(
            name='Recommendation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('referral_id', models.UUIDField(verbose_name='Referral ID')),
                ('referree_email', models.EmailField(max_length=254, verbose_name='Referree Email')),
                ('letter_of_recommendation', models.FileField(upload_to=admission.models.recommendation.upload_recommendation, verbose_name='Document')),
                ('application_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.application')),
            ],
            options={
                'verbose_name': 'Recommendation',
                'verbose_name_plural': 'Recommendations',
                'ordering': ['referral_id'],
            },
        ),
        migrations.CreateModel(
            name='Qualifying_Examination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_number', models.CharField(max_length=255, verbose_name='Registration Number')),
                ('document', models.FileField(upload_to=admission.models.examination.upload_document, verbose_name='Document')),
                ('applicant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile')),
                ('examination', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='choice.qualifying_exam')),
            ],
            options={
                'verbose_name': 'Qualifying Examination',
                'verbose_name_plural': 'Qualifying Examinations',
                'ordering': ['applicant_id'],
            },
        ),
        migrations.CreateModel(
            name='Project_Detail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('degree', models.CharField(choices=[('Bachelors', 'Bachelors'), ('Masters', 'Masters')], max_length=255, verbose_name='Degree')),
                ('university', models.CharField(max_length=255, verbose_name='Name of University/Institute')),
                ('year_of_submission', models.IntegerField(verbose_name='Year of Submission')),
                ('supervisor', models.CharField(max_length=255, verbose_name='Name of Supervisor')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('applicant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admission.profile')),
            ],
            options={
                'verbose_name': 'Project Detail',
                'verbose_name_plural': 'Project Details',
                'ordering': ['applicant_id'],
            },
        ),
    ]
