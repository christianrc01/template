export interface IErrorFallbackProps {
  error?: Error;
  onReset: () => void;
}

export interface IErrorMessageProps {
  error: string | Error;
  onRetry?: () => void;
}

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}