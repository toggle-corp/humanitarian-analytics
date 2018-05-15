# Generated by Django 2.0.5 on 2018-05-14 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AnalyticalTool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sn', models.IntegerField()),
                ('text', models.TextField()),
            ],
            options={
                'verbose_name': 'Analytical technique/tool',
                'verbose_name_plural': 'Analytical techniques and tools',
                'ordering': ['sn'],
            },
        ),
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sn', models.IntegerField()),
                ('title', models.CharField(max_length=255)),
                ('overview', models.TextField(blank=True)),
            ],
            options={
                'ordering': ['sn'],
            },
        ),
        migrations.CreateModel(
            name='Competency',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sn', models.IntegerField()),
                ('text', models.TextField()),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chapter.Chapter')),
            ],
            options={
                'verbose_name': 'Competency required',
                'verbose_name_plural': 'Competencies required',
                'ordering': ['sn'],
            },
        ),
        migrations.CreateModel(
            name='KeyPoint',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sn', models.IntegerField()),
                ('text', models.TextField()),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chapter.Chapter')),
            ],
            options={
                'ordering': ['sn'],
            },
        ),
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sn', models.IntegerField()),
                ('quote', models.TextField()),
                ('author', models.CharField(max_length=255)),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chapter.Chapter')),
            ],
            options={
                'ordering': ['sn'],
            },
        ),
        migrations.AddField(
            model_name='analyticaltool',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chapter.Chapter'),
        ),
    ]
