import { GoogleGenAI, Type } from "@google/genai";

export async function analyzeRisk(data: {
  drug: string;
  hlaAlleles: string[];
  microbiomeProfile: {
    faecalibacterium: number;
    bifidobacterium: number;
  };
  cancerType: string;
  age: number;
  gender: string;
  priorSurgery: boolean;
  tumorGrade: string;
  charlsonScore: number;
}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "undefined") {
    console.error("GEMINI_API_KEY is missing or invalid.");
    throw new Error("GEMINI_API_KEY is not defined. Please set it in the Secrets panel (Settings > Secrets).");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an AI oncology assistant specializing in Immune-related Adverse Events (irAEs) and Survival Outcomes for Immune-checkpoint Inhibitors (ICIs).
    Based on the following patient data and clinical research (Nature Communications 2022, 13:392 AND ESMO 2025 Abstracts 3P/4P), provide a risk assessment.

    Patient Data:
    - Immunotherapy Drug: ${data.drug}
    - Cancer Type: ${data.cancerType}
    - Age: ${data.age}
    - Gender: ${data.gender}
    - Prior Surgery: ${data.priorSurgery ? "Yes" : "No"}
    - Tumor Grade: ${data.tumorGrade}
    - Charlson-Deyo Score: ${data.charlsonScore}
    - HLA Alleles: ${data.hlaAlleles.length > 0 ? data.hlaAlleles.join(", ") : "None detected"}
    - Microbiome Profile:
      - Faecalibacterium prausnitzii: ${data.microbiomeProfile.faecalibacterium}% abundance
      - Bifidobacterium: ${data.microbiomeProfile.bifidobacterium}% abundance

    Research Context (ESMO 2025 Updates):
    - Abstract 3P (Melanoma): ML models predicted irAEs with 92% accuracy. Key predictors: increasing age, female gender, and combination therapy.
    - Abstract 4P (mRCC): CatBoost models predicted Overall Survival (OS) with AUC 0.87. Key predictors: tumor grade, prior surgery, and age.
    - Nature 2022: Faecalibacterium abundance lowers colitis risk; HLA alleles correlate with organ-specific irAEs.

    Task:
    1. Calculate a risk score (0-100) for irAEs.
    2. Estimate a 1-year survival probability (0-100) based on mRCC/Melanoma data if applicable.
    3. Identify specific organs at risk.
    4. Provide a detailed "Evidence Trace" explaining exactly which patient factors (HLA, microbiome, age, etc.) led to the risk/survival scores, citing the relevant research (Nature 2022 or ESMO 2025).
    5. Provide clinical recommendations.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskScore: { type: Type.NUMBER },
            survivalProbability: { type: Type.NUMBER },
            riskLevel: { type: Type.STRING, enum: ["Low", "Moderate", "High"] },
            organsAtRisk: { type: Type.ARRAY, items: { type: Type.STRING } },
            analysis: { type: Type.STRING },
            evidenceTrace: { 
              type: Type.ARRAY, 
              items: { 
                type: Type.OBJECT,
                properties: {
                  factor: { type: Type.STRING },
                  impact: { type: Type.STRING },
                  citation: { type: Type.STRING }
                },
                required: ["factor", "impact", "citation"]
              } 
            },
            featureImportance: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  feature: { type: Type.STRING },
                  weight: { type: Type.NUMBER, description: "Importance weight from 0-100" }
                },
                required: ["feature", "weight"]
              }
            },
            recommendations: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["riskScore", "survivalProbability", "riskLevel", "organsAtRisk", "analysis", "evidenceTrace", "featureImportance", "recommendations"]
        }
      },
    });

    if (!response.text) {
      throw new Error("Empty response from AI model");
    }

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
