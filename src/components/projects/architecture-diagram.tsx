import { ChevronDown } from "lucide-react";
import type { ArchitectureLayer } from "@/data/projects";

/**
 * Data-driven architecture diagram: one row per layer, nodes inside it, and a
 * connector between rows. Kept as DOM rather than a static image so it stays
 * readable in both themes, on every screen size, and to screen readers.
 */
export function ArchitectureDiagram({ layers }: { layers: ArchitectureLayer[] }) {
  return (
    <figure className="overflow-hidden rounded-card-lg border border-line bg-surface">
      <div className="bg-grid border-b border-line px-6 py-5">
        <figcaption className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
          System architecture
        </figcaption>
      </div>

      <div className="p-6 sm:p-8">
        <ol className="space-y-0">
          {layers.map((layer, index) => (
            <li key={layer.title}>
              <div className="rounded-card border border-line bg-background-alt p-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {layer.title}
                  </h3>
                  <span className="font-mono text-[0.7rem] text-subtle">
                    layer {index + 1} / {layers.length}
                  </span>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {layer.nodes.map((node) => (
                    <li
                      key={node}
                      className="rounded-lg border border-line-strong bg-surface px-3.5 py-2.5 text-sm text-foreground shadow-[var(--shadow-card)]"
                    >
                      {node}
                    </li>
                  ))}
                </ul>

                {layer.note ? (
                  <p className="mt-4 text-xs leading-relaxed text-subtle">{layer.note}</p>
                ) : null}
              </div>

              {index < layers.length - 1 ? (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <span className="flex flex-col items-center text-subtle">
                    <span className="h-4 w-px bg-line-strong" />
                    <ChevronDown className="-mt-1 size-4" />
                  </span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
