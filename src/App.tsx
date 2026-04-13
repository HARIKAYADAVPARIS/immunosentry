import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/Home";
import { StrategyRoadmap } from "./components/StrategyRoadmap";
import { Legal } from "./components/Legal";
import { KnowledgeBasePage } from "./components/KnowledgeBasePage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy" element={<StrategyRoadmap />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/knowledge" element={<KnowledgeBasePage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

