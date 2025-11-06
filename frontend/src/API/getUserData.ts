import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { logedInUser } from "../slices/selectedUser";

const API = import.meta.env.VITE_API;

const fetchUser = async (): Promise<any> => {
  const res = await fetch(`${API}/users/me`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("User not authenticated");
  return res.json();
};

export const useUserData = () => {
  const dispatch = useDispatch();

  const query = useQuery<any, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 5 * 60 * 1000,
  });

  if (query.data) {
    dispatch(logedInUser(query.data));
  }

  return query;
};
