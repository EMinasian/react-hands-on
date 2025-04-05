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
import CompoundComponents from "./routes/CompoundComponents";
import ChildrenComponentsDesignPattern from "./routes/ChildrenComponentsDesignPattern";
import ExposeFunctionalityThroughRef from "./routes/ExposeFunctionalityThroughRef";
import BlobDownload from "./routes/BlobDownload";
import CSSVariables from "./routes/CSSVariables";

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
  { path: "/compound-components", element: <CompoundComponents /> },
  { path: "/children-components-design-pattern", element: <ChildrenComponentsDesignPattern /> },
  { path: "/expose-functionality-through-ref", element: <ExposeFunctionalityThroughRef /> },
  { path: "/blob-download", element: <BlobDownload /> },
  { path: "/css-variables", element: <CSSVariables /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
