import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Sarian } from "./screens/Sarian";
import { LanguageProvider } from "./contexts/LanguageContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <Sarian />
    </LanguageProvider>
  </StrictMode>,
);
