import { useState } from "react";
import headerDarkImg from "./assets/logo2.png";
import footerLighImg from "./assets/svg.png";
import footerDarkImg from "./assets/logo3.png";
import headerLightImg from "./assets/logo1.png";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import EmialForm from "./components/EmialForm.jsx";

function App() {
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

        {/* Contenido */}
        <main className="flex-grow pt-16 pb-20 bg-gray-100 dark:bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>
              {/** <EmialForm /> */}
              <EmialForm isVisible={isModalVisible} onClose={closeModal} />
              <p className="text-lg text-gray-700"></p>
            </div>
          </div>
        </main>

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

export default App;
