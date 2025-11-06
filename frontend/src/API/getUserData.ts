import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logedInUser } from "../slices/selectedUser";

const API = import.meta.env.VITE_API;

export const APIUserData = async () => {
  const res = await fetch(API + "/users/me", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return await res.json();
};

export const useGetUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await APIUserData();
        dispatch(logedInUser(userData));
      } catch (err) {
        console.error("Failed to fetch user:", err);
        dispatch(logedInUser(null));
      }
    };
    fetchUserData();
  }, [dispatch]);
};
