import { FullProfile, ATSAnalysis } from '../types/profile';

export function calculateATSScore(profile: FullProfile): ATSAnalysis {
  let score = 0;
  const strengths: string[] = [];
  const suggestions: ATSAnalysis['suggestions'] = [];

  // 1. Personal Information (Max 15 pts)
  let contactScore = 0;
  if (profile.personalInfo.fullName.trim().length > 2) contactScore += 3;
  if (profile.personalInfo.email.includes('@') && profile.personalInfo.email.includes('.')) contactScore += 3;
  if (profile.personalInfo.phone.trim().length > 6) contactScore += 3;
  if (profile.personalInfo.cityState.trim().length > 2) contactScore += 2;
  if (profile.personalInfo.linkedIn.trim().length > 5) contactScore += 2;
  if (profile.personalInfo.github.trim().length > 5 || profile.personalInfo.portfolio.trim().length > 5) contactScore += 2;
  
  score += contactScore;
  if (contactScore >= 13) {
    strengths.push('Comprehensive contact & professional profile links');
  } else {
    suggestions.push({
      section: 'Personal Info',
      advice: 'Add LinkedIn and GitHub/Portfolio links to improve recruiter click-through rate.',
      importance: 'medium',
    });
  }

  // 2. Summary / Objective (Max 10 pts)
  const summaryLength = profile.professionalSummary.summary.trim().split(/\s+/).filter(Boolean).length;
  if (summaryLength >= 25 && summaryLength <= 80) {
    score += 10;
    strengths.push('Concise, well-calibrated career summary (25–80 words)');
  } else if (summaryLength > 0) {
    score += 6;
    suggestions.push({
      section: 'Career Summary',
      advice: 'Target 30–60 words highlighting your unique value proposition and primary tech stack.',
      importance: 'medium',
    });
  } else {
    suggestions.push({
      section: 'Career Summary',
      advice: 'A 2–4 line professional summary boosts ATS relevance by up to 34%.',
      importance: 'high',
    });
  }

  // 3. Education (Max 15 pts)
  let eduScore = 0;
  if (profile.education.collegeName.trim()) eduScore += 4;
  if (profile.education.degree.trim()) eduScore += 3;
  if (profile.education.cgpa.trim()) eduScore += 3;
  if (profile.education.class12School.trim()) eduScore += 2.5;
  if (profile.education.class10School.trim()) eduScore += 2.5;
  score += Math.min(15, eduScore);
  if (eduScore >= 12) {
    strengths.push('Detailed academic lineage (Degree, CGPA, Class 12 & 10 records)');
  } else {
    suggestions.push({
      section: 'Education',
      advice: 'Fill in degree, college name, CGPA, and schooling details for verification audits.',
      importance: 'high',
    });
  }

  // 4. Technical Skills (Max 15 pts)
  const allTechSkills = [
    ...profile.technicalSkills.programmingLanguages,
    ...profile.technicalSkills.webDevelopment,
    ...profile.technicalSkills.databaseManagement,
    ...profile.technicalSkills.devTools,
    ...profile.technicalSkills.frameworksLibraries,
    ...profile.technicalSkills.otherTechnicalSkills,
  ];
  const uniqueTechSkillsCount = new Set(allTechSkills).size;
  if (uniqueTechSkillsCount >= 12) {
    score += 15;
    strengths.push(`Rich technical skills footprint (${uniqueTechSkillsCount} distinct skills classified)`);
  } else if (uniqueTechSkillsCount >= 6) {
    score += 10;
    suggestions.push({
      section: 'Technical Skills',
      advice: 'Include databases, developer tools (Docker/Git), and frameworks to pass skill keyword scans.',
      importance: 'medium',
    });
  } else {
    score += Math.min(6, uniqueTechSkillsCount);
    suggestions.push({
      section: 'Technical Skills',
      advice: 'Add at least 8–12 technical competencies grouped by category.',
      importance: 'high',
    });
  }

  // 5. Projects & Practical Evidence (Max 15 pts)
  const projectCount = profile.projects.length;
  if (projectCount >= 3) {
    score += 15;
    strengths.push(`${projectCount} strong project case studies with live/code references`);
  } else if (projectCount >= 1) {
    score += projectCount * 4.5;
    suggestions.push({
      section: 'Projects',
      advice: 'Include 2–3 in-depth projects with problems solved and measurable results.',
      importance: 'medium',
    });
  } else {
    suggestions.push({
      section: 'Projects',
      advice: 'Add at least one notable project showcasing end-to-end implementation.',
      importance: 'high',
    });
  }

  // Check metrics in projects
  let projectMetricsFound = 0;
  profile.projects.forEach((p) => {
    const text = `${p.achievementsResults} ${p.overview} ${p.keyFeatures}`;
    if (/\d+%|\d+x|\$\d+|\b\d+\b/i.test(text)) projectMetricsFound++;
  });

  // 6. Experience / Internships (Max 15 pts)
  const expCount = profile.workExperience.length + profile.internships.length;
  if (expCount >= 2) {
    score += 15;
    strengths.push('Substantive professional and internship history');
  } else if (expCount === 1) {
    score += 11;
  } else {
    score += 4;
    suggestions.push({
      section: 'Work / Internships',
      advice: 'Add internship roles, campus technical responsibilities, or freelance work.',
      importance: 'medium',
    });
  }

  // 7. Certifications, Achievements & Leadership (Max 15 pts)
  let additionalPoints = 0;
  if (profile.certifications.length > 0) additionalPoints += 4;
  if (profile.achievements.length > 0) additionalPoints += 4;
  if (profile.leadership.length > 0) additionalPoints += 3;
  if (profile.extracurriculars.length > 0) additionalPoints += 2;
  if (profile.languages.length >= 2) additionalPoints += 2;
  score += Math.min(15, additionalPoints);

  if (profile.certifications.length > 0 && profile.achievements.length > 0) {
    strengths.push('Demonstrated leadership, industry certifications, and verified achievements');
  }

  // Calculate word count and metric count
  const allText = JSON.stringify(profile);
  const wordCount = (allText.match(/\b\w+\b/g) || []).length;
  const metricsMatches = allText.match(/\b\d+(\.\d+)?%|\b\d+x|\$\d+([,\.]\d+)?|\b\d+\s*(users|clients|teams|latency|stars|downloads|hours|seconds|ms)\b/gi) || [];
  const metricsCount = metricsMatches.length;

  if (metricsCount >= 4) {
    strengths.push(`Strong quantitative impact (${metricsCount} measurable metrics detected)`);
  } else {
    suggestions.push({
      section: 'Impact & Metrics',
      advice: 'Recruiters favor numbers: add metrics like "% latency cut", "X users", or team size.',
      importance: 'high',
    });
  }

  // Normalize final score to 100
  const finalScore = Math.min(100, Math.max(15, Math.round(score)));

  let grade = 'C';
  if (finalScore >= 92) grade = 'A+';
  else if (finalScore >= 84) grade = 'A';
  else if (finalScore >= 75) grade = 'B+';
  else if (finalScore >= 65) grade = 'B';

  return {
    score: finalScore,
    grade,
    strengths: strengths.slice(0, 4),
    suggestions: suggestions.slice(0, 4),
    metricsCount,
    skillsCount: uniqueTechSkillsCount,
    wordCount,
  };
}
