import SectionHeader from "./sectionHeader";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { Link } from "react-router-dom";
import "./sliderNavigation.css";
import LaptopWindowsOutlinedIcon from "@mui/icons-material/LaptopWindowsOutlined";
import { SwiperSlide, Swiper } from "swiper/react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";

const categories: any = [
  {
    id: 1,
    title: "Phones",
    icon: <PhoneIphoneOutlinedIcon className="myIcon text-2xl" />,
    path: "/phones",
  },
  {
    id: 2,
    title: "TV",
    icon: <TvOutlinedIcon className="myIcon text-2xl" />,
    path: "/TV",
  },
  {
    id: 3,
    title: "Audio",
    icon: <HeadphonesOutlinedIcon className="myIcon text-2xl" />,
    path: "/audio",
  },
  {
    id: 4,
    title: "Gaming",
    icon: <SportsEsportsOutlinedIcon className="myIcon text-2xl" />,
    path: "/Gaming",
  },
  {
    id: 5,
    title: "laptops",
    icon: <LaptopWindowsOutlinedIcon className="myIcon text-2xl" />,
    path: "/laptop",
  },
  {
    id: 6,
    title: "Appliances",
    icon: <BlenderOutlinedIcon className="myIcon text-2xl" />,
    path: "/appliances",
  },
];

export default function Categories() {
  return (
    <div className="container border-b-2 relative">
      <div className="custom-prev top-[65px] max-sm:hidden absolute">
        <WestOutlinedIcon />
      </div>
      <div className="custom-next top-[65px] max-sm:hidden absolute">
        <EastOutlinedIcon />
      </div>
      <SectionHeader title="Categories" />
      <h2 className="text-4xl mt-5 font-semibold max-sm:text-center max-sm:text-2xl">
        Browse By Category
      </h2>
      <div className="categoriesEles flex justify-around flex-wrap my-14 gap-5">
        <Swiper
          className="mb-10 mx-auto"
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {categories.map((category: any) => (
            <SwiperSlide
              key={category.id}
              className="card w-60 rounded-md hover:bg-mainColor flex flex-col  transition-all duration-300 hover:border-white text-center group border-2 border-black/30"
            >
              <Link to={category.title} className="w-full">
                <div className="icon group-hover:text-white transition-all duration-300 pt-10 text-black/90">
                  {category.icon}
                </div>
                <h3 className="text-2xl group-hover:text-white transition-all duration-300 pb-10 mt-4">
                  {category.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
