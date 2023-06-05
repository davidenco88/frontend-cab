const BASE_URL = import.meta.env.VITE_BASE_URL;
// const carsUrl = 'http://localhost:3000/cars';

export async function fetchCars() {
  const res = await fetch(`${BASE_URL}/api/cars`);
  return res.json();
}

export async function fetchCarsById(id) {
  const res = await fetch(`${BASE_URL}/api/cars/${id}`);
  return res.json();
}
