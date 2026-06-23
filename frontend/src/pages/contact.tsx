import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-title">Let’s Connect</h1>

      <p className="contact-subtext">
        I’m always open to discussing new opportunities, collaborating on projects,
        or just talking tech. Feel free to reach out anytime.
      </p>

      <div className="contact-buttons">
        <a href="mailto:jalvayero2@toromail.csudh.edu" className="contact-btn">
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
