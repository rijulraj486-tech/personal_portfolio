import { githubUsername } from "@/lib/github";
import { isGitHubRepositoryList, type GitHubRepository } from "@/types/github";

const repositoryLimit = 6;

export async function getGitHubRepositories(): Promise<readonly GitHubRepository[]> {
  if (!githubUsername) {
    throw new Error("GitHub username is not configured.");
  }

  const endpoint = new URL(
    `https://api.github.com/users/${encodeURIComponent(githubUsername)}/repos`,
  );
  endpoint.searchParams.set("per_page", String(repositoryLimit));
  endpoint.searchParams.set("sort", "updated");
  endpoint.searchParams.set("direction", "desc");
  endpoint.searchParams.set("type", "owner");

  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub repository request failed (${response.status}).`);
  }

  const payload: unknown = await response.json();

  if (!isGitHubRepositoryList(payload)) {
    throw new Error("GitHub returned an unexpected repository response.");
  }

  return payload;
}
