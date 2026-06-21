export async function searchItems(query: string) {
  const res = await fetch("https://your-app.vercel.app/api/hello");
  return res.json();
}

