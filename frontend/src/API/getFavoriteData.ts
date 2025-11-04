import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userFavorite } from "../slices/productData";



const API = import.meta.env.VITE_API;
export const APIFavoriteData = async () => {
  const res = await fetch(`${API}/favorite`);
  return await res.json();
};

export function userFavoriteF() {
  const dispatch = useDispatch();

  const [_, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productRef = await APIFavoriteData();

      if (productRef) {
        setProducts(productRef);
        dispatch(userFavorite(productRef));
      }
    };
    fetchProductData();
  }, [dispatch]);
}