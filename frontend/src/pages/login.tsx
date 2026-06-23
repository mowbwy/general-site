import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    console.log("Login clicked", { username, password });
    const api = import.meta.env.VITE_API_URL;

    const res = await fetch(`${api}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.status === "success") {
      setMessage("Login successful");
      localStorage.setItem("token", data.token);
    } else {
      setMessage("Invalid username or password");
    }
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            background: "#1A73E8",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Login
        </button>

        {message && (
          <p style={{ marginTop: "15px", textAlign: "center" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
