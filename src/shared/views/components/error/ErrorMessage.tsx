import Button from "@/shared/views/components/common/Button";
import { Card, CardBody } from "@progress/kendo-react-layout";
import type { IErrorFallbackProps } from "@/shared/types/IError";

function ErrorMessage({ error, onReset }: IErrorFallbackProps) {
  return (
    <Card
      role="alert"
      className="w-full !p-4 !bg-red-50 border !border-red-200 !rounded-xl dark:!bg-red-900/20 dark:!border-red-700/50 self-start"
    >
      <CardBody className="!p-0">
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
      </CardBody>
    </Card>
  );
}

export default ErrorMessage;
