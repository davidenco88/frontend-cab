const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

// eslint-disable-next-line import/prefer-default-export
export async function createTrip(data) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(`${BASE_URL}/api/trips`, options);

    if (res.ok) {
      return { status: res.status, data: await res.json() };
    }
  } catch (error) {
    throw new Error('Failed to create trip', error.message);
  }
}
