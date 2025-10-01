import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AuthLayout from "../pages/Auth/AuthLayout";
import AuthPage from "../pages/Auth/AuthPage";
import SignUpPage from "../pages/Auth/SignUpPage";
import LoginPage from "../pages/Auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [{ path: "/auth", element: <AuthPage /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
