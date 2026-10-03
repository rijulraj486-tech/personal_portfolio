export type GitHubRepository = Readonly<{
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
}>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isGitHubRepository(value: unknown): value is GitHubRepository {
  return isRecord(value)
    && typeof value.id === "number"
    && typeof value.name === "string"
    && typeof value.html_url === "string"
    && (typeof value.description === "string" || value.description === null)
    && (typeof value.language === "string" || value.language === null)
    && typeof value.stargazers_count === "number";
}

export function isGitHubRepositoryList(value: unknown): value is GitHubRepository[] {
  return Array.isArray(value) && value.every(isGitHubRepository);
}
