# Backend

This backend is a minimal Django REST Framework project.

## Setup

Install dependencies:

```bash
python -m pip install -r requirements.txt
```

## Run

Start the development server:

```bash
python manage.py runserver 8000
```

The sample endpoint is available at `http://127.0.0.1:8000/api/hello/`.

## Tests

Run backend tests:

```bash
python manage.py test api
```
