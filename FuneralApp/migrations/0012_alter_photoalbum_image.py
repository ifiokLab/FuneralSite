# Generated by Django 4.1.6 on 2023-02-26 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuneralApp', '0011_photoalbum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photoalbum',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='Albums/'),
        ),
    ]
