import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Back Home</Link>
      <p>This webpage has been made for Joseph Alvayero.
        The site is still under construction though.
      </p>
    </div>
  );
}
