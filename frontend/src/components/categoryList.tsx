import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";
import { categories } from "../slices/sendData";
import { useDispatch } from "react-redux";

export default function CategoreList() {
  const dispatch = useDispatch();
  const categoryListData = [
    {
      primary: "Phones",
    },

    {
      primary: "Audio",
    },

    {
      primary: "TV",
    },

    {
      primary: "Gaming",
    },

    {
      primary: "Appliances",
    },

    {
      primary: "Laptops",
    },
  ];

  const handleSendCategories = (data: string) => {
    dispatch(categories(data));
  };
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {categoryListData.map((i, index) => (
          <ListItemButton key={index}>
            <Link
              onClick={() => handleSendCategories(i.primary)}
              className="w-full"
              to={"/categories"}
            >
              <ListItemText primary={i.primary} />
            </Link>
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
