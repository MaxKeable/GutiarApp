import { Grid } from "@mui/material";
import React from "react";
import homeBG from "../assets/images/homeBG.svg";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${homeBG})`
      }}
    >
      {/* Guitar */}
      <Grid item xs={12}>
        <h1>Home</h1>
      </Grid>
      
      {/* Bass */}
      <Grid item xs={12}>
        <h1>Home</h1>
      </Grid>
    </Grid>
  );
};

export default Home;
