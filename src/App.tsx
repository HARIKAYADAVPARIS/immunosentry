import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { StrategyRoadmap } from "./components/StrategyRoadmap";
import { Legal } from "./components/Legal";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy" element={<StrategyRoadmap />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
}

