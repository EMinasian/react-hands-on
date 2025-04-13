import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./routes/StartPage";
import { Styling, StylingSolutions, VanillaCSSNotScoping, StyledComponents, CSSVariables } from "./routes/Styling";
import { Hooks, UseStateScheduling, HookUseTransition, UseStateInitialRender, UseStateVsUseRef, StateBasedOnPrevState } from "./routes/Hooks";
import { DesignPatterns, CustomHooks, ChildrenComponentsDesignPattern, CompoundComponents, ExposeFunctionalityThroughRef } from "./routes/DesignPatterns";
import { Other, BlobDownload } from "./routes/Other";

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
  { path: "/design-patterns", element: <DesignPatterns /> },
  { path: "/design-patterns/custom-hooks", element: <CustomHooks /> },
  { path: "/design-patterns/compound-components", element: <CompoundComponents /> },
  { path: "/design-patterns/children-components-design-pattern", element: <ChildrenComponentsDesignPattern /> },
  { path: "/design-patterns/expose-functionality-through-ref", element: <ExposeFunctionalityThroughRef /> },
  { path: "/other", element: <Other /> },
  { path: "/other/blob-download", element: <BlobDownload /> },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
