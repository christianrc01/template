import React from "react";
import ErrorFallback from "@/shared/components/error/ErrorFallback";
import type {
  IWrapperProps,
  IErrorBoundaryState,
} from "@/shared/interfaces/IError";
import { appInsights } from "@/app/appInsights";

export class ErrorBoundary extends React.Component<
  IWrapperProps,
  IErrorBoundaryState
> {
  constructor(props: IWrapperProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    appInsights.trackException({
      exception: error,
      properties: {
        componentStack: errorInfo.componentStack,
      },
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
