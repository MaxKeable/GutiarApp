import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import guitarTUNERBG from "../assets/guitarTUNERBG.svg";
import guitarHead from "../assets/guitarHead.svg";
import Recording from "./guitar/recording";

import Nav from "./nav";

const GuitarTuner = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  let guitarHeadHeight;
  let smallMarginB;
  if (smallScreen) {
    guitarHeadHeight = "300px";
    smallMarginB = 14;
  } else {
    guitarHeadHeight = "350px";
    smallMarginB = 18.5;
  }

  const imageStyle = {
    height: guitarHeadHeight
  };

  const tunerStyle = {
    width: "40px",
    height: "40px",
    marginTop: "20px",
    marginBottom: "0px",
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
        backgroundImage: `url(${guitarTUNERBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}>
      <Nav setIsSidePodOpen={() => false} />
      <Recording />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
          mt: 10
        }}>
        {/* left tuning pegs (E A D) */}
        <Grid item xs={12} sm={6} sx={{ mb: smallMarginB, mr: 1 }}>
          <Box>
            <Typography variant="body1" style={tunerStyle}>
              D
            </Typography>
            <Typography variant="body1" style={tunerStyle}>
              A
            </Typography>
            <Typography variant="body1" style={tunerStyle}>
              E
            </Typography>
          </Box>
        </Grid>

        {/* guitar head */}
        <Grid item xs={12} sm={6}>
          <Box>
            <img src={guitarHead} alt="guitar head" style={imageStyle} />
          </Box>
        </Grid>

        {/* left tuning pegs G B E */}
        <Grid item xs={12} sm={6} sx={{ mb: smallMarginB, ml: 1 }}>
          <Box>
            <Typography variant="body1" style={tunerStyle}>
              G
            </Typography>
            <Typography variant="body1" style={tunerStyle}>
              B
            </Typography>
            <Typography variant="body1" style={tunerStyle}>
              E
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuitarTuner;
