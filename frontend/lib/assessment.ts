/**
 * Rooted Nervous System Assessment
 *
 * A reflective, non-diagnostic, wellness-only self-check used as the
 * pre-signup entry point into the 30-Day High Performance Reset.
 *
 * Scoring is intentionally simple and runs in the browser only.
 * Nothing here is medical advice. Copy and thresholds are written
 * for gentle, supportive reflection, never diagnosis.
 */

export type AnswerLevel = "never" | "rarely" | "sometimes" | "often" | "almostAlways";

export type AnswerOption = {
  id: AnswerLevel;
  label: string;
  value: 0 | 1 | 2 | 3 | 4;
};

export const ANSWER_OPTIONS: readonly AnswerOption[] = [
  { id: "never", label: "Never", value: 0 },
  { id: "rarely", label: "Rarely", value: 1 },
  { id: "sometimes", label: "Sometimes", value: 2 },
  { id: "often", label: "Often", value: 3 },
  { id: "almostAlways", label: "Almost always", value: 4 },
] as const;

export type DomainId =
  | "stressLoad"
  | "activation"
  | "emotionalFatigue"
  | "cognitiveStrain"
  | "physicalExhaustion";

export type Domain = {
  id: DomainId;
  letter: string;
  name: string;
  short: string;
  description: string;
};

export const DOMAINS: readonly Domain[] = [
  {
    id: "stressLoad",
    letter: "A",
    name: "Stress load",
    short: "Mental and emotional load you are carrying day to day.",
    description:
      "How much pressure, responsibility, and mental load your nervous system is carrying right now.",
  },
  {
    id: "activation",
    letter: "B",
    name: "Nervous system activation",
    short: "Capacity to settle, relax, and feel safe in your body.",
    description:
      "How easily your body can step out of high-alert and return to a calm, regulated baseline.",
  },
  {
    id: "emotionalFatigue",
    letter: "C",
    name: "Emotional fatigue",
    short: "Resilience, motivation, and emotional steadiness.",
    description:
      "Whether your emotional resources feel renewable, or whether they are running low.",
  },
  {
    id: "cognitiveStrain",
    letter: "D",
    name: "Cognitive strain",
    short: "Focus, memory, and decision-making capacity.",
    description:
      "How your nervous system load is showing up in your focus, memory, and clarity.",
  },
  {
    id: "physicalExhaustion",
    letter: "E",
    name: "Physical exhaustion",
    short: "Energy, restoration, and physical recovery.",
    description:
      "Whether rest is actually restoring you, or whether your body stays tired and tense.",
  },
] as const;

export type Question = {
  id: string;
  domainId: DomainId;
  prompt: string;
};

export const QUESTIONS: readonly Question[] = [
  { id: "a1", domainId: "stressLoad", prompt: "I feel pressure to always be productive." },
  { id: "a2", domainId: "stressLoad", prompt: "My mind keeps working even when I try to rest." },
  { id: "a3", domainId: "stressLoad", prompt: "I struggle to disconnect from responsibilities." },
  { id: "a4", domainId: "stressLoad", prompt: "I feel mentally overloaded most days." },

  { id: "b1", domainId: "activation", prompt: "I feel tense without knowing why." },
  { id: "b2", domainId: "activation", prompt: "I find it hard to relax fully." },
  { id: "b3", domainId: "activation", prompt: "Small stressors feel overwhelming." },
  { id: "b4", domainId: "activation", prompt: "My body feels on edge." },

  { id: "c1", domainId: "emotionalFatigue", prompt: "I feel emotionally drained." },
  { id: "c2", domainId: "emotionalFatigue", prompt: "I feel detached or numb." },
  { id: "c3", domainId: "emotionalFatigue", prompt: "I become irritated easily." },
  { id: "c4", domainId: "emotionalFatigue", prompt: "Motivation feels harder than before." },

  { id: "d1", domainId: "cognitiveStrain", prompt: "My focus has declined recently." },
  { id: "d2", domainId: "cognitiveStrain", prompt: "I forget small things more often." },
  { id: "d3", domainId: "cognitiveStrain", prompt: "I feel mentally slower." },
  { id: "d4", domainId: "cognitiveStrain", prompt: "Decision-making feels exhausting." },

  { id: "e1", domainId: "physicalExhaustion", prompt: "I wake up tired." },
  { id: "e2", domainId: "physicalExhaustion", prompt: "My energy crashes during the day." },
  { id: "e3", domainId: "physicalExhaustion", prompt: "My body feels heavy or tense." },
  { id: "e4", domainId: "physicalExhaustion", prompt: "Rest does not fully restore me." },
] as const;

