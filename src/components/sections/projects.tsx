import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { featuredProjects, otherProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Featured projects"
      description="The work I'd point to first. Each one lists the problem it solves, how it's built, and — where there's a case study — the decisions behind it."
      action={
        <ButtonLink
          href={`https://github.com/${siteConfig.githubUsername}?tab=repositories`}
          variant="secondary"
          size="sm"
          external
        >
          All repositories
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </ButtonLink>
      }
    >
      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard
              project={project}
              variant="featured"
              reversed={index % 2 === 1}
              priority={index === 0}
            />
          </Reveal>
        ))}
      </div>

      {otherProjects.length > 0 ? (
        <>
          <Reveal>
            <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              More things I&apos;ve built
            </h3>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </>
      ) : null}
    </Section>
  );
}
