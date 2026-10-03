import type { GitHubRepository } from "@/types/github";

type GitHubRepositoryCardProps = Readonly<{
  repository: GitHubRepository;
}>;

export function GitHubRepositoryCard({ repository }: GitHubRepositoryCardProps) {
  return <article className="github-repository-card"><h3>{repository.name}</h3><p>{repository.description || "No description provided."}</p><div className="github-repository-meta"><span>{repository.language || "Language not specified"}</span><span>Stars: {repository.stargazers_count}</span></div><a href={repository.html_url} target="_blank" rel="noopener noreferrer" aria-label={`View ${repository.name} on GitHub`}>View on GitHub <span aria-hidden="true">↗</span></a></article>;
}
