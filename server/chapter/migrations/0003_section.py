# Generated by Django 2.0.5 on 2018-05-14 17:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chapter', '0002_auto_20180514_1658'),
    ]

    operations = [
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sn', models.IntegerField()),
                ('title', models.CharField(max_length=255)),
                ('details', models.TextField(blank=True)),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sections', to='chapter.Chapter')),
            ],
            options={
                'ordering': ['sn'],
            },
        ),
    ]
