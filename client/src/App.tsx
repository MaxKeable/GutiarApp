import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarTuner from "./components/GuitarTuner";
import BassTuner from "./components/BassTuner";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guitartuner" element={<GuitarTuner />} />
        <Route path="/basstuner" element={<BassTuner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
