import { useState } from "react";
import { 
  Building2, 
  Users, 
  CreditCard, 
  TrendingUp, 
  ShieldCheck, 
  Globe,
  Briefcase,
  Layers,
  Calculator,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const REVENUE_STREAMS = [
  {
    title: "Pharma Trial Enrichment",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    description: "Patient stratification layer for ICI clinical trial enrollment. Pharma R&D teams use ImmunoSentry to identify high irAE-risk patients before randomization — enabling smarter trial design, fewer protocol amendments, and faster regulatory approval.",
    details: "Project Fee: €200k–500k per trial"
  },
  {
    title: "Companion Diagnostic Licensing",
    icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
    description: "Per-test royalty model with diagnostic labs providing HLA and microbiome sequencing. ImmunoSentry acts as the interpretive layer for raw sequencing data.",
    details: "Royalty: €30–80 per test"
  },
  {
    title: "Real World Evidence Data",
    icon: <Globe className="w-6 h-6 text-amber-600" />,
    description: "Aggregated anonymized data from trial partnerships provides real-world ICI toxicity intelligence. Pharma companies pay for dataset access to inform pipeline decisions.",
    details: "Dataset Deal: €500k–2M per dataset deal"
  }
];

const VALUE_PROPS = [
  {
    label: "Cost Reduction",
    desc: "Early prediction of high-grade irAEs reduces emergency hospitalizations and ICU stays.",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    label: "Patient Outcomes",
    desc: "Optimized steroid management and drug selection based on individual biomarker profiles.",
    icon: <Users className="w-5 h-5" />
  },
  {
    label: "Data Intelligence",
    desc: "Aggregated, anonymized data provides insights into real-world ICI toxicity patterns.",
    icon: <Globe className="w-5 h-5" />
  }
];

export function BusinessModel() {
  const [cohortSize, setCohortSize] = useState(500);
  const [iraeRate, setIraeRate] = useState(20);

  const savings = (cohortSize * (iraeRate / 100) * 0.35 * 45000) / 1000000;

  return (
    <section id="business" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3 h-3" /> Informed by clinical findings from ESMO TAT 2025
            </div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2 font-display">
              <Briefcase className="w-4 h-4" /> Strategic Framework
            </h2>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl font-display">
              Pharma R&D <span className="text-indigo-600">Intelligence</span> at Scale.
            </h3>
            <p className="mt-6 text-xl text-gray-500 leading-relaxed">
              ImmunoSentry serves pharma R&D teams as a precision-medicine layer for immunotherapy clinical trials — predicting critical toxicity events (irAEs) before they compromise clinical trial integrity.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-2xl font-bold text-gray-900">$4.2B+</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Clinical Safety TAM</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {REVENUE_STREAMS.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                {stream.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-display">{stream.title}</h4>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                {stream.description}
              </p>
              <div className="p-5 bg-white rounded-2xl text-xs text-gray-600 font-medium italic border border-gray-100">
                {stream.details}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Calculator className="w-4 h-4" /> Trial ROI Calculator
              </h4>
              <h5 className="text-2xl font-bold text-gray-900 mb-4">Quantifying Economic Impact.</h5>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Estimate the potential savings in clinical trial costs by implementing ImmunoSentry's stratification layer to reduce irAE-related dropouts and protocol amendments.
              </p>
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="text-[10px] font-bold text-indigo-400 uppercase mb-1">Assumption</div>
                <p className="text-[10px] text-indigo-700 italic">
                  Average cost per patient dropout in Phase III ICI trials is estimated at €45,000 (including recruitment, monitoring, and data loss).
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Trial Cohort Size (n)</label>
                  <input 
                    type="range" 
                    min="100" 
                    max="2000" 
                    step="100"
                    value={cohortSize}
                    onChange={(e) => setCohortSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
                    <span>100</span>
                    <span className="text-indigo-600">{cohortSize}</span>
                    <span>2000</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Projected irAE Rate (%)</label>
                  <input 
                    type="range" 
                    min="5" 
                    max="40" 
                    step="5"
                    value={iraeRate}
                    onChange={(e) => setIraeRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
                    <span>5%</span>
                    <span className="text-indigo-600">{iraeRate}%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Projected Trial Savings</div>
                  <div className="text-5xl font-black text-white mb-2">€{savings.toFixed(2)}M</div>
                  <p className="text-xs text-gray-400">Based on 35% reduction in high-grade irAE dropouts.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="text-[10px] font-bold text-indigo-300 uppercase">ROI Ratio: {(savings / 0.25).toFixed(1)}x</div>
                  <div className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Benchmarked Model
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {VALUE_PROPS.map((prop, i) => (
              <div key={i} className="space-y-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  {prop.icon}
                </div>
                <h5 className="text-lg font-bold">{prop.label}</h5>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="h-8 w-auto brightness-0 invert" referrerPolicy="no-referrer" />
            </div>
            <div className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">
              Research tool only · Not a medical device · Not CE marked · Not FDA cleared · GDPR Principles Applied · HIPAA-Aware Architecture · Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
