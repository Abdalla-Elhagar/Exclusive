import BestSelling from "../components/bestSellingSection";
import Categories from "../components/categories";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import OurProducts from "../components/ourProducts";
import Today from "../components/today";

export default function Home() {
  return (
    <div className="homeContainer">
      <Hero />
      <Today />
      <Categories />
      <BestSelling />
      <OurProducts />
      <Featured />
    </div>
  );
}
