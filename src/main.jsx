import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/planet/earth" replace />,
  },
  {
    path: "/planet/:id",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
