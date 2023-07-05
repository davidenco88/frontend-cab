const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';
// const carsUrl = 'http://localhost:3000/cars';

export async function fetchAvailableCars() {
  const res = await fetch(`${BASE_URL}/api/vehicles/availables`);
  return res.json();
}

export async function fetchCarsById(id) {
  const res = await fetch(`${BASE_URL}/api/cars/${id}`);
  return res.json();
}
