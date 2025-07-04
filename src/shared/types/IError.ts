import type { ReactNode } from "react";

export interface IErrorFallbackProps {
  error: Error;
  onReset?: () => void;
}

export interface IWrapperProps {
  children?: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
