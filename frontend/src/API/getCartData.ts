import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCart } from "../slices/productData";


const API = import.meta.env.VITE_API;
export const APICartData = async () => {
  const res = await fetch(`${API}/cart`);
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