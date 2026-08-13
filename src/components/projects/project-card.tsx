import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "@/components/ui/brand-icons";
import { PlaceholderChip, StatusChip, TechBadge } from "@/components/ui/badge";
import { ProjectCover } from "@/components/projects/project-cover";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const cardShell =
  "group relative flex h-full flex-col overflow-hidden rounded-card-lg border border-line bg-surface " +
  "shadow-[var(--shadow-card)] transition-[border-color,box-shadow,transform] duration-300 " +
  "ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-accent-line hover:shadow-[var(--shadow-card-hover)]";

export function ProjectCard({
  project,
  variant = "compact",
  reversed = false,
  priority,
}: {
  project: Project;
  variant?: "featured" | "compact";
  reversed?: boolean;
  priority?: boolean;
}) {
  const caseStudyHref = project.caseStudy ? `/projects/${project.slug}` : null;
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(cardShell, isFeatured && "lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0")}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-line",
          isFeatured
            ? cn(
                "aspect-[16/10] lg:aspect-auto lg:min-h-[22rem] lg:border-b-0",
                reversed ? "lg:order-2 lg:border-l" : "lg:border-r",
              )
            : "aspect-[16/9]",
        )}
      >
        <ProjectCover
          project={project}
          priority={priority}
          sizes={
            isFeatured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col p-6 sm:p-7",
          isFeatured && "lg:justify-center lg:p-9",
          isFeatured && reversed && "lg:order-1",
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <StatusChip status={project.status} />
          <span className="font-mono text-xs text-subtle">{project.year}</span>
          {project.placeholder ? <PlaceholderChip className="ml-auto" /> : null}
        </div>

        <h3
          className={cn(
            "mt-4 font-semibold tracking-tight",
            isFeatured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className="inline-flex items-center gap-1.5 rounded-sm after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
              <ArrowUpRight
                className="size-5 shrink-0 text-subtle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                aria-hidden="true"
              />
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-1.5 text-sm text-accent">{project.tagline}</p>

        <p
          className={cn(
            "mt-4 leading-relaxed text-muted",
            isFeatured ? "text-[0.95rem]" : "text-sm",
          )}
        >
          {project.description}
        </p>

        {isFeatured ? (
          <div className="mt-5 rounded-card border border-line bg-background-alt p-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
              Problem
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
          </div>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
          {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Read case study
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Live demo
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="size-4" aria-hidden="true" />
              Source
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          ) : null}

          {!project.demo && !project.github ? (
            <span className="text-xs text-subtle">
              Add repository and demo links in{" "}
              <code className="font-mono text-[0.7rem]">src/data/projects.ts</code>
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
