import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PlaceholderChip } from "@/components/ui/badge";
import { about, now } from "@/data/about";
import { skillCategories } from "@/data/skills";

const nowDotTone: Record<string, string> = {
  Building: "bg-accent",
  Learning: "bg-accent-2",
  Exploring: "bg-amber-500",
  Available: "bg-emerald-500",
};

export function About() {
  const primaryStack = skillCategories
    .flatMap((category) => category.items)
    .slice(0, 10);

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Engineer first, and curious about the whole stack"
      description="A quick read on where I come from, what I like building, and how I think about software."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-7">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {about.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              What I enjoy building
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {about.enjoys.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
                    aria-hidden="true"
                  >
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Technologies I work with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {primaryStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
              <li className="rounded-full border border-dashed border-line px-3 py-1.5 text-xs text-subtle">
                full list below
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="rounded-card-lg border border-line bg-surface p-6 shadow-[var(--shadow-card)] sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
                  / now
                </h3>
                <PlaceholderChip />
              </div>
              <p className="mt-3 text-sm text-subtle">What I&apos;m focused on at the moment.</p>

              <dl className="mt-6 space-y-5">
                {now.map((item) => (
                  <div key={item.label}>
                    <dt className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <span
                        className={`size-2 shrink-0 rounded-full ${
                          nowDotTone[item.label] ?? "bg-accent"
                        }`}
                        aria-hidden="true"
                      />
                      {item.label}
                    </dt>
                    <dd className="mt-1 pl-[1.125rem] text-sm leading-relaxed text-muted">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
