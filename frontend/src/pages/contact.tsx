import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://general-site-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="contact">
      <h1 className="contact-title">Let’s Connect</h1>

      <p className="contact-subtext">
        I’m always open to discussing new opportunities, collaborating on
        projects, or just talking tech. Feel free to reach out anytime.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>

      {status && <p className="status">{status}</p>}

      {/* Existing Buttons */}
      <div className="contact-buttons">
        <a
          href="mailto:jalvayero2@toromail.csudh.edu"
          className="contact-btn"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-a-a68646217/"
          target="_blank"
          className="contact-btn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mowbwy"
          target="_blank"
          className="contact-btn"
        >
          GitHub
        </a>
      </div>

      <Link to="/">Back Home</Link>
    </section>
  );
}
