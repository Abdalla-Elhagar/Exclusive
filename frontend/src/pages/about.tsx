import AboutImage from "../images/about/about1.png";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import person1 from "../images/about/person1.png";
import person2 from "../images/about/person2.png";
import person3 from "../images/about/person3.png";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import "./about.css";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

const sales = [
  {
    id: 1,
    icon: <IoStorefrontOutline className="size-8 " />,
    number: "10.5k",
    disc: "Sallers active our site",
  },
  {
    id: 2,
    icon: <RiMoneyDollarCircleLine className="size-8 " />,
    number: "33k",
    disc: "Mopnthly Produduct Sale",
  },
  {
    id: 3,
    icon: <RiShoppingBagLine className="size-8 " />,
    number: "45.5k",
    disc: "Customer active in our site",
  },
  {
    id: 4,
    icon: <TbMoneybag className="size-8 " />,
    number: "25k",
    disc: "Anual gross sale in our site",
  },
];

const people = [
  {
    id: 1,
    photo: person1,
    name: "Tom Cruise",
    jop: "Founder & Chairman",
  },
  {
    id: 2,
    photo: person2,
    name: "Emma Watson",
    jop: "Managing Director",
  },
  {
    id: 3,
    photo: person3,
    name: "Will Smith",
    jop: "Product Designer",
  },
  {
    id: 4,
    photo: person1,
    name: "Tom Cruise",
    jop: "Founder & Chairman",
  },
];

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="my-20  text-black/20">
          Home / <span className="text-black">About</span>
        </div>
        <div className="top flex max-md:flex-col justify-between mb-10 items-center">
          <div className="text w-[500px] max-md:w-full">
            <h1 className="text-5xl mb-10 font-semibold">Our Story</h1>
            <p className=" mb-5">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className=" mb-5">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="relative">
            <img src={AboutImage} alt="" />
          </div>
        </div>

        <div className="my-20 flex justify-between max-md:justify-center max-lg:flex-wrap gap-5">
          {sales.map((ele) => (
            <div
              key={ele.id}
              className="card w-[300px] border-2 hover:bg-mainColor group hover:text-white transition-all duration-300 py-10 flex flex-col justify-center items-center"
            >
              <div className="bg-black group-hover:bg-white group-hover:text-black transition-all duration-300  group-hover:border-mainColor/40 border-8 border-stone-300/95 text-white size-16 flex justify-center items-center rounded-full">
                {ele.icon}
              </div>
              <h3 className="text-2xl font-bold my-3">{ele.number}</h3>
              <p>{ele.disc}</p>
            </div>
          ))}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper my-20"
        >
          {people.map((ele) => (
            <SwiperSlide key={ele.id} className="flex justify-center">
              <div className="card max-sm:w-full mx-auto">
                <div className="image max-sm:w-full w-[370px] h-[430px] relative bg-[#F5F5F5]">
                  <img
                    className="mx-auto absolute left-1/2 -translate-x-1/2 bottom-0"
                    src={ele.photo}
                    alt="personImage"
                  />
                </div>
                <h3 className="name text-3xl mt-7  font-semibold">
                  {ele.name}
                </h3>
                <p className="mt-2">{ele.jop}</p>
                <div className="icons flex gap-3 mt-3">
                  <CiTwitter className="size-5" />
                  <FaInstagram className="size-5" />
                  <RiLinkedinLine className="size-5" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bottom my-32 text-center justify-evenly flex-wrap gap-5 gap-y-20 flex">
          <div>
            <div className="icon mx-auto flex justify-center items-center rounded-full bg-[#2F2E30]/30 size-[95px]">
              <AirportShuttleOutlinedIcon
                sx={{ width: "60px", height: "60px", fontSize: "16px" }}
                className="text-white rounded-full p-2 bg-black"
              />
            </div>
            <h3 className="my-6 text-2xl font-bold">FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div>
            <div className="icon mx-auto flex justify-center items-center rounded-full bg-[#2F2E30]/30 size-[95px]">
              <HeadsetMicOutlinedIcon
                sx={{ width: "60px", height: "60px", fontSize: "16px" }}
                className="text-white rounded-full p-2 bg-black"
              />
            </div>
            <h3 className="my-6 text-2xl font-bold">24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div>
            <div className="icon mx-auto flex justify-center items-center rounded-full bg-[#2F2E30]/30 size-[95px]">
              <BeenhereOutlinedIcon
                sx={{ width: "60px", height: "60px", fontSize: "16px" }}
                className="text-white rounded-full p-2 bg-black"
              />
            </div>
            <h3 className="my-6 text-2xl font-bold">MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
