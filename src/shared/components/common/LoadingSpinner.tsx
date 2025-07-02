function LoadingSpinner() {
  return (
    <div className="grid place-items-center h-64" role="status">
      <div
        data-testid="spinner"
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        aria-hidden="true"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
