export default function AddressLink({ children, className = null }) {
  if (!className) {
    className = "my-3 block";
  }
  className += " flex gap-1 font-medium underline";
  return (
    <a
      className={className}
      // target="_blank"
      href={"https://maps.google.com/?q=" + children}>
      {children}
    </a>
  );
}
