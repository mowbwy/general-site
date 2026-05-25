export async function searchItems(query: string) {
  const res = await fetch(`http://localhost:5000/api/search?q=${query}`);
  return res.json();
}

