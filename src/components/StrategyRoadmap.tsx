import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Target, 
  Map, 
  Lock, 
  Users, 
  Globe, 
  Scale, 
  Zap, 
  ArrowLeft,
  ArrowRight,
  Database,
  Search,
  Cpu,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";

export function StrategyRoadmap() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-10 h-10" referrerPolicy="no-referrer" />
              <span className="text-xl font-bold text-gray-900 tracking-wide font-display">
                Immuno<span className="text-indigo-600">Sentry</span>
              </span>
            </div>
            <Link 
              to="/" 
              className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-2xl transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Platform
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3 h-3" /> Founder's Strategic Vision
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6">
              The Path to <span className="text-indigo-600">Dominance</span>.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              ImmunoSentry is not just a predictive tool; it is the infrastructure for the next generation of safe, effective immunotherapy. Here is how we build a defensible, multi-billion dollar enterprise.
            </p>
          </motion.div>
        </div>

        {/* Strategic Moats */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3 font-display">
            <Lock className="w-8 h-8 text-indigo-600" /> Proprietary Defensibility Moats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Cpu className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Federated Learning Architecture</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pharma companies are protective of their data. Our "Privacy-First" Federated Learning allows us to train models on private clinical trial data without the data ever leaving their servers.
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <Zap className="w-4 h-4" /> Removes 90% of Legal/Compliance Friction
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-indigo-900 rounded-[2.5rem] text-white"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The "Data Flywheel"</h3>
              <p className="text-indigo-200 leading-relaxed mb-6">
                As we partner with diagnostic labs (CDx model), we aggregate anonymized real-world data (RWD) that pharma companies lack. This creates a self-reinforcing loop: more data → better models → more partners.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" /> Unattainable by "Tech-Only" Competitors
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regulatory Roadmap */}
        <section className="mb-32">
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3 font-display">
                <Scale className="w-8 h-8 text-indigo-600" /> Regulatory & Clinical Roadmap
              </h2>
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1: R&D Intelligence (Current)",
                    title: "Pharma Pipeline De-risking",
                    desc: "Deploying as a 'Decision Support Tool' for R&D teams. Low regulatory hurdle, immediate revenue through consulting and licensing.",
                    status: "Active"
                  },
                  {
                    phase: "Phase 2: Clinical Trial Companion",
                    title: "Prospective Trial Stratification",
                    desc: "Integrating into Phase II/III protocols as a secondary endpoint. Validating the 'Steroid Intervention Timing' engine in real-time.",
                    status: "Q4 2026"
                  },
                  {
                    phase: "Phase 3: SaMD Certification",
                    title: "Class II Medical Device (FDA/EMA)",
                    desc: "Full certification as 'Software as a Medical Device' (SaMD). Transitioning from 'Support' to 'Prescriptive' diagnostic status.",
                    status: "2027-2028"
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center font-black text-indigo-600 text-xl">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{step.phase}</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">{step.status}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 font-display">{step.title}</h4>
                      <p className="text-gray-500 max-w-2xl leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3 font-display">
            <Target className="w-8 h-8 text-indigo-600" /> Competitive Landscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard CROs",
                weakness: "Manual, slow, and lack mechanistic biological modeling.",
                edge: "ImmunoSentry is 100x faster and deterministic."
              },
              {
                name: "Generic AI Startups",
                weakness: "Black-box models that clinicians don't trust.",
                edge: "Our 'Explainable Evidence Trace' provides regulatory-grade audit trails."
              },
              {
                name: "Internal Pharma Teams",
                weakness: "Siloed data and high overhead costs.",
                edge: "We act as a cross-pharma intelligence layer, learning from the entire ecosystem."
              }
            ].map((comp, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-display">{comp.name}</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-red-400 uppercase mb-1">Structural Weakness</div>
                    <p className="text-sm text-gray-500">{comp.weakness}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-500 uppercase mb-1">Our Advantage</div>
                    <p className="text-sm text-gray-900 font-medium">{comp.edge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 bg-indigo-600 rounded-[3rem] text-white">
          <h2 className="text-4xl font-black mb-6">Let's build the future of immunotherapy safety together.</h2>
          <div className="flex justify-center gap-4">
            <Link 
              to="/" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2"
            >
              Review Platform <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 opacity-50">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-8 h-8" referrerPolicy="no-referrer" />
              <span className="text-lg font-bold text-gray-900 tracking-wide">
                Immuno<span className="text-indigo-600">Sentry</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/legal" className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal" className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/immunosentry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-4">Confidential Strategic Document</p>
          <p className="text-[10px] text-gray-400 max-w-md mx-auto">
            This document contains proprietary strategic information for ImmunoSentry SAS.
          </p>
          <p className="text-[10px] text-gray-400 mt-4">
            © 2026 ImmunoSentry SAS · <Link to="/legal" className="hover:underline">Legal</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
