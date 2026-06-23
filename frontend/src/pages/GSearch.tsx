import { Link } from "storybook/internal/router";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "120px",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "500",
          marginBottom: "40px",
          color: "#202124",
          letterSpacing: "-1px",
        }}
      >
        General<span style={{ color: "#1A73E8" }}>Search</span>
      </h1>

      {/* Search Bar */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderRadius: "50px",
          padding: "12px 20px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "18px",
            color: "#202124",
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #f1f3f4",
            background: "#f8f9fa",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          General Search
        </button>

        <button
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #f1f3f4",
            background: "#f8f9fa",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          I'm Feeling Curious
        </button>
      </div>
      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "14px",
          color: "#5f6368",
        }}
      >
        Built by Joseph • Inspired by Google
      </footer>
    </div>
  );
}
