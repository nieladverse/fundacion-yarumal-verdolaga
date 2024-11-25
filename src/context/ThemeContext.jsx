import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Restaurar el estado desde localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convierte el string a booleano
  });

  useEffect(() => {
    // Guardar el estado en localStorage cada vez que cambia
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
