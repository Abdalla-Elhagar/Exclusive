import "./cart.css";
import { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateFavorites } from "../slices/selectedUser";
import { sendTotal } from "../slices/sendData";



export default function Cart() {
  
  const user = useSelector((state: any) => state.SelectedUser.selectedData);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(() => {
    const initialQuantities: Record<string, number> = {};
    user.cart.forEach((product: any) => {
      initialQuantities[product.id] = 1;
    });
    return initialQuantities;
  });

  const [total, setTotal] = useState(0);
  dispatch(sendTotal(total))

  useEffect(() => {
    const newTotal = user.cart.reduce(
      (sum: number, product: any) =>
        sum + product.price * (quantities[product.id] || 1),
      0
    );
    setTotal(newTotal);
  }, [quantities, user.cart]);

  const updateQuantity = (id: string, increment: boolean) => {
    setQuantities((prev) => {
      const newQuantity = increment
        ? (prev[id] || 1) + 1
        : Math.max((prev[id] || 1) - 1, 0);

      if (newQuantity === 0) {
        handleRemoveProduct(id);
        return prev;
      }

      return { ...prev, [id]: newQuantity };
    });
  };

  const handleRemoveProduct = (id: string) => {
    const myUser = {
      name: user.name,
      phone: user.phone,
      password: user.password,
      cart: [],
      favorite: user.favorite,
      favoriteIDs: user.favoriteIDs,
    };
    myUser.cart = user.cart.filter((product: any) => product.id !== id);

    dispatch(updateFavorites(myUser));
  };

  const handleUpdateCart = () => {
    const updatedCart = user.cart.map((product: any) => ({
      ...product,
      quantity: quantities[product.id] || 1,
    }));

    dispatch({ type: "UPDATE_CART", payload: updatedCart });

    alert("Cart updated successfully!");
  };

  

  return (
    <div className="cart">
      <div className="container">
        <div className="my-20 text-black/20">
          Home / <span className="text-black">Cart</span>
        </div>
        <div className="content">
          <div className="myTable">
            <div className="tableHeader font-semibold py-5 border-2 max-sm:grid-cols-3 border-black/5 my-5 grid grid-cols-4 px-5">
              <p className="col-span-1">Product</p>
              <p className="col-span-1 text-center">Price</p>
              <p className="col-span-1 text-center">Quantity</p>
              <p className="col-span-1 max-sm:hidden text-end">Subtotal</p>
            </div>

            {user.cart.map((product: any) => (
              <div
                key={product.id}
                className="row text-center py-5 border-2 border-black/5 my-5 grid grid-cols-4 max-sm:grid-cols-3 items-center px-5 w-full"
              >
                <img
                  className="w-16 col-span-1"
                  src={product.image}
                  alt="Product"
                />
                <p className="col-span-1">${product.price}</p>
                <div className="customNumber col-span-1 flex justify-between items-center gap-3 border-2 w-16 rounded-md border-black/25 px-3 mx-auto ">
                  <p>{quantities[product.id]}</p>
                  <div className="flex flex-col ">
                    <button
                      onClick={() => updateQuantity(product.id, true)}
                      className="up"
                    >
                      <ExpandLessOutlinedIcon />
                    </button>
                    <button
                      onClick={() => updateQuantity(product.id, false)}
                      className="down"
                    >
                      <ExpandMoreOutlinedIcon />
                    </button>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end ">
                  <p className="w-20 max-sm:hidden">
                    ${quantities[product.id] * product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom w-full max-sm:flex-col gap-5 flex justify-between my-5">
            <Link
              to="/"
              className="border-2 border-black/30 py-4 px-10 rounded-md"
            >
              Return To Shop
            </Link>
            <button
              onClick={handleUpdateCart}
              className="border-2 border-black/30 py-4 px-10 rounded-md"
            >
              Update Cart
            </button>
          </div>
          <div className="couponAndTotal max-md:flex-col max-md:items-center flex justify-between gap-10">
            <div className="input max-md:w-full flex max-lg:flex-col max-lg:w-[300px] ">
              <input
                className="border-2 w-72 max-lg:w-full h-14 px-5 mr-4"
                placeholder="Coupon Code"
                type="text"
              />
              <button className="py-4 h-14 max-lg:w-full w-40 bg-mainColor text-white rounded-md">
                Apply Coupon
              </button>
            </div>
            <div className="total max-sm:w-full w-[500px] border-2 p-5 max-2xl:w-[450px] mb-10">
              <h2>Cart Total</h2>
              <div className="data mt-6">
                <div className=" flex justify-between pb-2 border-b-2">
                  <p>Subtotal:</p>
                  <p>${total}</p>
                </div>
                <div className=" flex justify-between mt-5 py-2 border-b-2">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className=" flex justify-between mt-5 py-2 border-b-2">
                  <p>Total:</p>
                  <p>${total}</p>
                </div>
                <div className="w-full flex justify-center">
                  <Link
                    to="/checkOut"
                    className=" mt-5 py-4 px-10 bg-mainColor text-white rounded-md"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
