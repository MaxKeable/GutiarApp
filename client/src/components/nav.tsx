import { Box, Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Logo from "../assets/guitarlogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Nav = (props: { setIsSidePodOpen: Function }) => {
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box ml={5} mt={4}>
          <img
            src={Logo}
            alt="logo"
            style={{ height: "80px", width: "auto" }}
          />
        </Box>
        {!isMediumScreen ? (
          <Box display="flex" alignItems="center" mr={5}>
            <Button variant="text" href="/">
              Home
            </Button>
            <Button variant="text" href="/about">
              About
            </Button>
            <Button variant="text" href="/login">
              Logout
            </Button>
            <Button onClick={() => props.setIsSidePodOpen(true)}>
              <AccountCircleIcon sx={{ fontSize: "4em", color: "#fff" }} />{" "}
            </Button>
          </Box>
        ) : (
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <MenuIcon sx={{ fontSize: "2.2em" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}>
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}>
                  Logout
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  props.setIsSidePodOpen(true);
                }}>
                Profile
              </MenuItem>
            </Menu>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Nav;
