export const BASELINE = {
  IFNγ_normal: 60, // pg/ml
  IL6_pre_storm: 50, // pg/ml
  IL6_storm_threshold: 200, // explosion point
  lung_damage_safe: 2.0
};

export const BOOSTERS = {
  HLA_B27: 0.25, // T-cell sensitivity
  low_faecalibacterium: 0.30 // macrophage response
};

export const ICI_DOSE: Record<string, number> = {
  nivo_ipi: 3.0,
  mono_nivo: 1.5,
  cemiplimab: 1.8,
  pembrolizumab: 1.6,
  atezolizumab: 1.4,
  durvalumab: 1.5
};

export interface Patient {
  id: number;
  age: number;
  therapy: string;
  HLA_B27: number;
  low_faecalibacterium: number;
}

export interface TimelineEntry {
  day: number;
  IFNγ: number;
  IL6: number;
  amplification: number;
  lung_damage: number;
  risk: number;
}

export function cascadeSimulation(patient: Patient): TimelineEntry[] {
  const timeline: TimelineEntry[] = [];
  
  // 28-day trial cycle
  for (let day = 1; day <= 28; day++) {
    // T-CELL ACTIVATION (Day 1 dominant)
    const tcell_ifnγ = 30 * ICI_DOSE[patient.therapy] * (1 + BOOSTERS.HLA_B27 * patient.HLA_B27);
    
    // MACROPHAGE RESPONSE (Day 3-5 trigger)
    const macro_il6 = Math.max(0, tcell_ifnγ - BASELINE.IL6_pre_storm) * (1 + BOOSTERS.low_faecalibacterium * patient.low_faecalibacterium);
    
    // CYTOKINE STORM (Day 5+ amplification)
    const storm_level = Math.min(Math.floor(macro_il6 / BASELINE.IL6_storm_threshold), 3);
    const amplification = macro_il6 > BASELINE.IL6_storm_threshold ? Math.pow(2, storm_level) : 1;
    
    // LUNG DAMAGE ACCUMULATION
    const lung_damage = (macro_il6 * amplification / 100) * (day / 7);
    
    // RISK SCORE (0-100%)
    const risk = Math.min(lung_damage / 10, 1.0);
    
    timeline.push({
      day,
      IFNγ: parseFloat(tcell_ifnγ.toFixed(1)),
      IL6: parseFloat(macro_il6.toFixed(1)),
      amplification,
      lung_damage: parseFloat(lung_damage.toFixed(2)),
      risk: parseFloat(risk.toFixed(3))
    });
  }

  return timeline;
}

export function steroidIntervention(timeline: TimelineEntry[], steroidDay: number) {
  const newTimeline = JSON.parse(JSON.stringify(timeline)) as TimelineEntry[];
  const suppression = 0.80; // 80% IL6 reduction
  
  for (let dayIdx = steroidDay - 1; dayIdx < newTimeline.length; dayIdx++) {
    newTimeline[dayIdx].IL6 *= (1 - suppression);
    // Recalculate downstream damage
    const storm_level = Math.min(Math.floor(newTimeline[dayIdx].IL6 / BASELINE.IL6_storm_threshold), 3);
    newTimeline[dayIdx].amplification = newTimeline[dayIdx].IL6 > BASELINE.IL6_storm_threshold ? Math.pow(2, storm_level) : 1;
    newTimeline[dayIdx].lung_damage *= 0.7; // Damage mitigation
    
    // Recalculate risk
    newTimeline[dayIdx].risk = Math.min(newTimeline[dayIdx].lung_damage / 10, 1.0);
  }

  const newRisk = newTimeline[newTimeline.length - 1].risk;
  const originalRisk = timeline[timeline.length - 1].risk;
  const reduction = originalRisk > 0 ? parseFloat(((1 - (newRisk / originalRisk)) * 100).toFixed(1)) : 0;
  
  return { newRisk, reduction, newTimeline };
}

export function explainPatient(timeline: TimelineEntry[], patient: Patient) {
  // Agent contributions (mathematical breakdown)
  const tcell_contrib = (timeline[0].IFNγ - BASELINE.IFNγ_normal) / BASELINE.IFNγ_normal;
  const hla_contrib = BOOSTERS.HLA_B27 * patient.HLA_B27;
  const macro_contrib = (timeline[4].IL6 - BASELINE.IL6_storm_threshold) / BASELINE.IL6_storm_threshold;
  const storm_contrib = (timeline[timeline.length - 1].amplification - 1) / 3; // Max 3 levels

  return {
    T_cell_activation: Math.round(tcell_contrib * 100),
    HLA_B27: Math.round(hla_contrib * 100),
    Macrophage_IL6: Math.round(macro_contrib * 100),
    Cytokine_storm: Math.round(storm_contrib * 100)
  };
}

export function generateCohort(n = 500) {
  const cohort = [];
  for (let i = 0; i < n; i++) {
    const patient: Patient = {
      id: i + 1,
      age: Math.floor(Math.random() * (75 - 45 + 1)) + 45,
      therapy: Math.random() < 0.4 ? "nivo_ipi" : "mono_nivo",
      HLA_B27: Math.random() < 0.1 ? 1 : 0,
      low_faecalibacterium: Math.random() < 0.3 ? 1 : 0
    };
    const timeline = cascadeSimulation(patient);
    cohort.push({ id: patient.id, risk: timeline[timeline.length - 1].risk, patient });
  }
  return cohort;
}
