import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

/**
 * Code-inspired hero visual. Purely decorative — hidden from assistive tech,
 * since everything it says is already in the hero copy.
 */

const punct = "text-subtle";
const key = "text-foreground/85";
const string = "text-accent-2";
const keyword = "text-accent";

export function CodeWindow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card-lg border border-line bg-surface shadow-[var(--shadow-card)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-line bg-background-alt px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-amber-400/70" />
        <span className="size-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-xs text-subtle">engineer.ts</span>
      </div>

      <div className="w-full min-w-0 overflow-x-auto">
        <pre className="min-w-max px-4 py-5 font-mono text-[0.78rem] leading-6 sm:text-[0.82rem]">
          <code>
            <Line n={1}>
              <span className={keyword}>const</span> <span className={key}>engineer</span>
              <span className={punct}> = {"{"}</span>
            </Line>
            <Line n={2} indent>
              <span className={key}>name</span>
              <span className={punct}>: </span>
              <span className={string}>&quot;{siteConfig.name}&quot;</span>
              <span className={punct}>,</span>
            </Line>
            <Line n={3} indent>
              <span className={key}>role</span>
              <span className={punct}>: </span>
              <span className={string}>&quot;{siteConfig.role}&quot;</span>
              <span className={punct}>,</span>
            </Line>
            <Line n={4} indent>
              <span className={key}>focus</span>
              <span className={punct}>: [</span>
              <span className={string}>&quot;APIs&quot;</span>
              <span className={punct}>, </span>
              <span className={string}>&quot;distributed systems&quot;</span>
              <span className={punct}>],</span>
            </Line>
            <Line n={5} indent>
              <span className={key}>principles</span>
              <span className={punct}>: [</span>
              <span className={string}>&quot;simple&quot;</span>
              <span className={punct}>, </span>
              <span className={string}>&quot;tested&quot;</span>
              <span className={punct}>],</span>
            </Line>
            <Line n={6} indent>
              <span className={key}>shipping</span>
              <span className={punct}>: </span>
              <span className={keyword}>true</span>
              <span className={punct}>,</span>
            </Line>
            <Line n={7}>
              <span className={punct}>{"}"} </span>
              <span className={keyword}>satisfies</span> <span className={key}>Engineer</span>
              <span className={punct}>;</span>
            </Line>
            <Line n={8}>
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent/70" />
            </Line>
          </code>
        </pre>
      </div>
    </div>
  );
}

function Line({
  n,
  indent,
  children,
}: {
  n: number;
  indent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="w-3 shrink-0 select-none text-right text-subtle/60">{n}</span>
      <span className={indent ? "pl-4" : undefined}>{children}</span>
    </div>
  );
}
