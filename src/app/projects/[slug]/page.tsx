import { ArrowLeft, ArrowUpRight, BookOpen, ExternalLink, Lightbulb } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { ProjectCover } from "@/components/projects/project-cover";
import { PlaceholderChip, StatusChip, TechBadge } from "@/components/ui/badge";
import { GitHubIcon } from "@/components/ui/brand-icons";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section";
import { caseStudyProjects, getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  const title = `${project.title} — case study`;

  return {
    title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "technologies", label: "Technologies" },
  { id: "challenges", label: "Engineering challenges" },
  { id: "results", label: "Results" },
  { id: "lessons", label: "Lessons learned" },
  { id: "links", label: "Links" },
];

export default async function ProjectCaseStudy({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) notFound();

  const study = project.caseStudy;
  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject =
    projects.slice(currentIndex + 1).find((entry) => entry.caseStudy) ??
    projects.find((entry) => entry.caseStudy && entry.slug !== project.slug);

  return (
    <article className="pb-24">
      {/* Header */}
      <div className="relative border-b border-line">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        </div>

        <Container className="py-12 sm:py-16">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft
              className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            All projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <StatusChip status={project.status} />
                <span className="font-mono text-xs text-subtle">{project.year}</span>
                {project.placeholder ? <PlaceholderChip /> : null}
              </div>

              <h1 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-accent">{project.tagline}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.demo ? (
                  <ButtonLink href={project.demo} external>
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live demo
                  </ButtonLink>
                ) : null}
                {project.github ? (
                  <ButtonLink
                    href={project.github}
                    variant={project.demo ? "secondary" : "primary"}
                    external
                  >
                    <GitHubIcon className="size-4" aria-hidden="true" />
                    Source code
                  </ButtonLink>
                ) : null}
                {project.docs ? (
                  <ButtonLink href={project.docs} variant="secondary" external>
                    <BookOpen className="size-4" aria-hidden="true" />
                    Documentation
                  </ButtonLink>
                ) : null}
                {!project.demo && !project.github && !project.docs ? (
                  <p className="text-sm text-subtle">
                    Add demo, repository and documentation links in{" "}
                    <code className="font-mono text-xs">src/data/projects.ts</code>.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className="group aspect-[16/10] overflow-hidden rounded-card-lg border border-line">
                <ProjectCover project={project} priority sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Sticky table of contents */}
          <nav aria-label="On this page" className="min-w-0 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
                On this page
              </p>
              <ul className="mt-4 space-y-1 border-l border-line">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="min-w-0 lg:col-span-9">
            <div className="space-y-14">
              <Block id="overview" title="Overview">
                <p>{study.overview}</p>
              </Block>

              <Block id="problem" title="Problem">
                <p>{study.problem}</p>
              </Block>

              <Block id="solution" title="Solution">
                <p>{study.solution}</p>
              </Block>

              <Block id="architecture" title="Architecture">
                <p>{study.architecture.summary}</p>
                <div className="mt-7">
                  <ArchitectureDiagram layers={study.architecture.layers} />
                </div>
              </Block>

              <Block id="technologies" title="Technologies">
                <ul  className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <TechBadge>{tech}</TechBadge>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block id="challenges" title="Key engineering challenges">
                <ol  className="space-y-4">
                  {study.challenges.map((challenge, index) => (
                    <li
                      key={challenge.title}
                      className="rounded-card-lg border border-line bg-surface p-6"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-semibold">{challenge.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{challenge.body}</p>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block id="results" title="Results">
                <dl  className="grid gap-4 sm:grid-cols-3">
                  {study.results.map((result, index) => (
                    <div
                      key={`${result.label}-${index}`}
                      className="rounded-card-lg border border-line bg-surface p-5"
                    >
                      <dt className="text-xs uppercase tracking-wide text-subtle">
                        {result.label}
                      </dt>
                      <dd className="mt-2 text-2xl font-semibold text-accent">{result.value}</dd>
                      <dd className="mt-2 text-xs leading-relaxed text-muted">{result.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Block>

              <Block id="lessons" title="Lessons learned">
                <ul  className="space-y-3">
                  {study.lessons.map((lesson) => (
                    <li key={lesson} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <Lightbulb className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block id="links" title="Links">
                <ul  className="flex flex-wrap gap-3">
                  {project.demo ? (
                    <li>
                      <ButtonLink href={project.demo} variant="secondary" size="sm" external>
                        <ExternalLink className="size-4" aria-hidden="true" />
                        Live demo
                      </ButtonLink>
                    </li>
                  ) : null}
                  {project.github ? (
                    <li>
                      <ButtonLink href={project.github} variant="secondary" size="sm" external>
                        <GitHubIcon className="size-4" aria-hidden="true" />
                        GitHub
                      </ButtonLink>
                    </li>
                  ) : null}
                  {project.docs ? (
                    <li>
                      <ButtonLink href={project.docs} variant="secondary" size="sm" external>
                        <BookOpen className="size-4" aria-hidden="true" />
                        Documentation
                      </ButtonLink>
                    </li>
                  ) : null}
                  <li>
                    <ButtonLink href="/#contact" variant="secondary" size="sm">
                      Ask me about this project
                    </ButtonLink>
                  </li>
                </ul>
              </Block>
            </div>

            {nextProject ? (
              <Reveal>
                <div className="mt-16 border-t border-line pt-8">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
                    Next case study
                  </p>
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="group mt-3 inline-flex items-center gap-2 text-xl font-semibold transition-colors hover:text-accent"
                  >
                    {nextProject.title}
                    <ArrowUpRight
                      className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>
    </article>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
        <h2 id={`${id}-title`} className="text-xl font-semibold sm:text-2xl">
          {title}
        </h2>
        <div className="mt-4 text-base leading-relaxed text-muted [&>p]:mb-4 [&>p:last-child]:mb-0">
          {children}
        </div>
      </section>
    </Reveal>
  );
}
