import { Box } from "@mui/material";
import LogoLeftNavRight from "./components/LogoLeftNavRight";
import LogoMidNavRight from "./components/LogoMidNavRight";
import LogoRightNavLeft from "./components/LogoRightNavLeft";


interface INavLinks {
	name: string;
	path: string;
}

interface LogoLeftNavRightProps {
	logo: any; // Pass in the image to be displayed
	navLinks: INavLinks[];
	alignment: string; // Pass in "left" or "right" to align the nav links
	onlyMenuIcon?: boolean;
}

/**
 *
 * @param props REQUIRED - Pass in the logo (import image and pass it in)
 * @param props REQUIRED - Pass in the nav links (array of objects: { name: string, path: string })
 * @param props REQUIRED - Pass in the alignment (string: "left", "middle", or "right")
 * @param props OPTIONAL - Pass in onlyMenuIcon (boolean: true or false) to only display the menu icon or show the navigation links on big screens
 * @returns The formatted header with a logo, and navigation links
 */
const BlockHeader = (props: LogoLeftNavRightProps) => {
	return (
		<Box>
			{props.alignment === "left" && (
				<LogoLeftNavRight
					logo={props.logo}
					navLinks={props.navLinks}
					onlyMenuIcon={props.onlyMenuIcon}
				/>
			)}
			{props.alignment === "middle" && (
				<LogoMidNavRight logo={props.logo} navLinks={props.navLinks} />
			)}
			{props.alignment === "right" && (
				<LogoRightNavLeft
					logo={props.logo}
					navLinks={props.navLinks}
					onlyMenuIcon={props.onlyMenuIcon}
				/>
			)}
		</Box>
	);
};

export default BlockHeader;
