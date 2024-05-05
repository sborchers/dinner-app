import React from "react";
import { AppBar, IconButton, Menu, MenuItem } from "@mui/material";
import { ReactComponent as Moon } from "../../icons/moon.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";
import { PageSection } from "../Navigation";

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: darkMode ? "purple" : "orangered",
          flexDirection: "row",
          padding: "0px 10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Hey There!</h1>
        <MenuItem onClick={() => scrollToSection(PageSection.About)}>
          About
        </MenuItem>
        <MenuItem onClick={() => scrollToSection(PageSection.Skills)}>
          Skills
        </MenuItem>
        <MenuItem onClick={handleOpen}>Projects</MenuItem>
        <IconButton onClick={handleClick}>
          {darkMode ? <Sun /> : <Moon />}
        </IconButton>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => scrollToSection(PageSection.Software)}>
          Software
        </MenuItem>
        <MenuItem onClick={() => scrollToSection(PageSection.Built)}>
          Built Environment
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
