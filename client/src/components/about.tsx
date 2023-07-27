import { Box, Button, Grid, Typography } from "@mui/material";
import homeBG from "../assets/homeBG.svg";
import Nav from "./nav";

const About = () => {
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
      <Nav setIsSidePodOpen={() => false} />
      <Box display="flex" justifyContent="center" mt={10}>
        <Typography variant="h1">About Guitar Mate</Typography>
      </Box>
      <Box display="flex" justifyContent="center" textAlign="justify" mt={3}>
        <Typography variant="body1" width="80%">
          Welcome to our innovative guitar tuner application, a smart tool that
          combines the power of advanced web technologies and music theory to
          help musicians tune their instruments with precision and ease. Whether
          you're a seasoned musician or just starting your musical journey, this
          guitar tuner can become your go-to tool to ensure your guitar is
          always in tune, thereby enriching your musical experience.
        </Typography>
      </Box>
      <Grid container display="flex" alignItems="center" mt={10} pb={10}>
        <Grid item xs={5} display="flex" justifyContent="center">
          <Typography variant="h2">How it works</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          px={8}
          sx={{
            background: "rgba(55, 55, 55, 0.6)",
            borderRadius: "20px",
            p: 5
          }}>
          <Typography variant="body2">
            Our tuner is engineered to leverage the capabilities of your
            device's built-in microphone, making it more accessible and easy to
            use. As you pluck a string on your guitar, our tuner listens
            carefully through your device's microphone, capturing the sound and
            translating it into data using the Web Audio API - a high-level
            JavaScript API for processing and synthesizing audio in web
            applications. <br /> Once the audio data is obtained, it undergoes a
            complex but efficient process of pitch detection using the
            DynamicWavelet algorithm. This sophisticated algorithm performs an
            analysis of the frequency domain to recognize the pitch of the note
            you're playing. <br /> The DynamicWavelet algorithm has been
            selected for its superior accuracy and performance, enabling
            real-time analysis of audio signals with precision.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          px={8}
          mt={8}
          ml={10}
          sx={{
            background: "rgba(55, 55, 55, 0.6)",
            borderRadius: "20px",
            p: 5
          }}>
          <Typography>
            In developing this guitar tuner, our aim was to simplify the tuning
            process without compromising on accuracy. We strived to create a
            tool that caters to musicians of all levels - one that is as useful
            in a professional recording studio as it is in a beginner's practice
            room. <br /> With a deep appreciation for music and a passion for
            leveraging technology to enrich the music-making process, we're
            committed to continuously enhancing this tool, incorporating
            feedback from users like you, and further pushing the boundaries of
            what's possible in web-based music applications. <br /> Tune your
            guitar with confidence, knowing that every note you play is powered
            by advanced technology and a love for music. Happy tuning!
          </Typography>
        </Grid>
        <Grid item xs={5} display="flex" justifyContent="center" mt={8}>
          <Typography variant="h2">Our Goal</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
