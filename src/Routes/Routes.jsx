import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("../../public/data/booksData.json"),
        Component: Home,
      },
      {
        path: "/listedbooks",
        Component: ListedBooks,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("../../public/data/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
