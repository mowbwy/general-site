# language: Python
# Install packages first: pip install django djangorestframework
# Simple API view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.urls import path
from django.conf import settings
from django.core.management import execute_from_command_line

settings.configure(DEBUG=True, ROOT_URLCONF=__name__)
class HelloAPI(APIView):
    def get(self, request):
        return Response({"message": "Hello from Django REST Framework!"})

urlpatterns = [
    path('api/hello/', HelloAPI.as_view()),
]

if __name__ == "__main__":
    execute_from_command_line()