import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./routes/StartPage";
import UseStateScheduling from "./routes/UseStateScheduling";
import StateBasedOnPrevState from "./routes/StateBasedOnPrevState";
import VanillaCSSNotScoping from "./routes/VanillaCSSNotScoping";
import StylingSolutions from "./routes/StylingSolutions";
import StyledComponents from "./routes/StyledComponents";
import UseStateVsUseRef from "./routes/UseRefVsUseState";
import UseStateInitialRender from "./routes/UseStateInitialRender";
import CustomHooks from "./routes/CustomHooks";
import HookUseTransition from "./routes/HookUseTransition";

const router = createBrowserRouter([
  { path: "/", element: <StartPage /> },
  { path: "/usestate-scheduling", element: <UseStateScheduling /> },
  { path: "/state-update", element: <StateBasedOnPrevState /> },
  { path: "/vanilla-css-not-scoping", element: <VanillaCSSNotScoping /> },
  { path: "/styling-solutions", element: <StylingSolutions /> },
  { path: "/styled-components", element: <StyledComponents /> },
  { path: "/usestate-vs-useref", element: <UseStateVsUseRef /> },
  { path: "/usestate-initial-render", element: <UseStateInitialRender /> },
  { path: "/custom-hooks", element: <CustomHooks /> },
  { path: "/hook-use-transition", element: <HookUseTransition /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
