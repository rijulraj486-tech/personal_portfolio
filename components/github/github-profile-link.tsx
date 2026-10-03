import { githubProfileUrl } from "@/lib/github";

type GitHubProfileLinkProps = Readonly<{
  className?: string;
}>;

export function GitHubProfileLink({ className }: GitHubProfileLinkProps) {
  if (!githubProfileUrl) {
    return null;
  }

  return <a className={className} href={githubProfileUrl} target="_blank" rel="noopener noreferrer">View GitHub profile <span aria-hidden="true">↗</span></a>;
}
