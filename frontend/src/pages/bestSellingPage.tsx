import { UpdatedProducts as Products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function BestSellingPage() {
  const filteredProducts: any = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  return (
    <div className="container w-full relative">
      <h3 className="text-3xl font-semibold max-sm:text-center mt-10">
        Best Selling Products
      </h3>
      <div className="flex flex-wrap justify-center gap-5 w-full my-10">
        {filteredProducts.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
