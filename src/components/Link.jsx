// Link Component
export default function Link({ children, className, href }) {
  return (
    <>
      {/* Anchor tag */}
      <a href={href} className={className}>
        {children}
      </a>
    </>
  );
}
