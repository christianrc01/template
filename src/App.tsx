import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ErrorBoundary } from "./shared/components/error/ErrorBoundary";
import { routes } from "./app/routes";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
