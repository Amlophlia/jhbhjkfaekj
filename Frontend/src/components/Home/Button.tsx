// components/Button.tsx
interface ButtonProps {
  onClick: () => void;
  direction: "prev" | "next";
}

const Button: React.FC<ButtonProps> = ({ onClick, direction }) => {
  const iconPath = direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";

  return (
    <button
      onClick={onClick}
      className={`absolute  hover:ring-2 hover:ring-indigo-500 ${
        direction === "prev" ? "left-6" : "right-6"
      } top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-md focus:outline-none active:ring-0`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
    </button>
  );
};

export default Button;
