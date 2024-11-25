import MainBody from "../components/MainBody";

// This is the Home component for the website, which currently displays a "coming soon" message.
export default function Home() {
  return (
    <MainBody>
      {/* The first heading, welcoming the user to the website */}
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>

      {/* The second heading, indicating that the page is under construction */}
      <h1 className="text-4xl font-bold mb-6">
        Under construction, coming soon....
      </h1>
    </MainBody>
  );
}
