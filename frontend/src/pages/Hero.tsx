import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // optional if you want to separate CSS

export default function About() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Joseph.</h1>

        <p className="tagline">
          Computer Science Student • Developer • ML Enthusiast
        </p>

        <p className="description">
          I’m currently earning my B.S. in Computer Science at SNHU, where I’m
          building strong foundations in software engineering, machine learning,
          and modern development practices. I have experience in Java, Python,
          web development, and data science. I’m passionate about technology and
          always looking for opportunities to learn and grow.
        </p>

        <div className="hero-buttons">
          <Link to="/" className="btn primary">Back Home</Link>
          <Link to="/projects" className="btn secondary">View Projects</Link>
        </div>
      </div>
    </section>
  );
}
