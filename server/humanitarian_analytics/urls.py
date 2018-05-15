"""
humanitarian_analytics URL Configuration
"""

from django.contrib import admin
from django.urls import include, path

from rest_framework import routers

from chapter.views import ChapterViewSet


router = routers.DefaultRouter()
router.register(r'chapters', ChapterViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
