import { ArrowDown, ArrowRight, FileText, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/ui/social-links";
import { CodeWindow } from "@/components/ui/terminal";
import { siteConfig } from "@/data/site";
import { highlightedStack } from "@/data/skills";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative scroll-mt-24">
      {/* Decorative backdrop: blueprint grid fading out, plus a soft accent wash. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-soft),transparent_65%)] blur-2xl" />
      </div>

      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {siteConfig.availability}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 id="hero-heading" className="mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="text-gradient mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">
                {siteConfig.role}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {siteConfig.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#projects" size="lg">
                  View my projects
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="lg">
                  Contact me
                </ButtonLink>
                {siteConfig.resume.enabled ? (
                  <ButtonLink href={siteConfig.resume.href} variant="ghost" size="lg" external>
                    <FileText className="size-4" aria-hidden="true" />
                    Résumé
                  </ButtonLink>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <SocialLinks />
                <p className="flex items-center gap-1.5 text-sm text-subtle">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {siteConfig.location}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="min-w-0 lg:col-span-5">
            <CodeWindow />
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-16 border-t border-line pt-6 sm:mt-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                Working with
              </p>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {highlightedStack.map((tech) => (
                  <li key={tech} className="text-sm text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-1 text-xs text-subtle transition-colors hover:text-accent"
          >
            <span className="font-mono uppercase tracking-[0.18em]">Scroll</span>
            <ArrowDown
              className="size-4 transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            />
            <span className="sr-only">Scroll to the about section</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
