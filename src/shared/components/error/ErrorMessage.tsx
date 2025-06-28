import type { IErrorFallbackProps } from "../../interfaces/IError";
import Button from "../common/Button";

function ErrorMessage({ error, onReset }: IErrorFallbackProps) {
  return (
    <div className="w-full">
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-700/50">
        <h3 className="text-red-800 font-medium dark:text-red-300">
          Error loading data
        </h3>
        <p className="text-red-600 mt-1 dark:text-red-400">
          {typeof error === "string" ? error : error.message}
        </p>
        {onReset && (
          <Button onClick={onReset} variant="danger" className="mt-3">
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default ErrorMessage;
