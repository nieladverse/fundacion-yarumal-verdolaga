// Import necessary modules and components from React Router and local files.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For managing client-side routing
import Home from "./pages/Home.jsx"; // Home page component
import Layaut from "./components/Layaut.jsx"; // Layout component for wrapping pages
import Nosotros from "./pages/Nosotros.jsx"; // Component for the "Nosotros" (About Us) page
import Proyectos from "./pages/Proyectos.jsx"; // Component for the "Proyectos" (Projects) page
import ThemeProvider from "./context/ThemeContext.jsx"; // Context provider for managing theme state across the app

/**
 * App component: The root component of the application.
 *
 * This component sets up the global structure of the application, including routing and theming.
 * It wraps the application in a ThemeProvider for consistent theming and uses the React Router
 * to define and render routes for different pages.
 *
 * @returns {JSX.Element} The root JSX for the application.
 */
export default function App() {
  return (
    // Provide the theme context to the entire application
    <ThemeProvider>
      {/* Set up the router for managing navigation */}
      <Router>
        {/* Use the Layaut component to wrap all the routes */}
        <Layaut>
          <Routes>
            {/* Define the route for the home page */}
            <Route path="/" element={<Home />} />
            {/* Define the route for the "Nosotros" page */}
            <Route path="/nosotros" element={<Nosotros />} />
            {/* Define the route for the "Proyectos" page */}
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </Layaut>
      </Router>
    </ThemeProvider>
  );
}
