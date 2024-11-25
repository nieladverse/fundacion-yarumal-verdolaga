import { useState } from "react";
import headerDarkImg from "../assets/logo2.png";
import footerLighImg from "../assets/svg.png";
import footerDarkImg from "../assets/logo3.png";
import headerLightImg from "../assets/logo1.png";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import EmialForm from "./EmialForm.jsx";

export default function Layaut({ children }) {
  const [darkMode, setDarkMode] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  function HandleDarkMode() {
    setDarkMode(!darkMode);
  }

  let headerImg = headerLightImg;
  let footerImg = footerLighImg;
  if (darkMode) {
    headerImg = headerDarkImg;
    footerImg = footerDarkImg;
  }

  return (
    <>
      <div className={`flex flex-col min-h-screen ${darkMode && "dark"}`}>
        {/* Header fijo */}
        <Header img={headerImg} onOpenModal={openModal} />
        <EmialForm isVisible={isModalVisible} onClose={closeModal} />
        {children}
        {/* Footer fijo */}
        <Footer
          darkMode={darkMode}
          img={footerImg}
          HandleDarkMode={HandleDarkMode}
        />
      </div>
    </>
  );
}
