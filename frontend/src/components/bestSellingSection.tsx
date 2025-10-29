import { Link } from "react-router-dom";
import SectionHeader from "./sectionHeader";
import { UpdatedProducts as Products } from "../data/products";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState, useEffect } from "react";
import Image from "../images/homeImages/JBL.png";
import { sUser } from "../slices/selectedUser";
import { addToCartAction, myFavoriteIDs } from "../slices/saveNewUser";
import { useDispatch, useSelector } from "react-redux";
import { product1 } from "../slices/productData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function BestSelling() {
  const [time, setTime] = useState(
    1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 23 + 1000 * 60 * 19 + 1000 * 56
  );
  const [running,_] = useState(true);

  useEffect(() => {
    let timer: any;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1000, 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (unit: any) => String(unit).padStart(2, "0");
  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);

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
          };
    });
    
    
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
    <section className="BestSelling my-20 relative">
      <div className="container">
        <SectionHeader title="This Month" />
        <div className="titleAndViewAll flex mt-6 justify-between gap-5 max-sm:text-center w-full flex-wrap">
          <h2 className="text-4xl font-semibold max-sm:text-2xl max-sm:mx-auto">
            Best Selling Products
          </h2>
          <Link
            to="/bestSelling"
            className="bg-mainColor max-sm:mx-auto rounded-md text-white px-8 py-3"
          >
            View All
          </Link>
        </div>
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

      <div className="musicProduct px-12 max-md:gap-20 py-20 flex justify-between items-center font-semibold w-10/12 max-md:flex-col text-white bg-black mx-auto mt-32">
        <div className="left">
          <h4 className="title text-[#00FF66]">Categories</h4>
          <h2 className="text-5xl w-[380px] max-xl:w-auto max-lg:text-2xl max-xl:text-3xl max-md:text-center mt-8">
            Enhance Your Music Experience
          </h2>
          <div className="bestProductCountDown flex gap-5 my-10 max-md:justify-center">
            <div className="text-center size-16 max-lg:size-12 rounded-full bg-[#fff]">
              <span className="block text-center max-lg:text-[16px] mt-1 text-black text-[20px] font-bold">
                {formatTime(Math.floor(time / (60 * 60 * 24 * 1000)))}{" "}
                <span className="text-mainColor"></span>
              </span>
              <span className="block text-[12px] max-lg:text-[9px] text-center text-gray-500">
                Days
              </span>
            </div>
            <div className="text-center size-16 max-lg:size-12 rounded-full bg-[#fff]">
              <span className="block text-center max-lg:text-[16px] mt-1 text-black text-[20px] font-bold">
                {formatTime(Math.floor((time / (60 * 60 * 1000)) % 24))}{" "}
                <span className="text-mainColor"></span>
              </span>
              <span className="block text-[12px] max-lg:text-[9px] text-center text-gray-500">
                Hours
              </span>
            </div>
            <div className="text-center size-16 max-lg:size-12 rounded-full bg-[#fff]">
              <span className="block text-center max-lg:text-[16px] mt-1 text-black text-[20px] font-bold">
                {formatTime(Math.floor((time / (60 * 1000)) % 60))}{" "}
                <span className="text-mainColor"></span>
              </span>
              <span className="block text-[12px] max-lg:text-[9px] text-center text-gray-500">
                Minutes
              </span>
            </div>
            <div className="text-center size-16 max-lg:size-12 rounded-full bg-[#fff]">
              <span className="block text-center max-lg:text-[16px] mt-1 text-black text-[20px] font-bold">
                {formatTime(Math.floor((time / 1000) % 60))}
              </span>
              <span className="block text-[12px] max-lg:text-[9px] text-center text-gray-500">
                Seconds
              </span>
            </div>
          </div>
          <button className="bg-[#00FF66] block max-lg:text-sm max-md:mx-auto text-white max-lg:px-4 max-lg-py-2 px-8 py-3 rounded-md">
            Buy Now!
          </button>
        </div>
        <div className="right">
          <img className="JBLImage" src={Image} alt="JBLImage" />
        </div>
      </div>
    </section>
  );
}
