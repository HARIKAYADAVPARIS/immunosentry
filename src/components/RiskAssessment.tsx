import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  AlertTriangle, 
  CheckCircle2, 
  Loader2, 
  Microscope, 
  Dna, 
  Stethoscope,
  ChevronRight,
  RefreshCcw,
  Activity,
  Database
} from "lucide-react";
import { analyzeRisk } from "../lib/gemini";
import { cn } from "../lib/utils";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

const DRUGS = [
  "Pembrolizumab",
  "Nivolumab",
  "Atezolizumab",
  "Durvalumab",
  "Ipilimumab",
  "Nivolumab/Ipilimumab",
  "Durvalumab/Tremelimumab"
];

const CANCER_TYPES = [
  "NSCLC",
  "Melanoma",
  "Urothelial",
  "Renal Cell Carcinoma",
  "Other"
];

const HLA_OPTIONS = [
  "HLA-B*27",
  "HLA-DRB1*03",
  "HLA-DQB1*02",
  "HLA-A*02",
  "HLA-B*51"
];

export function RiskAssessment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    drug: DRUGS[0],
    cancerType: CANCER_TYPES[0],
    hlaAlleles: [] as string[],
    microbiome: {
      faecalibacterium: 50,
      bifidobacterium: 50
    },
    age: 65,
    gender: "Male",
    priorSurgery: false,
    tumorGrade: "G2",
    charlsonScore: 0
  });

  const handleToggleHLA = (hla: string) => {
    setFormData(prev => ({
      ...prev,
      hlaAlleles: prev.hlaAlleles.includes(hla)
        ? prev.hlaAlleles.filter(h => h !== hla)
        : [...prev.hlaAlleles, hla]
    }));
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const analysis = await analyzeRisk({
        drug: formData.drug,
        cancerType: formData.cancerType,
        hlaAlleles: formData.hlaAlleles,
        microbiomeProfile: formData.microbiome,
        age: formData.age,
        gender: formData.gender,
        priorSurgery: formData.priorSurgery,
        tumorGrade: formData.tumorGrade,
        charlsonScore: formData.charlsonScore
      });
      setResult(analysis);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  };

  const radarData = result ? [
    { subject: 'Colitis', A: result.riskScore * 0.8, fullMark: 100 },
    { subject: 'Pneumonitis', A: result.riskScore * 0.6, fullMark: 100 },
    { subject: 'Hepatitis', A: result.riskScore * 0.4, fullMark: 100 },
    { subject: 'Endocrine', A: result.riskScore * 0.7, fullMark: 100 },
    { subject: 'Dermatologic', A: result.riskScore * 0.5, fullMark: 100 },
  ] : [];

  return (
    <section id="assessment" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Risk Assessment</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Predictive <span className="text-indigo-600">Biomarker Analysis</span>.</h3>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Enter patient clinical and genetic data to generate a high-fidelity risk profile for immunotherapy toxicity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div className="space-y-8">
            <div className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 font-display">
                <Microscope className="w-6 h-6 text-indigo-600" /> Patient Profile
              </h2>
              
              <div className="space-y-6">
                {/* Drug Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Immunotherapy Drug</label>
                  <select 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none cursor-pointer font-medium"
                    value={formData.drug}
                    onChange={(e) => setFormData({ ...formData, drug: e.target.value })}
                  >
                    {DRUGS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                {/* Cancer Type */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Cancer Type</label>
                  <select 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none cursor-pointer font-medium"
                    value={formData.cancerType}
                    onChange={(e) => setFormData({ ...formData, cancerType: e.target.value })}
                  >
                    {CANCER_TYPES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* New Clinical Inputs */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Age</label>
                    <input 
                      type="number"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-medium"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Gender</label>
                    <select 
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none cursor-pointer font-medium"
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tumor Grade</label>
                    <select 
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none cursor-pointer font-medium"
                      value={formData.tumorGrade}
                      onChange={(e) => setFormData({ ...formData, tumorGrade: e.target.value })}
                    >
                      <option value="G1">G1 (Well diff)</option>
                      <option value="G2">G2 (Mod diff)</option>
                      <option value="G3">G3 (Poorly diff)</option>
                      <option value="G4">G4 (Undiff)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Charlson Score</label>
                    <input 
                      type="number"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-medium"
                      value={formData.charlsonScore}
                      onChange={(e) => setFormData({ ...formData, charlsonScore: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    id="priorSurgery"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    checked={formData.priorSurgery}
                    onChange={(e) => setFormData({ ...formData, priorSurgery: e.target.checked })}
                  />
                  <label htmlFor="priorSurgery" className="text-sm font-medium text-gray-700">Prior Surgery or Radiotherapy</label>
                </div>

                {/* HLA Alleles */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Dna className="w-4 h-4" /> Genetic Markers (HLA Alleles)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {HLA_OPTIONS.map(hla => (
                      <button
                        key={hla}
                        onClick={() => handleToggleHLA(hla)}
                        className={cn(
                          "px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border",
                          formData.hlaAlleles.includes(hla)
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100"
                            : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300"
                        )}
                      >
                        {hla}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Microbiome Sliders */}
                <div className="space-y-6">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Microbiome Relative Abundance
                  </label>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>Faecalibacterium prausnitzii</span>
                      <span className="font-mono text-indigo-600">{formData.microbiome.faecalibacterium}%</span>
                    </div>
                    <input 
                      type="range" 
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      value={formData.microbiome.faecalibacterium}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        microbiome: { ...formData.microbiome, faecalibacterium: parseInt(e.target.value) } 
                      })}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>Bifidobacterium</span>
                      <span className="font-mono text-indigo-600">{formData.microbiome.bifidobacterium}%</span>
                    </div>
                    <input 
                      type="range" 
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      value={formData.microbiome.bifidobacterium}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        microbiome: { ...formData.microbiome, bifidobacterium: parseInt(e.target.value) } 
                      })}
                    />
                  </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-indigo-100 active:scale-[0.98]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Analyzing Biomarkers...
                    </>
                  ) : (
                    <>
                      <Stethoscope className="w-5 h-5" /> Run Risk Assessment
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 bg-red-50 rounded-2xl border border-red-100 shadow-sm"
                >
                  <AlertTriangle className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-base font-medium text-red-900">Analysis Failed</h3>
                  <p className="text-sm text-red-700 mt-2 max-w-xs">
                    {error}
                  </p>
                  <button 
                    onClick={handleAnalyze}
                    className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}

              {!result && !loading && !error && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl border-2 border-dashed border-gray-200"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900">Ready for Analysis</h3>
                  <p className="text-sm text-gray-500 mt-2 max-w-xs">
                    Enter the patient's genetic and microbial data to generate a predictive risk report for irAEs.
                  </p>
                </motion.div>
              )}

              {loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-6" />
                  <h3 className="text-base font-medium text-gray-900">AI Predictive Engine Running</h3>
                  <p className="text-sm text-gray-500 mt-2 max-w-xs">
                    Correlating HLA alleles and gut microbial abundance with clinical trial data...
                  </p>
                </motion.div>
              )}

              {result && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-8"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Risk Assessment Result</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className={cn(
                          "text-4xl font-bold",
                          result.riskLevel === 'High' ? "text-red-600" : 
                          result.riskLevel === 'Moderate' ? "text-amber-600" : "text-emerald-600"
                        )}>
                          {result.riskScore}%
                        </span>
                        <div className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold uppercase",
                          result.riskLevel === 'High' ? "bg-red-50 text-red-700" : 
                          result.riskLevel === 'Moderate' ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                        )}>
                          {result.riskLevel} Risk
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">1-Year Survival</h3>
                      <div className="text-2xl font-bold text-indigo-600 mt-1">
                        {result.survivalProbability}%
                      </div>
                    </div>
                    <button 
                      onClick={() => setResult(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <RefreshCcw className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Visualization */}
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                          name="Risk"
                          dataKey="A"
                          stroke="#4f46e5"
                          fill="#4f46e5"
                          fillOpacity={0.4}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-2 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Organs at Risk
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.organsAtRisk.map((organ: string) => (
                          <span key={organ} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700">
                            {organ}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-xl">
                      <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Recommendations
                      </h4>
                      <ul className="space-y-1">
                        {result.recommendations.slice(0, 3).map((rec: string, i: number) => (
                          <li key={i} className="text-xs text-indigo-900 flex items-start gap-1">
                            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" /> {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-900 text-gray-100 rounded-xl mb-6">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-3">AI Analysis Summary</h4>
                    <p className="text-sm leading-relaxed italic">
                      "{result.analysis}"
                    </p>
                  </div>

                  {/* Feature Importance (SHAP-style) */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">
                      <Activity className="w-4 h-4" /> Feature Attribution (SHAP Weights)
                    </div>
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={result.featureImportance}
                          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                          <XAxis type="number" hide />
                          <YAxis 
                            dataKey="feature" 
                            type="category" 
                            width={100} 
                            tick={{ fill: '#6b7280', fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#818cf8' }}
                          />
                          <Bar dataKey="weight" radius={[0, 4, 4, 0]}>
                            {result.featureImportance?.map((entry: any, index: number) => (
                              <Cell key={`cell-${index}`} fill={entry.weight > 50 ? '#4f46e5' : '#818cf8'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 text-center italic">
                      Higher weights indicate stronger influence on the final risk/survival prediction.
                    </p>
                  </div>

                  {/* Explainable AI: Evidence Trace */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase mb-4 tracking-widest">
                      <Database className="w-4 h-4" /> Explainable AI: Evidence Trace
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {result.evidenceTrace?.map((trace: any, i: number) => (
                        <div key={i} className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50 flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-indigo-900">{trace.factor}</span>
                            <span className="text-[10px] font-medium text-indigo-400 italic">{trace.citation}</span>
                          </div>
                          <p className="text-xs text-indigo-700 leading-relaxed">{trace.impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
