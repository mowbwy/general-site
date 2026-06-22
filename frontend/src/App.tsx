import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [message, setMessage] = useState<string>("Loading...");
  useEffect(() => {

    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("API error:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "120px",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "500",
          marginBottom: "20px",
          color: "#202124",
          letterSpacing: "-1px",
        }}
      >
        Joseph Alvayero's <span style={{ color: "#1A73E8" }}>Website</span>
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: "18px",
          color: "#5f6368",
          marginBottom: "40px",
        }}
      >
        A clean, simple Google‑style homepage
      </p>
      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <NavButton to="/about" label="About" />
        <NavButton to="/contact" label="Contact" />
        <NavButton to="/search" label="Search" />
        <NavButton to="/hero" label="Hero" />
        <NavButton to="/projects" label="Projects" />
      </div>

      {/* Footer */}
      <footer
        style={{
          paddingBottom: "20px",
          fontSize: "14px",
          color: "#5f6368",
        }}
      >
        Built by Joseph • Inspired by Google
      </footer>
    </div>
  );
}
async function sendContactForm() {
  const api = import.meta.env.VITE_API_URL;

  const res = await fetch(`${api}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Joseph",
      email: "test@example.com",
      message: "Hello from frontend!"
    })
  });

  const data = await res.json();
  console.log(data);
}
function NavButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        background: "#f8f9fa",
        border: "1px solid #dadce0",
        color: "#202124",
        textAlign: "center",
        fontSize: "16px",
        transition: "background 0.2s",
      }}
    >
      {label}
    </Link>    
  );
async function login() {
  const api = import.meta.env.VITE_API_URL;

  const res = await fetch(`${api}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "admin",
      password: "1234"
    })
  });

  const data = await res.json();
  console.log(data);
}

}