import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

export default function CategoreList() {
  const categoryListData = [
    {
      path: "/phones",
      primary: "Phones",
    },

    {
      path: "/audio",
      primary: "Audio",
    },

    {
      path: "/TV",
      primary: "TV",
    },

    {
      path: "/Gaming",
      primary: "Gaming",
    },

    {
      path: "/appliances",
      primary: "Appliances",
    },

    {
      path: "/laptops",
      primary: "Laptops",
    },
  ];

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {categoryListData.map((i, index) => (
          <ListItemButton key={index}>
            <Link className="w-full" to={i.path}>
              <ListItemText primary={i.primary} />
            </Link>
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
