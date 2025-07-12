import clsx from "clsx";
import type { TextProps } from "@/shared/types/IShared";

function Text({ as = "p", children, className = "", ...props }: TextProps) {
  const Component = as;
  const baseClass = `k-text k-text-${as}`;

  return (
    <Component className={clsx(baseClass, className)} {...props}>
      {children}
    </Component>
  );
}

export default Text;
