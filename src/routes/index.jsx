import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import AuthPage from '../pages/Auth/AuthPage';
import LoginPage from '../pages/Auth/LoginPage';
import RecoveryPasswordPage from '../pages/Auth/RecoveryPasswordPage';
import SignUpPage from '../pages/Auth/SignUpPage';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthPage /> },
      { path: 'auth/signup', element: <SignUpPage /> },
      { path: 'auth/login', element: <LoginPage /> },
      { path: 'auth/recovery', element: <RecoveryPasswordPage /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
