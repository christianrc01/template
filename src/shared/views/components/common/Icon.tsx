import clsx from "clsx";
import type { IconProps } from "@/shared/types/IShared";

function Icon({
  icon: IconComponent,
  className = "",
  stroke = "currentColor",
  variant = "success",
  ...props
}: IconProps) {
  const baseClass = "k-icon";
  const variantClass = `k-icon-${variant}`;

  return (
    <IconComponent
      className={clsx(baseClass, variantClass, className)}
      stroke={stroke}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Icon;
