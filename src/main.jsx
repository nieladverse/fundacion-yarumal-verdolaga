// Importing React's StrictMode for highlighting potential issues in the app during development
import { StrictMode } from "react";
// Importing the createRoot function for rendering React components using the modern React DOM API
import { createRoot } from "react-dom/client";
// Importing the application's global CSS styles
import "./index.css";
// Importing the main application component
import App from "./App.jsx";

// Selecting the root DOM element where the React application will be mounted
createRoot(document.getElementById("root")).render(
  // Wrapping the application with StrictMode to help detect issues and enforce best practices in development
  <StrictMode>
    {/* Rendering the main application component */}
    <App />
  </StrictMode>
);
