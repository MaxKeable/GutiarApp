import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface INavLinks {
	name: string;
	path: string;
}

interface LogoMidNavRightProps {
	logo: any; // Pass in the image to be displayed
	navLinks: INavLinks[];
}

const LogoMidNavRight = (props: LogoMidNavRightProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Grid container>
			<Grid item xs={3}></Grid>
			<Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
				<img
					src={props.logo}
					alt="Logo"
					style={{ width: "auto", height: "60px" }}
				/>
			</Grid>
			<Grid item xs={2}></Grid>
			<Grid
				item
				xs={1}
				sx={{
					display: "flex",
					justifyContent: "flex-end", // Aligns menu icon to the right
					alignItems: "center",
				}}
			>
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
			</Grid>
		</Grid>
	);
};

export default LogoMidNavRight;
