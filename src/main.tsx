import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sarian } from "./screens/Sarian";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BecomePartner } from "./routes/BecomePartner/BecomePartner";
import { BecomeDriver } from "./routes/BecomeDriver/BecomeDriver";
import ScrollToHash from "./components/ScrollToHash";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/SARIAN">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Sarian />} />
          <Route path="/partner" element={<BecomePartner />} />
          <Route path="/become-driver" element={<BecomeDriver />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);