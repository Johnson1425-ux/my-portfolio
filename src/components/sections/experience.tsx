import { Building2, CalendarDays, MapPin, TrendingUp } from "lucide-react";
import { Chip, PlaceholderChip, TechBadge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Where I've worked"
      description="Roles, what I owned, and the outcomes I can point to."
    >
      <ol className="relative space-y-6">
        {/* Timeline rail — decorative, the list order carries the meaning. */}
        <span
          className="absolute left-[0.9375rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-line via-line to-transparent sm:block"
          aria-hidden="true"
        />

        {experience.map((role, index) => (
          <li key={`${role.company}-${index}`} className="relative sm:pl-12">
            <span
              className="absolute left-2.5 top-8 hidden size-2.5 rounded-full border-2 border-background bg-accent ring-2 ring-accent-line sm:block"
              aria-hidden="true"
            />

            <Reveal delay={index * 0.05}>
              <article className="rounded-card-lg border border-line bg-surface p-6 shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-300 hover:border-accent-line hover:shadow-[var(--shadow-card-hover)] sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">{role.position}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-accent">
                      <Building2 className="size-3.5" aria-hidden="true" />
                      {role.company}
                    </p>
                  </div>
                  {role.placeholder ? <PlaceholderChip /> : null}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-subtle">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {role.start} — {role.end}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {role.location}
                  </span>
                  <Chip>{role.type}</Chip>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">{role.description}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
                      Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-line-strong"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
                      Achievements
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {role.achievements.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <TrendingUp
                            className="mt-0.5 size-3.5 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {role.technologies.map((tech) => (
                    <li key={tech}>
                      <TechBadge>{tech}</TechBadge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
