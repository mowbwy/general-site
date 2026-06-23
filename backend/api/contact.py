import resend
from fastapi import FastAPI
from pydantic import BaseModel
import os
resend.api_key = os.getenv("RESEND_API_KEY")


class ContactForm(BaseModel):
    name: str
    email: str
    message: str

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
