import { useState } from "react";
import "./GoogleLogin.css";

export default function GoogleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // TODO: Connect to your FastAPI backend
      console.log("Logging in:", email, password);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch {
      setError("Incorrect email or password");
      setLoading(false);
    }
  };

  return (
    <div className="google-login-container">
      <div className="google-card">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          alt="avatar"
          className="google-avatar"
        />

        <h2>Sign in</h2>
        <p className="google-subtitle">Use your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="google-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Next"}
          </button>
        </form>

        <div className="google-links">
          <a href="#">Forgot email?</a>
          <a href="#">Create account</a>
        </div>
      </div>
    </div>
  );

}


