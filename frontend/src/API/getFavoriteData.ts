import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { userFavorite } from "../slices/productData";
import type { favoriteTypes } from "../Types/favorite";

const API = import.meta.env.VITE_API;

const fetchFavorites = async (): Promise<favoriteTypes> => {
  const token = sessionStorage.getItem("authToken");

  const headers: any = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API}/favorite`, {
    method: "GET",
    credentials: "include",
    headers,
  });

  if (!res.ok) {
    if (res.status === 401) {
      sessionStorage.removeItem("authToken");
    }
    throw new Error("Failed to fetch favorites");
  }

  return res.json();
};

export const useFavorites = () => {
  const dispatch = useDispatch();

  const query = useQuery<favoriteTypes, Error>({
    queryKey: ["favorites"],
    queryFn: fetchFavorites,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  if (query.data) {
    dispatch(userFavorite(query.data));
  }

  return query;
};
