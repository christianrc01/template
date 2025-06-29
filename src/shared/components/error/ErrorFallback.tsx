import IconInfo from "@/shared/icons/IconInfo";
import type { IErrorFallbackProps } from "@/shared/interfaces/IError";
import Button from "@/shared/components/common/Button";

function ErrorFallback({ error, onReset }: IErrorFallbackProps) {
  return (
    <div
      role="alert"
      className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900"
    >
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-red-500 dark:border-red-400 max-w-lg w-full mx-4">
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
              <pre className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words w-full">
                {error?.toString()}
              </pre>
            </details>
            <Button onClick={onReset} variant="danger" className="mt-4">
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
