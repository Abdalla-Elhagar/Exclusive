import { Link } from "react-router-dom";
import SectionHeader from "../components/sectionHeader";
import { UpdatedProducts as Products } from "../data/products";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { product1 } from "../slices/productData";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateFavorites } from "../slices/selectedUser";
import { sUser } from "../slices/selectedUser";
import { addToCartAction, myFavoriteIDs } from "../slices/saveNewUser";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Favorite() {
  const user: any = useSelector(
    (state: any) => state.SelectedUser.selectedData
  );

  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);
  const dispach = useDispatch();
  function sendDataToProductPage(myProduct: any) {
    dispach(product1(myProduct));
  }
  function removeFavorite(myProduct: any) {
    const myUser = {
      name: user.name,
      phone: user.phone,
      password: user.password,
      cart: user.cart,
      favorite: [],
      favoriteIDs: [],
    };

    myUser.favorite = user.favorite.filter(
      (ele: any) => ele.id != myProduct.id
    );
    myUser.favoriteIDs = user.favoriteIDs.filter(
      (ele: any) => ele != myProduct.id
    );

    dispach(updateFavorites(myUser));
  }
  const dispatch = useDispatch();
  
  const myUsers = useSelector((state: any) => state.ArrayOfUsers.data);
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
        };
  });


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
    });
  }
  
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
              <Card
                key={product.id}
                className="group mx-auto"
                sx={{ maxWidth: 320 }}
              >
                <div className="image w-full h-[300px] relative bg-[#F5F5F5] overflow-hidden rounded-md">
                  <button
                    onClick={() => removeFavorite(product)}
                    className="absolute flex justify-center items-center hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]"
                  >
                    <RiDeleteBin6Line className="size-5" />
                  </button>

                  {product.discount ? (
                    <div className="absolute bg-mainColor text-white px-5 py-1 top-3 rounded-md left-4">
                      -{product.discount}%
                    </div>
                  ) : null}

                  <button onClick={()=>addToCart(product)} className="addToCart absolute text-white bg-black w-full h-12 transition-all duration-300 bottom-0 left-0">
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
                    sx={{
                      fontSize: "25px" ,
                      height: "48px",
                      paddingY: "10px",
                      overflow: "hidden",
                    }}
                    component="h6"
                  >
                    {product.title}
                  </Typography>

                  {product.discount ? (
                    <Typography className=" block" gutterBottom component="div">
                      <span className="mr-10 text-mainColor">
                        $
                        {Math.floor(
                          product.price -
                            (product.discount / 100) * product.price
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
