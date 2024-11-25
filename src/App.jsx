import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layaut from "./components/Layaut.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layaut>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </Layaut>
      </Router>
    </ThemeProvider>
  );
}
