import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileNav({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: any;
}) {
  const pages = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "Cantact", path: "/concat", icon: <LocalPhoneIcon /> },
    { title: "About", path: "/about", icon: <InfoIcon /> },
  ];

  return (
    <Typography
      component="div"
      className="bg-white z-50 max-sm:rounded-none hidden max-lg:flex justify-between px-5 py-2 rounded-lg max-sm:w-full max-sm:left-0 max-sm:translate-x-0 w-1/2 shadow-lg shadow-slate-600 fixed bottom-[-5px] border left-1/2 translate-x-[-50%]"
    >
      {pages.map((i, index) => (
        <IconButton
          onClick={() => {
            setActivePage(i.path);
          }}
          className={`size-14 RPageButton ${
            activePage === i.path ? "active" : ""
          }`}
          key={index}
          aria-label={i.title}
        >
          <Link className="size-full" to={i.path}>
            {i.icon}
          </Link>
        </IconButton>
      ))}
    </Typography>
  );
}
