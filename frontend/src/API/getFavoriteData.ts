const API = import.meta.env.VITE_API;
export const APIFavoriteData = async () => {
  const res = await fetch(`${API}/favorite`);
  return await res.json();
};
