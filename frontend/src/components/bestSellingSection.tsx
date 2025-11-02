import { Link } from "react-router-dom";
import SectionHeader from "./sectionHeader";
import { UpdatedProducts as Products } from "../data/products";

import Image from "../images/homeImages/JBL.png";

import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./productCard";
import Timer from "./timer";

export default function BestSelling() {
  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);

  return (
    <section className="BestSelling my-20 relative">
      <div className="container">
        <SectionHeader title="This Month" />
        <div className="titleAndViewAll flex mt-6 justify-between gap-5 max-sm:text-center w-full flex-wrap">
          <h2 className="text-4xl font-semibold max-sm:text-2xl max-sm:mx-auto">
            Best Selling Products
          </h2>
          <Link
            to="/bestSelling"
            className="bg-mainColor max-sm:mx-auto rounded-md text-white px-8 py-3"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="bestProducts4 flex mt-16 justify-center flex-wrap gap-8">
        {first4Products.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>

      <div className="musicProduct px-12 max-md:gap-20 py-20 flex justify-between items-center font-semibold w-10/12 max-md:flex-col text-white bg-black mx-auto mt-32">
        <div className="left">
          <h4 className="title text-[#00FF66]">Categories</h4>
          <h2 className="text-5xl w-[380px] max-xl:w-auto max-lg:text-2xl max-xl:text-3xl max-md:text-center mt-8">
            Enhance Your Music Experience
          </h2>
          <Timer />
          <button className="bg-[#00FF66] block max-lg:text-sm max-md:mx-auto text-white max-lg:px-4 max-lg-py-2 px-8 py-3 rounded-md">
            Buy Now!
          </button>
        </div>
        <div className="right">
          <img className="JBLImage" src={Image} alt="JBLImage" />
        </div>
      </div>
    </section>
  );
}
