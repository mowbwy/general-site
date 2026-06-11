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
      <h1>Projects</h1><br/>
      <p>This is the projects section. I will place all my projects that have to do with
        computer science here. I am not working in any projects at the moment.</p>
      <Link to="/">Back Home</Link>
      {users.map((u: any) => (
        <p key={u._id}>{u.name}</p>

      ))}
    </div>
  );
}
