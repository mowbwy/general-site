import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Back Home</Link>
      <p>I’m Joseph Alvayero, a software engineering student and developer who enjoys building clean, functional, and creative web experiences. I’ve built this site using Rsbuild as part of my journey to sharpen my frontend and backend skills.

I have hands‑on experience with web development, Java, and Python, and I hold a Python certificate from Coursera. I love experimenting with code, learning new tools, and finding better ways to bring ideas to life.

This site is still under construction, but I’m actively expanding it with new projects, UI improvements, and more creative elements.

Thanks for stopping by — feel free to explore or check back soon for updates.
      </p>
    </div>
  );
}
