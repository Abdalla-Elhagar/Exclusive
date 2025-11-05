import "./cart.css";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { cartItemTypes, cartTypes } from "../Types/cart";
import type { productType } from "../Types/products";
import { userCart } from "../slices/productData";

const API = import.meta.env.VITE_API


export default function Cart() {

  const cart:cartTypes = useSelector((state: any) => state.productData.cart);
    const Products:productType[] = useSelector((state:any) => state.productData.data)
  
  
  const dispatch = useDispatch();


  const increaseQuantity = async (id:string) => {
    try{
      const res = await fetch(API + "/cart/quantity-control", {
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({productId:id,control:"increase"})
      })

      if(!res.ok) {
        return
      }

      const data = await res.json()
      
      dispatch(userCart(data))
    }
    catch(err) {

    }
  }

  const decreaseQuantity = async (id:string) => {
    try{
      const res = await fetch(API + "/cart/quantity-control", {
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({productId:id,control:"decrease"})
      })

      const data = await res.json()
      
      dispatch(userCart(data))
    }
    catch(err) {

    }
  }

  

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

            {cart?.items?.map((product: cartItemTypes) => {
              const productData = Products.find((p)=> p._id.toString() === product.product.toString())
              if (productData)
              return (
              <div
                key={product.product}
                className="row text-center py-5 border-2 border-black/5 my-5 grid grid-cols-4 max-sm:grid-cols-3 items-center px-5 w-full"
              >
                <img
                  className="w-16 col-span-1"
                  src={productData.image}
                  alt="Product"
                />
                <p className="col-span-1">${productData.price}</p>
                <div className="customNumber col-span-1 flex justify-between items-center gap-3 border-2 w-16 rounded-md border-black/25 px-3 mx-auto ">
                  <p>{product.quantity}</p>
                  <div className="flex flex-col ">
                    <button
                      onClick={() => increaseQuantity(product.product)}
                      className="up"
                    >
                      <ExpandLessOutlinedIcon />
                    </button>
                    <button
                      onClick={() => decreaseQuantity(product.product)}
                      className="down"
                    >
                      <ExpandMoreOutlinedIcon />
                    </button>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end ">
                  <p className="w-20 max-sm:hidden">
                    ${product.quantity * productData.price}
                  </p>
                </div>
              </div>
            )})}
          </div>
          <div className="bottom w-full max-sm:flex-col gap-5 flex justify-between my-5">
            <Link
              to="/"
              className="border-2 border-black/30 py-4 px-10 rounded-md"
            >
              Return To Shop
            </Link>
            <button
              // onClick={handleUpdateCart}
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
