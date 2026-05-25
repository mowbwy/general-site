import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link><br />
      <Link to="/contact">Go to Contact</Link><br />
      <Link to="/home">Go to Home</Link><br />
      <Link to="/user">Go to Users</Link>
    </div>
  );
}
