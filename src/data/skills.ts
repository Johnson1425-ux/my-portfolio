/**
 * Technical skills.
 *
 * These categories mirror the stack list supplied for this site. Prune anything
 * you wouldn't be comfortable being interviewed on — a short, honest list reads
 * far better than an exhaustive one.
 */

export type SkillCategory = {
  title: string;
  /** Icon key resolved in components/sections/skills.tsx */
  icon: "code" | "layout" | "server" | "database" | "cloud" | "compass";
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    description: "The languages I reach for day to day.",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    description: "Interfaces that stay fast and accessible as they grow.",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    description: "Services and APIs other systems can depend on.",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    icon: "database",
    description: "Modelling data and keeping queries honest.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    description: "Shipping, running and observing what I build.",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux", "CI/CD"],
  },
  {
    title: "Engineering",
    icon: "compass",
    description: "The parts that outlast any particular framework.",
    items: [
      "System Design",
      "Testing",
      "API Design",
      "Authentication",
      "Distributed Systems",
    ],
  },
];

/** Compact list rendered in the hero marquee-free "stack strip". */
export const highlightedStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
];
