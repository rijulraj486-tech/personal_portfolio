"use client";

import type { ReactNode } from "react";
import { githubUsername } from "@/lib/github";
import { useGitHubRepositories } from "@/hooks/use-github-repositories";
import { GitHubProfileLink } from "./github-profile-link";
import { GitHubRepositoryCard } from "./github-repository-card";

function RepositorySkeletons() {
  return <div className="github-repository-grid" aria-label="Loading GitHub repositories">{Array.from({ length: 3 }, (_, index) => <div className="github-repository-card github-repository-skeleton" key={index} aria-hidden="true"><span /><span /><span /></div>)}</div>;
}

function RepositoryState({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="github-repository-state" role="status">{children}</div>;
}

export function GitHubRepositories() {
  const { data: repositories, isError, isPending } = useGitHubRepositories();

  return <section className="github-repositories" aria-labelledby="github-repositories-heading"><div className="github-repositories-heading"><p className="eyebrow">GitHub</p><h2 id="github-repositories-heading">Public repositories</h2><p>Explore some of my public repositories.</p></div>{!githubUsername ? <RepositoryState><h3>GitHub repositories are not configured yet.</h3><p>Add a GitHub username to enable this section.</p></RepositoryState> : isPending ? <RepositorySkeletons /> : isError ? <RepositoryState><h3>GitHub repositories are currently unavailable.</h3><GitHubProfileLink className="text-link" /></RepositoryState> : repositories && repositories.length > 0 ? <><div className="github-repository-grid">{repositories.map((repository) => <GitHubRepositoryCard key={repository.id} repository={repository} />)}</div><GitHubProfileLink className="text-link" /></> : <RepositoryState><h3>No public repositories found.</h3><GitHubProfileLink className="text-link" /></RepositoryState>}</section>;
}
