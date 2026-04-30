import diseaseSymptoms from '@/data/disease_symptoms.json';
import diseasePrecautions from '@/data/disease_precautions.json';

export interface PredictionResult {
  disease: string;
  matchScore: number;
  matchedSymptoms: string[];
  precautions: string[];
}

export function predictDisease(userSymptoms: string[]): PredictionResult[] {
  if (!userSymptoms || userSymptoms.length === 0) return [];

  const results: PredictionResult[] = [];
  const normalizedUserSymptoms = userSymptoms.map(s => s.toLowerCase().trim());

  for (const [disease, symptoms] of Object.entries(diseaseSymptoms)) {
    let matchCount = 0;
    const matched: string[] = [];

    const normalizedDiseaseSymptoms = (symptoms as string[]).map(s => s.toLowerCase().trim());

    for (const us of normalizedUserSymptoms) {
      // Allow partial matches (e.g. "headache" matches "headache" or "severe headache")
      const matchedSymptom = normalizedDiseaseSymptoms.find(ds => ds.includes(us) || us.includes(ds));
      if (matchedSymptom) {
        matchCount++;
        matched.push(matchedSymptom);
      }
    }

    if (matchCount > 0) {
      const precautions = (diseasePrecautions as any)[disease] || [];
      results.push({
        disease,
        matchScore: matchCount / normalizedDiseaseSymptoms.length, // Score based on how many characteristic symptoms match
        matchedSymptoms: Array.from(new Set(matched)), // Unique
        precautions
      });
    }
  }

  // Sort by highest match count, then by match score (percentage of disease symptoms matched)
  return results.sort((a, b) => {
    if (b.matchedSymptoms.length !== a.matchedSymptoms.length) {
      return b.matchedSymptoms.length - a.matchedSymptoms.length;
    }
    return b.matchScore - a.matchScore;
  });
}
