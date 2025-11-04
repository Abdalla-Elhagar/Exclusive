const API = import.meta.env.VITE_API;
export const APICartData = async () => {
  const res = await fetch(`${API}/cart`);
  return await res.json();
};
