# Generated by Django 2.1.5 on 2019-01-09 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charactergenerator', '0007_remove_character_constitution'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='constitution',
            field=models.IntegerField(default=10),
        ),
    ]
