import { Box, Typography, useMediaQuery } from "@mui/material";
import bassAPPbg from "../assets/bassBG2.svg";
import bassHead from "../assets/bassHead.svg";
import Recording from "./guitar/recording";
import Nav from "./nav";

const BassTuner = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  let bassHeadHeight;
  let tunerHeight;
  let tunerWidth;
  if (smallScreen) {
    bassHeadHeight = "330px";
    tunerHeight = "33px";
    tunerWidth = "33px";
  } else {
    bassHeadHeight = "330px";
    tunerHeight = "35px";
    tunerWidth = "35px";
  }

  const imageStyle = {
    height: bassHeadHeight
  };

  const tunerStyle = {
    width: tunerWidth,
    height: tunerHeight,
    marginTop: "15px",
    backgroundColor: "#DDA15E",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.7rem"
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bassAPPbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        {/* Nav taking full width */}
        <Nav setIsSidePodOpen={() => false} />
        {/* Recording underneath the Nav */}
        <Recording />
      </Box>

      {/* bass head and guitar tuners */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mt: 0, // Adjust this value as needed to create spacing between bassHead and guitarHead
        }}
      >
        {/* left tuning pegs (E A D G) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-130px",
          }}
        >
          <Typography variant="body1" style={tunerStyle} sx={{ ml: 3 }}>
            G
          </Typography>
          <Typography variant="body1" style={tunerStyle} sx={{ ml: 2 }}>
            D
          </Typography>
          <Typography variant="body1" style={tunerStyle} sx={{ ml: 1 }}>
            A
          </Typography>
          <Typography variant="body1" style={tunerStyle} sx={{ mr: 0 }}>
            E
          </Typography>
        </Box>

        {/* bass head */}
        <Box>
          <img src={bassHead} alt="bass head" style={imageStyle} />
        </Box>

    
      </Box>
    </Box>
  );
};

export default BassTuner;
