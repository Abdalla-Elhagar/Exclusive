import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendSearch } from "../../slices/sendData";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const [turn, setTurn] = useState(false);
  function handleSearch() {
    dispatch(sendSearch(search));
  }
  return (
    <>
      {turn && (
        <div
          onClick={() => setTurn(false)}
          className=" fixed left-0 z-40 top-0 h-full w-full bg-black/40"
        >
          <input
            type="text"
            onClick={(e) => e.stopPropagation()}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="top-28 w-5/6 left-1/2 z-50 -translate-x-1/2 text-white bg-transparent border-white border-2 py-2 px-4 rounded-full focus:outline-none absolute"
          />
          <Link
            to="/searched"
            onClick={handleSearch}
            className="text-white z-50 absolute top-[120px] right-16"
          >
            <SearchIcon />
          </Link>
        </div>
      )}

      <Typography component="div" className="responsiveSearch block">
        <IconButton
          sx={{ color: "black", marginTop: "5px" }}
          onClick={() => setTurn(true)}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Typography>

      <div className="search relative  max-sm:hidden">
        <input
          className="bg-[#F5F5F5] py-1 pl-2 pr-5 placeholder:text-sm rounded-md focus:outline-none"
          placeholder="What are you looking for?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <Link
          aria-label="View product details"
          to="/searched"
          onClick={handleSearch}
        >
          <SearchIcon
            sx={{
              fontSize: "20px",
              position: "absolute",
              right: "5px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </Link>
      </div>
    </>
  );
}
