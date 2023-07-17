import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarTuner from "./components/GuitarTuner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guitartuner" element={<GuitarTuner />} />
      </Routes>
    </Router>
  );
}

export default App;
