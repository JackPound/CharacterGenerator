# Generated by Django 2.1.5 on 2019-01-06 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charactergenerator', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='charisma',
            field=models.IntegerField(default=10),
        ),
        migrations.AddField(
            model_name='character',
            name='constitution',
            field=models.IntegerField(default=10),
        ),
        migrations.AddField(
            model_name='character',
            name='intelligence',
            field=models.IntegerField(default=10),
        ),
        migrations.AddField(
            model_name='character',
            name='wisdom',
            field=models.IntegerField(default=10),
        ),
    ]
