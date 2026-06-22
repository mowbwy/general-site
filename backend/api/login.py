class LoginForm(BaseModel):
    username: str
    password: str

@app.post("/api/login")
def login(form: LoginForm):
    if form.username == "admin" and form.password == "1234":
        return {"status": "ok", "token": "fake-jwt-token"}
    return {"status": "error", "message": "Invalid credentials"}
