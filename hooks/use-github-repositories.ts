"use client";

import { useQuery } from "@tanstack/react-query";
import { githubUsername } from "@/lib/github";
import { getGitHubRepositories } from "@/services/github";

export const githubRepositoriesQueryKey = [
  "github",
  "repositories",
  githubUsername,
] as const;

export function useGitHubRepositories() {
  return useQuery({
    queryKey: githubRepositoriesQueryKey,
    queryFn: getGitHubRepositories,
    enabled: Boolean(githubUsername),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
