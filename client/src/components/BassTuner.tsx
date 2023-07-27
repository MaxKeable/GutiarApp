import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import bassAPPbg from "../assets/bassBG2.svg";
import bassHead from "../assets/bassHead.svg";

const GuitarTuner = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  let guitarHeadHeight;
  let smallMarginB;
  let tunerHeight;
  let tunerWidth;
  if (smallScreen) {
    guitarHeadHeight = "330px";
    smallMarginB = 17;
    tunerHeight = "33px";
    tunerWidth = "33px";
  } else {
    guitarHeadHeight = "350px";
    smallMarginB = 18;
    tunerHeight = "35px";
    tunerWidth = "35px";
  }

  const imageStyle = {
    height: guitarHeadHeight
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
    <Grid
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundImage: `url(${bassAPPbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw"
      }}>
      {/* left tuning pegs (E A D G) */}
      <Grid item xs={12} sm={6} sx={{ mb: smallMarginB }}>
        <Box>
          <Typography variant="body1" style={tunerStyle} sx={{ ml: 3}}>
            G
          </Typography>
          <Typography variant="body1" style={tunerStyle} sx={{ ml: 2}}>
            D
          </Typography>
          <Typography variant="body1" style={tunerStyle} sx={{ ml: 1}}>
            A
          </Typography>
          <Typography variant="body1" style={tunerStyle} sx={{ mr: 0}}>
            E
          </Typography>
        </Box>
      </Grid>

      {/* guitar head */}
      <Grid item xs={12} sm={6}>
        <Box>
          <img src={bassHead} alt="guitar head" style={imageStyle} />
        </Box>
      </Grid>

    </Grid>
  );
};

export default GuitarTuner;
