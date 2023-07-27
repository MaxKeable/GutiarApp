import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import homeBG from "../assets/homeBG.svg";
import G from "../assets/G.svg";
import B from "../assets/b.svg";
import Nav from "./nav";
import SidePod from "./SidePod";

const Home = () => {
  // media query
  const smallScreen = useMediaQuery("(max-width:600px)");
  const [isSidePodOpen, setIsSidePodOpen] = useState(false);

  let imgWidthA;
  let imgHeightA;
  let imgWidthB;
  let imgHeightB;
  let boxHeightA;
  let boxHeightB;
  if (smallScreen) {
    imgWidthA = "250px";
    imgHeightA = "300px";
    imgWidthB = "350px";
    imgHeightB = "350px";
    boxHeightA = "50vh";
    boxHeightB = "50vh";
  } else {
    imgWidthA = "350px";
    imgHeightA = "350px";
    imgWidthB = "400px";
    imgHeightB = "400px";
    boxHeightA = "90vh";
    boxHeightB = "80vh";
  }

  const imageStyle = {
    width: imgWidthA,
    height: imgHeightA
  };
  const imageStyleB = {
    width: imgWidthB,
    height: imgHeightB
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        displayflex: "flex",
        flexDirection: "column"
      }}>
      {/* Guitar */}
      <Nav setIsSidePodOpen={setIsSidePodOpen} />
      {isSidePodOpen && <SidePod setIsSidePodOpen={setIsSidePodOpen} />}
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: boxHeightA
            }}>
            <img src={G} alt="G" style={imageStyle} />
            <Link to="/guitartuner" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  top: -50
                }}>
                GUITAR
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Bass */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: boxHeightB
            }}>
            <img src={B} alt="B" style={imageStyleB} />
            <Link to="/basstuner" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  top: -40
                }}>
                BASS
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
