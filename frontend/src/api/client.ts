const API_URL = "http://localhost:5000"; // your Express backend

export async function getUsers() {
  const res = await fetch(`${API_URL}/api/users`);
  return res.json();
}
