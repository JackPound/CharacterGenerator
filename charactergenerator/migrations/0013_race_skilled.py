# Generated by Django 2.1.5 on 2019-01-17 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charactergenerator', '0012_characterclass_skills_per_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='skilled',
            field=models.BooleanField(default=False),
        ),
    ]
