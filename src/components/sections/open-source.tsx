import { GitFork, Star, Users } from "lucide-react";
import Image from "next/image";
import { GitHubIcon } from "@/components/ui/brand-icons";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getGitHubData, languageColors } from "@/lib/github";
import { siteConfig } from "@/data/site";
import { formatCompactNumber } from "@/lib/utils";

export async function OpenSource() {
  const data = await getGitHubData();
  const profileUrl = `https://github.com/${siteConfig.githubUsername}`;

  return (
    <Section
      id="open-source"
      index="05"
      eyebrow="Open source"
      title="What I'm publishing"
      description="Live from the GitHub API — public repositories, ordered by stars and recent activity."
      action={
        <ButtonLink href={profileUrl} variant="secondary" size="sm" external>
          <GitHubIcon className="size-4" aria-hidden="true" />@{siteConfig.githubUsername}
        </ButtonLink>
      }
    >
      {!data ? (
        <Reveal>
          <div className="rounded-card-lg border border-dashed border-line bg-surface p-8 text-center">
            <GitHubIcon className="mx-auto size-8 text-subtle" aria-hidden="true" />
            <p className="mt-4 text-sm text-muted">
              GitHub activity couldn&apos;t be loaded right now — the public API may be rate
              limited or unreachable.
            </p>
            <ButtonLink href={profileUrl} variant="secondary" size="sm" className="mt-5" external>
              View the profile on GitHub
            </ButtonLink>
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-4">
            <div className="flex h-full flex-col rounded-card-lg border border-line bg-surface p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-4">
                <Image
                  src={data.profile.avatarUrl}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 rounded-full border border-line"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold">{data.profile.name ?? data.profile.login}</p>
                  <a
                    href={data.profile.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    @{data.profile.login}
                  </a>
                </div>
              </div>

              {data.profile.bio ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">{data.profile.bio}</p>
              ) : null}

              <dl className="mt-6 grid grid-cols-3 gap-3">
                <Stat icon={<GitHubIcon className="size-3.5" />} label="Repos" value={data.profile.publicRepos} />
                <Stat icon={<Star className="size-3.5" />} label="Stars" value={data.totalStars} />
                <Stat icon={<Users className="size-3.5" />} label="Followers" value={data.profile.followers} />
              </dl>

              {data.languages.length > 0 ? (
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
                    Languages by repository
                  </p>
                  <div
                    className="mt-3 flex h-2 overflow-hidden rounded-full bg-background-alt"
                    role="img"
                    aria-label={`Language distribution: ${data.languages
                      .map((language) => `${language.name} ${language.percentage}%`)
                      .join(", ")}`}
                  >
                    {data.languages.map((language) => (
                      <span
                        key={language.name}
                        style={{
                          width: `${language.percentage}%`,
                          backgroundColor: languageColors[language.name] ?? "var(--accent)",
                        }}
                      />
                    ))}
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {data.languages.map((language) => (
                      <li key={language.name} className="flex items-center gap-1.5 text-xs text-muted">
                        <span
                          className="size-2 rounded-full"
                          style={{
                            backgroundColor: languageColors[language.name] ?? "var(--accent)",
                          }}
                          aria-hidden="true"
                        />
                        {language.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Reveal>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-8 lg:content-start">
            {data.repos.map((repo, index) => (
              <Reveal key={repo.id} delay={index * 0.04} className="h-full">
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-card-lg border border-line bg-surface p-5 transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                      {repo.name}
                    </h3>
                    <span className="flex shrink-0 items-center gap-3 text-xs text-subtle">
                      {repo.stars > 0 ? (
                        <span className="flex items-center gap-1">
                          <Star className="size-3.5" aria-hidden="true" />
                          {formatCompactNumber(repo.stars)}
                          <span className="sr-only"> stars</span>
                        </span>
                      ) : null}
                      {repo.forks > 0 ? (
                        <span className="flex items-center gap-1">
                          <GitFork className="size-3.5" aria-hidden="true" />
                          {formatCompactNumber(repo.forks)}
                          <span className="sr-only"> forks</span>
                        </span>
                      ) : null}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                    {repo.description ?? "No description provided."}
                  </p>

                  {repo.language ? (
                    <p className="mt-4 flex items-center gap-1.5 text-xs text-subtle">
                      <span
                        className="size-2 rounded-full"
                        style={{
                          backgroundColor: languageColors[repo.language] ?? "var(--accent)",
                        }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </p>
                  ) : null}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-card border border-line bg-background-alt px-3 py-2.5">
      <dt className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wide text-subtle">
        <span aria-hidden="true">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 text-lg font-semibold tabular-nums">{formatCompactNumber(value)}</dd>
    </div>
  );
}
