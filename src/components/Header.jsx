import Link from "./Link.jsx";

export default function Header({ img, onOpenModal }) {
  return (
    <>
      <header className="bg-green-600 text-white py-4 fixed top-0 w-full z-10 dark:bg-black">
        <div className="container mx-auto flex justify-between items-center sm:flex-col  ss:flex-col">
          {/* Imagen en lugar del título */}
          <Link href="/">
            <img src={img} className="h-20 sm:mb-4 ss:mb-4" alt="Fundación Yarumal Verdolaga" />
          </Link>
          <nav className="flex space-x-6 dark:text-green-600 sm:mb-4 ss:mb-4">
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
          <button
            className="bg-white dark:bg-green-600 text-black font-bold px-4 py-2 rounded hover:bg-gray-100 sm:mb-2 ss:mb-2"
            onClick={onOpenModal}
          >
            Contáctanos
          </button>
        </div>
      </header>
    </>
  );
}
