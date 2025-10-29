import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

export default function CategoreList() {
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <Link className="w-full" to="/phones">
            <ListItemText primary="Phones" />
          </Link>
        </ListItemButton>

        <ListItemButton>
          <Link className="w-full"  to="/audio">
            <ListItemText primary="Audio" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link className="w-full"  to="/TV">
            <ListItemText primary="TV" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link className="w-full"  to="/Gaming">
            <ListItemText primary="Gaming" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link className="w-full"  to="/appliances">
            <ListItemText primary="Appliances" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link className="w-full"  to="/laptops">
            <ListItemText primary="Laptops" />
          </Link>
        </ListItemButton>
      </List>
    </>
  );
}
