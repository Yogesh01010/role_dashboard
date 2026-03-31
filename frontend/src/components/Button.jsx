export default function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white ${
        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-red-500 hover:bg-red-600"
      }`}
    >
      {children}
    </button>
  );
}