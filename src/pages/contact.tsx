import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to="/">Back Home</Link>
      <p>You can contact me at many e-mails and
        a phone number. </p>
    </div>
  );
}