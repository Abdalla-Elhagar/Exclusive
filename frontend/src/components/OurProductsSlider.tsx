import { SwiperSlide, Swiper } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import type { productType } from "../Types/products";

export default function OurProductsSlider() {
  const Products:productType[] = useSelector((state:any) => state.productData.data)

  const breakpointsData = {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
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
        className="mySwiper flex-nowrap mt-10 mx-auto"
        slidesPerView={1}
        spaceBetween={10}
        grid={{
          rows: 2,
          fill: "row",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={breakpointsData}
        modules={[Navigation, Grid]}
      >
        {Products.slice(0, 20).map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard key={product._id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
