import image from "../images/signUpAndLogIn.png";
import google from "../images/Icon-Google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { myUsers } from "../slices/saveNewUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  type user = {
    name: string;
    phone: string;
    password: string;
  };
  const usersData: any = useSelector((state: any) => state.ArrayOfUsers.data);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    password: "",
    cart: [],
    favorite: [],
    favoriteIDs: [],
  });
  const [error, setError] = useState(false);

  const filteredPhone =
    usersData.length > 0
      ? usersData.filter((e: any) => e.phone === user.phone)
      : [];

  function saveNewUser() {
    setError(true);
    if (
      user.phone.length > 10 &&
      user.password.length > 5 &&
      user.name.length > 2 &&
      (usersData.length > 0 ? filteredPhone.length === 0 : true)
    ) {
      dispatch(myUsers(user));
      navigate("/logIn");
    }
  }

  return (
    <div className="register my-20 items-center flex w-full justify-between">
      <img className="w-4/6 max-lg:hidden" src={image} alt="registerImage" />
      <div className="content mx-auto max-w-[500px] max-px-36">
        <div className="container">
          <div className="headerOfSignUp">
            <h2 className="text-4xl font-semibold mb-5">Create an account</h2>
            <p>Enter your details below</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-14">
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2"
              placeholder="Name"
              type="text"
              id="name"
            />
            {error && user.name.length < 1 ? (
              <p className="text-sm text-red-500">the name is required</p>
            ) : null}
            {error && user.name.length < 3 && user.name.length != 0 ? (
              <p className="text-sm text-red-500">Enter a correct name</p>
            ) : null}

            <input
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2"
              placeholder="phone"
              type="number"
              id="phone"
            />
            {error &&
            usersData.length > 0 &&
            filteredPhone.length > 0 &&
            user.phone === filteredPhone[0].phone ? (
              <p className="text-sm text-red-500">
                The phone number has been used before (Please use another phone
                number)
              </p>
            ) : null}
            {error && user.phone.length < 1 ? (
              <p className="text-sm text-red-500">
                the phone number is required
              </p>
            ) : null}
            {error && user.phone.length < 11 && user.phone.length != 0 ? (
              <p className="text-sm text-red-500">
                Enter a correct phone number{" "}
              </p>
            ) : null}
            {error && user.phone == filteredPhone[0] ? (
              <p className="text-sm text-red-500">this phone used before </p>
            ) : null}

            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2"
              placeholder="Password"
              type="password"
              id="password"
            />
            {error && user.password.length < 6 && user.password.length != 0 ? (
              <p className="text-sm text-red-500">
                Password must contain more than 5 litters{" "}
              </p>
            ) : null}
            {error && user.password.length < 1 ? (
              <p className="text-sm text-red-500">the password is required</p>
            ) : null}

            <button
              onClick={saveNewUser}
              className="bg-mainColor w-full py-4 text-white rounded-md mt-10"
            >
              Create Account
            </button>
          </form>
          <button className="google w-full border-2 rounded-md flex gap-3 justify-center items-center py-4 mt-5">
            <img className="size-5" src={google} alt="google-icon" />
            <p>Sign up with Google</p>
          </button>
          <div className="bottom flex justify-center mt-10 text-black/60 gap-5">
            <span>Already have account?</span>
            <Link className="border-b-2 border-black/25" to="/logIn">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ...

// ...
