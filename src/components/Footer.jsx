import Link from "./Link.jsx";

export default function Footer({ darkMode, img, HandleDarkMode }) {
  // body
  const whatsappUrl = `https://wa.me/3103776446?text=${encodeURIComponent(
    "Hola me gustaria saber mas sobre la funcacion."
  )}`;
  return (
    <>
      <footer className="bg-green-600 text-white py-4 fixed bottom-0 w-full dark:bg-black dark:text-green-600">
        <div className="container mx-auto flex justify-between items-center sm:px-2 ss:flex-col">
          <img
            src={img}
            className="h-20 ss:hidden sm:hidden"
            alt="Fundación Yarumal Verdolaga"
          />
          <span>© 2024 Fundación Yarumal Verdolaga</span>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-gray-200">
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/fundacionyarumalverdolaga/"
              className="hover:text-gray-200"
            >
              Instagram
            </Link>
            <Link href={whatsappUrl} className="hover:text-gray-200">
              310 3776446
            </Link>
          </div>
        </div>
        <button
          onClick={HandleDarkMode}
          className="absolute w-16 h-16 bottom-20 right-16 bg-neutral-900 dark:bg-white rounded-full dark:text-black font-bold sm:bottom-12 sm:w-12 sm:h-12 ss:bottom-16 ss:right-8 ss:w-12 ss:h-12 ss:"
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
      </footer>
    </>
  );
}
