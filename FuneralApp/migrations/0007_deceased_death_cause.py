# Generated by Django 4.0.6 on 2023-06-01 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuneralApp', '0006_alter_biography_body_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='deceased',
            name='death_cause',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
