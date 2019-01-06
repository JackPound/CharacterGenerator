# Generated by Django 2.1.5 on 2019-01-06 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('strength', models.IntegerField(default=10)),
                ('dexterity', models.IntegerField(default=10)),
            ],
        ),
    ]
