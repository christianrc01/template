function LoadingSpinner() {
  return (
    <div
      className="grid place-items-center h-64"
      role="status"
      aria-label="Loading..."
    >
      <div
        data-testid="spinner"
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default LoadingSpinner;
