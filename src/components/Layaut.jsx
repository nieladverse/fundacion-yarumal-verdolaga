// Import necessary hooks, assets, components, and context
import { useState, useContext } from "react";
import headerDarkImg from "../assets/logo2.png"; // Logo for header in dark mode
import footerLighImg from "../assets/svg.png"; // Logo for footer in light mode
import footerDarkImg from "../assets/logo3.png"; // Logo for footer in dark mode
import headerLightImg from "../assets/logo1.png"; // Logo for header in light mode
import Header from "./Header.jsx"; // Header component
import Footer from "./Footer.jsx"; // Footer component
import EmialForm from "./EmialForm.jsx"; // Email form modal component
import { ThemeContext } from "../context/ThemeContext.jsx"; // Theme context to manage dark mode

// Layout component definition
// Wraps the main content of the application with a consistent structure
export default function Layaut({ children }) {
  // Retrieve dark mode state and toggle function from the context
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isModalVisible, setModalVisible] = useState(false); // State to manage email modal visibility

  // Functions to handle modal visibility
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  // Dynamically set header and footer images based on dark mode
  let headerImg = darkMode ? headerDarkImg : headerLightImg;
  let footerImg = darkMode ? footerDarkImg : footerLighImg;

  return (
    <>
      {/* Main container */}
      <div className={`flex flex-col min-h-screen ${darkMode && "dark"}`}>
        {/* Fixed Header */}
        <Header img={headerImg} onOpenModal={openModal} />

        {/* Email form modal */}
        <EmialForm isVisible={isModalVisible} onClose={closeModal} />

        {/* Dynamic content passed as children */}
        {children}

        {/* Fixed Footer */}
        <Footer
          darkMode={darkMode}
          img={footerImg}
          HandleDarkMode={toggleDarkMode}
        />
      </div>
    </>
  );
}
