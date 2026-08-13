import { siteConfig } from "@/data/site";

/**
 * Public GitHub data for the open-source section.
 *
 * Reads the unauthenticated REST API, so no credentials are required or
 * exposed. If GITHUB_TOKEN is set (server-side only, never NEXT_PUBLIC_) it is
 * used purely to raise the rate limit.
 */

export type GitHubProfile = {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
  htmlUrl: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
};

export type GitHubData = {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  totalStars: number;
  /** Share of repositories per language, largest first. */
  languages: { name: string; count: number; percentage: number }[];
};

type RawRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

type RawProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  html_url: string;
};

const API = "https://api.github.com";
/** Refresh at most hourly — GitHub data does not move fast enough to justify more. */
const REVALIDATE_SECONDS = 3600;

function headers(): HeadersInit {
  const base: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  return token ? { ...base, Authorization: `Bearer ${token}` } : base;
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    headers: headers(),
    next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${path}`);
  }

  return (await response.json()) as T;
}

/**
 * Returns null on any failure (rate limit, offline build, unknown user) so the
 * section can degrade to a static link instead of failing the page.
 */
export async function getGitHubData(limit = 6): Promise<GitHubData | null> {
  const username = siteConfig.githubUsername;
  if (!username) return null;

  try {
    const [profile, rawRepos] = await Promise.all([
      getJson<RawProfile>(`/users/${username}`),
      getJson<RawRepo[]>(`/users/${username}/repos?per_page=100&sort=updated`),
    ]);

    const ownRepos = rawRepos.filter((repo) => !repo.fork && !repo.archived);

    const repos: GitHubRepo[] = ownRepos
      .slice()
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, limit)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics ?? [],
        updatedAt: repo.updated_at,
      }));

    const counts = new Map<string, number>();
    for (const repo of ownRepos) {
      if (!repo.language) continue;
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    const totalLanguageRepos = [...counts.values()].reduce((sum, n) => sum + n, 0);
    const languages = [...counts.entries()]
      .map(([name, count]) => ({
        name,
        count,
        percentage: totalLanguageRepos ? Math.round((count / totalLanguageRepos) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    return {
      profile: {
        login: profile.login,
        name: profile.name,
        avatarUrl: profile.avatar_url,
        bio: profile.bio,
        publicRepos: profile.public_repos,
        followers: profile.followers,
        htmlUrl: profile.html_url,
      },
      repos,
      totalStars: ownRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      languages,
    };
  } catch {
    return null;
  }
}

/** Brand-ish colours for the language bar; anything unlisted falls back to the accent. */
export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
};
