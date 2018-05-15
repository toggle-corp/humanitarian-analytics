from django.db import models


class Chapter(models.Model):
    sn = models.IntegerField()
    title = models.CharField(max_length=255)
    overview = models.TextField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['sn']


class Section(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,
                                related_name='sections')
    sn = models.IntegerField()
    title = models.CharField(max_length=255)
    details = models.TextField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['sn']


class Quote(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,
                                related_name='quotes')
    sn = models.IntegerField()
    quote = models.TextField()
    author = models.CharField(max_length=255)

    def __str__(self):
        return '{}... - {}'.format(
            self.quote[:50],
            self.author,
        )

    class Meta:
        ordering = ['sn']


class KeyPoint(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,
                                related_name='key_points')
    sn = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return '{}...'.format(self.text[:50])

    class Meta:
        ordering = ['sn']


class Competency(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,
                                related_name='competencies')
    sn = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return '{}...'.format(self.text[:50])

    class Meta:
        ordering = ['sn']
        verbose_name = 'Competency required'
        verbose_name_plural = 'Competencies required'


class AnalyticalTool(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,
                                related_name='analytical_tools')
    sn = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return '{}...'.format(self.text[:50])

    class Meta:
        ordering = ['sn']
        verbose_name = 'Analytical technique/tool'
        verbose_name_plural = 'Analytical techniques and tools'