export const TOTAL_QUESTIONS = QUESTIONS.length;
export const MAX_QUESTION_VALUE = 4;
export const MAX_DOMAIN_SCORE = 4 * MAX_QUESTION_VALUE; // 4 questions per domain x max 4
export const MAX_TOTAL_SCORE = TOTAL_QUESTIONS * MAX_QUESTION_VALUE; // 20 x 4 = 80

export type ProfileTier = "well-resourced" | "early-load" | "elevated" | "high-load";

export type ProfileSummary = {
  tier: ProfileTier;
  label: string;
  headline: string;
  description: string;
  reassurance: string;
};

export type DomainTier = "low" | "mild" | "moderate" | "high";

export type DomainResult = {
  domain: Domain;
  score: number;
  max: number;
  percent: number;
  tier: DomainTier;
  insight: string;
};

export type AssessmentAnswers = Record<string, AnswerLevel | undefined>;

export type AssessmentResult = {
  completedAt: string;
  totalScore: number;
  maxScore: number;
  totalPercent: number;
  profile: ProfileSummary;
  domains: DomainResult[];
  topDomains: DomainResult[];
  topQuestions: { prompt: string; domain: string; value: number; label: string }[];
  nextSteps: string[];
};

function valueFor(answer: AnswerLevel): number {
  const opt = ANSWER_OPTIONS.find((o) => o.id === answer);
  return opt ? opt.value : 0;
}

function labelFor(answer: AnswerLevel): string {
  const opt = ANSWER_OPTIONS.find((o) => o.id === answer);
  return opt ? opt.label : "";
}

function getDomainTier(percent: number): DomainTier {
  if (percent < 25) return "low";
  if (percent < 50) return "mild";
  if (percent < 75) return "moderate";
  return "high";
}

function getDomainInsight(domainId: DomainId, tier: DomainTier): string {
  const insights: Record<DomainId, Record<DomainTier, string>> = {
    stressLoad: {
      low: "Your mental load feels manageable right now. Worth protecting with steady regulation rhythms.",
      mild: "Some pressure is present, but you still have space to disconnect. Small daily resets can keep it that way.",
      moderate: "Your mind is carrying more than it can easily put down. Structured pauses can help relieve the load.",
      high: "Your system is running on near-constant pressure. Building permission to pause is a kind, important next step.",
    },
    activation: {
      low: "Your body knows how to settle. Continue protecting that capacity to relax fully.",
      mild: "Relaxation is mostly available, but tension lingers more than it used to. Gentle somatic practice helps.",
      moderate: "Your nervous system is staying activated longer than it needs to. Down-regulation tools can shift this.",
      high: "Your body has been holding alert for a long time. This is biology, not a flaw. The reset is built for this pattern.",
    },
    emotionalFatigue: {
      low: "Your emotional resources still feel renewable. Steady regulation will keep them that way.",
      mild: "Some emotional flatness or irritation is showing up. Naming it is already a regulating act.",
      moderate: "Your emotional capacity is running low. Gentle restoration, not more effort, is what helps now.",
      high: "Emotional fatigue is asking to be heard. You do not need to push harder. You need a different rhythm.",
    },
    cognitiveStrain: {
      low: "Your focus and decision-making feel relatively clear right now.",
      mild: "You are noticing small dips in clarity. Often, this is a regulation signal, not a memory issue.",
      moderate: "Your cognitive bandwidth is being absorbed by background stress. Calmer baselines bring focus back.",
      high: "Brain fog and decision fatigue are not weakness. They are downstream effects of a tired nervous system.",
    },
    physicalExhaustion: {
      low: "Rest is mostly working for you. Continue honoring it as non-negotiable.",
      mild: "Some tiredness is hanging on. Energy dips often respond well to nervous-system-level support.",
      moderate: "Sleep alone is not refilling you. The body is asking for restoration, not just hours in bed.",
      high: "Your body is signaling depletion. Slowing down is not failure. It is the most strategic next move.",
    },
  };
  return insights[domainId][tier];
}

