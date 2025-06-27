import type { ButtonProps } from "../../interfaces/IShared";

function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded transition-colors font-medium";
  const variantClasses = {
    primary: "!bg-blue-500 text-white hover:!bg-blue-600",
    secondary: "!bg-gray-500 text-white hover:!bg-gray-600",
    danger:
      "!bg-red-600 text-white hover:!bg-red-700 focus:ring-red-500 dark:focus:ring-offset-gray-800",
    "outline-white":
      "!bg-gray-100 border border-white hover:!bg-white hover:!text-blue-600",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
