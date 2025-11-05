import { Link } from "react-router-dom";
import SectionHeader from "../components/sectionHeader";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import type { productType } from "../Types/products";
import type { favoriteTypes } from "../Types/favorite";

export default function Favorite() {
  const favoriteData: favoriteTypes = useSelector(
    (state: any) => state.productData.favorite
  );
  const Products: productType[] = useSelector(
    (state: any) => state.productData.data
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
            <h2 className="text-3xl">
              Wishlist ({favoriteData.products.length})
            </h2>
            <Link
              to="/bestSelling"
              className="bg-transparent max-sm:mx-auto rounded-md text-black border-2 hover:bg-mainColor hover:text-white hover:border-mainColor transition-all duration-300 border-black/50 px-10 py-3"
            >
              View All
            </Link>
          </div>

          <div className="flex mt-16 justify-center flex-wrap gap-8">
            {favoriteData.products.map((product: string) => {
              const productData = Products.find(
                (p) => p._id.toString() === product.toString()
              );
              if (productData)
                return (
                  <ProductCard key={productData._id} product={productData} />
                );
            })}
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
            {first4Products.map((product: productType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
