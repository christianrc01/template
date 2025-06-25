import type { IErrorMessageProps } from "../../types/errorTypes";

export const ErrorMessage = ({ error, onRetry }: IErrorMessageProps) => (
  <div className="w-full">
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg ">
      <h3 className="text-red-800 font-medium">Error loading data</h3>
      <p className="text-red-600 mt-1">
        {typeof error === "string" ? error : error.message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200"
        >
          Try Again
        </button>
      )}
    </div>
  </div>
);
