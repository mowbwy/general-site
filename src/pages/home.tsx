import React from "react";
import { searchItems } from "../api/search";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
const handleSearch = async () => {
  const data = await searchItems(query);
  setResults(data);

    const filtered = data.filter((item: string) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return(
    <div>
      <h1>Home</h1> <br/>
      <Link to="/user">View Users</Link> <br/> <br/>
            <input
        type="text"
        placeholder="Search something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", marginRight: "8px" }}
      />

      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          results.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          query && <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
