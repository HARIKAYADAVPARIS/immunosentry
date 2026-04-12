import { Header } from "./Header";
import { RiskAssessment } from "./RiskAssessment";
import { BusinessModel } from "./BusinessModel";
import { ValidationResult } from "./ValidationResult";
import { RealWorldValidation } from "./RealWorldValidation";
import { InterventionEngine } from "./InterventionEngine";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Activity, Microscope, Briefcase, Database, Globe, Zap, BarChart3, ChevronDown, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                    <img src="/logo.svg" alt="Logo" className="w-4 h-4" referrerPolicy="no-referrer" /> ESMO 2025 Integrated Tool
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider border border-emerald-100">
                    <ShieldCheck className="w-3 h-3" /> Validated · AUC 0.84 · n=1,662 patients · cBioPortal
                  </div>
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-7xl mb-8 text-balance">
                  Predicting <span className="text-indigo-600">irAEs</span> & Survival Outcomes.
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-4 text-balance">
                  ImmunoSentry leverages ESMO 2025 clinical data, genetic HLA alleles, and gut microbial abundance to provide <span className="text-indigo-600 font-bold">Trial Rescue Audits</span> and <span className="text-indigo-600 font-bold">Diagnostic Interpretation</span> for global oncology pipelines.
                </p>
                <p className="text-lg text-indigo-600 font-medium mb-12 max-w-2xl">
                  The only platform combining HLA genetics, gut microbiome signatures, and a deterministic cytokine cascade simulator for steroid intervention timing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#assessment" 
                    className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200"
                  >
                    Start Assessment <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#overview" 
                    className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
                  >
                    Platform Overview <ChevronDown className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-20 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-indigo-900 rounded-[2rem] shadow-2xl border border-indigo-800 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-500/30">
                      Mechanistic Engine
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cytokine Cascade Simulator</h3>
                    <p className="text-indigo-200 text-sm leading-relaxed">
                      Deterministic biological simulation for steroid intervention timing — the only mechanistic irAE engine validated against ESMO 2025 thresholds.
                    </p>
                  </div>
                  <a 
                    href="#intervention-engine" 
                    className="px-6 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2 text-sm whitespace-nowrap self-start md:self-center"
                  >
                    Explore Simulator <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: "Genetic Profiling", icon: <Microscope className="w-5 h-5" />, desc: "Analyzing HLA-B*27 and other key alleles." },
                  { label: "Microbiome Analysis", icon: <Activity className="w-5 h-5" />, desc: "Monitoring Faecalibacterium abundance." },
                  { label: "Clinical Correlation", icon: <ShieldCheck className="w-5 h-5" />, desc: "Mapping drug-specific toxicity patterns." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.label}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview Section */}
        <section id="overview" className="py-32 bg-gray-50/50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Platform Overview</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">The ImmunoSentry <span className="text-indigo-600">Ecosystem</span>.</h3>
              <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A multi-layered approach to immunotherapy safety, from individual patient risk to global trial rescue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Risk Assessment", 
                  desc: "AI-driven biomarker analysis using HLA alleles and microbiome signatures.",
                  link: "#assessment",
                  icon: <Activity className="w-6 h-6" />
                },
                { 
                  title: "Intervention Engine", 
                  desc: "Mechanistic cytokine simulation for optimal steroid timing.",
                  link: "#intervention-engine",
                  icon: <Zap className="w-6 h-6" />
                },
                { 
                  title: "Real-World Validation", 
                  desc: "Live benchmarking against cBioPortal and MSK-IMPACT cohorts.",
                  link: "#real-world-validation",
                  icon: <BarChart3 className="w-6 h-6" />
                },
                { 
                  title: "Model Validation", 
                  desc: "Verified performance metrics (AUC 0.84) across independent datasets.",
                  link: "#validation",
                  icon: <Database className="w-6 h-6" />
                },
                { 
                  title: "Knowledge Base", 
                  desc: "Clinical evidence mapping to ESMO 2025 and Nature research.",
                  link: "/knowledge",
                  isExternal: true,
                  icon: <Microscope className="w-6 h-6" />
                },
                { 
                  title: "Business Model", 
                  desc: "Strategic CDx royalties and Trial Rescue Audit frameworks.",
                  link: "#business",
                  icon: <Briefcase className="w-6 h-6" />
                }
              ].map((item, i) => (
                item.isExternal ? (
                  <Link 
                    key={i}
                    to={item.link}
                    className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                      Explore Section <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ) : (
                  <a 
                    key={i}
                    href={item.link}
                    className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                      Explore Section <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>

        <RiskAssessment />
        <InterventionEngine />
        <RealWorldValidation />
        <ValidationResult />

        {/* Trust & Transparency Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Deployment Readiness</h2>
                <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-8 font-display">
                  Built for <span className="text-indigo-600">Clinical Adoption</span>.
                </h3>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                  Healthcare adoption of AI is only possible when models are transparent, verifiable, and explainable. ImmunoSentry is designed from the ground up to meet these requirements.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { 
                      title: "Explainable by Design", 
                      desc: "SHAP-based feature attribution and clinical evidence traces.",
                      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />
                    },
                    { 
                      title: "Verifiable Benchmarks", 
                      desc: "Validated against TCGA and cBioPortal datasets.",
                      icon: <Database className="w-5 h-5 text-indigo-600" />
                    },
                    { 
                      title: "Regulatory Alignment", 
                      desc: "Aligned with WHO and ESMO guidelines for AI.",
                      icon: <Activity className="w-5 h-5 text-indigo-600" />
                    },
                    { 
                      title: "Data Sovereignty", 
                      desc: "Supports on-premise and private cloud deployment.",
                      icon: <Globe className="w-5 h-5 text-indigo-600" />
                    }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto text-[10px] font-mono text-gray-400 uppercase tracking-widest">System Audit Log</div>
                  </div>
                  <div className="space-y-4 font-mono text-xs text-gray-600">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-indigo-600 font-bold">[AUDIT]</span> Model prediction generated for Case #A2-A0ET
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-emerald-600 font-bold">[XAI]</span> Feature importance calculated: Gut Microbiome (0.84)
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-indigo-600 font-bold">[AUDIT]</span> Evidence trace mapped to Nature Comm. 2022
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-amber-600 font-bold">[WARN]</span> High risk of Colitis detected; Alerting clinician.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BusinessModel />
      </main>

      <footer className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-10 h-10" referrerPolicy="no-referrer" />
                <span className="text-xl font-bold text-gray-900 tracking-wide">
                  Immuno<span className="text-indigo-600">Sentry</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                ImmunoSentry helps pharma R&D teams navigate the delicate balance of immunotherapy — identifying which patients can safely remain on therapy and which require immediate intervention.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Platform</h4>
                <ul className="space-y-2">
                  <li><a href="#assessment" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Risk Assessment</a></li>
                  <li><a href="#intervention-engine" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Intervention Engine</a></li>
                  <li><a href="#real-world-validation" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Validation</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/strategy" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Strategic Roadmap</Link></li>
                  <li><Link to="/knowledge" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Knowledge Base</Link></li>
                  <li><Link to="/legal" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Legal</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Connect</h4>
                <div className="flex items-center gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/immunosentry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © 2026 ImmunoSentry SAS. Based on ESMO 2025 & Nature Communications (2022) 13:392.
            </p>
            <div className="flex gap-6">
              <Link to="/legal" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Privacy</Link>
              <Link to="/legal" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
