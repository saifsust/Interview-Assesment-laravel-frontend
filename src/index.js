import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './components/MainApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginApp from './components/LoginApp';
import UserApp from './components/UserApp';
import BookListApp from './components/BookListApp';
import BookMetaApp from './components/BookMetaApp';

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
  },
  {
    path: "/book-meta",
    element: <BookMetaApp />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
    <RouterProvider router={router} />
  </React.StrictMode>
);