const BASE_URL = "http://localhost:8080";

export async function login(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/auth/local/login`, options);

  if (response.ok) {
    return await response.json();
  } else {
    return await response.json();
  }
}
