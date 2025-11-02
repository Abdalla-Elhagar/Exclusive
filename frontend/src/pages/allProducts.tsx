import { UpdatedProducts as Products } from "../data/products";
import ProductCard from "../components/productCard";

export default function AllProducts() {
  return (
    <div className="container w-full relative">
      <h3 className="text-3xl font-semibold max-sm:text-center mt-10">
        All Products
      </h3>
      <div className="flex flex-wrap justify-center gap-5 w-full my-10">
        {Products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
