import { Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ResponsiveAppBar from "./appBar";

export default function Header() {
  return (
    <header>
      <Typography component="div" className="min-w-full max-md:flex-col flex max-sm:flex-row max-lg:justify-between px-5 items-center text-[#FAFAFA] relative text-end text-[14px] min-h-[48px] bg-black">
        <div className="text&link flex relative left-1/2 max-lg:left-0 max-lg:translate-x-0  translate-x-[-50%]">
          <div className="mr-2 max-md:text-sm max-sm:hidden">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <a className="ml-2 underline" href="">
            ShopNow
          </a>
        </div>

        <div className="english absolute right-0 max-lg:relative">
          <IconButton sx={{ color: "white" }}>
            <span className="text-lg">English</span>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </Typography>

      <ResponsiveAppBar />
    </header>
  );
}
