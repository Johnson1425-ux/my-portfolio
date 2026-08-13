import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks } from "@/data/site";

export function Contact() {
  const linkedin = socialLinks.find((link) => link.icon === "linkedin");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,black,transparent)]" />
        <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-soft),transparent_65%)] blur-2xl" />
      </div>

      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <span className="text-subtle">07</span> Contact
            </p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
              Have a project, opportunity, or interesting problem?
            </h2>
            <p className="mt-4 text-lg text-muted">Let&apos;s build something.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <ContactCard
                href={`mailto:${siteConfig.email}`}
                icon={<Mail className="size-4" aria-hidden="true" />}
                label="Email"
                value={siteConfig.email}
              />

              <ContactCard
                href={`https://github.com/${siteConfig.githubUsername}`}
                icon={<GitHubIcon className="size-4" aria-hidden="true" />}
                label="GitHub"
                value={`@${siteConfig.githubUsername}`}
                external
              />

              <ContactCard
                href={linkedin?.href ?? null}
                icon={<LinkedInIcon className="size-4" aria-hidden="true" />}
                label="LinkedIn"
                value={linkedin?.href ? "View profile" : "Add your LinkedIn URL in src/data/site.ts"}
                external
              />

              <div className="mt-auto rounded-card-lg border border-line bg-surface p-6">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  {siteConfig.availability}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {siteConfig.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-subtle">
                  I read everything that comes in and reply to anything concrete — roles,
                  collaborations, or a problem you think I&apos;d find interesting.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0 lg:col-span-7">
            <div className="rounded-card-lg border border-line bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h3 className="text-lg font-semibold">Send a message</h3>
              <p className="mt-1.5 text-sm text-muted">
                Fill this in and I&apos;ll get the details in one go.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string | null;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-background-alt text-accent transition-colors duration-300 group-hover:border-accent-line group-hover:bg-accent-soft">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wide text-subtle">{label}</span>
        <span className="block truncate text-sm text-foreground">{value}</span>
      </span>
    </>
  );

  const shell =
    "group flex min-w-0 items-center gap-4 rounded-card-lg border border-line bg-surface p-4 transition-[border-color,transform] duration-300 ease-[var(--ease-out-soft)]";

  if (!href) {
    return (
      <div className={`${shell} border-dashed`} title={`${label} not configured yet`}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={`${shell} hover:-translate-y-0.5 hover:border-accent-line`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
