from django.urls import path
from api.views import HelloAPI
from django.http import HttpResponse
import os


def frontend(request, filename=None):
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if not filename:
        filename = 'frontend.html'
    # Prevent directory traversal
    filename = os.path.normpath(filename).lstrip(os.sep)
    file_path = os.path.join(base, 'static', filename)
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return HttpResponse(f.read(), content_type='text/html')
    except FileNotFoundError:
        return HttpResponse('Not found', status=404)


urlpatterns = [
    path('api/hello/', HelloAPI.as_view()),
    path('static/frontend.html', frontend),
    path('static/<path:filename>', frontend),
    path('', frontend),
]
