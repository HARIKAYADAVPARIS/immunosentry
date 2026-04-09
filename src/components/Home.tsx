import { Header } from "./Header";
import { RiskAssessment } from "./RiskAssessment";
import { KnowledgeBase } from "./KnowledgeBase";
import { BusinessModel } from "./BusinessModel";
import { ValidationResult } from "./ValidationResult";
import { RealWorldValidation } from "./RealWorldValidation";
import { InterventionEngine } from "./InterventionEngine";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Activity, Microscope, Briefcase, Database, Globe, Zap, BarChart3, ChevronDown, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-white">
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
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6 font-display">
                  Predicting <span className="text-indigo-600">irAEs</span> & Survival Outcomes.
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-2">
                  ImmunoSentry leverages ESMO 2025 clinical data, genetic HLA alleles, and gut microbial abundance to provide <span className="text-indigo-600 font-bold">Trial Rescue Audits</span> and <span className="text-indigo-600 font-bold">Diagnostic Interpretation</span> for global oncology pipelines.
                </p>
                <p className="text-lg text-indigo-600 font-medium mb-10">
                  The only platform combining HLA genetics, gut microbiome signatures, and a deterministic cytokine cascade simulator for steroid intervention timing in ICI therapy.
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
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">Cytokine Cascade Simulator</h3>
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
                    <h3 className="font-bold text-gray-900 mb-2 font-display">{feature.label}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview Section */}
        <section id="overview" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 font-display">Platform Overview</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight font-display">The ImmunoSentry <span className="text-indigo-600">Ecosystem</span>.</h3>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
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
                  link: "#knowledge",
                  icon: <Microscope className="w-6 h-6" />
                },
                { 
                  title: "Business Model", 
                  desc: "Strategic CDx royalties and Trial Rescue Audit frameworks.",
                  link: "#business",
                  icon: <Briefcase className="w-6 h-6" />
                }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.link}
                  className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                    Explore Section <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <RiskAssessment />
        <InterventionEngine />
        <RealWorldValidation />
        <ValidationResult />

        {/* Trust & Transparency Section */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 font-display">Deployment Readiness</h2>
                <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 font-display">
                  Built for <span className="text-indigo-600">Clinical Adoption</span>.
                </h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Healthcare adoption of AI is only possible when models are transparent, verifiable, and explainable. ImmunoSentry is designed from the ground up to meet these requirements.
                </p>
                
                <div className="space-y-6">
                  {[
                    { 
                      title: "Explainable by Design", 
                      desc: "Every prediction includes SHAP-based feature attribution and clinical evidence traces.",
                      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
                    },
                    { 
                      title: "Verifiable Benchmarks", 
                      desc: "Validated against TCGA and cBioPortal datasets with published AUC metrics.",
                      icon: <Database className="w-6 h-6 text-indigo-600" />
                    },
                    { 
                      title: "Regulatory Alignment", 
                      desc: "Designed to align with WHO and ESMO guidelines for AI in oncology.",
                      icon: <Activity className="w-6 h-6 text-indigo-600" />
                    },
                    { 
                      title: "Data Sovereignty", 
                      desc: "Supports on-premise and private cloud (VPC) deployment for maximum data security.",
                      icon: <Globe className="w-6 h-6 text-indigo-600" />
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 font-display">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
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

        <KnowledgeBase />
        <BusinessModel />
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 opacity-50">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-8 h-8" referrerPolicy="no-referrer" />
              <span className="text-lg font-bold text-gray-900 tracking-wide font-display">
                Immuno<span className="text-indigo-600">Sentry</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/strategy" className="text-xs font-bold text-indigo-600 hover:underline">
                Strategic Roadmap
              </Link>
              <Link to="/legal" className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal" className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4 max-w-2xl mx-auto">
            ImmunoSentry helps pharma R&D teams navigate this delicate balance — identifying which patients can safely remain on therapy and which require immediate intervention.
          </p>
          <p className="text-xs text-gray-400">
            © 2026 ImmunoSentry SAS. Based on Nature Communications (2022) 13:392 and ESMO TAT 2025 Abstracts 3P/4P.
          </p>
          <p className="text-[10px] text-gray-400 mt-4 max-w-md mx-auto">
            Disclaimer: This is a research-based predictive tool for pharmaceutical R&D intelligence. Clinical decisions should be made by qualified medical professionals.
          </p>
        </div>
      </footer>
    </div>
  );
}
