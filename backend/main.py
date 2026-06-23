from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from api.users import router as users_router
app = FastAPI()

app.include_router(users_router, prefix="/api")
# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route
@app.get("/")
def root():
    return {"message": "Backend is running!"}

# Hello route
@app.get("/api/hello")
def hello():
    return {"message": "Hello from FastAPI!"}

# Contact form model
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Contact route
@app.post("/api/contact")
def contact(form: ContactForm):
    return {
        "status": "success",
        "received": form.dict()
    }

# Login model
class LoginForm(BaseModel):
    username: str
    password: str

# Login route
@app.post("/api/login")
def login(form: LoginForm):
    if form.username == "admin" and form.password == "1234":
        return {"status": "success", "token": "fake-jwt-token"}
    return {"status": "error", "message": "Invalid credentials"}
