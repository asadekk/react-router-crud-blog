import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import {
  loader as blogLoader,
} from "./pages/Blog";

import {
  action as addBlogAction,
} from "./pages/AddBlog";

import {
  loader as editLoader,
  action as editAction,
} from "./pages/EditBlog";

import {
  action as deleteAction,
} from "./pages/DeleteBlog";

// Lazy Components
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Blog = lazy(() => import("./pages/Blog"));
const AddBlog = lazy(() => import("./pages/AddBlog"));
const EditBlog = lazy(() => import("./pages/EditBlog"));
const Products = lazy(() => import("./pages/Products"));
const ErrorPages = lazy(() => import("./pages/ErrorPages"));

const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "30px",
      fontWeight: "bold",
    }}
  >
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),

    children: [
      {
        index: true,
        loader: blogLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },

      {
        path: "blog",
        loader: blogLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },

      {
        path: "blog/add",
        action: addBlogAction,
        element: (
          <Suspense fallback={<Loading />}>
            <AddBlog />
          </Suspense>
        ),
      },

      {
        path: "blog/edit/:id",
        loader: editLoader,
        action: editAction,
        element: (
          <Suspense fallback={<Loading />}>
            <EditBlog />
          </Suspense>
        ),
      },

      {
        path: "blog/delete/:id",
        action: deleteAction,
      },

      {
        path: "product",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },

      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <ErrorPages />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;