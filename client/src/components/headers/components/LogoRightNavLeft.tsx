import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

interface INavLinks {
	name: string;
	path: string;
}

interface LogoLeftNavRightProps {
	logo: any; // Pass in the image to be displayed
	navLinks: INavLinks[];
	onlyMenuIcon?: boolean;
}

/**
 *
 * @param props
 * @returns
 */
const LogoRightNavLeft = (props: LogoLeftNavRightProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Grid container>
			<Grid
				item
				xs={4}
				sx={{
					display: "flex",
					justifyContent: "flex-start", // Aligns menu icon to the right
					alignItems: "center",
				}}
			>
				{!props.onlyMenuIcon ? (
					<Box sx={{ width: "100%" }}>
						<Box
							sx={{
								display: { xs: "none", md: "flex" },
								justifyContent: "flex-start",
								width: "100%",
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
						<Box sx={{ display: { xs: "block", md: "none" } }}>
							<IconButton
								size="large"
								edge="end"
								color="inherit"
								aria-label="menu"
								aria-controls="menu"
								aria-haspopup="true"
								onClick={handleClick}
							>
								<MenuIcon />
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
							<MenuIcon />
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
			<Grid item xs={6} md={7}></Grid>
			<Grid
				item
				xs={2}
				md={1}
				sx={{ display: "flex", justifyContent: "center" }}
			>
				<img
					src={props.logo}
					alt="Logo"
					style={{ width: "auto", height: "60px" }}
				/>
			</Grid>
		</Grid>
	);
};

export default LogoRightNavLeft;
