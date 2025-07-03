import { Component, type ErrorInfo } from "react";
import { appInsights } from "@/lib/utils/appInsights";
import ErrorFallback from "@/shared/views/components/error/ErrorFallback";
import type { IErrorBoundaryState, IWrapperProps } from "@/shared/types/IError";

export class ErrorBoundary extends Component<
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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
