import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import shuffle from "lodash/shuffle"; // Ensure you have lodash installed: npm install lodash
import homeBG from "../assets/homeBG.svg";
import E6 from "../assets/E6.svg";
import A5 from "../assets/A5.svg";
import D4 from "../assets/D4.svg";
import G3 from "../assets/G3.svg";
import B2 from "../assets/B2.svg";
import E1 from "../assets/E1.svg";
import BlockHeader from "./headers/BlockHeader";
import logo from "../assets/logo1.svg";

const SVG_FLASH_CARDS = [
  { svg: E6, answer: "E" },
  { svg: A5, answer: "A" },
  { svg: D4, answer: "D" },
  { svg: G3, answer: "G" },
  { svg: B2, answer: "B" },
  { svg: E1, answer: "E" }
];

const Game = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [flashCardIndex, setFlashCardIndex] = useState<number>(-1); // Start with -1 to show "START" button first
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [SVGFlashCards, setSVGFlashCards] = useState<any[]>([]);

  useEffect(() => {
    // Shuffle the SVG flash cards and answer options
    setAnswerOptions(shuffle(["E", "A", "D", "G", "B", "E"]));
    setFlashCardIndex(-1);
    setSVGFlashCards(shuffle(SVG_FLASH_CARDS));
  }, []);

  useEffect(() => {
    // Generate new answer options when moving to the next question
    if (flashCardIndex !== -1) {
      setAnswerOptions(shuffle(["E", "A", "D", "G", "B", "E"]));
      setSelectedAnswer(null); // Clear selected answer for the next question
    }
  }, [flashCardIndex]);

  const handleAnswerSelection = (selectedOption: string) => {
    if (selectedOption === SVGFlashCards[flashCardIndex].answer) {
      setSelectedAnswer("correct");
    } else {
      setSelectedAnswer(selectedOption);
    }
  };

  const handleNextCard = () => {
    if (flashCardIndex < SVGFlashCards.length - 1) {
      setFlashCardIndex((prevIndex) => prevIndex + 1);
    } else {
      // If we've reached the end of the questions, reset the game
      setFlashCardIndex(-1);
      setAnswerOptions(shuffle(["E", "A", "D", "G", "B", "E"]));
      setSVGFlashCards(shuffle(SVG_FLASH_CARDS));
    }
  };

  const handleStartGame = () => {
    setFlashCardIndex(0);
  };

  return (
    <Box sx={{
      backgroundImage: `url(${homeBG})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    }}>
      <BlockHeader
        logo={logo}
        navLinks={[
          { name: "HOME", path: "/" },
          { name: "GUITAR", path: "/guitartuner" },
          { name: "BASS", path: "/basstuner" },
          { name: "LOGIN", path: "/login" }
        ]}
        alignment="left"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
          Can you name the string?
        </Typography>

        {flashCardIndex === -1 ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleStartGame}
            sx={{
              width: "200px"
            }}>
            START
          </Button>
        ) : (
          <AnimatePresence>
            {selectedAnswer === null ? (
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.6 }}
                layout
                key={`svg-${flashCardIndex}`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center",
                  marginBottom: 8
                }}>
                <Card sx={{ width: 300, backgroundColor: "black", border: "solid 2px white"  }}>
                  <CardActionArea>
                    <CardContent>
                      <motion.img
                        src={SVGFlashCards[flashCardIndex].svg}
                        alt="Flash Card"
                        style={{
                          width: isSmallScreen ? 120 : 300,
                          height: isSmallScreen ? 240 : 400
                        }}
                        initial={{ opacity: 0, rotateY: 180 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            ) : null}

            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                layout
                key={`answer-${flashCardIndex}`}
                sx={{
                  textAlign: "center",
                  marginBottom: 8,
                  position: "relative",
                  zIndex: 0
                }}>
                <Card
                  sx={{
                    backgroundColor:
                      selectedAnswer === "correct" ? "green" : "red",
                    color: "white",
                    height: isSmallScreen ? 120 : 200,
                    width: isSmallScreen ? 120 : 200
                  }}>
                  <CardContent>
                    <Typography variant="h4" component="h3" color="green">
                      {selectedAnswer === "correct"
                        ? "Correct!"
                        : "Wrong. Try again."}
                    </Typography>
                    <Typography variant="h6" component="h4" color="green">
                      The correct answer is:{" "}
                      {SVGFlashCards[flashCardIndex].answer}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {selectedAnswer === null && (
              <Grid container spacing={2} sx={{ marginBottom: 8 }}>
                {answerOptions.map((option, index) => (
                  <Grid item xs={6} sm={4} md={2} key={index}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => handleAnswerSelection(option)}
                      sx={{ maxWidth: "100px" }}>
                      {option}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            )}

            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                layout
                key={`next-button-${flashCardIndex}`}
                sx={{ marginBottom: 8, position: "relative", zIndex: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleNextCard}>
                  Next
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Box>
    </Box>
  );
};

export default Game;
