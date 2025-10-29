import { Link } from "react-router-dom";
import SendIcon from "../images/homeImages/icon-send.png";
import QRCode from "../images/homeImages/Qrcode.png";
import PlayStore from "../images/homeImages/playStore.png";
import AppStore from "../images/homeImages/appstore.png";
import FaceBook from "../images/homeImages/Icon-Facebook.png";
import Twitter from "../images/homeImages/Icon-Twitter.png";
import Instagram from "../images/homeImages/icon-instagram.png";
import Linkedin from "../images/homeImages/Icon-Linkedin.png";
import Copyright from "../images/homeImages/icon-copyright.png";

export default function Footer() {
  return (
    <footer className="pt-20 pb-5 bg-black text-white">
      <div className="container">
        <div className="content max-sm:text-center gap-y-20 max-sm:gap-20 max-sm:justify-center flex gap-5 w-full flex-wrap justify-between mb-20">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Exclusive</h3>
            <h2 className="text-2xl font-semibold">Subscribe</h2>
            <p>Get 10% off your first order</p>
            <div className="input relative">
              <img
                className=" absolute right-4 top-1/2 -translate-y-1/2"
                src={SendIcon}
                alt="SendIcon"
              />
              <input
                className="py-3 px-4 border-2 rounded-md placeholder:text-white/50 bg-transparent"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Account</h3>
            <Link to="myAccount">My Account</Link>
            <Link to="/login">Login / Register</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/favorite">Wishlist</Link>
            <Link to="/">Shop</Link>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Download App</h3>
            <p className="text-sm">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-x-0 gap-2 grid-rows-2">
              <img
                src={QRCode}
                alt="QRCode"
                className="qrCode col-span-1 row-span-2"
              />
              <img
                src={PlayStore}
                alt="QRCode"
                className="PlayStore -ml-2 col-span-1 row-span-1"
              />
              <img
                src={AppStore}
                alt="QRCode"
                className="AppStore -ml-2 col-span-1 row-span-1"
              />
            </div>
            <ul className="icons flex gap-8 mt-5">
              <img src={FaceBook} alt="FaceBook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Instagram} alt="Instagram" />
              <img src={Linkedin} alt="Linkedin" />
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center max-lg:mb-20 gap-2">
          <img className="size-4 opacity-30" src={Copyright} alt="Copyright" />
          <p className=" opacity-30">
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
