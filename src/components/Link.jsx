export default function Link({ children, className, href }) {
  // body
  return (
    <>
      <a href={href} className={className}>
        {children}
      </a>
    </>
  );
}
