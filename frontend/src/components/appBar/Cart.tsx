import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

export default function Cart({ cartItems }: { cartItems: any }) {
  return (
    <IconButton aria-label="cart">
      <Link to="/cart">
        <ShoppingCartOutlinedIcon
          sx={{ color: "black", position: "relative" }}
        />
      </Link>
      {cartItems != undefined && cartItems.length > 0 && (
        <div className="pointer-events-none size-4 rounded-full top-3 left-[20px] text-xs text-white absolute bg-mainColor">
          {cartItems.length}
        </div>
      )}
    </IconButton>
  );
}
