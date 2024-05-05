import React from "react";
import { AppBar } from "@mui/material";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <AppBar position="static">
        <h1>What's for Dinner?</h1>
      </AppBar>
    </>
  );
};

export default Header;
