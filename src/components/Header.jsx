import Link from "./Link.jsx";

export default function Header({ img, onOpenModal }) {
  return (
    <>
      <header className="bg-green-600 text-white py-4 fixed top-0 w-full z-10 dark:bg-black">
        <div className="container mx-auto flex justify-between items-center">
          {/* Imagen en lugar del título */}
          <Link href="/">
            <img src={img} className="h-20" alt="Fundación Yarumal Verdolaga" />
          </Link>
          <nav className="flex space-x-6 dark:text-green-600">
            <Link href="/" className="hover:text-gray-200">
              Inicio
            </Link>
            <Link href="/nosotros" className="hover:text-gray-200">
              Nosotros
            </Link>
            <Link href="#proyectos" className="hover:text-gray-200">
              Proyectos
            </Link>
          </nav>
          <button
            className="bg-white dark:bg-green-600 text-black font-bold px-4 py-2 rounded hover:bg-gray-100"
            onClick={onOpenModal}
          >
            Contáctanos
          </button>
        </div>
      </header>
    </>
  );
}
