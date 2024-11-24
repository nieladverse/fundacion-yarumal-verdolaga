import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmialForm({ isVisible, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isVisible) return null;

  const habdleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_JS_YEK;

    const templateParams = {
      from_name: email,
      from_email: email,
      to_name: "nielad",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .then(onClose)
      .catch((error) => {
        console.log("error sending email", error);
      });
  };

  // body
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()} // Evita que cerrar el modal se active al hacer clic dentro
        >
          <form
            onSubmit={habdleSubmit}
            className="bg-green-600 dark:bg-black p-6 rounded-lg shadow-md max-w-md mx-auto"
          >
            <h1 className="p-4 text-4xl font-bold text-white">
              Envianos un Mensaje
            </h1>
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-300"
            />
            <input
              type="email"
              placeholder="Tu Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-300"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Tu Mensage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 mb-4 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black dark:bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
              Enviar Correo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
