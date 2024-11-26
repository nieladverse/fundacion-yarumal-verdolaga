// Importing the custom Link component for navigation
import Link from "./Link.jsx";

// Footer component definition
// Receives three props:
// - darkMode: A boolean that determines whether dark mode is active
// - img: The URL of the image to be displayed in the footer
// - HandleDarkMode: A function to toggle between dark and light mode
export default function Footer({ darkMode, img, HandleDarkMode }) {
  // WhatsApp URL with a pre-filled message
  const whatsappUrl = `https://wa.me/3103776446?text=${encodeURIComponent(
    "Hola me gustaria saber mas sobre la funcacion."
  )}`;

  // Component rendering
  return (
    <>
      {/* Footer container */}
      <footer className="bg-green-600 text-white py-4 fixed bottom-0 w-full dark:bg-black dark:text-green-600">
        <div className="container mx-auto flex justify-between items-center sm:px-2 ss:flex-col">
          {/* Image */}
          <img
            src={img}
            className="h-20 ss:hidden sm:hidden" // Hidden on small screens
            alt="Fundación Yarumal Verdolaga" // Alt text for accessibility
          />
          {/* Footer copyright text */}
          <span>© 2024 Fundación Yarumal Verdolaga</span>
          {/* Social media links */}
          <div className="flex space-x-4">
            {/* Link to Facebook */}
            <Link href="https://facebook.com" className="hover:text-gray-200">
              Facebook
            </Link>
            {/* Link to Instagram */}
            <Link
              href="https://www.instagram.com/fundacionyarumalverdolaga/"
              className="hover:text-gray-200"
            >
              Instagram
            </Link>
            {/* Link to WhatsApp */}
            <Link href={whatsappUrl} className="hover:text-gray-200">
              310 3776446
            </Link>
          </div>
        </div>
        {/* Dark mode toggle button */}
        <button
          onClick={HandleDarkMode} // Toggles dark mode on click
          className="absolute w-16 h-16 bottom-20 right-16 bg-neutral-900 dark:bg-white dark:border-2 dark:border-green-600 rounded-full dark:text-black font-bold sm:bottom-12 sm:w-12 sm:h-12 ss:bottom-16 ss:right-8 ss:w-12 ss:h-12 shadow-xl"
        >
          {/* Displayed text changes based on the darkMode state */}
          {darkMode ? "LHT" : "DRK"}
        </button>
      </footer>
    </>
  );
}
