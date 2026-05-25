import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../api/client";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1><br/>
      <Link to="/">Back Home</Link>
      {users.map((u: any) => (
        <p key={u._id}>{u.name}</p>

      ))}
    </div>
  );
}
