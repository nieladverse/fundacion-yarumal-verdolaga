// Importing the custom Link component for navigation
import Link from "./Link.jsx";

// Header component definition
// Receives two props:
// - img: The URL of the logo image to display in the header
// - onOpenModal: A function triggered when the "Contáctanos" button is clicked
export default function Header({ img, onOpenModal }) {
  return (
    <>
      {/* Header container */}
      <header className="bg-green-600 text-white py-4 fixed top-0 w-full z-10 dark:bg-black">
        <div className="container mx-auto flex justify-between items-center sm:flex-col ss:flex-col">
          {/* Logo (links to the homepage) */}
          <Link href="/">
            <img
              src={img}
              className="h-20 sm:mb-4 ss:mb-4" // Adjusts spacing on smaller screens
              alt="Fundación Yarumal Verdolaga" // Alt text for accessibility
            />
          </Link>
          {/* Navigation menu */}
          <nav className="flex space-x-6 dark:text-green-600 sm:mb-4 ss:mb-4">
            {/* Navigation links */}
            <Link href="/" className="hover:text-gray-200">
              Inicio
            </Link>
            <Link href="/nosotros" className="hover:text-gray-200">
              Nosotros
            </Link>
            <Link href="/proyectos" className="hover:text-gray-200">
              Proyectos
            </Link>
          </nav>
          {/* Contact button */}
          <button
            className="bg-white dark:bg-green-600 text-black font-bold px-4 py-2 rounded hover:bg-gray-100 sm:mb-2 ss:mb-2"
            onClick={onOpenModal} // Triggers the modal opening function
          >
            Contáctanos
          </button>
        </div>
      </header>
    </>
  );
}
