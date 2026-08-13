import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Project artwork. Uses the real screenshot when one is provided, and falls
 * back to generated, code-inspired cover art so a card is never empty or broken.
 */
export function ProjectCover({
  project,
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden bg-background-alt", className)}>
        <Image
          src={project.image}
          alt={project.imageAlt ?? `Screenshot of ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return <GeneratedCover project={project} className={className} />;
}

function GeneratedCover({ project, className }: { project: Project; className?: string }) {
  const { hue } = project;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-background-alt transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]",
        className,
      )}
      role="img"
      aria-label={`Abstract cover art for ${project.title}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(120% 100% at 15% 0%, hsl(${hue} 78% 62% / 0.24), transparent 60%), radial-gradient(100% 90% at 100% 100%, hsl(${
            hue + 45
          } 78% 58% / 0.16), transparent 55%)`,
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-70" />

      {/* Abstract "code lines" — decorative only. */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-8 sm:px-10">
        {[68, 44, 82, 36, 58].map((width, index) => (
          <span
            key={index}
            className="h-2 rounded-full"
            style={{
              width: `${width}%`,
              background:
                index % 2 === 0
                  ? `hsl(${hue} 70% 60% / 0.32)`
                  : "color-mix(in srgb, var(--foreground) 10%, transparent)",
            }}
          />
        ))}
      </div>

      <span className="absolute bottom-4 left-8 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle sm:left-10">
        {project.slug}
      </span>

      <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
    </div>
  );
}
