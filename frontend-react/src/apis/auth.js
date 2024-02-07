const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (loginDetails) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  return await res.json();
};