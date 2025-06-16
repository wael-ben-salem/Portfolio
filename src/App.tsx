import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import OurBatima from "./pages/projects/OurBatima";
import Bonotem from "./pages/projects/Bonotem";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ourbatima" element={<OurBatima />} />
        <Route path="/projects/bonotem" element={<Bonotem />} />
      </Routes>
    </Router>
  );
}
