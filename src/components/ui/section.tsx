import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

/** Thin gradient rule between sections. */
export function Divider() {
  return (
    <Container>
      <div className="divider-glow h-px w-full" role="presentation" />
    </Container>
  );
}

type SectionProps = {
  id: string;
  /** Monospace index, e.g. "02" — reinforces the developer aesthetic. */
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Right-aligned slot next to the heading (e.g. a "view all" link). */
  action?: ReactNode;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
  action,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {index ? <span className="text-subtle">{index}</span> : null}
                {eyebrow}
              </p>
              <h2
                id={headingId}
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {title}
              </h2>
              {description ? (
                <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
              ) : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}
