from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from users import router
import resend
import os

app = FastAPI()

# Load API key from Railway environment variables
resend.api_key = os.getenv("RESEND_API_KEY")

app.include_router(router, prefix="/api")

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

# Contact route WITH EMAIL NOTIFICATION
@app.post("/api/contact")
def contact(form: ContactForm):

    # Send email to yourself
    resend.Emails.send(
        {
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": ["jalvayero2@toromail.csudh.edu"],
            "subject": f"New Contact Form Message from {form.name}",
            "html": f"""
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Message:</strong><br>{form.message}</p>
            """
        }
    )

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
