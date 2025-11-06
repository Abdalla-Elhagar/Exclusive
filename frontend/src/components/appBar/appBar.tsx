import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./appBar.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Search from "./Search";
import Favorite from "./Favorite";
import Cart from "./Cart";
import UserMenu from "./UserMenu";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function MenuAppBar() {
  const [activePage, setActivePage] = useState("/");

  const cart = useSelector((state: any) => state.productData.cart);

  const favoriteData = useSelector((state: any) => state.productData.favorite);

  const logedInUser = useSelector((state: any) => state.SelectedUser.data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appBar"
        position="relative"
        sx={{ backgroundColor: "transparent", color: "black" }}
      >
        <div className="container">
          <Toolbar className="relative flex justify-between items-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Exclusive"
              sx={{ mx: 2, fontWeight: 700, p: 0 }}
            >
              <Link aria-label="View product details" to="/">
                Exclusive
              </Link>
            </IconButton>

            <Nav activePage={activePage} setActivePage={setActivePage} />

            <MobileNav activePage={activePage} setActivePage={setActivePage} />

            <Typography className="flex items-center" component="div">
              <Search />

              {logedInUser ? (
                <>
                  <Favorite favoriteItems={favoriteData.products} />

                  <Cart cartItems={cart.items} />

                  <UserMenu />
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="text-xl ml-5 px-3 rounded-md py-2 bg-mainColor text-white"
                  >
                    <RiUserAddLine />
                  </Link>

                  <Link
                    to="/login"
                    className="text-xl ml-2 px-3 rounded-md py-2 bg-mainColor text-white"
                  >
                    <MdLogin />
                  </Link>
                </>
              )}
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
