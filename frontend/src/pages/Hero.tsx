import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Hero Page</h1>
      <p>Hello, my name is Joseph and I'm a computer science student. My current
        degree is a B.S. in Computer Science. I have experience in Java, Python, and web development. I have also done some work with machine learning and data science. I am passionate about technology and I am always looking for new opportunities to learn and grow.
      I am currently pursuing my degree at South New Hampshire University so that I could get a better education.</p>
      <Link to="/">Back Home</Link>
    </div>
  );
}
