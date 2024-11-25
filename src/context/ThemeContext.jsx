import React, { createContext, useState, useEffect } from "react";

// Create a context to manage the dark mode state
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // Initialize darkMode state with a value from localStorage, default to false if not found
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert string to boolean
  });

  // Effect hook to store the darkMode state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Function to toggle between dark and light modes
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  // Provide the darkMode state and the toggle function to the rest of the app
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
