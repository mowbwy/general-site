from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

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
