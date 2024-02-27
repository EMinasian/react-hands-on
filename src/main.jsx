import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./routes/StartPage";
import UseStateScheduling from "./routes/UseStateScheduling";
import StateBasedOnPrevState from "./routes/StateBasedOnPrevState";

const router = createBrowserRouter([
  { path: "/", element: <StartPage /> },
  { path: "/usestate-scheduling", element: <UseStateScheduling /> },
  { path: "/state-update", element: <StateBasedOnPrevState /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
