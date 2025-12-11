const BASE_URL = "http://localhost:3333";

export async function apiGet(path) {
  const res = await fetch(BASE_URL + path);
  if (!res.ok) throw new Error("API error");
  return res.json();
}

const api = {
  async get(path) {
    const data = await apiGet(path);
    return { data };
  },
};

export default api;
