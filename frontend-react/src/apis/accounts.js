const API_URL = process.env.REACT_APP_API_URL;

export const createTxn = async (token, payload) => {
    console.log(' token, payload - ', token, payload)
  const res = await fetch(`${API_URL}/accounts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
};