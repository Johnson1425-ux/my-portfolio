/**
 * Professional experience timeline.
 *
 * Placeholders only — replace with real roles. Achievements are the part
 * recruiters read closest, so make each one measurable where you can
 * ("cut p95 checkout latency from 900ms to 320ms"), and leave it out entirely
 * if you can't back it up.
 */

export type ExperienceEntry = {
  company: string;
  position: string;
  /** e.g. "Jan 2024" */
  start: string;
  /** e.g. "Present" */
  end: string;
  location: string;
  /** Employment type shown as a chip, e.g. "Full-time", "Internship". */
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  placeholder: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "[Company Name]",
    position: "[Your Position]",
    start: "[Month Year]",
    end: "Present",
    location: "[City, Country / Remote]",
    type: "[Full-time]",
    description:
      "[One or two sentences on what the team owned and where you fit into it. Name the surface you were responsible for.]",
    responsibilities: [
      "[A core responsibility — what you owned end to end.]",
      "[How you worked with others: reviews, design docs, mentoring, on-call.]",
      "[A recurring engineering task that shows the level you operate at.]",
    ],
    achievements: [
      "[A measurable outcome, e.g. \"Reduced API p95 response time by 40% by replacing N+1 queries with a batched loader.\"]",
      "[A shipped project and the difference it made to users or the team.]",
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
    placeholder: true,
  },
  {
    company: "[Previous Company]",
    position: "[Previous Position]",
    start: "[Month Year]",
    end: "[Month Year]",
    location: "[City, Country / Remote]",
    type: "[Internship]",
    description:
      "[What the role involved and what you were trusted with by the end of it.]",
    responsibilities: [
      "[A responsibility that shows growth from the role above.]",
      "[Something you automated, documented, or made easier for everyone else.]",
    ],
    achievements: [
      "[A concrete result. If you don't have numbers, describe the before and after.]",
    ],
    technologies: ["Python", "Docker", "PostgreSQL", "CI/CD"],
    placeholder: true,
  },
];
