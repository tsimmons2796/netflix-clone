import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListIcon from "@mui/icons-material/List";
import MoviesIcon from "@mui/icons-material/Movie";
import TvShowIcon from "@mui/icons-material/Tv";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const NavSidebar = () => {
  const [open, setOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? "240px" : "64px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? "240px" : "64px",
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem button onClick={() => setOpen(!open)}>
          <ListItemText primary={open ? "Collapse" : "Expand"} />
        </ListItem>
        <TextField
          fullWidth
          placeholder="Search Movies..."
          value={searchValue}
          onChange={handleSearchChange}
          sx={{ margin: "10px" }}
        />
        <ListItem button>
          <ListItemIcon>
            <MoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TvShowIcon />
          </ListItemIcon>
          <ListItemText primary="TV Show" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Recently Added" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="My List" />
        </ListItem>
      </List>
    </Drawer>
  );
};
