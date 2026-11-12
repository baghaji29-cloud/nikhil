export interface BulletRewriteResult {
  original: string;
  enhanced: string;
  score: number;
  tip: string;
  actionVerb: string;
}

export const sampleRewrites: BulletRewriteResult[] = [
  {
    original: 'Managed projects across the team and helped ship features on time.',
    enhanced: 'Led a 6-person squad to ship 3 critical production releases ahead of schedule, lifting user activation 14% quarter over quarter.',
    score: 94,
    tip: 'Lead with team size and quantified launch output within the first 6 words.',
    actionVerb: 'Led',
  },
  {
    original: 'Responsible for fixing bugs and improving frontend speed on React app.',
    enhanced: 'Optimized bundle size by 38% and eradicated 45+ critical UI latency bottlenecks using code-splitting and memoization in React.',
    score: 96,
    tip: 'Quantify performance uplift (%) and specific engineering techniques applied.',
    actionVerb: 'Optimized',
  },
  {
    original: 'Created a machine learning model to predict student grades with Python.',
    enhanced: 'Engineered an ensemble Gradient Boosted pipeline achieving 91.4% classification precision, cutting manual evaluation triage by 12 hours/week.',
    score: 95,
    tip: 'Name the algorithmic family and measure operational hours saved.',
    actionVerb: 'Engineered',
  },
  {
    original: 'Built backend REST API endpoints using Express and MongoDB.',
    enhanced: 'Architected 18 high-throughput RESTful microservices with Redis caching, sustaining 2,500 RPS at sub-40ms P99 latency.',
    score: 97,
    tip: 'Pair service count with throughput (RPS) and latency SLA metrics.',
    actionVerb: 'Architected',
  },
];

export function enhanceBulletPoint(input: string): BulletRewriteResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return sampleRewrites[0];
  }

  // Check matching sample
  const found = sampleRewrites.find(s => s.original.toLowerCase().includes(trimmed.toLowerCase()) || trimmed.toLowerCase().includes(s.original.toLowerCase()));
  if (found) return found;

  // Smart heuristic transformation
  let enhanced = trimmed;
  let actionVerb = 'Spearheaded';

  // Replace passive phrases
  enhanced = enhanced
    .replace(/^worked on\b/i, 'Spearheaded development of')
    .replace(/^helped\b/i, 'Collaborated cross-functionally to accelerate')
    .replace(/^responsible for\b/i, 'Orchestrated end-to-end execution of')
    .replace(/^made a\b/i, 'Engineered a resilient')
    .replace(/^did\b/i, 'Delivered comprehensive')
    .replace(/^created\b/i, 'Architected and deployed');

  // Add measurable outcome if missing
  if (!/\b(\d+%|\d+x|\$\d+|\b\d+\b)/.test(enhanced)) {
    enhanced = `${enhanced}, delivering an estimated 28% efficiency gain and accelerating deployment cycles by 3 weeks.`;
  }

  const words = enhanced.split(' ');
  actionVerb = words[0] || 'Engineered';

  return {
    original: input,
    enhanced,
    score: 93,
    tip: 'Strengthened with assertive action verb, explicit scope, and quantifiable outcome metrics.',
    actionVerb,
  };
}
