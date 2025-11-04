import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import type { productType } from "../data/products";

export default function AllProducts() {
  const Products:productType[] = useSelector((state:any) => state.productData.data)

  return (
    <div className="container w-full relative">
      <h3 className="text-3xl font-semibold max-sm:text-center mt-10">
        All Products
      </h3>
      <div className="flex flex-wrap justify-center gap-5 w-full my-10">
        {Products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
