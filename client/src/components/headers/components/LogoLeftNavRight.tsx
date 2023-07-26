import {
	Box,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	useMediaQuery
  } from "@mui/material";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import MenuIcon from "@mui/icons-material/Menu";
  import Logo from "../../../assets/guitarlogo.svg";
  
  interface INavLinks {
	name: string;
	path: string;
  }
  
  interface LogoLeftNavRightProps {
	logo: any; // Pass in the image to be displayed
	navLinks: INavLinks[];
	onlyMenuIcon?: boolean;
  }
  
  const LogoLeftNavRight = (props: LogoLeftNavRightProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const smallScreen = useMediaQuery("(max-width:600px)");
  
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};
  
	return (
	  <Grid container alignItems="center">
		<Grid
		  item
		  xs={4}
		  md={2}
		  sx={{
			display: "flex",
			justifyContent: smallScreen ? "center" : "flex-start",
			flexWrap: smallScreen ? "nowrap" : "wrap",
		  }}
		>
		  <img
			src={props.logo}
			alt="Logo"
			style={{
			  width: "auto",
			  height: "60px",
			  padding: "10px",
			  marginLeft: "10px",
			  marginTop: "10px"
			}}
		  />
		</Grid>
		<Grid
		  item
		  xs={8}
		  md={10}
		  sx={{
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center"
		  }}
		>
		  {!props.onlyMenuIcon ? (
			<Box sx={{ width: "100%" }}>
			  <Box
				sx={{
				  display: { xs: "none", md: "flex" },
				  justifyContent: "flex-end",
				  width: "100%"
				}}
			  >
				{props.navLinks.map((link) => (
				  <Link
					to={link.path}
					key={link.name}
					style={{ marginLeft: "25px", marginRight: "25px" }}
				  >
					{link.name}
				  </Link>
				))}
			  </Box>
			  <Box
				sx={{
				  display: { xs: "flex", md: "none", justifyContent: "flex-end" }
				}}
			  >
				<IconButton
				  size="large"
				  edge="end"
				  color="inherit"
				  aria-label="menu"
				  aria-controls="menu"
				  aria-haspopup="true"
				  onClick={handleClick}
				>
				  <MenuIcon sx={{ mr: "25px", color: "white" }} />
				</IconButton>
				<Menu
				  id="menu"
				  anchorEl={anchorEl}
				  keepMounted
				  open={Boolean(anchorEl)}
				  onClose={handleClose}
				>
				  {props.navLinks.map((link) => (
					<MenuItem
					  key={link.name}
					  component={Link}
					  to={link.path}
					  onClick={handleClose}
					>
					  {link.name}
					</MenuItem>
				  ))}
				</Menu>
			  </Box>
			</Box>
		  ) : (
			<Box>
			  <IconButton
				size="large"
				edge="end"
				color="inherit"
				aria-label="menu"
				aria-controls="menu"
				aria-haspopup="true"
				onClick={handleClick}
			  >
				<MenuIcon sx={{ mr: "25px" }} />
			  </IconButton>
			  <Menu
				id="menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			  >
				{props.navLinks.map((link) => (
				  <MenuItem
					key={link.name}
					component={Link}
					to={link.path}
					onClick={handleClose}
				  >
					{link.name}
				  </MenuItem>
				))}
			  </Menu>
			</Box>
		  )}
		</Grid>
	  </Grid>
	);
  };
  
  export default LogoLeftNavRight;
  