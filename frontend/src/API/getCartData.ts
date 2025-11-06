import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCart } from "../slices/productData";

export const API = 'http://localhost:5000'
export const APICartData = async () => {
  const res = await fetch(API+"/cart", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
  return await res.json();
};

export function userCartF() {
  const dispatch = useDispatch();

  const [_, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productRef = await APICartData();

      if (productRef) {
        setProducts(productRef);
        dispatch(userCart(productRef));
      }
    };
    fetchProductData();
  }, [dispatch]);
}
