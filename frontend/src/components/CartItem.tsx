import { useState } from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch } from "react-redux";
import { userCart } from "../slices/productData";
import type { cartItemTypes } from "../Types/cart";
import type { productType } from "../Types/products";

const API = import.meta.env.VITE_API;

export default function CartItem({
  product,
  productData,
}: {
  product: cartItemTypes;
  productData: productType;
}) {
  const [quantityLoading, setQuantityLoading] = useState(false);
  const dispatch = useDispatch();

  const getHeaders = () => {
    const token = sessionStorage.getItem("authToken");
    const headers: any = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  };

  const updateQuantity = async (control: "increase" | "decrease") => {
    setQuantityLoading(true);
    try {
      const res = await fetch(`${API}/cart/quantity-control`, {
        method: "PUT",
        headers: getHeaders(),
        credentials: "include",
        body: JSON.stringify({
          productId: product.product,
          control,
        }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          sessionStorage.removeItem("authToken");
        }
        return;
      }

      const data = await res.json();
      dispatch(userCart(data));
    } catch (err) {
      console.error(err);
    } finally {
      setQuantityLoading(false);
    }
  };

  return (
    <div
      key={product.product}
      className="row text-center py-5 border-2 border-black/5 my-5 grid grid-cols-4 max-sm:grid-cols-3 items-center px-5 w-full"
    >
      <img className="w-16 col-span-1" src={productData.image} alt="Product" />
      <p className="col-span-1">${productData.price}</p>
      <div className="customNumber col-span-1 flex justify-between items-center gap-3 border-2 w-fit rounded-md border-black/25 px-3 mx-auto">
        {quantityLoading ? (
          <PulseLoader color="#DB4444" size={5} />
        ) : (
          <p>{product.quantity}</p>
        )}
        <div className="flex flex-col">
          <button
            disabled={quantityLoading}
            onClick={() => updateQuantity("increase")}
          >
            <ExpandLessOutlinedIcon />
          </button>
          <button
            disabled={quantityLoading}
            onClick={() => updateQuantity("decrease")}
          >
            <ExpandMoreOutlinedIcon />
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <p className="w-20 max-sm:hidden">
          ${product.quantity * productData.price}
        </p>
      </div>
    </div>
  );
}
