import { ShieldCheck, Activity, Info, Briefcase, Database, BarChart3, Zap, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-10 h-10" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold text-gray-900 tracking-wide">
              Immuno<span className="text-indigo-600">Sentry</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <a href="#overview" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Globe className="w-4 h-4" /> Overview
            </a>
            <a href="#assessment" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Activity className="w-4 h-4" /> Assessment
            </a>
            <a href="#intervention-engine" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Zap className="w-4 h-4" /> Timing Simulation
            </a>
            <a href="#real-world-validation" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <BarChart3 className="w-4 h-4" /> Real-World Benchmarking
            </a>
            <Link to="/knowledge" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Info className="w-4 h-4" /> Knowledge Base
            </Link>
            <a href="#business" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> Business Model
            </a>
            <div className="h-4 w-px bg-gray-200" />
            <Link to="/strategy" className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1">
              <Target className="w-4 h-4" /> Strategy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
