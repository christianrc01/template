import type { IErrorFallbackProps } from "../../interfaces/IError";
import Button from "../common/Button";

function ErrorMessage({ error, onReset }: IErrorFallbackProps) {
  return (
    <div className="w-full">
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg ">
        <h3 className="text-red-800 font-medium">Error loading data</h3>
        <p className="text-red-600 mt-1">
          {typeof error === "string" ? error : error.message}
        </p>
        {onReset && (
          <Button
            onClick={onReset}
            variant="outline-white"
            className="mt-3 !text-red-800 !border-red-300 hover:!bg-red-100"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default ErrorMessage;
