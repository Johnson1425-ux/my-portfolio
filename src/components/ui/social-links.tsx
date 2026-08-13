import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/ui/brand-icons";
import { socialLinks, type SocialLink } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: Record<SocialLink["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
  twitter: XIcon,
};

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface " +
  "text-muted transition-[color,border-color,background-color,transform] duration-200 " +
  "ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-accent-line hover:bg-accent-soft " +
  "hover:text-accent";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        const isMail = link.icon === "mail";

        if (!link.href) {
          return (
            <li key={link.label}>
              <span
                className={cn(
                  iconButton,
                  "cursor-not-allowed border-dashed text-subtle hover:translate-y-0 hover:border-line hover:bg-surface hover:text-subtle",
                )}
                title={`${link.label} link not configured yet — add it in src/data/site.ts`}
              >
                <Icon className="size-[1.05rem]" aria-hidden="true" />
                <span className="sr-only">{link.label} (not configured yet)</span>
              </span>
            </li>
          );
        }

        return (
          <li key={link.label}>
            <a
              href={link.href}
              className={iconButton}
              aria-label={`${link.label} — ${link.description}`}
              {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon className="size-[1.05rem]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
