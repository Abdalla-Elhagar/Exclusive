import iphone from "../images/homeImages/hero_endframe.png";
import appleLogo from "../images/homeImages/Apple_gray_logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import EastIcon from "@mui/icons-material/East";
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import "./HeroSlider.css";

export default function HeroSlider() {
  return (
    <div className="col-span-4 p-16 pt-14 w-full max-xl:px-8 max-xl:pr-0 max-sm:pt-0 z-10 max-lg:p-0  max-sm:px-0 max-lg:col-span-1">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content bg-black w-full h-[400px] max-sm:flex-col max-sm:gap-10 items-center max-sm:h-full z-10 max-sm:text-center py-5 flex p-12">
            <div className="left text-white flex flex-col gap-7 justify-between">
              <div className="iphone flex max-sm:mx-auto items-center gap-9">
                <img className="w-[40px]" src={appleLogo} />
                <p>iPhone 14 Series</p>
              </div>
              <p className="text-[48px]">Up to 10% off Voucher</p>
              <div className="shopNow">
                <a
                  className="ml-2 text-xl border-b-2 border-white mr-5 pb-2"
                  href="#"
                >
                  Shop Now
                </a>
                <EastIcon />
              </div>
            </div>
            <div className="right">
              <img className="w-[496px]" src={iphone} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content bg-black w-full h-[400px] max-sm:flex-col max-sm:gap-10 items-center max-sm:h-full z-10 max-sm:text-center py-5 flex p-12">
            <div className="left text-white flex flex-col gap-7 justify-between">
              <div className="iphone flex max-sm:mx-auto items-center gap-9">
                <img className="w-[40px]" src={appleLogo} />
                <p>iPhone 14 Series</p>
              </div>
              <p className="text-[48px]">Up to 10% off Voucher</p>
              <div className="shopNow">
                <a
                  className="ml-2 text-xl border-b-2 border-white mr-5 pb-2"
                  href="#"
                >
                  Shop Now
                </a>
                <EastIcon />
              </div>
            </div>
            <div className="right">
              <img className="w-[496px]" src={iphone} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content bg-black w-full h-[400px] max-sm:flex-col max-sm:gap-10 items-center max-sm:h-full z-10 max-sm:text-center py-5 flex p-12">
            <div className="left text-white flex flex-col gap-7 justify-between">
              <div className="iphone flex max-sm:mx-auto items-center gap-9">
                <img className="w-[40px]" src={appleLogo} />
                <p>iPhone 14 Series</p>
              </div>
              <p className="text-[48px]">Up to 10% off Voucher</p>
              <div className="shopNow">
                <a
                  className="ml-2 text-xl border-b-2 border-white mr-5 pb-2"
                  href="#"
                >
                  Shop Now
                </a>
                <EastIcon />
              </div>
            </div>
            <div className="right">
              <img className="w-[496px]" src={iphone} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content bg-black w-full h-[400px] max-sm:flex-col max-sm:gap-10 items-center max-sm:h-full z-10 max-sm:text-center py-5 flex p-12">
            <div className="left text-white flex flex-col gap-7 justify-between">
              <div className="iphone flex max-sm:mx-auto items-center gap-9">
                <img className="w-[40px]" src={appleLogo} />
                <p>iPhone 14 Series</p>
              </div>
              <p className="text-[48px]">Up to 10% off Voucher</p>
              <div className="shopNow">
                <a
                  className="ml-2 text-xl border-b-2 border-white mr-5 pb-2"
                  href="#"
                >
                  Shop Now
                </a>
                <EastIcon />
              </div>
            </div>
            <div className="right">
              <img className="w-[496px]" src={iphone} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content bg-black w-full h-[400px] max-sm:flex-col max-sm:gap-10 items-center max-sm:h-full z-10 max-sm:text-center py-5 flex p-12">
            <div className="left text-white flex flex-col gap-7 justify-between">
              <div className="iphone flex max-sm:mx-auto items-center gap-9">
                <img className="w-[40px]" src={appleLogo} />
                <p>iPhone 14 Series</p>
              </div>
              <p className="text-[48px]">Up to 10% off Voucher</p>
              <div className="shopNow">
                <a
                  className="ml-2 text-xl border-b-2 border-white mr-5 pb-2"
                  href="#"
                >
                  Shop Now
                </a>
                <EastIcon />
              </div>
            </div>
            <div className="right">
              <img className="w-[496px]" src={iphone} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
