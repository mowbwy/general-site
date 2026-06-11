import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Back Home</Link>
      <p>This is my second website. I used Rsbuild to build it. I just like working code. 
         I have practical experience in web development, Java, and I even have a python certificate from
         Coursera. The site is still under construction though. 
      </p>
    </div>
  );
}
