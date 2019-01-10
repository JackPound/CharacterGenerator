# Generated by Django 2.1.5 on 2019-01-09 21:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('charactergenerator', '0009_auto_20190109_2039'),
    ]

    operations = [
        migrations.CreateModel(
            name='Characterclass',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.AlterField(
            model_name='character',
            name='characterclass',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='charactergenerator.Characterclass'),
        ),
    ]
