import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";

const AudioNote: React.FC = () => {
  const [frequency, setFrequency] = useState<number | null>(null);
  const [note, setNote] = useState<string | null>(null);

  const analyser = useRef<AnalyserNode | null>(null);
  const dataArray = useRef<Uint8Array | null>(null);

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
    const note = 12 * (Math.log(frequency / 440) / Math.log(2));
    return noteNames[Math.round(note) % 12];
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

      dataArray.current = new Uint8Array(analyser.current.frequencyBinCount);

      window.requestAnimationFrame(() => updateFrequency(audioContext));
    } catch (err) {
      console.error(err);
      alert("Stream generation failed.");
    }
  };

  const updateFrequency = (audioContext: AudioContext) => {
    if (!analyser.current || !dataArray.current) return;

    analyser.current.getByteFrequencyData(dataArray.current);

    let total = 0;
    let sumCounts = 0;

    for (let i = 0; i < dataArray.current.length; i++) {
      total += dataArray.current[i] * i;
      sumCounts += dataArray.current[i];
    }

    let averageFreq = 0;
    if (sumCounts > 0) {
      averageFreq =
        (total / sumCounts) *
        (audioContext.sampleRate / (analyser.current.fftSize * 2));
    }

    setFrequency(averageFreq);
    setNote(frequencyToNote(averageFreq));

    window.requestAnimationFrame(() => updateFrequency(audioContext));
  };

  return (
    <Box display="flex" justifyContent="center" pt={10}>
      <Box>
        <Button onClick={startAudioCapture} variant="contained">
          Start Tuning
        </Button>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Note: {note}
        </Typography>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Frequency (Hz): {frequency}
        </Typography>
      </Box>
    </Box>
  );
};

export default AudioNote;
