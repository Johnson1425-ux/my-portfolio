/**
 * Projects and case studies.
 *
 * Every entry below is a clearly-marked placeholder (`placeholder: true`) so the
 * site renders complete, working UI without inventing work that isn't yours.
 * Replace the bracketed text with real content and set `placeholder: false` to
 * drop the "sample content" chip.
 *
 * Screenshots: drop a PNG/JPG in `public/projects/` and set `image`. When no
 * image is provided the card falls back to generated cover art, so nothing
 * ever renders as a broken image.
 */

export type ProjectStatus = "live" | "in-progress" | "archived" | "concept";

export type ArchitectureLayer = {
  title: string;
  nodes: string[];
  note?: string;
};

export type CaseStudy = {
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    summary: string;
    layers: ArchitectureLayer[];
  };
  challenges: { title: string; body: string }[];
  results: { label: string; value: string; detail: string }[];
  lessons: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** One line, shown under the title on cards. */
  tagline: string;
  /** Two or three sentences, shown on the card body. */
  description: string;
  /** The "why this exists" line surfaced on the card. */
  problem: string;
  technologies: string[];
  /** Path under /public, e.g. "/projects/my-app.png". Leave undefined for generated cover art. */
  image?: string;
  imageAlt?: string;
  github?: string;
  demo?: string;
  docs?: string;
  featured: boolean;
  status: ProjectStatus;
  year: string;
  /** Accent hue (deg) used by the generated cover art to keep cards distinct. */
  hue: number;
  placeholder: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "[Project One]",
    tagline: "[One line: what it does and who it's for]",
    description:
      "[Two or three sentences describing what you built, the scale it operates at, and what makes it technically interesting. Lead with the outcome, not the tech list.]",
    problem:
      "[What was broken, slow, or impossible before this existed — and for whom?]",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    github: undefined,
    demo: undefined,
    featured: true,
    status: "in-progress",
    year: "2025",
    hue: 250,
    placeholder: true,
    caseStudy: {
      overview:
        "[What is this project, in plain language? Assume the reader is a hiring manager skimming for 30 seconds: what does it do, who uses it, and what stage is it at?]",
      problem:
        "[Describe the problem precisely. What were the constraints — traffic, latency budget, team size, deadline, existing systems you had to work with? A specific problem statement is what makes the rest of the case study credible.]",
      solution:
        "[How did you approach it? Cover the shape of the solution and, more importantly, the decisions: what you chose, what you rejected, and why. Trade-offs are the most valuable thing on this page.]",
      architecture: {
        summary:
          "[One paragraph on how the pieces fit together and where the interesting boundaries are — what's synchronous, what's queued, where state lives, and how it fails.]",
        layers: [
          {
            title: "Client",
            nodes: ["[Web app]", "[Mobile / CLI]"],
            note: "[Rendering strategy, caching, auth handling]",
          },
          {
            title: "Edge & API",
            nodes: ["[CDN / edge cache]", "[REST or GraphQL API]", "[Auth service]"],
            note: "[Rate limiting, validation, authorisation model]",
          },
          {
            title: "Services",
            nodes: ["[Core service]", "[Background workers]", "[Queue]"],
            note: "[Where the heavy or async work happens]",
          },
          {
            title: "Data",
            nodes: ["[PostgreSQL]", "[Redis cache]", "[Object storage]"],
            note: "[Schema, indexing and caching decisions]",
          },
        ],
      },
      challenges: [
        {
          title: "[Challenge one — name the actual problem]",
          body: "[What made it hard, what you tried first, why that didn't work, and what finally did. Include the measurement that told you it was fixed.]",
        },
        {
          title: "[Challenge two]",
          body: "[Another genuinely difficult technical problem. Correctness bugs, race conditions, migrations without downtime, and cost blow-ups all read well here.]",
        },
        {
          title: "[Challenge three]",
          body: "[Optional. Remove this entry if you only have two.]",
        },
      ],
      results: [
        { label: "[Metric]", value: "[00%]", detail: "[e.g. p95 latency, measured over 30 days]" },
        { label: "[Metric]", value: "[000]", detail: "[e.g. daily active users at peak]" },
        { label: "[Metric]", value: "[00%]", detail: "[e.g. infrastructure cost reduction]" },
      ],
      lessons: [
        "[What would you do differently if you started again tomorrow?]",
        "[What did this teach you about the domain, the tooling, or working with others?]",
        "[What did you over-engineer, and how do you know?]",
      ],
    },
  },
  {
    slug: "project-two",
    title: "[Project Two]",
    tagline: "[One line: the distributed / backend-heavy project]",
    description:
      "[Describe a project that shows depth: throughput handled, consistency guarantees, failure modes you designed around. This is the slot for your most technically demanding work.]",
    problem: "[What scale, reliability, or correctness problem did this solve?]",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "CI/CD"],
    github: undefined,
    demo: undefined,
    featured: true,
    status: "concept",
    year: "2025",
    hue: 190,
    placeholder: true,
    caseStudy: {
      overview:
        "[What is this system and what does it guarantee to the people who depend on it?]",
      problem:
        "[The constraint that made this non-trivial: volume, latency, correctness, cost, or all four.]",
      solution:
        "[The architecture you landed on and the reasoning chain that got you there.]",
      architecture: {
        summary:
          "[Describe the data flow end to end, then call out the one or two decisions that everything else follows from.]",
        layers: [
          { title: "Ingestion", nodes: ["[API gateway]", "[Event producer]"] },
          { title: "Processing", nodes: ["[Queue]", "[Worker pool]", "[Scheduler]"] },
          { title: "Storage", nodes: ["[Primary DB]", "[Cache]", "[Cold storage]"] },
          { title: "Observability", nodes: ["[Metrics]", "[Tracing]", "[Alerting]"] },
        ],
      },
      challenges: [
        {
          title: "[Challenge one]",
          body: "[The hardest technical problem here, and how you proved you solved it.]",
        },
        {
          title: "[Challenge two]",
          body: "[A second problem — ideally one where the obvious solution was wrong.]",
        },
      ],
      results: [
        { label: "[Metric]", value: "[0,000/s]", detail: "[e.g. sustained throughput]" },
        { label: "[Metric]", value: "[00ms]", detail: "[e.g. p99 end-to-end latency]" },
        { label: "[Metric]", value: "[99.9%]", detail: "[e.g. availability over the last quarter]" },
      ],
      lessons: [
        "[What surprised you about running this in production?]",
        "[Which early decision paid off, and which one cost you?]",
      ],
    },
  },
  {
    slug: "project-three",
    title: "[Project Three]",
    tagline: "[One line: a developer tool or library]",
    description:
      "[A smaller, sharper project — a CLI, a library, an internal tool. Good for showing API design taste and documentation quality.]",
    problem: "[What repetitive or error-prone task does it remove?]",
    technologies: ["TypeScript", "Node.js", "GitHub Actions", "Testing"],
    github: undefined,
    demo: undefined,
    featured: false,
    status: "concept",
    year: "2024",
    hue: 160,
    placeholder: true,
  },
  {
    slug: "project-four",
    title: "[Project Four]",
    tagline: "[One line: an interface-led project]",
    description:
      "[Something visual and user-facing. Use this slot to show that you care about the experience, not only the system behind it.]",
    problem: "[Which user need does this serve, and how do you know it works?]",
    technologies: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    github: undefined,
    demo: undefined,
    featured: false,
    status: "concept",
    year: "2024",
    hue: 300,
    placeholder: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Only projects with a case study get a dedicated page. */
export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
  concept: "Planned",
};
