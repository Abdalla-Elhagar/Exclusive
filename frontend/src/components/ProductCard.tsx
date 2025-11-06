import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { productType } from "../Types/products";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { userCart, userFavorite } from "../slices/productData";
import { useEffect, useState } from "react";
import { sendProductToProductPage } from "../slices/sendData";
import { API } from "./getCartData";
;

export default function ProductCard({ product }: { product: productType }) {
  const dispatch = useDispatch();
  function sendDataToProductPage(myProduct: productType) {
    dispatch(sendProductToProductPage(myProduct));
  }
  const InitialFavorites = useSelector(
    (state: any) => state.productData.favorite
  );
  const [favorites, setFavorite] = useState<{ products: string[] }>({
    products: [],
  });

  useEffect(() => {
    if (InitialFavorites && InitialFavorites.products) {
      setFavorite(InitialFavorites);
    }
  }, [InitialFavorites]);

  const removeFavorite = async (id: string) => {
    try {
      const res = await fetch(API + "/favorite/delete-from-favorites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id }),
        credentials: "include",
      });

      const data = await res.json();
      setFavorite(data);
      dispatch(userFavorite(data));

      toast.success("Product has been removed from favorites");
    } catch (err) {
      console.error(err);
    }
  };

  const addToFavorite = async (id: string) => {
    try {
      const res = await fetch(API + "/favorite/add-to-favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id }),
        credentials: "include",
      });

      const data = await res.json();
      setFavorite(data);
      dispatch(userFavorite(data));

      toast.success("Product has been added to favorites");
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (id: string) => {
    try {
      const res = await fetch(API + "/cart/add-cart-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id, quantity: 1 }),
        credentials: "include",
      });

      if (!res.ok) {
        toast.info("Product is already in the cart!");
      } else {
        toast.success("Product has been added to the cart!");
      }

      const data = await res.json();
      dispatch(userCart(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="group mx-auto relative" sx={{ maxWidth: 300 }}>
      <div
        className={`image w-full h-[260px] top-0 relative bg-[#F5F5F5] overflow-hidden rounded-md`}
      >
        
        { favorites.products?.includes(product._id) ? (
          <button
            onClick={() => {
              removeFavorite(product._id);
            }}
            className={`absolute z-20 ${
              favorites.products?.includes(product._id) ? "bg-mainColor" : ""
            } hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]`}
          >
            <FavoriteBorderIcon
              className={` ${
                favorites.products?.includes(product._id) ? "text-white" : ""
              }`}
            />
          </button>
        ) : (
          <button
            onClick={() => {
              addToFavorite(product._id);
            }}
            className={`absolute z-20 ${
              favorites.products?.includes(product._id) ? "bg-mainColor" : ""
            } hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-[3px] right-5 top-5 bg-[#eee]`}
          >
            <FavoriteBorderIcon
              className={` ${
                favorites.products?.includes(product._id) ? "text-white" : ""
              }`}
            />
          </button>
        )}
        <Link
          onClick={() => sendDataToProductPage(product)}
          to="/productData"
          className="absolute z-20 hover:text-mainColor text-center rounded-full w-9 h-9 transition-all duration-300 p-1 right-5 top-16 bg-[#eee]"
        >
          <RemoveRedEyeOutlinedIcon />
        </Link>
        {product.discount ? (
          <div className="absolute bg-mainColor text-white px-5 py-1 top-3 rounded-md left-4">
            -{product.discount}%
          </div>
        ) : null}
        <button
          onClick={() => addToCart(product._id)}
          className="addToCart z-10 absolute text-white bg-black w-full h-12 transition-all duration-300 -bottom-12 group-hover:bottom-0 left-0"
        >
          Add To Cart
        </button>
        <LazyLoadImage
          className="bg-[#F5F5F5] w-full h-full"
          src={product.image}
          effect="blur"
          alt="product image"
        />
      </div>

      <CardContent>
        <Typography
          gutterBottom
          sx={{
            fontSize: "25px",
            height: "48px",
            paddingY: "10px",
            overflow: "hidden",
          }}
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
            <span className=" line-through text-[#666]">${product.price}</span>
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
  );
}
