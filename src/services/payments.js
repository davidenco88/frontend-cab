const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

export async function fetchPayment(paymentMethod, amount) {
  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amount,
      paymentMethod,
    }),
  };

  const response = await fetch(`${BASE_URL}/api/payments`, payload);

  return response;
}

export async function fetchRegisterPayment(trip) {
  console.log(trip);
  const payload = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trip),
  };

  const response = await fetch(`${BASE_URL}/api/trips/mailtodriver`, payload);

  return response;
}
