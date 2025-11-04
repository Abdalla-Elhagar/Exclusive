import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StoreProducts } from "../slices/productData";

const API = import.meta.env.VITE_API;
export const APIProductData = async () => {
  const res = await fetch(`${API}/products`);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
  return await res.json();
};

export function StoreProductsF() {
  const dispatch = useDispatch();

  const [_, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productRef = await APIProductData();

      if (productRef) {
        setProducts(productRef);
        dispatch(StoreProducts(productRef));
      }
    };
    fetchProductData();
  }, [dispatch]);
}
