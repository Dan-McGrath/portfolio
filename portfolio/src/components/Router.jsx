import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      //errorElement: <ErrorPage />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
