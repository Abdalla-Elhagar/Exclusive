import { type productType } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

export default function CategoriesPage() {
  const Products:productType[] = useSelector((state:any) => state.productData.data)
  const categoryName = useSelector((state:any) => state.sendData.categoryName)

  


  const filteredProducts: any = Products.filter(
    (p: any) => p.category.toUpperCase() == categoryName.toUpperCase()
  );

  console.log(Products)

  return (
    <div className="container w-full relative">
      <h3 className="text-3xl font-semibold max-sm:text-center mt-10">
        {categoryName} Products
      </h3>
      <div className="flex flex-wrap justify-center gap-5 w-full my-10">
        {filteredProducts.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
