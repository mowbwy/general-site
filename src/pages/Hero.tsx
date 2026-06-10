import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Hero Page</h1>
      <p>My name is Joseph and I'm a computer science student.</p>
      <Link to="/">Back Home</Link>
    </div>
  );
}
