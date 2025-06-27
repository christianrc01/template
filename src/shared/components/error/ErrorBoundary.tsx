import React from "react";
import * as Sentry from "@sentry/react";
import ErrorFallback from "./ErrorFallback";
import type {
  IWrapperProps,
  IErrorBoundaryState,
} from "../../interfaces/IError";

export class ErrorBoundary extends React.Component<
  IWrapperProps,
  IErrorBoundaryState
> {
  constructor(props: IWrapperProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    Sentry.captureException(error); // Capture the error and send it to Sentry
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Capture additional context with Sentry
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key as keyof React.ErrorInfo]);
      });
      Sentry.captureException(error);
    });

    console.error("❌ ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error as Error}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
