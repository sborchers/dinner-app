import React from "react";
import { AppBar, IconButton, Menu, MenuItem } from "@mui/material";
import { ReactComponent as Moon } from "../../icons/moon.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = () => {
    toggleDarkMode();
  };
  const handleOpen = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "purple",
          flexDirection: "row",
          padding: "0px 10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>What's for Dinner?</h1>
        <MenuItem>Ingredients</MenuItem>
        <MenuItem>Ideas</MenuItem>
        <MenuItem onClick={handleOpen}>Projects</MenuItem>
        <IconButton onClick={handleClick}>
          {darkMode ? <Sun /> : <Moon />}
        </IconButton>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>Software</MenuItem>
        <MenuItem>Built Environment</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
