import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./sliderNavigation.css";
import "swiper/css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import type { productType } from "../data/products";

export default function TodaySlider() {
  const Products:productType[] = useSelector((state:any) => state.productData.data)
  const breakpointsData = {
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
  };
  return (
    <div className="relative">
      <div className="custom-prev -top-[100px] max-lg:-top-[40px] absolute">
        <WestOutlinedIcon />
      </div>
      <div className="custom-next -top-[100px] max-lg:-top-[40px] absolute">
        <EastOutlinedIcon />
      </div>
      <Swiper
        className="mt-10 mx-auto"
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
        breakpoints={breakpointsData}
        modules={[Navigation, Autoplay]}
      >
        {Products.slice(0, 15).map((product: any) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
