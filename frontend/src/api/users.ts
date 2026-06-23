export async function getUsers() {
  const res = await fetch("https://github.com/mowbwy/general-site/blob/8a0dfae55654812d6014881a40cc311ce7b49704/backend/users.py");
  return res.json();
}
