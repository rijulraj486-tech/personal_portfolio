const configuredUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim();

export const githubUsername = configuredUsername || undefined;

export const githubProfileUrl = githubUsername
  ? `https://github.com/${encodeURIComponent(githubUsername)}`
  : undefined;
