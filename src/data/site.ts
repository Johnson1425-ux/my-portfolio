/**
 * Site-wide configuration.
 *
 * This is the first file to edit when personalising the portfolio. Anything
 * wrapped in [square brackets] is a placeholder that should be replaced with
 * real information — nothing here is inferred or invented.
 */

export type SocialLink = {
  label: string;
  /** `null` renders a clearly-marked "not configured yet" chip instead of a broken link. */
  href: string | null;
  /** Icon key resolved in components/ui/social-links.tsx */
  icon: "github" | "linkedin" | "mail" | "twitter";
  /** Shown on hover / to screen readers. */
  description: string;
};

export const siteConfig = {
  // TODO: replace with your real name.
  name: "[YOUR NAME]",
  role: "Software Engineer",
  /** Short label used in the nav / footer monogram. */
  initials: "YN",
  location: "[City, Country]",
  tagline:
    "I build scalable, reliable, and user-focused software that turns complex problems into simple experiences.",
  /** Used for meta descriptions and the OG image. */
  description:
    "Software engineer focused on scalable backends, well-crafted interfaces, and systems that stay simple as they grow. Selected projects, engineering case studies, and experience.",

  // Pre-filled from this repository's owner. Override per-environment with
  // NEXT_PUBLIC_GITHUB_USERNAME (see .env.example) — no token is required for
  // the public data this site reads.
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Johnson1425-ux",
  // TODO: confirm this is the address you want publicly listed.
  email: "johnsonemmanuel1425@gmail.com",

  /**
   * Canonical site URL. Update this before deploying so Open Graph tags,
   * the sitemap, and canonical links point at the real domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",

  /** Availability line shown in the hero and the "Now" panel. */
  availability: "Open to new opportunities",

  /** Drop a PDF at public/resume.pdf and flip this to true to show the button. */
  resume: {
    enabled: false,
    href: "/resume.pdf",
  },
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: `https://github.com/${siteConfig.githubUsername}`,
    icon: "github",
    description: "Code, side projects and open-source contributions",
  },
  {
    // TODO: add your LinkedIn URL, e.g. https://www.linkedin.com/in/your-handle
    label: "LinkedIn",
    href: null,
    icon: "linkedin",
    description: "Professional background and experience",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
    description: "The fastest way to reach me",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
