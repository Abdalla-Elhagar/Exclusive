import { Link } from "react-router-dom";

// 🖼️ Images
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
  const supportData = [
    "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ];

  const accountLinks = [
    { title: "My Account", path: "/myAccount" },
    { title: "Cart", path: "/cart" },
    { title: "Wishlist", path: "/favorite" },
    { title: "Shop", path: "/" },
  ];

  const quickLinks = [
    "Privacy Policy",
    "Terms Of Use",
    "FAQ",
    "Contact",
  ];

  const socialIcons = [
    { src: FaceBook, alt: "Facebook" },
    { src: Twitter, alt: "Twitter" },
    { src: Instagram, alt: "Instagram" },
    { src: Linkedin, alt: "LinkedIn" },
  ];

  return (
    <footer className="pt-20 pb-5 bg-black text-white">
      <div className="container">
        {/* ====== Main Footer Content ====== */}
        <div className="flex flex-wrap justify-between gap-5 max-sm:justify-center max-sm:text-center max-sm:gap-20 mb-20">
          
          {/* ====== Subscribe Section ====== */}
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Exclusive</h3>
            <h2 className="text-2xl font-semibold">Subscribe</h2>
            <p>Get 10% off your first order</p>

            <div className="relative">
              <img
                src={SendIcon}
                alt="Send Icon"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 border-2 rounded-md bg-transparent placeholder:text-white/50"
              />
            </div>
          </div>

          {/* ====== Support Section ====== */}
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Support</h3>
            {supportData.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          {/* ====== Account Section ====== */}
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Account</h3>
            {accountLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>

          {/* ====== Quick Links Section ====== */}
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Quick Link</h3>
            {quickLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          {/* ====== App Download Section ====== */}
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Download App</h3>
            <p className="text-sm">Save $3 with App New User Only</p>

            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <img
                src={QRCode}
                alt="QR Code"
                className="col-span-1 row-span-2"
              />
              <img
                src={PlayStore}
                alt="Play Store"
                className="-ml-2 col-span-1 row-span-1"
              />
              <img
                src={AppStore}
                alt="App Store"
                className="-ml-2 col-span-1 row-span-1"
              />
            </div>

            <ul className="flex gap-8 mt-5">
              {socialIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} />
              ))}
            </ul>
          </div>
        </div>

        {/* ====== Footer Bottom ====== */}
        <div className="flex justify-center items-center gap-2 max-lg:mb-20">
          <img
            src={Copyright}
            alt="Copyright"
            className="size-4 opacity-30"
          />
          <p className="opacity-30">
            Copyright Rimel 2022. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
