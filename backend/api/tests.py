from django.test import SimpleTestCase
from rest_framework.test import APIClient


class HelloAPITest(SimpleTestCase):
    def setUp(self):
        self.client = APIClient()

    def test_hello_returns_message(self):
        response = self.client.get('/api/hello/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'message': 'Hello from Django REST Framework!'})
