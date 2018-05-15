from drf_dynamic_fields import DynamicFieldsMixin
from rest_framework import serializers
from .models import (
    Chapter,
    Section,
    Quote,
    KeyPoint,
    Competency,
    AnalyticalTool,
)


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('id', 'title', 'details')


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ('id', 'quote', 'author')


class KeyPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyPoint
        fields = ('id', 'text')


class CompetencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Competency
        fields = ('id', 'text')


class AnalyticalToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyticalTool
        fields = ('id', 'text')


class ChapterSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)
    quotes = QuoteSerializer(many=True, read_only=True)
    key_points = KeyPointSerializer(many=True, read_only=True)
    competencies = CompetencySerializer(many=True, read_only=True)
    analytical_tools = AnalyticalToolSerializer(many=True, read_only=True)

    class Meta:
        model = Chapter
        fields = '__all__'