function getProfile(percent: number, topDomains: DomainResult[]): ProfileSummary {
  const top =
    topDomains.length > 0 ? topDomains[0].domain.name.toLowerCase() : "your nervous system";

  if (percent < 25) {
    return {
      tier: "well-resourced",
      label: "Well-resourced baseline",
      headline: "Your nervous system has steady ground beneath it.",
      description:
        "Most of your reflections suggest a regulated, well-resourced baseline. You are likely recovering, sleeping, and responding from a place of capacity, not depletion.",
      reassurance:
        "The 30-Day Reset is designed to strengthen this baseline, so the steadiness you have today becomes harder to lose under future pressure.",
    };
  }

  if (percent < 50) {
    return {
      tier: "early-load",
      label: "Early signs of load",
      headline: "Some pressure is showing, mostly around your " + top + ".",
      description:
        "Your reflections point to early signs of nervous system load. Nothing alarming, but the patterns are real. Many high performers stay here for years before noticing.",
      reassurance:
        "This is the most powerful window to act. Small, consistent regulation work now prevents the deeper depletion you may have seen in others.",
    };
  }

  if (percent < 75) {
    return {
      tier: "elevated",
      label: "Elevated nervous system load",
      headline: "Your system is carrying more than it can easily release.",
      description:
        "Your reflections suggest elevated load, especially around your " +
        top +
        ". This is not weakness. It is biology responding to sustained pressure with limited regulation.",
      reassurance:
        "The 30-Day High Performance Reset was built for exactly this state. Structured daily regulation can shift the baseline within weeks, not years.",
    };
  }

  return {
    tier: "high-load",
    label: "High nervous system load",
    headline: "Your nervous system is asking, clearly, for a reset.",
    description:
      "Your reflections show consistent, high signals of dysregulation across multiple domains. This is not a failing. It is a biology that has been holding pressure for a long time.",
    reassurance:
      "Please be gentle with the next step. Rooted Wellness is wellness education, not medical care. If you feel unsafe, please reach out to a qualified professional. The Reset can be a quiet, supported way back to steadier ground.",
  };
}

function getNextSteps(tier: ProfileTier, topDomains: DomainResult[]): string[] {
  const focus = topDomains[0]?.domain.name.toLowerCase() ?? "your nervous system";

  switch (tier) {
    case "well-resourced":
      return [
        "Protect your current rhythms with one short daily regulation practice.",
        "Notice the moments your baseline shifts. Early awareness keeps capacity strong.",
        "Use the 30-Day Reset to make this steady state your default, not your peak.",
      ];
    case "early-load":
      return [
        "Build a simple morning reset to interrupt the build-up of " + focus + ".",
        "Add an evening tracker to surface patterns before they become problems.",
        "Treat this as a prevention window. The Reset is shaped exactly for here.",
      ];
    case "elevated":
      return [
        "Begin with the foundation week of the 30-Day Reset, gently and without pressure.",
        "Allow daily somatic practice to slowly lower the alert your body is holding.",
        "Use weekly reports to watch your " + focus + " patterns ease, week by week.",
      ];
    case "high-load":
      return [
        "Soften your standards for the next 30 days. You do not need to push harder.",
        "Let the Reset hold structure for you, day by day, while your system regulates.",
        "If you have unsafe thoughts or symptoms, please contact a qualified professional in your area.",
      ];
  }
}

export function answersAreComplete(answers: AssessmentAnswers): boolean {
  return QUESTIONS.every((q) => Boolean(answers[q.id]));
}

export function countAnswered(answers: AssessmentAnswers): number {
  return QUESTIONS.reduce((n, q) => (answers[q.id] ? n + 1 : n), 0);
}

export function scoreAssessment(answers: AssessmentAnswers): AssessmentResult {
  const domainResults: DomainResult[] = DOMAINS.map((domain) => {
    const domainQuestions = QUESTIONS.filter((q) => q.domainId === domain.id);
    const score = domainQuestions.reduce((sum, q) => {
      const a = answers[q.id];
      return sum + (a ? valueFor(a) : 0);
    }, 0);
    const max = domainQuestions.length * MAX_QUESTION_VALUE;
    const percent = max === 0 ? 0 : Math.round((score / max) * 100);
    const tier = getDomainTier(percent);
    return {
      domain,
      score,
      max,
      percent,
      tier,
      insight: getDomainInsight(domain.id, tier),
    };
  });

  const totalScore = domainResults.reduce((sum, d) => sum + d.score, 0);
  const totalPercent = Math.round((totalScore / MAX_TOTAL_SCORE) * 100);

  const topDomains = [...domainResults]
    .sort((a, b) => b.percent - a.percent)
    .filter((d) => d.percent >= 50)
    .slice(0, 2);

  const topQuestions = QUESTIONS.map((q) => {
    const a = answers[q.id];
    const value = a ? valueFor(a) : 0;
    const label = a ? labelFor(a) : "";
    const domainName = DOMAINS.find((d) => d.id === q.domainId)?.name ?? "";
    return { prompt: q.prompt, domain: domainName, value, label };
  })
    .filter((q) => q.value >= 3)
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);

  const profile = getProfile(totalPercent, topDomains.length ? topDomains : domainResults);
  const nextSteps = getNextSteps(profile.tier, topDomains.length ? topDomains : domainResults);

  return {
    completedAt: new Date().toISOString(),
    totalScore,
    maxScore: MAX_TOTAL_SCORE,
    totalPercent,
    profile,
    domains: domainResults,
    topDomains,
    topQuestions,
    nextSteps,
  };
}

export const ASSESSMENT_RESULT_STORAGE_KEY = "rooted.assessmentResult.v1";
export const ASSESSMENT_ANSWERS_STORAGE_KEY = "rooted.assessmentAnswers.v1";
