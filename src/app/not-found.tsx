import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">Error 404</p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be out of date, or the page may have moved. Everything else is one click
        away.
      </p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft
          className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        Back to the portfolio
      </ButtonLink>
    </Container>
  );
}
