import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Nav({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: any;
}) {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Cantact", path: "/concat" },
    { name: "About", path: "/about" },
  ];

  return (
    <Typography className="pages flex gap-10" component="div">
      {pages.map((page, index) => (
        <Typography
          key={index}
          className={`block h-fit PageButton ${
            activePage === page.path ? "active" : ""
          }`}
          sx={{ p: 0 }}
          variant="button"
          component="button"
          onClick={() => setActivePage(page.path)}
        >
          <Link className="block py-2" to={page.path}>
            {page.name}
          </Link>
        </Typography>
      ))}
    </Typography>
  );
}
