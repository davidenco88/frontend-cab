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
    const errorData = await response.json();
    return {
      status: response.status,
      message: errorData.message,
    };
  }
}

export async function register(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/api/users`, options);

  return response.json();
}
