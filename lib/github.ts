// An environment value can override this for a different deployment or account.
const configuredUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || "rijulraj486-tech";

export const githubUsername = configuredUsername || undefined;

export const githubProfileUrl = githubUsername
  ? `https://github.com/${encodeURIComponent(githubUsername)}`
  : undefined;
