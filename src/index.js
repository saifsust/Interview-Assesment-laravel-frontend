import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './components/MainApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginApp from './components/LoginApp';
import UserApp from './components/UserApp';
import BookListApp from './components/BookListApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginApp />,
  },
  {
    path: "/user",
    element: <UserApp />,
  },
  {
    path: "/book-list",
    element: <BookListApp />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <MainApp />
  </React.StrictMode>
);