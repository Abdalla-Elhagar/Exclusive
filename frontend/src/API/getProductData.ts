const API = import.meta.env.VITE_API;
export const APIProductData = async () => {
  const res = await fetch(`${API}/products`);
  return await res.json();
};
