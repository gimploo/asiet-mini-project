# Generated by Django 3.2.9 on 2022-07-30 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='password',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='userdata',
            name='username',
            field=models.CharField(max_length=200, null=True),
        ),
    ]