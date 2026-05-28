import React from "react";
import { searchItems } from "../api/search";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

interface SearchResult {
  _id?: string;
  name: string;
  description?: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Debounced search function
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (!query.trim()) {
      setResults([]);
      return;
    }

    debounceTimer.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const data = await searchItems(query);
        setResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300); // 300ms debounce delay

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Home</h1>
      <Link to="/user">View Users</Link>

      {/* Search Bar */}
      <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Search items by name or description..."
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

        {/* Loading Indicator */}
        {isLoading && (
          <p style={{ color: "#666", fontSize: "14px", margin: "10px 0" }}>
            Searching...
          </p>
        )}

        {/* Results Section */}
        <div style={{ marginTop: "20px" }}>
          {results.length > 0 ? (
            <div>
              <h3 style={{ marginBottom: "15px", color: "#333" }}>
                Found {results.length} result{results.length !== 1 ? "s" : ""}
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {results.map((item) => (
                  <div
                    key={item._id || Math.random()}
                    style={{
                      padding: "12px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      backgroundColor: "#f9f9f9",
                      hover: {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    <h4 style={{ margin: "0 0 8px 0", color: "#222" }}>
                      {item.name}
                    </h4>
                    {item.description && (
                      <p
                        style={{
                          margin: "0",
                          color: "#666",
                          fontSize: "14px",
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : query && !isLoading ? (
            <p style={{ color: "#999", fontSize: "14px" }}>
              No results found for "{query}"
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
