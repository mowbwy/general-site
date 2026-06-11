import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to="/">Back Home</Link>
      <p>You can contact me at many e-mails and
        a phone number. I also have social media accounts where you can find me.
        I will upload them soon. </p>
    </div>
  );
}