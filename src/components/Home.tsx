import { Header } from "./Header";
import { RiskAssessment } from "./RiskAssessment";
import { BusinessModel } from "./BusinessModel";
import { ValidationResult } from "./ValidationResult";
import { RealWorldValidation } from "./RealWorldValidation";
import { InterventionEngine } from "./InterventionEngine";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Activity, Microscope, Briefcase, Database, Globe, Zap, BarChart3, ChevronDown, Linkedin, Twitter, Github, Instagram, Target, AlertCircle, TrendingUp, DollarSign, Play, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 antialiased bg-grid">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-6xl font-black text-gray-900 tracking-tight sm:text-8xl mb-8 text-balance font-display leading-[1.1]">
                    Predicting <span className="text-indigo-600">Toxicity</span> <br className="hidden sm:block" /> (irAEs) & Survival.
                  </h1>
                  <p className="text-xl text-gray-500 leading-relaxed mb-6 text-balance max-w-2xl">
                    ImmunoSentry identifies patients at high risk of <strong>Immune-related Adverse Events</strong> before they enter Phase III trials. We enable Pharma R&D teams to rescue failing pipelines and optimize clinical protocols through AI-driven biological simulation.
                  </p>
                  <p className="text-lg text-indigo-600 font-medium mb-12 max-w-2xl border-l-2 border-indigo-100 pl-6 py-2">
                    The only platform combining HLA genetics, microbiome signatures, and mechanistic engine modeling to modernize oncology trial safety — built for the future of IO.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#sandbox" 
                      className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200"
                    >
                      Run Simulator Sandbox <Play className="w-5 h-5" />
                    </motion.a>
                    <Link 
                      to="/methodology" 
                      className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
                    >
                      Scientific White Paper <FileText className="w-5 h-5" />
                    </Link>
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:harikayadavlakshmi@gmail.com?subject=Technical Audit Request"
                      className="px-8 py-4 bg-indigo-50 text-indigo-600 rounded-xl font-bold hover:bg-indigo-100 transition-all flex items-center gap-2 border border-indigo-100"
                    >
                      Request Audit <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(79,70,229,0.15)] border border-gray-100 bg-white p-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-emerald-500/5 pointer-events-none" />
                  <div className="p-8 flex items-center justify-center bg-gray-50/50 min-h-[400px]">
                    <img 
                      src="/logo.svg" 
                      alt="ImmunoSentry Clinical Model" 
                      className="w-[80%] h-auto opacity-80"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {/* Floating Stats or Accents */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100/50 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sandbox Hero Header */}
        <section id="sandbox" className="pt-24 pb-8 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <Play className="w-3 h-3" /> Live Simulator Sandbox
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-6xl font-display">
                  Test the <span className="text-indigo-600">Mechanisms</span>.
                </h2>
                <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                  Experience the dual-core engine of ImmunoSentry. Transition from static Patient Risk Assessment to dynamic Cytokine Cascade Simulation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RiskAssessment />
        <InterventionEngine />

        {/* Economic Impact / Mission Critical Section */}
        <section id="business" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-32 mb-20">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Trial Survival & Pipeline Optimization
                </h2>
                <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl font-display">
                  Quantifying the <span className="text-red-500">Biological Toxicity</span> Gap.
                </h3>
                <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Iatrogenic risk and patient dropout are the leading drivers of oncology trial failure. We translate biological complexity into <span className="text-indigo-600 font-bold">successful regulatory filings</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white border border-red-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <AlertCircle className="w-24 h-24 text-red-600" />
                  </div>
                  <div className="text-4xl font-black text-red-600 mb-2">$2.6B</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Cost of Trial Failure</div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Average cost for a Phase III trial failure. Toxicity (irAEs) is the #1 driver of patient dropout.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 bg-indigo-600 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <DollarSign className="w-24 h-24 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">$100M+</div>
                  <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-4">Annual Pipeline Savings</div>
                  <p className="text-sm text-indigo-100 leading-relaxed">
                    Potential savings per pipeline by identifying high-risk patients <strong>before</strong> randomization.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-8 bg-white border border-emerald-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ShieldCheck className="w-24 h-24 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-black text-emerald-600 mb-2">Accelerated</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Regulatory Path</div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Provide <strong>FDA/EMA</strong> with objective safety data to speed up approval and reduce regulatory roadblocks.
                  </p>
                </motion.div>
              </div>
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
                      Deterministic biological simulation for steroid timing simulation — the only mechanistic irAE engine benchmarked against clinical research findings from ESMO TAT 2025.
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
                  title: "Risk Engine #1", 
                  desc: "Baseline risk attribution via HLA genotype and microbiome analysis.",
                  link: "#assessment",
                  icon: <Activity className="w-6 h-6" />
                },
                { 
                  title: "Simulator Engine #2", 
                  desc: "Cytokine cascade simulator for mechanistic steroid timing optimization.",
                  link: "#intervention-engine",
                  icon: <Zap className="w-6 h-6" />
                },
                { 
                  title: "Real-World Benchmarking", 
                  desc: "Compare your trial cohort against global clinical datasets in real-time.",
                  link: "#real-world-validation",
                  icon: <BarChart3 className="w-6 h-6" />
                },
                { 
                  title: "Trial Survival Metrics", 
                  desc: "Cross-cohort benchmarked AUC 0.84 across MSK-IMPACT and TCGA datasets.",
                  link: "#validation",
                  icon: <Database className="w-6 h-6" />
                },
                { 
                  title: "Scientific Traceability", 
                  desc: "Audit-ready evidence mapping to Nature research and clinical findings.",
                  link: "/methodology",
                  icon: <Microscope className="w-6 h-6" />
                },
                { 
                  title: "Strategic Roadmap", 
                  desc: "The path to revenue, CDx royalties, and biopharma dominance.",
                  link: "/strategy",
                  isExternal: true,
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

        <RealWorldValidation />
        <ValidationResult />

        {/* Trust & Transparency Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Research Integration Readiness</h2>
                <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-8 font-display">
                  Built for <span className="text-indigo-600">Research Integration</span>.
                </h3>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                  Research integration of AI is only possible when models are transparent, verifiable, and explainable. ImmunoSentry is designed from the ground up to meet these requirements.
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
                      desc: "Benchmarked against TCGA and cBioPortal datasets.",
                      icon: <Database className="w-5 h-5 text-indigo-600" />
                    },
                    { 
                      title: "Regulatory Alignment", 
                      desc: "Designed in reference to WHO Guidance on AI for Health (2021) and published clinical research",
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
                      <span className="text-indigo-600 font-bold">[LOG]</span> Research prediction generated for Case #A2-A0ET
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-emerald-600 font-bold">[XAI]</span> Feature importance calculated: Gut Microbiome (0.84)
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-indigo-600 font-bold">[LOG]</span> Evidence trace mapped to Nature Comm. 2022
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-amber-600 font-bold">[FLAG]</span> High irAE risk detected; Flagging for researcher review.
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
                <img src="/logo.svg" alt="ImmunoSentry Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
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
                  <li><a href="#intervention-engine" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Timing Simulation</a></li>
                  <li><a href="#real-world-validation" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Benchmarking</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/strategy" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Strategic Roadmap</Link></li>
                  <li><Link to="/knowledge" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Knowledge Base</Link></li>
                  <li><Link to="/methodology" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Scientific Methodology</Link></li>
                  <li><Link to="/legal" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Legal</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Connect</h4>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/immunosentry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
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
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400">
                © 2026 ImmunoSentry · Specialized R&D Research Platform · Audit-Ready
              </p>
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-relaxed">
                RESEARCH USE ONLY (RUO). ImmunoSentry is a predictive biological simulation tool intended for retrospective analysis and prospective clinical trial design optimization. It is not currently a licensed medical device and should not be used as the sole basis for direct patient diagnostic or therapeutic decisions. All insights are probability-based and mapped from documented clinical research cohorts.
              </div>
            </div>
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
