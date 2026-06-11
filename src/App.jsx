import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Index</h1>
      <Link to="/about">Go to About</Link><br />
      <Link to="/contact">Go to Contact</Link><br />
      <Link to="/Search">Search this site</Link><br />
      <Link to="/Hero">Go to Hero</Link><br />
      <Link to="/Projects">Go to Projects</Link><br />
      <Link to="/GSearch">Search the Internet</Link><br />
    </div>
  );
}
