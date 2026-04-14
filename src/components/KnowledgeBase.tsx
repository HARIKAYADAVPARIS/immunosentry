import { BookOpen, Info, Target, Zap, ShieldCheck } from "lucide-react";

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
    title: "Genetic Predisposition (PRSAD)",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    description: "Polygenic Risk Scores for Autoimmune Disease (PRSAD) identify patients with high germline susceptibility to early ICI discontinuation (within 90 days), particularly in combination therapies.",
    evidence: "The GeRI Cohort study (n=1,302, NSCLC) identified a 4.8x higher discontinuation rate in the top quintile of PRSAD risk."
  },
  {
    title: "Explainable AI (XAI)",
    icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    description: "Healthcare adoption requires 'Glass Box' models. ImmunoSentry provides an Evidence Trace for every prediction, mapping patient data directly to clinical citations.",
    evidence: "The WHO Guidance on AI for Health (2021) emphasizes transparency and explainability as core ethical principles."
  }
];

export function KnowledgeBase() {
  return (
    <section id="knowledge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-display">Biomarker Knowledge Base</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Understanding the biological drivers behind immune-related adverse events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BIOMARKERS.map((b, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {b.description}
              </p>
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase mb-2">
                  <BookOpen className="w-3 h-3" /> Clinical Evidence
                </div>
                <p className="text-xs text-gray-500 italic">
                  {b.evidence}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-indigo-900 rounded-3xl text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">The Balancing Act</h3>
            <p className="text-indigo-100 leading-relaxed">
              Research shows a positive association between the development of irAEs and anti-tumour responses. 
              This "cryptic harm" is often a sign of a robust immune reaction where self-reactive T cells infiltrate both tumours and healthy organs. 
              The goal of ImmunoSentry is to help clinicians navigate this delicate balance.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
