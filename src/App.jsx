import { useState } from "react";
import headerDarkImg from "./assets/logo2.png";
import footerLighImg from "./assets/svg.png";
import footerDarkImg from './assets/logo3.png'
import headerLightImg from "./assets/logo1.png";

function App() {
  const [darkMode, setDarkMode] = useState();

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
        <header className="bg-green-600 text-white py-4 fixed top-0 w-full z-10 dark:bg-black">
          <div className="container mx-auto flex justify-between items-center">
            {/* Imagen en lugar del título */}
            <a href="/">
              <img
                src={headerImg}
                className="h-20"
                alt="Fundación Yarumal Verdolaga"
              />
            </a>
            <nav className="flex space-x-6 dark:text-green-600">
              <a href="#inicio" className="hover:text-gray-200">
                Inicio
              </a>
              <a href="#nosotros" className="hover:text-gray-200">
                Nosotros
              </a>
              <a href="#proyectos" className="hover:text-gray-200">
                Proyectos
              </a>
              <a href="#contacto" className="hover:text-gray-200">
                Contacto
              </a>
            </nav>
            <a
              href="tel:3103776446"
              className="bg-white dark:bg-green-600 text-black font-bold px-4 py-2 rounded hover:bg-gray-100"
            >
              Contáctanos
            </a>
          </div>
        </header>

        {/* Contenido */}
        <main className="flex-grow pt-16 pb-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>

              <p className="text-lg text-gray-700"></p>
            </div>
          </div>
        </main>

        {/* Footer fijo */}
        <footer className="bg-green-600 text-white py-4 fixed bottom-0 w-full dark:bg-black dark:text-green-600">
          <div className="container mx-auto flex justify-between items-center">
            <img
              src={footerImg}
              className="h-20"
              alt="Fundación Yarumal Verdolaga"
            />
            <span>© 2024 Fundación Yarumal Verdolaga</span>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-200">
                Facebook
              </a>
              <a href="https://instagram.com" className="hover:text-gray-200">
                Instagram
              </a>
              <a href="tel:3103776446" className="hover:text-gray-200">
                310 3776446
              </a>
            </div>
          </div>
          <button
            onClick={HandleDarkMode}
            className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full dark:text-black font-bold"
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
