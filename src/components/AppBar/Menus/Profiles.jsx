import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

function Profiles() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ p: 0 }}
          aria-controls={open ? "basic-menu-profiles" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ width: 34, height: 34 }}
            alt="logo"
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-profiles",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width : 28, height : 28 , mr : 2}} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar  sx={{width : 28, height : 28 , mr : 2}}  /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profiles;
