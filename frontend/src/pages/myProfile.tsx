import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { sUser } from "../slices/selectedUser";
import { myUsersWithNewPass } from "../slices/saveNewUser";

export default function Profile() {
  const [changePassword, setChangePassword] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });
  const myUsers = useSelector((state: any) => state.ArrayOfUsers.data);
  const user = useSelector((state: any) => state.SelectedUser.selectedData);
  const [error, setError] = useState(false);
  const dispach = useDispatch();
  const usersWithOutSelectedUser = myUsers.filter(
    (Fuser: any) => Fuser.phone != user.phone
  );

  function handleChangePass() {
    if (
      changePassword.currentPass == user.password &&
      changePassword.confirmPass.length > 5 &&
      changePassword.newPass.length > 5 &&
      changePassword.confirmPass == changePassword.newPass
    ) {
      dispach(sUser({ ...user, password: changePassword.newPass }));
      usersWithOutSelectedUser.push({
        ...user,
        password: changePassword.newPass,
      });
      dispach(myUsersWithNewPass(usersWithOutSelectedUser));
      window.location.reload();
    } else {
      setError(true);
    }
  }

  return (
    <section className="profile">
      <div className="container">
        <div className="mt-20 mb-10 max-sm:text-xs flex justify-between text-black/20">
          <div>
            Home / <span className="text-black">My Account</span>
          </div>
          <div className="text-black">
            Welcome! <span className="text-mainColor">{user.name}</span>
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
            <div className="mt-7">
              <h3 className="text-black text-lg font-semibold">My Orders</h3>
              <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
              <h3 className="text-black text-lg font-semibold">My Orders</h3>
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
                value={user.name}
                type="text"
              />
            </div>
            <div className="input flex flex-col max-sm:mx-0 max-sm:col-span-2 -mr-5 ml-5 col-span-1">
              <label className="text-lg">Phone</label>
              <input
                className="bg-[#F5F5F5] text-lg text-black/50 py-2 p-5"
                value={user.phone}
                type="number"
              />
            </div>
            <div className="input flex max-sm:mx-0 flex-col w-full gap-4 mt-5 ml-5 col-span-2">
              <h3 className="col-span-2 text-black ">Edit Your Profile</h3>

              <input
                className="bg-[#F5F5F5] w-full text-lg text-black/50 py-2 p-5"
                placeholder="Current Passwod"
                type="text"
                value={changePassword.currentPass}
                onChange={(e) =>
                  setChangePassword({
                    ...changePassword,
                    currentPass: e.target.value,
                  })
                }
              />
              {error && changePassword.currentPass != user.password ? (
                <p className="text-sm text-red-500">
                  the curent password has been error
                </p>
              ) : null}
              <input
                className="bg-[#F5F5F5] w-full text-lg text-black/50 py-2 p-5"
                placeholder="New Passwod"
                type="text"
                value={changePassword.newPass}
                onChange={(e) =>
                  setChangePassword({
                    ...changePassword,
                    newPass: e.target.value,
                  })
                }
              />
              {error && changePassword.newPass.length < 6 ? (
                <p className="text-sm text-red-500">
                  the new password must be more than 5 letters
                </p>
              ) : null}
              <input
                className="bg-[#F5F5F5] w-full text-lg text-black/50 py-2 p-5"
                placeholder="Confirm New Passwod"
                type="text"
                value={changePassword.confirmPass}
                onChange={(e) =>
                  setChangePassword({
                    ...changePassword,
                    confirmPass: e.target.value,
                  })
                }
              />
              {error && changePassword.confirmPass != changePassword.newPass ? (
                <p className="text-sm text-red-500">
                  the confirm password must be equal the new password
                </p>
              ) : null}
            </div>
            <div className="buttons w-full justify-end col-span-2 ml-5 flex gap-5 mt-5">
              <button
                onClick={() =>
                  setChangePassword({
                    currentPass: "",
                    newPass: "",
                    confirmPass: "",
                  })
                }
              >
                Cancel
              </button>
              <button
                onClick={handleChangePass}
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
