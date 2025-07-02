import type { ButtonProps } from "@/shared/types/IShared";

function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-full transition-colors font-medium";
  const variantClasses = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-600",
    "outline-white":
      "bg-gray-100 border border-white hover:bg-white hover:text-blue-600 dark:border-gray-500 dark:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white",
  };

  const variantStyle = variantClasses[variant] ?? variantClasses["primary"];

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
