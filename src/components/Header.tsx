import { ShieldCheck, Activity, Info, Briefcase, Database, BarChart3, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-10 h-10" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold text-gray-900 tracking-wide font-display">
              Immuno<span className="text-indigo-600">Sentry</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <a href="#assessment" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Activity className="w-4 h-4" /> Assessment
            </a>
            <a href="#intervention-engine" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Zap className="w-4 h-4" /> Intervention Engine
            </a>
            <a href="#real-world-validation" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <BarChart3 className="w-4 h-4" /> Real-World Validation
            </a>
            <a href="#validation" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Database className="w-4 h-4" /> Validation
            </a>
            <a href="#knowledge" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Info className="w-4 h-4" /> Knowledge Base
            </a>
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
