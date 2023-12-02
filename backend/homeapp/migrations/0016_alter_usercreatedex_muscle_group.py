# Generated by Django 3.2.22 on 2023-11-30 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0015_auto_20231101_2249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercreatedex',
            name='muscle_group',
            field=models.CharField(choices=[('Biceps', 'Biceps'), ('Triceps', 'Triceps'), ('Shoulders', 'Shoulders'), ('Chest', 'Chest'), ('Back', 'Back'), ('Quadriceps', 'Quadriceps'), ('Hamstring', 'Hamstring'), ('Calf', 'Calf'), ('Abs', 'Abs')], max_length=255),
        ),
    ]
