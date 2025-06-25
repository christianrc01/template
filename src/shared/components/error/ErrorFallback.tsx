// import type { JSX } from "react";
import IconInfo from "../../icons/IconInfo";
import type { IErrorFallbackProps } from "../../types/IError";

function ErrorFallback({ error, onReset }: IErrorFallbackProps) {
  return (
    <div
      role="alert"
      className=" p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-red-500 dark:border-red-400 w-full"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-0.5 text-red-500 dark:text-red-400">
          <IconInfo />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Something went wrong!
          </h2>
          <details className="mt-3">
            <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">
              Error details
            </summary>
            <pre className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded text-xs text-gray-800 dark:text-gray-200 overflow-x-auto w-full">
              {error?.toString()}
            </pre>
          </details>
          <button
            onClick={onReset}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
