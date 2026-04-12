import { motion } from "motion/react";
import { BookOpen, Info, Target, Zap, ShieldCheck, ArrowLeft, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const BIOMARKERS = [
  {
    title: "HLA Alleles",
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    description: "Human Leukocyte Antigen (HLA) genes regulate the immune system. ImmunoSentry's population-aware models account for global HLA diversity, ensuring high predictive accuracy across diverse ethnic cohorts in Phase III trials.",
    evidence: "Hasan Ali et al. (2019) identified HLA variation as a key predictor of checkpoint inhibitor toxicities."
  },
  {
    title: "Gut Microbiome",
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    description: "The abundance of anti-inflammatory species like Faecalibacterium prausnitzii promotes regulatory T-cell sequestration, potentially mitigating intestinal inflammation.",
    evidence: "Routy et al. (2018) demonstrated that gut microbial composition influences both anti-tumor response and irAE severity."
  },
  {
    title: "Clinical Predictors (ESMO 2025)",
    icon: <Info className="w-6 h-6 text-emerald-600" />,
    description: "Machine learning models (CatBoost, Ensemble) now integrate age, gender, tumor grade, and surgical history to predict irAEs with 92% accuracy and survival with 0.87 AUC.",
    evidence: "ESMO TAT 2025 (Abstracts 3P/4P) consolidated the role of AI in informing clinical decision-making for ICIs."
  },
  {
    title: "Explainable AI (XAI)",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    description: "Healthcare adoption requires 'Glass Box' models. ImmunoSentry provides an Evidence Trace for every prediction, mapping patient data directly to clinical citations.",
    evidence: "The WHO Guidance on AI for Health (2021) emphasizes transparency and explainability as core ethical principles."
  }
];

export function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="w-10 h-10" referrerPolicy="no-referrer" />
              <span className="text-xl font-bold text-gray-900 tracking-wide">
                Immuno<span className="text-indigo-600">Sentry</span>
              </span>
            </Link>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-3 h-3" /> Clinical Intelligence
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-6">
              Biomarker <span className="text-indigo-600">Knowledge Base</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Understanding the biological drivers behind immune-related adverse events and survival outcomes in immunotherapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {BIOMARKERS.map((b, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {b.description}
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase mb-3">
                    <BookOpen className="w-3 h-3" /> Clinical Evidence
                  </div>
                  <p className="text-sm text-gray-500 italic leading-relaxed">
                    {b.evidence}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-12 bg-indigo-900 rounded-[3rem] text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl font-bold mb-6">The Balancing Act</h3>
              <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                Research shows a positive association between the development of irAEs and anti-tumour responses. 
                This "cryptic harm" is often a sign of a robust immune reaction where self-reactive T cells infiltrate both tumours and healthy organs. 
              </p>
              <p className="text-lg text-indigo-100 leading-relaxed">
                The goal of ImmunoSentry is to help clinicians navigate this delicate balance — identifying which patients can safely remain on therapy and which require immediate intervention.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          </div>
        </motion.div>
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/immunosentry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
            © 2026 ImmunoSentry SAS · ESMO 2025 · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
