import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./routes/StartPage";
import CustomHooks from "./routes/CustomHooks";
import CompoundComponents from "./routes/CompoundComponents";
import ChildrenComponentsDesignPattern from "./routes/ChildrenComponentsDesignPattern";
import ExposeFunctionalityThroughRef from "./routes/ExposeFunctionalityThroughRef";
import BlobDownload from "./routes/BlobDownload";
import { Hooks, UseStateScheduling, HookUseTransition, UseStateInitialRender, UseStateVsUseRef, StateBasedOnPrevState } from "./routes/Hooks";
import { Styling, StylingSolutions, VanillaCSSNotScoping, StyledComponents, CSSVariables } from "./routes/Styling";

const router = createBrowserRouter([
  { path: "/", element: <StartPage />},
  { path: "/styling", element: <Styling />},
  { path: "/styling/vanilla-css-not-scoping", element: <VanillaCSSNotScoping /> },
  { path: "/styling/styling-solutions", element: <StylingSolutions /> },
  { path: "/styling/styled-components", element: <StyledComponents /> },
  { path: "/styling/css-variables", element: <CSSVariables /> },
  { path: "/hooks", element: <Hooks /> },
  { path: "/hooks/usestate-scheduling", element: <UseStateScheduling /> },
  { path: "/hooks/state-update", element: <StateBasedOnPrevState /> },
  { path: "/hooks/usestate-vs-useref", element: <UseStateVsUseRef /> },
  { path: "/hooks/usestate-initial-render", element: <UseStateInitialRender /> },
  { path: "/hooks/hook-use-transition", element: <HookUseTransition /> },

  { path: "/custom-hooks", element: <CustomHooks /> },
  { path: "/compound-components", element: <CompoundComponents /> },
  { path: "/children-components-design-pattern", element: <ChildrenComponentsDesignPattern /> },
  { path: "/expose-functionality-through-ref", element: <ExposeFunctionalityThroughRef /> },
  { path: "/blob-download", element: <BlobDownload /> },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
