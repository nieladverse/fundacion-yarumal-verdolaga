import MainBody from "../components/MainBody";

// This is the "Nosotros" (About Us) component for the website, currently displaying a "coming soon" message.
export default function Nosotros() {
  return (
    <MainBody>
      {/* The first heading, welcoming the user to the "About Us" section */}
      <h1 className="text-4xl font-bold mb-6">Welcome to About Us</h1>

      {/* The second heading, indicating that the page is under construction */}
      <h1 className="text-4xl font-bold mb-6">
        Under construction, coming soon....
      </h1>
    </MainBody>
  );
}
