import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import UserProfile from './pages/profile';
import Register from './pages/register';
import Logout from './pages/logout';
import LogIn from './pages/login';
import Error from './pages/error';
import Layout from './components/layout';
import Terminal from './pages/terminal';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {index: true, element: <LogIn />},
      {path: "dashboard", element: <Dashboard />},
      {path: "terminal", element: <Terminal/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <LogIn/>},
      { path: "profile/:id", element: <UserProfile /> },
      {path: "logout", element: <Logout/>},


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
