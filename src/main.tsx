import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sarian } from "./screens/Sarian";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BecomePartner } from "./routes/BecomePartner/BecomePartner";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/SARIAN">
        <Routes>
          <Route path="/" element={<Sarian />} />
          <Route path="/partner" element={<BecomePartner />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);