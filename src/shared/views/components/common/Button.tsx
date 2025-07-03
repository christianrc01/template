import type { CustomButtonProps } from "@/shared/types/IShared";
import { Button as KendoButton } from "@progress/kendo-react-buttons";

function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: CustomButtonProps) {
  const variantClass = `k-button-${variant}`;

  return (
    <KendoButton
      type={type}
      className={`${variantClass} ${className}`}
      {...props}
    >
      <span className="whitespace-normal break-words text-center block">
        {children}
      </span>
    </KendoButton>
  );
}

export default Button;
