import MainBody from "../components/MainBody";
import logoImg from "../assets/logo4.png";

// This is the "Nosotros" (About Us) component for the website, currently displaying a "coming soon" message.
export default function Nosotros() {
  return (
    <MainBody>
      <section className="bg-gray-50 py-16 shadow-lg">
        <div className="container mx-auto px-6">
          {/* Header */}
          
          <div className="flex items-center justify-center">
            <img src={logoImg} alt="img" className="h-52" />
          </div>
          <h1 className="text-5xl font-extrabold dark:text-green-600 text-black text-center mb-12 mt-8">
            Quienes Somos?
          </h1>
          {/* Introducción */}
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12">
            Somos una organización comprometida con la transformación social y
            el progreso de nuestra comunidad. Desde hace más de 15 años, nuestra
            misión ha sido demostrar que la solidaridad es la herramienta más
            poderosa para cambiar vidas.
          </p>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-green-50 p-8 rounded-lg shadow-lg border border-green-600">
              <h2 className="text-3xl font-bold dark:text-green-600  text-black mb-4">
                Misión
              </h2>
              <p className="text-gray-700">
                Promover el bienestar de la comunidad de Yarumal a través de
                iniciativas sociales, educativas y solidarias que impacten
                positivamente a los grupos más vulnerables, construyendo un
                futuro mejor para todos.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg border border-green-600">
              <h2 className="text-3xl font-bold dark:text-green-600 text-black mb-4">
                Visión
              </h2>
              <p className="text-gray-700">
                Ser un referente en Yarumal y en la región como una organización
                comprometida con la transformación social, logrando mejorar la
                calidad de vida y fomentando valores de unidad, solidaridad y
                progreso.
              </p>
            </div>
          </div>

          {/* Proyectos destacados */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold dark:text-green-600 text-black text-center mb-8">
              Principales Proyectos
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-green-600 dark:text-black">
                  Navidad Verdolaga
                </h3>
                <p className="text-gray-700 mt-2">
                  Desde hace más de 15 años, hemos llevado alegría a más de
                  1,000 niños y niñas cada Navidad, entregando regalos y creando
                  momentos inolvidables.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-green-600 dark:text-black">
                  Gestión durante la pandemia
                </h3>
                <p className="text-gray-700 mt-2">
                  En los tiempos más difíciles, distribuimos más de 100 mercados
                  a familias necesitadas y llevamos útiles escolares a las zonas
                  más apartadas de Yarumal.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-green-600 dark:text-black">
                  Creación de la Fundación FYV
                </h3>
                <p className="text-gray-700 mt-2">
                  En 2024 dimos un paso histórico al fundar oficialmente nuestra
                  organización. Hoy impactamos positivamente a cientos de
                  personas vulnerables, demostrando que la solidaridad es el
                  motor del cambio.
                </p>
              </div>
            </div>
          </div>

          {/* Frase inspiradora */}
          <div className="dark:bg-green-600 bg-black text-white py-12 rounded-lg shadow-lg">
            <p className="text-xl font-light italic text-center">
              "Somos la barra del pueblo y para el pueblo, la única hinchada de
              Yarumal."
            </p>
          </div>

          {/* Testimonios */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold dark:text-green-600 text-black text-center mb-8">
              Testimonios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-600">
                <p className="text-gray-700 italic">
                  "Ser parte de la Fundación me cambió la vida. Me enseñó el
                  verdadero valor de ayudar."
                </p>
                <cite className="block mt-4 text-gray-500 font-semibold">
                  — María Gómez, voluntaria desde 2018.
                </cite>
              </blockquote>
              <blockquote className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-green-600">
                <p className="text-gray-700 italic">
                  "Gracias a la Navidad Verdolaga, mis hijos volvieron a
                  sonreír. Esta fundación no tiene precio."
                </p>
                <cite className="block mt-4 text-gray-500 font-semibold">
                  — Pedro Sánchez, beneficiario.
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </MainBody>
  );
}
