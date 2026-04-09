const BASE_URL = "https://www.cbioportal.org/api";

export interface CBioStudy {
  studyId: string;
  name: string;
  description: string;
  citation: string;
  pmid?: string;
}

export interface CBioClinicalData {
  patientId: string;
  sampleId: string;
  uniquePatientKey: string;
  uniqueSampleKey: string;
  clinicalAttributeId: string;
  value: string;
}

export async function fetchStudies(): Promise<CBioStudy[]> {
  const cacheKey = "cbioportal_studies";
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  const response = await fetch(`${BASE_URL}/studies`);
  if (!response.ok) throw new Error("Failed to fetch studies from cBioPortal");
  const data = await response.json();
  
  // Filter for immunotherapy/checkpoint related studies
  const keywords = ["pembrolizumab", "nivolumab", "immunotherapy", "checkpoint", "pd-1", "pd-l1", "ctla-4"];
  const filtered = data.filter((s: any) => 
    keywords.some(k => s.name.toLowerCase().includes(k) || s.description?.toLowerCase().includes(k)) ||
    ["msk_impact_2017", "nsclc_pd1_msk_2018", "melanoma_dfci_2019"].includes(s.studyId)
  );

  sessionStorage.setItem(cacheKey, JSON.stringify(filtered));
  return filtered;
}

export async function fetchClinicalData(studyId: string): Promise<CBioClinicalData[]> {
  const cacheKey = `cbioportal_clinical_${studyId}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  const response = await fetch(`${BASE_URL}/studies/${studyId}/clinical-data`);
  if (!response.ok) throw new Error(`Failed to fetch clinical data for study ${studyId}`);
  const data = await response.json();

  sessionStorage.setItem(cacheKey, JSON.stringify(data));
  return data;
}

export function groupClinicalDataByPatient(data: CBioClinicalData[]) {
  const patients: Record<string, any> = {};
  
  data.forEach(item => {
    if (!patients[item.patientId]) {
      patients[item.patientId] = { patientId: item.patientId };
    }
    patients[item.patientId][item.clinicalAttributeId] = item.value;
  });

  return Object.values(patients);
}
