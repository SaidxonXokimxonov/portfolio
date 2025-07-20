import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CustomCursor from "./components/customCursor";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <>
        <App />
        <Toaster />
        <CustomCursor />
      </>
    </StrictMode>
  </BrowserRouter>
);
