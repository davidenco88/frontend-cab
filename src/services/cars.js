const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';
// const carsUrl = 'http://localhost:3000/cars';

export async function fetchAvailableCars() {
  const res = await fetch(`${BASE_URL}/api/vehicles/availables`);
  return res.json();
}

export async function fetchVehicleByDriverId(id) {
  const res = await fetch(`${BASE_URL}/api/vehicles/driver/${id}`);
  return res.json();
}

export async function postCreateVehicle(vehicleData) {

  const urlApiCar = `https://cdn.imagin.studio/getImage?&customer=counivalle&make=${vehicleData.brand}&modelFamily=${vehicleData.model}`;
  const profile = JSON.parse(localStorage.getItem('profile'));
  const vehicle = {
    ...vehicleData,
    year: Number(vehicleData.year),
    image: urlApiCar,
    driverID: Number(profile.id),
    vehicleTypeID: Number(vehicleData.vehicleTypeID),
    isAvailable: true,
    isActive: true,
  }

  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle),
  };

  const response = await fetch(`${BASE_URL}/api/vehicles`, payload);

  return response;
}
