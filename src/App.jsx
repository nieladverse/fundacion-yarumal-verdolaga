import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layaut from "./components/Layaut.jsx";
import Nosotros from "./pages/Nosotros.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Layaut>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </Layaut>
      </Router>
    </>
  );
}
