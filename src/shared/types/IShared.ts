import type {
  ComponentType,
  HTMLAttributes,
  ReactNode,
  RefObject,
  SVGProps,
} from "react";
import { type ButtonProps as KendoButtonProps } from "@progress/kendo-react-buttons";
import type { GridCellProps } from "@progress/kendo-react-grid";
import type { LinkProps } from "react-router-dom";

type TextTag = "p" | "span" | "small" | "h1" | "h2" | "h3" | "h4";
type VariantButton = "primary" | "secondary" | "danger" | "decline";
type VariantLink = "primary" | "active" | "inactive" | "muted";
type VariantIcon = "success" | "danger" | "muted";

export interface IconProps extends SVGProps<SVGSVGElement> {
  variant?: VariantIcon;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  fill?: string;
  stroke?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

export interface CustomLinkProps extends LinkProps {
  variant?: VariantLink;
  children: ReactNode;
  className?: string;
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextTag;
  children: ReactNode;
  className?: string;
}

export interface CustomButtonProps
  extends Omit<KendoButtonProps, "themeColor" | "fillMode">,
    HTMLAttributes<HTMLButtonElement> {
  variant?: VariantButton;
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

export interface AcsbInitConfig {
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

export interface IconCardProps {
  icon: ReactNode;
  name: string;
}
