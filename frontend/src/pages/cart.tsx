import "./cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { cartTypes } from "../Types/cart";
import type { productType } from "../Types/products";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart: cartTypes = useSelector((state: any) => state.productData.cart);
  const Products: productType[] = useSelector(
    (state: any) => state.productData.data
  );

  return (
    <div className="cart">
      <div className="container">
        <div className="my-20 text-black/20">
          Home / <span className="text-black">Cart</span>
        </div>

        <div className="content">
          <div className="myTable">
            <div className="tableHeader font-semibold py-5 border-2 border-black/5 my-5 grid grid-cols-4 px-5">
              <p>Product</p>
              <p className="text-center">Price</p>
              <p className="text-center">Quantity</p>
              <p className="text-end max-sm:hidden">Subtotal</p>
            </div>

            {cart?.items?.map((product) => {
              const productData = Products.find(
                (p) => p._id.toString() === product.product.toString()
              );
              if (!productData) return null;
              return (
                <CartItem
                  key={product.product}
                  product={product}
                  productData={productData}
                />
              );
            })}
          </div>

          <div className="bottom w-full max-sm:flex-col gap-5 flex justify-between my-5">
            <Link
              to="/"
              className="border-2 border-black/30 py-4 px-10 rounded-md"
            >
              Return To Shop
            </Link>
            <button
              aria-label="button"
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
              <button
                aria-label="button"
                className="py-4 h-14 max-lg:w-full w-40 bg-mainColor text-white rounded-md"
              >
                Apply Coupon
              </button>
            </div>
            <div className="total max-sm:w-full w-[500px] border-2 p-5 max-2xl:w-[450px] mb-10">
              <h2>Cart Total</h2>
              <div className="data mt-6">
                <div className=" flex justify-between pb-2 border-b-2">
                  <p>Subtotal:</p>
                  <p>${cart.totalAmount}</p>
                </div>
                <div className=" flex justify-between mt-5 py-2 border-b-2">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className=" flex justify-between mt-5 py-2 border-b-2">
                  <p>Total:</p>
                  <p>${cart.totalAmount}</p>
                </div>
                <div className="w-full flex justify-center">
                  <Link
                    to="/checkOut"
                    className={`${cart.items.length === 0 && "pointer-events-none bg-mainColor/75 "} hover:scale-105 duration-300 mt-5 py-4 px-10 bg-mainColor text-white rounded-md`}
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
