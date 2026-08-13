import { BookOpen, Gauge, Scale, Shield, Sparkles, Workflow } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { principles, type Principle } from "@/data/about";

const icons: Record<Principle["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  sparkles: Sparkles,
  scale: Scale,
  shield: Shield,
  gauge: Gauge,
  workflow: Workflow,
  book: BookOpen,
};

export function Philosophy() {
  return (
    <Section
      id="philosophy"
      index="06"
      eyebrow="Philosophy"
      title="How I approach engineering"
      description="Opinions I've formed by building, breaking and maintaining things — held loosely enough to change when the evidence does."
    >
      <ul className="grid gap-px overflow-hidden rounded-card-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => {
          const Icon = icons[principle.icon];
          return (
            <li key={principle.title} className="bg-surface">
              <Reveal delay={index * 0.04} className="h-full">
                <div className="group h-full p-6 transition-colors duration-300 hover:bg-background-alt sm:p-7">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-background-alt text-accent transition-colors duration-300 group-hover:border-accent-line group-hover:bg-accent-soft">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{principle.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{principle.body}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
