import { Box, Button } from "@mui/material";
import Logo from "../assets/guitarlogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nav = (props: { setIsSidePodOpen: Function }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box ml={5} mt={4}>
        <img src={Logo} style={{ height: "80px", width: "auto" }} />
      </Box>
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
    </Box>
  );
};

export default Nav;
