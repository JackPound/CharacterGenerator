# Generated by Django 2.1.5 on 2019-01-09 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charactergenerator', '0005_auto_20190109_1820'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='constitution_bonus',
            field=models.IntegerField(default=2),
        ),
    ]
