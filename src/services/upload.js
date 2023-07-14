const BASE_URL = import.meta.env.VITE_BASE_URL;

// eslint-disable-next-line import/prefer-default-export
export async function updateAvatar(profile, formData) {
  const options = {
    method: "PATCH",
    body: formData,
  };
  try {
    const res = await fetch(
      `${BASE_URL}/api/users/avatar/${profile.id}`,
      options
    );

    if (res.ok) {
      return { status: res.status, data: await res.json() };
    }
  } catch (error) {
    throw new Error("Failed to update Avatar", error.message);
  }
}
