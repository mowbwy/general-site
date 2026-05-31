import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { pages, type Page } from "../data/pages";

type SearchResult = Page;

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (!query.trim()) {
      setResults([]);
      return;
    }

    debounceTimer.current = setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const filtered = pages.filter(
        (page) =>
          page.title.toLowerCase().includes(lowerQuery) ||
          page.description.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query]);

  const handleResultClick = (path: string) => {
    navigate(path);
    setQuery("");
    setResults([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Home</h1>
      <Link to="/user">View Users</Link><br />
      <Link to="/about">View the About section</Link><br />
      <Link to="/contact">View Contact Information</Link><br />
      <Link to="/user">View Login</Link><br />
      <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Search pages by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: "16px",
              border: "2px solid #ddd",
              borderRadius: "4px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#4CAF50";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#ddd";
            }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          {results.length > 0 ? (
            <div>
              <h3 style={{ marginBottom: "15px", color: "#333" }}>
                Found {results.length} result{results.length !== 1 ? "s" : ""}
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {results.map((item, index) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleResultClick(item.path)}
                    style={{
                      padding: "12px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      backgroundColor:
                        hoveredIndex === index ? "#f0f0f0" : "#f9f9f9",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                  >
                    <h4 style={{ margin: "0 0 8px 0", color: "#222" }}>
                      {item.title}
                    </h4>
                    <p
                      style={{
                        margin: "0",
                        color: "#666",
                        fontSize: "14px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : query ? (
            <p style={{ color: "#999", fontSize: "14px" }}>
              No results found for "{query}"
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
