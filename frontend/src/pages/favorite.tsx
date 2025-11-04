import { Link } from "react-router-dom";
import SectionHeader from "../components/sectionHeader";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import type { productType } from "../data/products";

export default function Favorite() {
  const Products: productType[] = useSelector(
    (state: any) => state.productData.data
  );

  const user: any = useSelector(
    (state: any) => state.SelectedUser.selectedData
  );

  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);

  return (
    <section className=" my-20 relative">
      <div className="container">
        <div className="JustForYou">
          <div className="titleAndViewAll flex mt-6 justify-between gap-5 max-sm:text-center w-full flex-wrap">
            <h2 className="text-3xl">Wishlist ({user.favorite.length})</h2>
            <Link
              to="/bestSelling"
              className="bg-transparent max-sm:mx-auto rounded-md text-black border-2 hover:bg-mainColor hover:text-white hover:border-mainColor transition-all duration-300 border-black/50 px-10 py-3"
            >
              View All
            </Link>
          </div>

          <div className="bestProducts4 flex mt-16 justify-center flex-wrap gap-8">
            {user.favorite.map((product: any) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>

        <div className="JustForYou">
          <div className="titleAndViewAll flex mt-6 justify-between gap-5 max-sm:text-center w-full flex-wrap">
            <SectionHeader title="Just For You" />
            <Link
              to="/bestSelling"
              className="bg-transparent max-sm:mx-auto rounded-md text-black border-2 hover:bg-mainColor hover:text-white hover:border-mainColor transition-all duration-300 border-black/50 px-10 py-3"
            >
              View All
            </Link>
          </div>

          <div className="bestProducts4 flex mt-16 justify-center flex-wrap gap-8">
            {first4Products.map((product: any) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
