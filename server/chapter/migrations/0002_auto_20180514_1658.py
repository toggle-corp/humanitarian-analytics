# Generated by Django 2.0.5 on 2018-05-14 16:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chapter', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analyticaltool',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='analytical_tools', to='chapter.Chapter'),
        ),
        migrations.AlterField(
            model_name='competency',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='competencies', to='chapter.Chapter'),
        ),
        migrations.AlterField(
            model_name='keypoint',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='key_points', to='chapter.Chapter'),
        ),
        migrations.AlterField(
            model_name='quote',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quotes', to='chapter.Chapter'),
        ),
    ]
