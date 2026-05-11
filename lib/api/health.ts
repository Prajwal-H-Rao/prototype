export async function getHealth() {
  const response = await fetch("http://localhost:3000/test/api");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
}
