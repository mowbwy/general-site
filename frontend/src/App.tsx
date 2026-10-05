import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = ((import.meta as any).env?.VITE_API_URL ?? "http://127.0.0.1:8000") as string;
export default function App() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
      fetch(`${API_BASE_URL}/api/hello/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setMessage(data.message ?? "Hello from backend"))
      .catch((err) => {
        console.error("API error:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (


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
  <header         style={{
          paddingBottom: "20px",
          fontSize: "14px",
          color: "#5f6368",
        }}>
<p>
<a href="https://www.linkedin.com/in/joseph-a-a68646217/" target="_blank"><img alt="LinkedIn Logo"
src="public/linkedin logo.png"/>
</a>

<a href="https://www.github.com/mowbwy" target="_blank"><img alt="GitHub Logo"
src="public/github logo.png"/>
</a>
</p>
   </header>
<h1
  style={{
    fontSize: "56px",
    fontWeight: "500",
    marginBottom: "20px",
    color: "#202124",
    letterSpacing: "-1px",
  }}
>
  <center>Joseph Alvayero</center>
  <span
    style={{
      display: "block",
      color: "#1A73E8",
      fontSize: "24px",
      marginTop: "8px",
      fontWeight: "400",
    }}
  >
    Software Engineering Student | Aspiring Software Developer | Python & Machine Learning Enthusiast
  </span>
</h1>

      <p
        style={{
          fontSize: "18px",
          color: "#5f6368",
          marginBottom: "40px",
        }}
      >
        A clean, simple Google-style homepage
      </p>

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
        <NavButton to="/skills" label="Skills" />
        <NavButton to="/contact" label="Contact" />
        <NavButton to="/search" label="Search" />
        <NavButton to="/hero" label="Hero" />
        <NavButton to="/projects" label="Projects" />
        <NavButton to="/login" label="Login" />
        <NavButton to="/gsearch" label="Google Search" />
      </div>

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
}