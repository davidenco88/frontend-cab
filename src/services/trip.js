const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8080";

// eslint-disable-next-line import/prefer-default-export
export async function createTrip() {
  const res = await fetch(`${BASE_URL}/api/trips`);
  return res.json();
}
