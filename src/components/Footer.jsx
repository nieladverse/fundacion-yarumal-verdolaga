import Link from "./Link.jsx";

export default function Footer({darkMode, img, HandleDarkMode}) {
  // body
return (<>
 <footer className="bg-green-600 text-white py-4 fixed bottom-0 w-full dark:bg-black dark:text-green-600">
          <div className="container mx-auto flex justify-between items-center">
            <img
              src={img}
              className="h-20"
              alt="Fundación Yarumal Verdolaga"
            />
            <span>© 2024 Fundación Yarumal Verdolaga</span>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-gray-200">
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-gray-200"
              >
                Instagram
              </Link>
              <Link href="tel:3103776446" className="hover:text-gray-200">
                310 3776446
              </Link>
            </div>
          </div>
          <button
            onClick={HandleDarkMode}
            className="absolute w-16 h-16 bottom-6 right-16 bg-neutral-900 dark:bg-white rounded-full dark:text-black font-bold"
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </footer></>)
}