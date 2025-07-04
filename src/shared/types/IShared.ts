import type { HTMLAttributes, ReactNode, RefObject } from "react";
import { type ButtonProps as KendoButtonProps } from "@progress/kendo-react-buttons";
import type { GridCellProps } from "@progress/kendo-react-grid";

type Variant = "primary" | "secondary" | "danger" | "outline-white";

export interface CustomButtonProps
  extends Omit<KendoButtonProps, "themeColor" | "fillMode">,
    HTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface EndpointConfig {
  path: string;
  target: string;
}

export interface TableLinkCellProps<T> extends GridCellProps {
  dataItem: T;
  getHref: (dataItem: T) => string;
  getText?: (dataItem: T) => string;
}

interface AccessiBeConfig {
  language?: string;
  position?: "left" | "right";
  triggerIcon?: string;
  triggerColor?: string;
  leadColor?: string;
  triggerSize?: "small" | "medium" | "large" | "bottom";
  triggerOffsetX?: number;
  triggerOffsetY?: number;
  triggerRadius?: string;
}

export interface AccessiBeProps {
  config?: AccessiBeConfig;
}

export interface NotFoundProps {
  title?: string;
  message?: string;
  backTo?: string;
  backLabel?: string;
}

export interface UseClickOutsideParams {
  refs: Array<RefObject<Element | null>>;
  handler: () => void;
}

export interface HeaderMenuLinksProps {
  links: { to: string; label: string }[];
  onLogout: () => void;
  onLinkClick?: () => void;
}
