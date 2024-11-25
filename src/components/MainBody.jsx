// MainBody Component
export default function MainBody({ children }) {
  return (
    <>
      {/* Main tag defining the central content area */}
      <main className="flex-grow pt-16 pb-20 bg-gray-100 dark:bg-gray-300 ss:pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center py-20 ss:pt-36 sm:pt-40">{children}</div>
        </div>
      </main>
    </>
  );
}
