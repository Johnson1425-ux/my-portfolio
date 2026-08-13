import { Cloud, Code2, Compass, Database, LayoutGrid, Server } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillCategories, type SkillCategory } from "@/data/skills";

const icons: Record<SkillCategory["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  code: Code2,
  layout: LayoutGrid,
  server: Server,
  database: Database,
  cloud: Cloud,
  compass: Compass,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The tools I build with"
      description="Grouped by where they sit in the stack. I care more about the ideas underneath than any single framework — but these are what I reach for today."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[category.icon];
          return (
            <li key={category.title}>
              <Reveal delay={index * 0.04} className="h-full">
                <div className="group h-full rounded-card-lg border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-background-alt text-accent transition-colors duration-300 group-hover:border-accent-line group-hover:bg-accent-soft">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold">{category.title}</h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-subtle">
                    {category.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-background-alt px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
