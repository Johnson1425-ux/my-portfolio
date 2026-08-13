/**
 * About, "Now", and engineering philosophy content.
 *
 * The philosophy entries below are written as a starting point — rewrite them
 * in your own voice. The most convincing version of this section reads like
 * something only you would say.
 */

export const about = {
  /** Two short paragraphs. Keep them scannable — nobody reads a wall of text. */
  intro: [
    "[Two sentences on who you are as an engineer: the kind of problems you gravitate towards, and where you've done that work. Lead with substance, not adjectives.]",
    "[A second short paragraph on how you got here — a degree, a first job, a project that changed how you think about software. One specific detail beats three vague ones.]",
  ],
  /** Bullet list under "What I enjoy building". */
  enjoys: [
    "[Backend services that stay predictable under load]",
    "[Interfaces that feel instant and work without a mouse]",
    "[Developer tooling that removes a whole category of mistakes]",
    "[Data models that make the next feature easier, not harder]",
  ],
} as const;

export type NowItem = {
  label: "Building" | "Learning" | "Exploring" | "Available";
  value: string;
};

export const now: NowItem[] = [
  { label: "Building", value: "[What you're actively working on right now]" },
  { label: "Learning", value: "[A skill, language or system you're deep in]" },
  { label: "Exploring", value: "[A topic you're curious about but not yet fluent in]" },
  { label: "Available", value: "[e.g. Open to full-time roles from March]" },
];

export type Principle = {
  title: string;
  body: string;
  /** Icon key resolved in components/sections/philosophy.tsx */
  icon: "sparkles" | "scale" | "shield" | "gauge" | "workflow" | "book";
};

export const principles: Principle[] = [
  {
    title: "Simple beats clever",
    body: "The best code I've written is the code someone else could delete. I optimise for the engineer reading this in a year — usually me — which means boring solutions until the problem genuinely demands otherwise.",
    icon: "sparkles",
  },
  {
    title: "Design for the second version",
    body: "Requirements move. I try to get the boundaries and the data model right, because those are expensive to change later, and stay relaxed about everything that's cheap to rewrite.",
    icon: "scale",
  },
  {
    title: "Tests are a design tool",
    body: "Hard-to-test code is usually badly-shaped code. I write tests where they buy confidence — edge cases, contracts, the paths that would page someone at 3am — not to chase a coverage number.",
    icon: "shield",
  },
  {
    title: "Measure before optimising",
    body: "Performance work without a profiler is guessing. I'd rather find the one slow query than rewrite five fast functions, and I want the number in front of me before and after.",
    icon: "gauge",
  },
  {
    title: "Automate the boring parts",
    body: "Anything done manually twice is a candidate for CI, a script, or a lint rule. Automation isn't about speed so much as removing the chance to get it wrong.",
    icon: "workflow",
  },
  {
    title: "Write it down",
    body: "A short README, a decision record, a comment explaining why rather than what — documentation is the difference between a system a team owns and one only its author can touch.",
    icon: "book",
  },
];
