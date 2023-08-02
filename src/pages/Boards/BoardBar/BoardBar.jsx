import { Box, Button, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Chip from "@mui/material/Chip";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { capitalizeFirstLetter } from "~/utils/formatters";
const MENU_STYLE = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
    borderRadius: 12,
  },
};

function BoardBar({board}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        paddingX: 2,
        // overflowY : 'hidden'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          // onClick = {() =>{
          // }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          // onClick = {() =>{
          // }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          // onClick = {() =>{
          // }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          // onClick = {() =>{
          // }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          // onClick = {() =>{
          // }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#a4b0be",
              },
            },
          }}
        >
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="saka">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/361920111_811668123663977_2399551102193760925_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1Z_mY_GeUHIAX-tb5at&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAjQg9fytuvuTBAkp1imqKGfj4TJSQAk22ZCLBGtj846w&oe=64BFFE85"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
          <Tooltip title="sydeptrai">
            <Avatar
              alt="sydeptrai"
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/359506207_4014407578785736_6924087668652577536_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D0U1ruo2unQAX8uvDEx&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBH_N6OFb1ZNQYFiVyyaFVxRcVnpZjXgCvIR-jiOMSj6Q&oe=64BD6FBA"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
