import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

const API = import.meta.env.VITE_API;

export default function UserMenu() {
  const [show, setShow] = useState(false);

  const userMenuList = [
    {
      text: "Manage My Account",
      path: "/MyAccount",
      icon: <FaRegUser className="size-5" />,
    },
  ];

  const handleLogOut = async () => {
    try {
      sessionStorage.removeItem("authToken");

      await fetch(`${API}/users/log-out`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
        credentials: "include",
      });

      location.reload();
    } catch (err) {
      console.log(err);
      location.reload();
    }
  };

  return (
    <div className="relative" aria-label="cart">
      <FaRegUser
        onClick={() => (show ? setShow(false) : setShow(true))}
        className="size-8 p-1 border-4 border-mainColor rounded-full bg-mainColor text-white"
      />
      {show && (
        <div className="absolute rounded-md p-3 pl-5 text-base -left-52 top-12 w-[250px] h-[130px] z-50 bg-[#1e1e1e5d] backdrop-blur-[15px] text-white">
          {userMenuList.map((i, index) => (
            <Link
              key={index}
              className="w-full hover:ml-2 cursor-pointer transition-all duration-300 flex mt-3 mb-8 gap-4 justify-start items-center"
              to={i.path}
              onClick={() => setShow(false)}
            >
              {i.icon}
              <p>{i.text}</p>
            </Link>
          ))}

          <button
            aria-label="button"
            onClick={handleLogOut}
            className="w-full hover:ml-2 cursor-pointer transition-all duration-300 flex mb-8 gap-4 justify-start items-center"
          >
            <TbLogout2 className="size-5" />
            <p>Logout</p>
          </button>
        </div>
      )}
    </div>
  );
}
