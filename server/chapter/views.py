from rest_framework import viewsets

from .models import Chapter
from .serializers import ChapterSerializer


class ChapterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
