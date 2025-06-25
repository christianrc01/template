import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./features/users/pages/UsersPage";
import { Layout } from "./shared/components/layout/Layout";
import { HomePage } from "./features/home/pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { NotFoundPage } from "./shared/pages/NotFoundPage";
import { ErrorBoundary } from "./shared/components/error/ErrorBoundary";

const NotFoundWithLayout = () => (
  <Layout>
    <NotFoundPage />
  </Layout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundWithLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
