export type SkillGroup = { title: string; skills: readonly string[] };
export const skillGroups: readonly SkillGroup[] = [
  { title: "AI / ML", skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Computer Vision", "NLP", "Mamba / State Space Models"] },
  { title: "Web systems", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "TanStack Query", "Responsive Design", "WordPress"] },
  { title: "Data & backend", skills: ["FastAPI", "REST APIs", "MySQL", "SQL", "Relational Databases", "Service-Layer Design"] },
  { title: "Tools", skills: ["Git", "GitHub", "Linux", "Jupyter", "VS Code", "PHP", "Java"] },
];
