from django.contrib import admin
from .models import (
    Chapter,
    Section,
    Quote,
    KeyPoint,
    Competency,
    AnalyticalTool,
)


class SectionInline(admin.StackedInline):
    model = Section
    extra = 0


class QuoteInline(admin.StackedInline):
    model = Quote
    extra = 0


class KeyPointInline(admin.StackedInline):
    model = KeyPoint
    extra = 0


class CompetencyInline(admin.StackedInline):
    model = Competency
    extra = 0


class AnalyticalToolInline(admin.StackedInline):
    model = AnalyticalTool
    extra = 0


@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    inlines = [
        SectionInline,
        QuoteInline,
        KeyPointInline,
        CompetencyInline,
        AnalyticalToolInline,
    ]
