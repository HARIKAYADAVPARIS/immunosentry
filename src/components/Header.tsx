import { useState } from "react";
import { ShieldCheck, Activity, Info, Briefcase, Database, BarChart3, Zap, Target, Globe, Menu, X, ArrowRight, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#overview", label: "Overview", icon: <Globe className="w-4 h-4" />, type: "anchor" },
    { href: "#sandbox", label: "Simulator Sandbox", icon: <Zap className="w-4 h-4" />, type: "anchor" },
    { href: "#real-world-validation", label: "Real-World Benchmarking", icon: <BarChart3 className="w-4 h-4" />, type: "anchor" },
    { href: "/knowledge", label: "Knowledge Base", icon: <Info className="w-4 h-4" />, type: "link" },
    { href: "/methodology", label: "Scientific Methodology", icon: <Microscope className="w-4 h-4" />, type: "link" },
    { href: "#business", label: "Business Model", icon: <Briefcase className="w-4 h-4" />, type: "anchor" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src="/logo.svg" alt="ImmunoSentry Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              link.type === "anchor" ? (
                <a key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
                  {link.icon} {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
                  {link.icon} {link.label}
                </Link>
              )
            ))}
            <div className="h-4 w-px bg-gray-200" />
            <Link to="/strategy" className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1">
              <Target className="w-4 h-4" /> Strategic Vision
            </Link>
            <a 
              href="mailto:harikayadavlakshmi@gmail.com?subject=ImmunoSentry Pilot Inquiry"
              className="ml-4 px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2"
            >
              Request Pilot <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.type === "anchor" ? (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 p-3 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                  >
                    {link.icon} {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.href} 
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 p-3 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                  >
                    {link.icon} {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <Link 
                  to="/strategy"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 text-base font-bold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                >
                  <Target className="w-4 h-4" /> Strategic Vision
                </Link>
                <a 
                  href="mailto:harikayadavlakshmi@gmail.com?subject=ImmunoSentry Pilot Inquiry"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100"
                >
                  Request Pilot <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
