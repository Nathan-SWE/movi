import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import AuthPage from '../pages/Auth/AuthPage';
import LoginPage from '../pages/Auth/LoginPage';
import RecoveryPassword from '../pages/Auth/RecoveryPassword';
import SignUpPage from '../pages/Auth/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth',
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'recovery',
        element: <RecoveryPassword />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
