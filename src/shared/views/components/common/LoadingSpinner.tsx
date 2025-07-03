import { Loader } from "@progress/kendo-react-indicators";

function LoadingSpinner() {
  return (
    <div
      className="grid place-items-center h-64"
      role="status"
      aria-label="Loading..."
      data-testid="spinner"
    >
      <Loader
        size="large"
        type="infinite-spinner"
        themeColor="secondary"
        aria-hidden="true"
      />
    </div>
  );
}

export default LoadingSpinner;


