import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./routes/StartPage";
import UseStateScheduling from "./routes/UseStateScheduling";
import StateBasedOnPrevState from "./routes/StateBasedOnPrevState";
import VanillaCSSNotScoping from "./routes/VanillaCSSNotScoping";
import StylingSolutions from "./routes/StylingSolutions";
import StyledComponents from "./routes/StyledComponents";
import UseStateVsUseRef from "./routes/UseRefVsUseState/UseStateVsUseRef";

const router = createBrowserRouter([
  { path: "/", element: <StartPage /> },
  { path: "/usestate-scheduling", element: <UseStateScheduling /> },
  { path: "/state-update", element: <StateBasedOnPrevState /> },
  { path: "/vanilla-css-not-scoping", element: <VanillaCSSNotScoping /> },
  { path: "/styling-solutions", element: <StylingSolutions /> },
  { path: "/styled-components", element: <StyledComponents /> },
  { path: "/usestate-vs-useref", element: <UseStateVsUseRef /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
