import image from "../images/signUpAndLogIn.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sUser } from "../slices/selectedUser";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ phone: "", password: "" });
  const [error, setError] = useState(false);
  const usersData: any = useSelector((state: any) => state.ArrayOfUsers.data);
  function logIn() {
    const loginUser = usersData.filter(
      (e: any) => e.phone === user.phone && e.password === user.password
    );
    if (loginUser.length > 0) {
      setError(false);
      dispatch(sUser(loginUser[0]));
      navigate("/");
      window.location.reload();
    } else {
      setError(true);
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
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2"
              placeholder="phone"
              type="number"
              id="phone"
            />
            {error ? (
              <p className="text-sm text-red-500">
                phone or password has been error{" "}
              </p>
            ) : null}
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2"
              placeholder="Password"
              type="password"
              id="password"
            />
            <div className="buttons flex justify-between mt-10 items-center">
              <button
                onClick={logIn}
                className="bg-mainColor px-10 py-4 text-white rounded-md "
              >
                Log In
              </button>
              <button className="text-mainColor">Forget Password?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ...

// ...
