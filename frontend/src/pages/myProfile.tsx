import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { logedInUser } from "../slices/selectedUser";

import { API } from "../API/getCartData";
;

export default function Profile() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });

  const user = useSelector((state: any) => state.SelectedUser.data);
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });

  const handleEditNameAndPhone = async () => {
    if (
      userData.name.length < 3 ||
      userData.phone.length < 11 ||
      password.newPass.length < 5 ||
      password.confirmPass !== password.newPass
    ) {
      setError(true);
      return;
    }

    try {
      setError(false);
      const res = await fetch(API + "/users/update-data", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: userData.name,
          phone: userData.phone,
        }),
      });
      if (!res.ok) {
        toast.error("name or phone has been error");
        return;
      }

      const data = await res.json();

      dispatch(logedInUser(data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangePass = async () => {
    if (
      password.newPass.length < 5 ||
      password.confirmPass !== password.newPass ||
      userData.name.length < 3 ||
      userData.phone.length < 11
    ) {
      setError(true);
      return;
    }
    try {
      setError(false);
      const res = await fetch(API + "/users/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          currentPassword: password.currentPass,
          newPassword: password.newPass,
        }),
      });
      if (!res.ok) {
        setPasswordError(true);
        toast.error("The current password has been error");
        return;
      }
      setPasswordError(false);
      toast.success("the Data has been updated");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUplode = () => {
    handleEditNameAndPhone();
    handleChangePass();
  };

  return (
    <section className="profile">
      <div className="container">
        <div className="mt-20 mb-10 max-sm:text-xs flex justify-between text-black/20">
          <div>
            Home / <span className="text-black">My Account</span>
          </div>
          <div className="text-black">
            Welcome! <span className="text-mainColor">{user?.name}</span>
          </div>
        </div>
        <div className="content mb-40 max-md:grid-cols-2 grid grid-cols-3">
          <div className="col-span-1 pt-10 max-md:col-span-2 mb-10 text-black/30">
            <div>
              <h3 className="text-black text-lg font-semibold">
                Manage My Account
              </h3>
              <ul>
                <li className="text-mainColor">My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>
            
          </div>
          <div className="shadow border max-sm:p-5 p-10 grid col-span-2 grid-cols-2">
            <h2 className="text-xl ml-5 mb-5 col-span-2 font-semibold text-mainColor ">
              Edit Your Profile
            </h2>
            <div className="input flex max-sm:col-span-2 max-sm:mx-0 flex-col ml-5 col-span-1">
              <label className="text-lg">Name</label>
              <input
                className="bg-[#F5F5F5] text-lg text-black/50 py-2 p-5"
                value={userData.name}
                type="text"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
              />
              {error && userData.name.length < 3 && (
                <p className="text-sm text-red-500">
                  the name must be more than 2 letters
                </p>
              )}
            </div>
            <div className="input flex flex-col max-sm:mx-0 max-sm:col-span-2 -mr-5 ml-5 col-span-1">
              <label className="text-lg">Phone</label>
              <input
                className="bg-[#F5F5F5] text-lg text-black/50 py-2 p-5"
                value={userData.phone}
                type="number"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    phone: e.target.value,
                  })
                }
              />
              {error && userData.phone.length < 11 && (
                <p className="text-sm text-red-500">
                  the phone must be more than 10 numbers
                </p>
              )}
            </div>
            <div className="input flex max-sm:mx-0 flex-col w-full gap-4 mt-5 ml-5 col-span-2">
              <h3 className="col-span-2 text-black ">Edit Your Profile</h3>

              <input
                className="bg-[#F5F5F5] w-full text-lg text-black/50 py-2 p-5"
                placeholder="Current Passwod"
                type="text"
                value={password.currentPass}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    currentPass: e.target.value,
                  })
                }
              />
              {passwordError && (
                <p className="text-sm text-red-500">
                  the curent password has been error
                </p>
              )}
              <input
                className="bg-[#F5F5F5] w-full text-lg text-black/50 py-2 p-5"
                placeholder="New Passwod"
                type="text"
                value={password.newPass}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    newPass: e.target.value,
                  })
                }
              />
              {error && password.newPass.length < 6 && (
                <p className="text-sm text-red-500">
                  the new password must be more than 5 letters
                </p>
              )}
              <input
                className="bg-[#F5F5F5] w-full text-lg text-black/50 py-2 p-5"
                placeholder="Confirm New Passwod"
                type="text"
                value={password.confirmPass}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    confirmPass: e.target.value,
                  })
                }
              />
              {error && password.confirmPass != password.newPass && (
                <p className="text-sm text-red-500">
                  the confirm password must be equal the new password
                </p>
              )}
            </div>
            <div className="buttons w-full justify-end col-span-2 ml-5 flex gap-5 mt-5">
              <button
                onClick={() =>
                  setPassword({
                    currentPass: "",
                    newPass: "",
                    confirmPass: "",
                  })
                }
              >
                Cancel
              </button>
              <button
                onClick={handleUplode}
                className="text-white bg-mainColor py-4 w-40"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
