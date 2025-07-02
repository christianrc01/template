import Button from "@/shared/components/common/Button";
import type { IErrorFallbackProps } from "@/shared/types/IError";

function ErrorMessage({ error, onReset }: IErrorFallbackProps) {
  return (
    <div
      role="alert"
      className="w-full p-4 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-700/50 self-start"
    >
      <h2 className="text-red-800 font-medium dark:text-red-300">
        Error loading data
      </h2>
      <p className="text-red-600 mt-1 dark:text-red-400">
        {typeof error === "string" ? error : error.message}
      </p>
      {onReset && (
        <Button onClick={onReset} variant="danger" className="mt-3">
          Try Again
        </Button>
      )}
    </div>
  );
}

export default ErrorMessage;
