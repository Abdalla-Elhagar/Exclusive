import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { userCart } from "../slices/productData";
import type { cartTypes } from "../Types/cart";

const API = import.meta.env.VITE_API;

const fetchCart = async (): Promise<cartTypes> => {
  const res = await fetch(`${API}/cart`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
};

export const useCart = () => {
  const dispatch = useDispatch();

  const query = useQuery<cartTypes, Error>({
    queryKey: ["cart"],
    queryFn: fetchCart,
    staleTime: 5 * 60 * 1000,
  });

  if (query.data) {
    dispatch(userCart(query.data));
  }

  return query;
};
