# Generated by Django 4.1.6 on 2023-03-08 12:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('FuneralApp', '0020_contributor_memorials'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contributor',
            name='memorials',
        ),
        migrations.AddField(
            model_name='contributor',
            name='memorials',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='contributors', to='FuneralApp.deceased'),
        ),
    ]
