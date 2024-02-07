const API_URL = process.env.REACT_APP_API_URL;

export const listUsers = async (token, queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();
  const res = await fetch(`${API_URL}/users?${queryString}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const users = await res.json();
  return users;
};