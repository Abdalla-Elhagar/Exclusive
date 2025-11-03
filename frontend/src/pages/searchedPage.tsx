import { UpdatedProducts as Products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const searchedName = useSelector((state: any) => state.sendData.searchName);
  const filteredProducts: any = Products.filter(
    (p: any) =>
      p.title && p.title.toLowerCase().includes(searchedName.toLowerCase())
  );

  return (
    <div className="container w-full relative">
      <h3 className="text-3xl font-semibold max-sm:text-center mt-10">
        {searchedName}
      </h3>
      <div className="flex flex-wrap justify-center gap-5 w-full my-10">
        {filteredProducts.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
