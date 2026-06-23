import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <div className="about-wrapper fade-in">
      <div className="about-header">
        <h1>About Me</h1>
              <Link to="/">Back Home</Link>
        
        <p className="subtitle">Software Engineering Student • Web Developer • Problem Solver</p>
      </div>

      <div className="about-content">
        <img
          src="/general-site/profile.jpg"
          alt="Profile"
          className="profile-pic"
        />

        <p>
          Hey, I’m <span className="highlight">Joseph Alvayero</span> — a software engineering student
          who loves building clean, functional, and creative web experiences. I enjoy turning ideas
          into real, working applications and constantly improving my skills through hands‑on projects.
        </p>

        <p>
          I’ve worked with tools like <span className="highlight">React</span>, <span className="highlight">Rsbuild</span>,
          <span className="highlight"> JavaScript</span>, <span className="highlight">Python</span>, and <span className="highlight">Java</span>.
          I also hold a Python certificate from Coursera and continue expanding my knowledge in
          software engineering, machine learning, and modern web development.
        </p>

        <div className="section">
          <h2 className="section-title">Tech Stack</h2>
          <div className="badges">
            <div className="badge">JavaScript</div>
            <div className="badge">React</div>
            <div className="badge">Rsbuild</div>
            <div className="badge">Python</div>
            <div className="badge">Java</div>
            <div className="badge">GitHub Pages</div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">What I’m Working On</h2>
          <div className="card">
            <p>
              I’m expanding this portfolio with more projects, UI experiments, and interactive components.
              I’m also exploring backend development and sharpening my problem‑solving skills through
              real‑world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


