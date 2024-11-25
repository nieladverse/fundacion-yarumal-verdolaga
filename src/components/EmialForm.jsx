// Importing React's useState hook for managing component state
import { useState } from "react";
// Importing emailjs library for sending emails through a client-side integration
import emailjs from "@emailjs/browser";

// EmailForm component definition, receives two props:
// - isVisible: controls whether the form modal is displayed
// - onClose: a function to close the modal
export default function EmailForm({ isVisible, onClose }) {
  // State variables for form fields and error messages
  const [name, setName] = useState(""); // Stores the name input
  const [email, setEmail] = useState(""); // Stores the email input
  const [message, setMessage] = useState(""); // Stores the message input
  const [error, setError] = useState(""); // Stores any error messages

  // If the modal is not visible, do not render anything
  if (!isVisible) return null;

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Validation to ensure all fields are filled
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor, completa todos los campos antes de enviar."); // Sets an error message
      return;
    }
    setError(""); // Clears any previous errors

    // Environment variables for EmailJS configuration
    const serviceId = import.meta.env.VITE_SERVICE_ID; // Service ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID; // Template ID
    const publicKey = "3cOmnMEAc4CUjbzIa"; // Public key for EmailJS authentication

    // Parameters to be sent with the email
    const templateParams = {
      from_name: email,
      from_email: email,
      to_name: "nielad",
      message: message,
    };

    // Sending the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent", response); // Log success response
        setName(""); // Clear the name input
        setEmail(""); // Clear the email input
        setMessage(""); // Clear the message input
      })
      .then(onClose) // Close the modal after submission
      .catch((error) => {
        console.log("error sending email", error); // Log errors
      });
  };

  // Component rendering
  return (
    <>
      {/* Modal overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose} // Close modal when clicking outside the form
      >
        {/* Modal content */}
        <div
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the form
        >
          {/* Email form */}
          <form
            onSubmit={handleSubmit} // Calls handleSubmit on form submission
            className="bg-green-600 dark:bg-black p-6 rounded-lg shadow-md max-w-md mx-auto"
          >
            <h1 className="p-4 text-4xl font-bold text-white">
              Envianos un Mensaje
            </h1>
            {/* Display error message if it exists */}
            {error && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <span>{error}</span>
              </div>
            )}
            {/* Input for name */}
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on input change
              className="w-full p-3 mb-4 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-300"
            />
            {/* Input for email */}
            <input
              type="email"
              placeholder="Tu Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-full p-3 mb-4 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-300"
            />
            {/* Textarea for message */}
            <textarea
              cols="30"
              rows="5"
              placeholder="Tu Mensage"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state on input change
              className="w-full p-3 mb-4 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-300"
            ></textarea>
            {/* Submit button */}
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
