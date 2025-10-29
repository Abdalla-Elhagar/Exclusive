import { Link } from "react-router-dom";
import SectionHeader from "./sectionHeader";
import OurProductsSlider from "./OurProductsSlider";

export default function OurProducts() {
  return (
    <div className="ourProducts mb-20 overflow-hidden">
      <div className="container">
        <SectionHeader title="Our Products" />

        <div className="text-[36px] max-md:w-40 max-sm:text-center max-sm:mx-auto mt-14 max-md:text-[28px] font-semibold">
          Explore Our Products
        </div>

        <OurProductsSlider />
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
