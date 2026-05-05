export default function Loader() {
  return (
    <div className="loader-hole" aria-label="Loading">
      {Array.from({ length: 10 }).map((_, index) => (
        <i key={index} />
      ))}
    </div>
  );
}
