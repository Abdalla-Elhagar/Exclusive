import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favorite({ favoriteItems }: { favoriteItems: any }) {
  return (
    <IconButton sx={{ ml: "15px", position: "relative" }} aria-label="favorit">
      <Link aria-label="View product details" to="/favorite">
        <FavoriteBorderIcon sx={{ color: "black" }} />
      </Link>
      {favoriteItems != undefined && favoriteItems.length > 0 && (
        <div className="pointer-events-none size-4 rounded-full top-3 left-[20px] text-xs text-white absolute bg-mainColor">
          {favoriteItems.length}
        </div>
      )}
    </IconButton>
  );
}
