import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import appRoutes from "./routes/routes.tsx";
import { RtlProvider } from "./theme/rtlPlugin.tsx";
import ThemeWrapper from "./theme/ThemeWrapper.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found!");
}

const router = createBrowserRouter(createRoutesFromElements(appRoutes));

createRoot(root).render(
  <StrictMode>
    <RtlProvider>
      <ThemeWrapper>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeWrapper>
    </RtlProvider>
  </StrictMode>,
);
