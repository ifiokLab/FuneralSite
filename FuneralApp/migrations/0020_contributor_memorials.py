# Generated by Django 4.1.6 on 2023-03-07 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuneralApp', '0019_contributor'),
    ]

    operations = [
        migrations.AddField(
            model_name='contributor',
            name='memorials',
            field=models.ManyToManyField(related_name='contributors', to='FuneralApp.deceased'),
        ),
    ]
