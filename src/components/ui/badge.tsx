import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { statusLabels, type ProjectStatus } from "@/data/projects";

/** Small monospace chip used for technologies. */
export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-background-alt px-2 py-1 font-mono text-[0.6875rem] leading-none tracking-tight text-muted">
      {children}
    </span>
  );
}

export function Chip({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "accent"
          ? "border-accent-line bg-accent-soft text-accent"
          : "border-line bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  archived: "bg-zinc-500",
  concept: "bg-sky-500",
};

export function StatusChip({ status }: { status: ProjectStatus }) {
  return (
    <Chip>
      <span className={cn("size-1.5 rounded-full", statusDot[status])} aria-hidden="true" />
      {statusLabels[status]}
    </Chip>
  );
}

/**
 * Marks sample content so a visitor is never misled, and so the owner can see
 * exactly what still needs replacing. Disappears once `placeholder` is false.
 */
export function PlaceholderChip({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed border-line-strong bg-background-alt px-2.5 py-1 text-xs font-medium text-subtle",
        className,
      )}
      title="Sample content — replace it in the files under src/data/"
    >
      <span className="size-1.5 rounded-full bg-subtle" aria-hidden="true" />
      Sample content
    </span>
  );
}
