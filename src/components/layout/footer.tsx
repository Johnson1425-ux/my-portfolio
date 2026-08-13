import Link from "next/link";
import { Container } from "@/components/ui/section";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-background-alt/40">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
