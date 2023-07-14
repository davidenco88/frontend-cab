const BASE_URL = import.meta.env.VITE_BASE_URL;

// eslint-disable-next-line import/prefer-default-export
export async function createTrip(data) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(`${BASE_URL}/api/trips`, options);

    if (res.ok) {
      return { status: res.status, data: await res.json() };
    }
  } catch (error) {
    throw new Error("Failed to create trip", error.message);
  }
}

export async function findHistorictrips(data) {
  try {
    let res;

    if (data.isDriver) {
      res = await fetch(`${BASE_URL}/api/trips/TripsByDriver/${data.id}`);
    } else {
      res = await fetch(`${BASE_URL}/api/trips/TripsByClient/${data.id}`);
    }
    if (res.ok) {
      return await res.json();
    }
    return [];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to geting the trip history ", error.message);
  }
}

export async function modifyTripState(tripId, state) {
  const payload = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tripId,
      state,
    }),
  };

  const response = await fetch(`${BASE_URL}/api/trips/state/modify`, payload);

  return response;
}

export async function modifyCarAvailability(vehicleID, state) {
  const payload = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      available: state,
    }),
  };

  const response = await fetch(
    `${BASE_URL}/api/vehicles//updateAvailability/${vehicleID}`,
    payload
  );

  return response;
}
