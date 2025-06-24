import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./features/users/pages/UsersPage";
import { Layout } from "./shared/components/Layouts";
import { HomePage } from "./features/home/pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { NotFoundPage } from "./shared/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
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
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
