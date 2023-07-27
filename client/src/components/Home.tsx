import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
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
  let header;
  let text;
  let align;
  let textWidth;
  if (smallScreen) {
    imgWidthA = "250px";
    imgHeightA = "300px";
    imgWidthB = "350px";
    imgHeightB = "350px";
    boxHeightA = "50vh";
    boxHeightB = "50vh";
    header = "4rem";
    text = "1.2rem";
    align = "left";
    textWidth = "98%";
  } else {
    imgWidthA = "350px";
    imgHeightA = "350px";
    imgWidthB = "400px";
    imgHeightB = "400px";
    boxHeightA = "85vh";
    boxHeightB = "80vh";
    header = "6rem";
    text = "2rem";
    align = "center";
    textWidth = "70%";
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* Guitar */}
      <Nav setIsSidePodOpen={setIsSidePodOpen} />
      {isSidePodOpen && <SidePod setIsSidePodOpen={setIsSidePodOpen} />}
      <Box display="flex" flexDirection="column" alignItems="center" mt={8} ml={2}>
        <Typography variant="h1" sx={{ color: "#C17736", fontSize: header, }} >
          Welcome to Guitar Mate
        </Typography>
        <Typography variant="h4" mt={3} sx={{ width: textWidth, fontSize: text, textAlign: align }}>

          Perfectly tuned strings and a deep understanding of guitar concepts
          are just a click away. Tune in and turn learning into a game.
        </Typography>
      </Box>
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
