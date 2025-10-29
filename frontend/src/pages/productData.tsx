import StarIcon from "@mui/icons-material/Star";
import { MdFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import SectionHeader from "../components/sectionHeader";
import { UpdatedProducts as Products } from "../data/products";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { sUser } from "../slices/selectedUser";
import { addToCartAction, myFavoriteIDs } from "../slices/saveNewUser";
import { useDispatch, useSelector } from "react-redux";
import { product1 } from "../slices/productData";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





export default function ProductData() {
const dispatch = useDispatch();
  function sendDataToProductPage(myProduct: any) {
    dispatch(product1(myProduct));
  }
  const myUsers = useSelector((state: any) => state.ArrayOfUsers.data);
  const user = useSelector((state: any) => state.SelectedUser.selectedData);
  const usersWithOutSelectedUser = myUsers.filter(
    (Fuser: any) => Fuser.phone != user.phone
  );

  const [, setFavoritesState] = useState(() => {
    const storedFavorites = localStorage.getItem("selectedUser");
    return storedFavorites
      ? JSON.parse(storedFavorites)
      : {
          name: "",
          phone: "",
          password: "",
          cart: [],
          favorite: [],
          favoriteIDs: [],
        };});

  function addToFavorite(myProduct: any, id: any) {
      const storedUser = localStorage.getItem("selectedUser");
      if (!storedUser) {
        toast.error("Please log in to add products to favorites!");
        return;
      }
    
      setFavoritesState((prev: any) => {
        const isProductInFavorites = prev.favorite.some(
          (product: any) => product.id === myProduct.id
        );
    
        const updatedProducts = isProductInFavorites
          ? prev.favorite.filter((product: any) => product.id !== myProduct.id)
          : [...prev.favorite, myProduct];
    
        const updatedIDs = isProductInFavorites
          ? prev.favoriteIDs.filter((clickedId: string) => clickedId !== id)
          : [...prev.favoriteIDs, id];
    
        const updatedUser = {
          ...user,
          favorite: updatedProducts,
          favoriteIDs: updatedIDs,
        };
    
        const updatedUsersArray = [...usersWithOutSelectedUser, updatedUser];
        dispatch(sUser(updatedUser));
        dispatch(myFavoriteIDs(updatedUsersArray));
        if (isProductInFavorites) {
          toast.info("Product removed from favorites!");
        } else {
          toast.success("Product added to favorites!");
        }
        return {
          name: user.name,
          phone: user.phone,
          password: user.password,
          cart: user.cart,
          favorite: updatedProducts,
          favoriteIDs: updatedIDs,
        };
      });
    }
    const [, setAddToCartState] = useState(() => {
      const storedFavorites = localStorage.getItem("selectedUser");
      return storedFavorites
        ? JSON.parse(storedFavorites)
        : {
            name: "",
            phone: "",
            password: "",
            cart: [],
            favorite: [],
            favoriteIDs: [],
          };});
    
  function addToCart(myProduct: any) {
    const storedUser = localStorage.getItem("selectedUser");
      if (!storedUser) {
        toast.error("Please log in to add products to the cart!");
        return;
      }
    setAddToCartState((prev: any) => {
      prev.cart = Array.isArray(prev.cart) ? prev.cart : [];
      const isProductInCart: any = prev.cart.some(
        (product: any) => product.id === myProduct.id
      );
  
      const updatedProducts: any = isProductInCart
        ? prev.cart
        : [...prev.cart, myProduct];
  
      const updatedUser: any = {
        ...user,
        cart: updatedProducts,
      };
  
      const updatedUsersArray: any = [...usersWithOutSelectedUser, updatedUser];
      dispatch(sUser(updatedUser));
      dispatch(addToCartAction(updatedUsersArray));
      if (isProductInCart) {
        toast.info("Product is already in the cart!");
      } else {
        toast.success("Product added to the cart!");
      }
      return {
        name: user.name,
        phone: user.phone,
        password: user.password,
        cart: updatedProducts,
        favorite: user.favorite,
        favoriteIDs: user.favoriteIDs,
      };
    });}
  
  const theProduct = useSelector((state: any) => state.productData.data);
  const [count, setCount] = useState(1);
  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);
  
  return (
    <section className="ProductData relative">
      <div className="container">
        <div className="my-20 text-black/20 gap-2 flex">
          <p>Account </p>
          <p>/</p>
          <p className="text-black w-[300px] line-clamp-1 overflow-hidden">
            {theProduct.title}
          </p>
        </div>
        <div className="content grid max-lg:grid-cols-1 gap-10 mb-20 grid-cols-2">
          <img className="col-span-1" src={theProduct.image} alt="productImage" />
          <div className="productDetails col-span-1 justify-center flex flex-col gap-5">
            <h3 className="name w-[300px] line-clamp-1 overflow-hidden text-2xl font-semibold">
              {theProduct.title}
            </h3>
            <div className="rate">
              {Array(theProduct.rate)
                .fill(null)
                .map((_, index: number) => (
                  <StarIcon key={index} sx={{ color: "#FFAD33" }} />
                ))}
              {5 - theProduct.rate <= 0
                ? null
                : Array(5 - theProduct.rate)
                    .fill(null)
                    .map((_, index: number) => (
                      <StarIcon key={index} sx={{ color: "#999" }} />
                    ))}
              <span className="sales ml-6 text-[#999] font-semibold">
                ({theProduct.sales})
              </span>
              <span className="text-[#999] px-2">|</span>
              <span className="text-[#00FF66]/50">In Stock</span>
            </div>
            <div className="price text-2xl">${theProduct.price}.00</div>
            <div className="description border-b-2 pb-10">{theProduct.title}</div>
            <div className="count-buy max-sm:flex-wrap max-sm:items-center max-sm:justify-center flex gap-5 justify-between items-center">
              <div className="count h-14 w-52 flex justify-between items-center gap-x-5 border-2 border-black/40  rounded-md">
                <button
                  className="text-2xl size-full border-black/40 hover:bg-mainColor hover:text-white border-r-2"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <p className="w-48 text-center">{count}</p>

                <button
                  className="text-2xl size-full border-black/40 hover:bg-mainColor hover:text-white border-l-2"
                  onClick={() => (count > 1 ? setCount(count - 1) : null)}
                >
                  -
                </button>
              </div>
              <button onClick={()=>addToCart(theProduct)} className="py-4 h-14 max-sm:w-3/4 w-56 self-end bg-mainColor text-white rounded-md">
                Buy Now
              </button>
              <button className={`${
                user.favoriteIDs?.includes(theProduct.id) ? "bg-mainColor" : ""
              }`}
              onClick={() => {
                addToFavorite(theProduct, theProduct.id);
              }}>
                <MdFavoriteBorder className={`${
                  user.favoriteIDs?.includes(theProduct.id) ? "text-white" : ""
                } size-14 border-2 border-black/60 p-3 rounded-md`} />
              </button>
            </div>
            <div className="border border-black/40">
              <div className="top p-6 border-b border-black/40 flex gap-5 items-center pb-6">
                <div className="icon">
                  <TbTruckDelivery className="size-10" />
                </div>
                <div className="text">
                  <h4 className="text-lg font-semibold">Free Delivery</h4>
                  <p className="underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="bottom p-6 flex gap-5 items-center pt-6">
                <div className="icon">
                  <TfiReload className="size-10" />
                </div>
                <div className="text">
                  <h4 className="text-lg font-semibold">Return Delivery</h4>
                  <p className="underline">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="JustForYou mb-20">
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
              <Card
              key={product.id}
              className="group mx-auto"
              sx={{ maxWidth: 320 }}
            >
              <div
                className={`image w-full h-[300px] relative bg-[#F5F5F5] overflow-hidden rounded-md`}
              >
                <button
                  onClick={() => {
                    addToFavorite(product, product.id);
                  }}
                  className={`absolute ${
                    user.favoriteIDs?.includes(product.id) ? "bg-mainColor" : ""
                  } hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]`}
                >
                  <FavoriteBorderIcon
                    className={`${
                      user.favoriteIDs?.includes(product.id) ? "text-white" : ""
                    }`}
                  />
                </button>
                <Link
                  onClick={() => sendDataToProductPage(product)}
                  to="/productData"
                  className="absolute hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-1 right-5 top-16 bg-[#eee]"
                >
                  <RemoveRedEyeOutlinedIcon />
                </Link>
                {product.discount ? (
                  <div className="absolute bg-mainColor text-white px-5 py-1 top-3 rounded-md left-4">
                    -{product.discount}%
                  </div>
                ) : null}
    
                <button onClick={()=>addToCart(product)} className="addToCart absolute text-white bg-black w-full h-12 transition-all duration-300 -bottom-12 group-hover:bottom-0 left-0">
                  Add To Cart
                </button>
                <img
                  className="bg-[#F5F5F5] w-full h-full"
                  src={product.image}
                  alt="product image"
                />
              </div>
    
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{fontSize: "25px" , height: "48px", paddingY: "10px", overflow: "hidden" }}
                  component="div"
                >
                  {product.title}
                </Typography>
    
                {product.discount ? (
                  <Typography className=" block" gutterBottom component="div">
                    <span className="mr-10 text-mainColor">
                      $
                      {Math.floor(
                        product.price - (product.discount / 100) * product.price
                      )}
                    </span>
                    <span className=" line-through text-[#666]">
                      ${product.price}
                    </span>
                  </Typography>
                ) : (
                  <Typography className=" block" gutterBottom component="div">
                    <span>${product.price}</span>
                  </Typography>
                )}
    
                <div className="rate">
                  {Array(product.rate)
                    .fill(null)
                    .map((_, index: number) => (
                      <StarIcon key={index} sx={{ color: "#FFAD33" }} />
                    ))}
                  {5 - product.rate <= 0
                    ? null
                    : Array(5 - product.rate)
                        .fill(null)
                        .map((_, index: number) => (
                          <StarIcon key={index} sx={{ color: "#999" }} />
                        ))}
                  <span className="sales ml-6 text-[#999] font-semibold">
                    ({product.sales})
                  </span>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
