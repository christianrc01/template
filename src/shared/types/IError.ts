export interface IErrorFallbackProps {
  error: Error;
  onReset?: () => void;
}

export interface IWrapperProps {
  children?: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
