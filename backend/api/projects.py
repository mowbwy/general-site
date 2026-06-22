@app.get("/api/projects")
def get_projects():
    return [
        {"id": 1, "name": "General Site", "url": "https://mowbwy.github.io/general-site"},
        {"id": 2, "name": "Another Project", "url": "https://example.com"}
    ]
