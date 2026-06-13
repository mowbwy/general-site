import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        I’m Joseph Alvayero, a software engineering student and developer who
        enjoys building clean, functional, and creative web experiences. I love
        experimenting with tools like Rsbuild and exploring new ways to bring
        ideas to life through code.
      </p>

      <p className="about-text">
        I have hands‑on experience with web development, Java, and Python, and
        I’m always learning new technologies to expand my skill set.
      </p>

      <p className="about-text">
        This site is still growing — I’m adding more projects, UI experiments,
        and improvements as I continue learning.
      </p>
    </section>
  );
}