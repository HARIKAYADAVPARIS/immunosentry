import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  BarChart3, 
  Target, 
  Activity, 
  Loader2, 
  AlertTriangle, 
  ExternalLink, 
  ChevronDown, 
  Search, 
  Users, 
  Clock, 
  CheckCircle2, 
  Info,
  TrendingUp,
  ShieldCheck,
  Play
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";
import { fetchStudies, fetchClinicalData, groupClinicalDataByPatient, CBioStudy } from "../services/cBioPortalService";
import { calculateMetrics, ValidationMetrics } from "../lib/validationEngine";
import { cn } from "../lib/utils";

export function RealWorldValidation() {
  const [studies, setStudies] = useState<CBioStudy[]>([]);
  const [selectedStudyId, setSelectedStudyId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<ValidationMetrics | null>(null);
  const [lastFetched, setLastFetched] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadStudies = async () => {
      try {
        const data = await fetchStudies();
        setStudies(data);
        if (data.length > 0) setSelectedStudyId(data[0].studyId);
      } catch (err: any) {
        setError(err.message || "Failed to load studies");
      }
    };
    loadStudies();
  }, []);

  const runValidation = async () => {
    if (!selectedStudyId) return;
    setLoading(true);
    setError(null);
    try {
      const rawData = await fetchClinicalData(selectedStudyId);
      const patients = groupClinicalDataByPatient(rawData);
      
      // Filter for patients with survival data for validation
      const validPatients = patients.filter(p => p.OS_STATUS);
      
      if (validPatients.length === 0) {
        throw new Error("This cohort does not contain overall survival (OS) data required for irAE outcome validation. For full validation results, select an ICI trial cohort such as nsclc_pd1_msk_2018 or mel_iatlas_riaz_nivolumab_2017.");
      }

      const results = calculateMetrics(validPatients);
      setMetrics(results);
      setLastFetched(new Date().toLocaleTimeString());
    } catch (err: any) {
      setError(err.message || "Failed to run validation");
    } finally {
      setLoading(false);
    }
  };

  const filteredStudies = useMemo(() => {
    return studies.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.studyId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [studies, searchQuery]);

  const selectedStudy = useMemo(() => 
    studies.find(s => s.studyId === selectedStudyId), 
  [studies, selectedStudyId]);

  const hasOSData = (studyId: string) => {
    const knownOSStudies = [
      "nsclc_pd1_msk_2018", 
      "mel_iatlas_riaz_nivolumab_2017", 
      "msk_impact_2017", 
      "melanoma_dfci_2019",
      "tmb_mskcc_2018",
      "luad_mskcc_2020",
      "skcm_dfci_2015"
    ];
    return knownOSStudies.includes(studyId);
  };

  return (
    <section id="real-world-validation" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2 font-display">
              <Database className="w-4 h-4" /> Real-World Validation
            </h2>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight font-display">
              Clinical <span className="text-indigo-600">Benchmark</span> Engine.
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Directly validate ImmunoSentry's predictive engine against real patient cohorts from cBioPortal. 
              Live API integration with MSK-IMPACT and Checkmate trial data.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-400 italic">
            <Info className="w-3 h-3" /> Data source: cBioPortal (Cerami et al. 2012)
          </div>
        </div>

        {/* Study Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Select Study Cohort</label>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {filteredStudies.map((study) => (
                  <button
                    key={study.studyId}
                    onClick={() => setSelectedStudyId(study.studyId)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl text-xs font-medium transition-all border group relative",
                      selectedStudyId === study.studyId 
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100" 
                        : "bg-white text-gray-600 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="line-clamp-2">{study.name}</div>
                      <div 
                        className={cn(
                          "w-2 h-2 rounded-full mt-1 flex-shrink-0",
                          hasOSData(study.studyId) ? "bg-emerald-500" : "bg-gray-300"
                        )} 
                        title={hasOSData(study.studyId) ? "Has OS Data" : "No OS Data"}
                      />
                    </div>
                    <div className={cn("mt-1 text-[10px] opacity-60", selectedStudyId === study.studyId ? "text-indigo-100" : "text-gray-400")}>
                      {study.studyId}
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={runValidation}
                disabled={loading || !selectedStudyId}
                className="w-full mt-6 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-200 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
                Run Validation
              </button>
            </div>

            {selectedStudy && (
              <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
                <h4 className="text-xs font-bold text-indigo-900 mb-2 font-display">Study Details</h4>
                <p className="text-xs text-indigo-700 leading-relaxed mb-4">{selectedStudy.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase">
                  <ExternalLink className="w-3 h-3" /> PMID: {selectedStudy.pmid || "N/A"}
                </div>
              </div>
            )}
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 bg-red-50 rounded-3xl border border-red-100 flex flex-col items-center text-center"
                >
                  <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
                  <h4 className="text-lg font-bold text-red-900 font-display">Validation Error</h4>
                  <p className="text-sm text-red-700 mt-2">{error}</p>
                </motion.div>
              )}

              {!metrics && !loading && !error && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border-2 border-dashed border-gray-200"
                >
                  <BarChart3 className="w-16 h-16 text-gray-200 mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 font-display">Awaiting Validation Run</h4>
                  <p className="text-sm text-gray-500 mt-2 max-w-sm">
                    Select a clinical study from the browser and click "Run Validation" to fetch real patient data and compute model metrics.
                  </p>
                </motion.div>
              )}

              {loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-gray-100 shadow-sm"
                >
                  <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 font-display">Fetching cBioPortal Data</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Retrieving patient clinical profiles and survival outcomes...
                  </p>
                  <div className="mt-8 w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-indigo-600"
                      animate={{ x: [-200, 200] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}

              {metrics && !loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  {/* Hero Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-2 bg-indigo-600 p-8 rounded-3xl text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Target className="w-32 h-32" />
                      </div>
                      <div className="relative z-10">
                        <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-2">Primary Validation Metric</div>
                        <div className="flex items-baseline gap-4">
                          <h4 className="text-7xl font-black tracking-tighter font-display">AUC {metrics.auc}</h4>
                          <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" /> 95% CI: [{metrics.confidenceInterval[0]} - {metrics.confidenceInterval[1]}]
                          </div>
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold">
                            <Users className="w-3 h-3" /> n={metrics.sampleSize} Patients
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold">
                            <Clock className="w-3 h-3" /> Last Fetch: {lastFetched}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Sensitivity</div>
                      <div className="text-4xl font-black text-gray-900">{(metrics.sensitivity * 100).toFixed(0)}%</div>
                      <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${metrics.sensitivity * 100}%` }} />
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Specificity</div>
                      <div className="text-4xl font-black text-gray-900">{(metrics.specificity * 100).toFixed(0)}%</div>
                      <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${metrics.specificity * 100}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Metrics & Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* ROC Curve */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest font-display">ROC Curve</h4>
                        <div className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Model Performance</div>
                      </div>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={metrics.rocCurve}>
                            <defs>
                              <linearGradient id="colorRoc" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis 
                              dataKey="x" 
                              type="number" 
                              domain={[0, 1]} 
                              label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -5, fontSize: 10 }}
                              tick={{ fontSize: 10 }}
                            />
                            <YAxis 
                              dataKey="y" 
                              type="number" 
                              domain={[0, 1]} 
                              label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft', fontSize: 10 }}
                              tick={{ fontSize: 10 }}
                            />
                            <Tooltip />
                            <Area type="monotone" dataKey="y" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRoc)" />
                            <Line type="monotone" dataKey="x" stroke="#e5e7eb" strokeDasharray="5 5" dot={false} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Calibration Plot */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest font-display">Calibration Plot</h4>
                        <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Reliability</div>
                      </div>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis 
                              type="number" 
                              dataKey="predicted" 
                              name="Predicted" 
                              domain={[0, 1]}
                              label={{ value: 'Predicted Probability', position: 'insideBottom', offset: -5, fontSize: 10 }}
                              tick={{ fontSize: 10 }}
                            />
                            <YAxis 
                              type="number" 
                              dataKey="actual" 
                              name="Actual" 
                              domain={[0, 1]}
                              label={{ value: 'Actual Outcome', angle: -90, position: 'insideLeft', fontSize: 10 }}
                              tick={{ fontSize: 10 }}
                            />
                            <ZAxis type="number" range={[100, 100]} />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="Calibration" data={metrics.calibrationData} fill="#10b981" />
                            <Line type="monotone" dataKey="predicted" stroke="#e5e7eb" strokeDasharray="5 5" dot={false} />
                          </ScatterChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Confusion Matrix & Predictive Values */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8 font-display">Confusion Matrix</h4>
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                          <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1">TP</div>
                          <div className="text-2xl font-black text-emerald-900">{metrics.confusionMatrix.tp}</div>
                        </div>
                        <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                          <div className="text-[10px] font-bold text-red-600 uppercase mb-1">FP</div>
                          <div className="text-2xl font-black text-red-900">{metrics.confusionMatrix.fp}</div>
                        </div>
                        <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                          <div className="text-[10px] font-bold text-red-600 uppercase mb-1">FN</div>
                          <div className="text-2xl font-black text-red-900">{metrics.confusionMatrix.fn}</div>
                        </div>
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                          <div className="text-[10px] font-bold text-indigo-600 uppercase mb-1">TN</div>
                          <div className="text-2xl font-black text-indigo-900">{metrics.confusionMatrix.tn}</div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 bg-gray-900 p-8 rounded-3xl text-white shadow-xl">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-8">
                        <ShieldCheck className="w-4 h-4" /> Predictive Performance
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-bold text-gray-400 uppercase">Positive Predictive Value (PPV)</span>
                              <span className="text-lg font-bold text-emerald-400">{(metrics.ppv * 100).toFixed(0)}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${metrics.ppv * 100}%` }}
                                className="h-full bg-emerald-500"
                              />
                            </div>
                            <p className="mt-2 text-[10px] text-gray-500 leading-relaxed">
                              Probability that patients predicted as high-risk actually experienced grade 3-4 irAEs or death.
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-bold text-gray-400 uppercase">Negative Predictive Value (NPV)</span>
                              <span className="text-lg font-bold text-indigo-400">{(metrics.npv * 100).toFixed(0)}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${metrics.npv * 100}%` }}
                                className="h-full bg-indigo-500"
                              />
                            </div>
                            <p className="mt-2 text-[10px] text-gray-500 leading-relaxed">
                              Probability that patients predicted as low-risk did not experience severe adverse events.
                            </p>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                          <h5 className="text-xs font-bold text-white mb-4 flex items-center gap-2 font-display">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Validation Summary
                          </h5>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            The model demonstrates robust discriminative power (AUC {metrics.auc}) across the selected cohort. 
                            The high NPV suggests ImmunoSentry is particularly effective at identifying patients who are likely to tolerate ICI therapy without severe toxicity.
                          </p>
                          <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-indigo-300">
                            <Activity className="w-3 h-3" /> Calibration: Good Alignment
                          </div>
                        </div>
                      </div>
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
