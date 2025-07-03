import type { HTMLAttributes, ReactNode } from "react";
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
