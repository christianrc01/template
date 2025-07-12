import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import type { CustomLinkProps } from "@/shared/types/IShared";

function Link({
  variant = "primary",
  className = "",
  children,
  ...props
}: CustomLinkProps) {
  const baseClass = "k-link";
  const variantClass = `k-link-${variant}`;

  return (
    <RouterLink className={clsx(baseClass, variantClass, className)} {...props}>
      {children}
    </RouterLink>
  );
}

export default Link;
