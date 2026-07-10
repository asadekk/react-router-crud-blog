import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import MainLayout from './layouts/MainLayout'
import Blog, { loader as blogLoader } from './pages/Blog'
import AddBlog, { action as AddBlogs } from './pages/AddBlog'
import EditBlog, {
  loader as editLoader,
  action as editAction,
} from "./pages/EditBlog";
import {
  action as deleteAction
} from "./pages/DeleteBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "blog",
        element: <Blog />,
        loader: blogLoader
      },
      {
        path: "blog/add",
        element: <AddBlog />,
        action: AddBlogs,
      },
      {
        path: "blog/edit/:id",
        element: <EditBlog />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: "blog/delete/:id",
        action: deleteAction
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App