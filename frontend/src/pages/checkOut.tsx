import { useState, useRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import { useSelector } from "react-redux";
import image1 from "../images/check/1.png";
import image2 from "../images/check/2.png";
import image3 from "../images/check/3.png";
import image4 from "../images/check/4.png";

export default function CheckOut() {
  const user: any = useSelector(
    (state: any) => state.SelectedUser.selectedData
  );
  const total = useSelector((state: any) => state.sendData.total);
  const [selectedOption, setSelectedOption] = useState("cash");
  const refClick: any = useRef<HTMLButtonElement>(null);
  function handleClick() {
    refClick.current?.click();
  }
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="checkOut">
      <div className="container">
        <div className="my-20 text-black/20">
          Account / <span className="text-black">CheckOut</span>
        </div>
        <div className="content gap-20 max-lg:flex-col max-lg:gap-10 items-center flex justify-between my-20">
          <div className="left flex max-sm:w-full flex-col gap-5">
            <h2 className="text-3xl font-semibold mb-10">Billing Details</h2>

            <div className="input flex flex-col gap-3 text-black/50">
              <label>First Name</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Company Name</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Street Address</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Apartment, floor, etc. (optional)</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Town/City</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Phone Number</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Email Address</label>
              <input
                className="input bg-[#F5F5F5] py-2 w-[450px]"
                type="text"
              />
            </div>
            <div className="checkbox relative flex items-center gap-3">
              <input
                type="checkbox"
                ref={refClick}
                onClick={() =>
                  isChecked == false ? setIsChecked(true) : setIsChecked(false)
                }
                className="appearance-none size-5 border-2 rounded-md checked:text-white checked:bg-red-600 outline-none"
              />
              {isChecked && (
                <IoCheckmark
                  onClick={handleClick}
                  className="text-white p-0 absolute left-[2px]"
                />
              )}
              <label>
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className="right max-md:w-full w-3/6">
            {user.cart.map((product: any) => (
              <div className="flex justify-between gap-5 items-center">
                <div className="img-name items-center flex gap-5">
                  <img
                    className="size-20"
                    src={product.image}
                    alt="ProductImage"
                  />
                  <p className="line-clamp-1 h-5 w-40">{product.title}</p>
                </div>
                <p>${product.price}</p>
              </div>
            ))}
            <h2 className="text-lg font-semibold my-4">Cart Summary</h2>
            <div className="flex justify-between border-b py-2">
              <span>Subtotal:</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Shipping:</span>
              <span>free</span>
            </div>
            <div className="flex justify-between font-bold py-2">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <div className="flex mt-10 items-center justify-between pb-4 mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={selectedOption === "bank"}
                  onChange={() => setSelectedOption("bank")}
                  className="mr-2"
                />
                <span>Bank</span>
              </label>
              <div className="flex gap-2">
                <img className="h-3" src={image1} alt="bKash" />
                <img className="h-3" src={image2} alt="Visa" />
                <img className="h-3" src={image3} alt="MasterCard" />
                <img className="h-3" src={image4} alt="Nagad" />
              </div>
            </div>
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={selectedOption === "cash"}
                  onChange={() => setSelectedOption("cash")}
                  className="mr-2 bg-black"
                />
                <span>Cash on delivery</span>
              </label>
            </div>
            <div className="max-w-full mx-auto mt-6 rounded-md">
              <div className="flex items-center gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="w-80 bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-600 transition">
                  Apply Coupon
                </button>
              </div>
              <button className="bg-red-500 text-white w-40 py-3 rounded-md hover:bg-red-600 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
