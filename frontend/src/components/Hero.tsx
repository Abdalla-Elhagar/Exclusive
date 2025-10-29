import CategoreList from "./categoryList";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroContainer grid grid-cols-5 max-lg:grid-cols-1">
        <div className=" col-span-1 border-r-2 max-lg:hidden pt-[40px]">
          <CategoreList />
        </div>

        <HeroSlider />
      </div>
    </div>
  );
}
