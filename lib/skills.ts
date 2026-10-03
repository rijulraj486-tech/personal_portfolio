export type SkillGroup = { title: string; skills: readonly string[] };
export const skillGroups: readonly SkillGroup[] = [
  { title: "Frontend", skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "State / Data", skills: ["Redux Toolkit", "TanStack Query", "REST APIs"] },
  { title: "Programming / AI", skills: ["Python", "PyTorch", "Machine Learning", "Mamba / State Space Models"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "WordPress"] },
];
