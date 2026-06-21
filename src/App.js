import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import CabinetPage from "./pages/CabinetPage/CabinetPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cabinet/*" element={<CabinetPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
