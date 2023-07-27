import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarTuner from "./components/GuitarTuner";
import BassTuner from "./components/BassTuner";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Game from "./components/Game";


import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guitartuner" element={<GuitarTuner />} />
          <Route path="/basstuner" element={<BassTuner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
