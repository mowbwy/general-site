export async function getUsers() {
  const res = await fetch("http://localhost:5000/api/users");
  return res.json();
}
