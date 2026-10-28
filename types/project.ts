export const projectCategories = ["Web", "AI/ML", "Research", "WordPress"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  categories: readonly ProjectCategory[];
  technologies: readonly string[];
  highlights: readonly string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  context?: string;
};
