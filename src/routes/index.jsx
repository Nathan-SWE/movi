import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AuthPage from "../pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/auth", element: <AuthPage /> }],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
