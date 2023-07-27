import React, { useState, useRef } from "react";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import * as Pitchfinder from "pitchfinder";

let lastUpdateTime = 0;

const AudioNote: React.FC = () => {
  const [frequency, setFrequency] = useState<number | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [tuningIndicator, setTuningIndicator] = useState<string | null>(null);

  const analyser = useRef<AnalyserNode | null>(null);
  const dataArray = useRef<Float32Array | null>(null);

  const detectPitch = Pitchfinder.DynamicWavelet();

  const frequencyToNote = (frequency: number) => {
    const noteNames = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ];

    // A4 = 440Hz and represents the 49th key on the piano
    const A4 = 440;
    const A4_KEY_NUMBER = 49;

    // Calculate the key number
    const keyNumber = Math.round(
      12 * Math.log2(frequency / A4) + A4_KEY_NUMBER
    );

    const noteIndex = keyNumber % 12;
    const octave = Math.floor(keyNumber / 12) - 1; // we subtract 1 because our noteNames starts from C which belongs to a previous octave

    // Calculate the ideal frequency of this note
    const idealFrequency = A4 * Math.pow(2, (keyNumber - A4_KEY_NUMBER) / 12);

    // Calculate the difference in cents
    const cents = Math.round(1200 * Math.log2(frequency / idealFrequency));

    // Construct the note name
    const note = `${noteNames[noteIndex]}${octave}`;
    let tuningIndicator = "";

    if (Math.abs(cents) <= 10) {
      tuningIndicator = `in tune`;
    } else if (cents < 0) {
      tuningIndicator = `${Math.abs(cents)} cents flat`;
    } else {
      tuningIndicator = `${cents} cents sharp`;
    }

    return { note, tuningIndicator };
  };

  const startAudioCapture = async () => {
    const AudioContext = window.AudioContext || window.AudioContext;
    const audioContext = new AudioContext();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false
        }
      });

      const source = audioContext.createMediaStreamSource(stream);
      analyser.current = audioContext.createAnalyser();
      analyser.current.fftSize = 2048;

      source.connect(analyser.current);

      dataArray.current = new Float32Array(analyser.current.fftSize);

      window.requestAnimationFrame(() => updateFrequency(audioContext));
    } catch (err) {
      console.error(err);
      alert("Stream generation failed.");
    }
  };

  const updateFrequency = (audioContext: AudioContext) => {
    if (!analyser.current || !dataArray.current) return;

    analyser.current.getFloatTimeDomainData(dataArray.current);

    const windowedData = dataArray.current.map(
      (val, i, arr) =>
        val * 0.5 * (1 - Math.cos((2 * Math.PI * i) / (arr.length - 1)))
    );

    const pitch = detectPitch(windowedData);

    if (pitch !== null) {
      const currentTime = performance.now();
      if (currentTime - lastUpdateTime > 500) {
        const noteInfo = frequencyToNote(pitch);
        setFrequency(pitch);
        setNote(noteInfo.note);
        setTuningIndicator(noteInfo.tuningIndicator);
        lastUpdateTime = currentTime;
      }
    }

    window.requestAnimationFrame(() => updateFrequency(audioContext));
  };

  return (
    <Box pt={8}>
      <Grid container mt={10}>
        <Grid
          item
          xs={5}
          display="flex"
          justifyContent="flex-end"
          alignItems="center">
          <ButtonGroup>
            <Button onClick={startAudioCapture} variant="contained">
              Start Tuning
            </Button>
            <Button
              variant="contained"
              onClick={() => window.location.reload()}>
              Stop Tuning
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          {" "}
          <Box
            sx={{
              backgroundColor: "#C17736",
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Typography sx={{ fontSize: "4em" }}>{note}</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {" "}
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Tune: {tuningIndicator}
          </Typography>
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Frequency (Hz): {frequency?.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AudioNote;
