# Generated by Django 4.0.6 on 2023-06-08 09:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('FuneralApp', '0007_deceased_death_cause'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='heart',
            field=models.ManyToManyField(blank=True, related_name='heart_comment', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='comments',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='liked_comment', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='CommentReply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='FuneralApp.comments')),
                ('heart', models.ManyToManyField(blank=True, related_name='heart_reply', to=settings.AUTH_USER_MODEL)),
                ('likes', models.ManyToManyField(blank=True, related_name='liked_reply', to=settings.AUTH_USER_MODEL)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='FuneralApp.commentreply')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
