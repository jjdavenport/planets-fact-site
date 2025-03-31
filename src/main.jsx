import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Page from "./components/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/planet/earth" replace />,
  },
  {
    path: "/planet/:id",
    element: <App />,
    children: [
      {
        path: "",
        element: <Page />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
