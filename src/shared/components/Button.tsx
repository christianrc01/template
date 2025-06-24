interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline-white";
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded transition-colors font-medium";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    "outline-white": "border border-white hover:bg-white hover:text-blue-600",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
