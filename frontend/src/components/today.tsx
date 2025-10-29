import { Link } from "react-router-dom";
import Countdown from "./countdown";
import SectionHeader from "./sectionHeader";
import TodaySlider from "./todaySlider";

export default function Today() {
  return (
    <div className="today my-20 border-b-2 py-20 overflow-hidden">
      <div className="container">
        <SectionHeader title="Today’s" />
        <div className="content flex max-md:justify-between max-sm:justify-center flex-wrap max-md:gap-5 gap-40 mt-8">
          <div className="text-[36px] max-md:w-40 max-md:text-[28px] font-semibold">
            Flash Sales
          </div>
          <Countdown />
        </div>

        <TodaySlider />
        <Link
          to="/allProducts"
          className="w-56 py-3 mt-16 text-center rounded-md mx-auto block bg-mainColor text-white"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
