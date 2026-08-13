import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OpenSource } from "@/components/sections/open-source";
import { Philosophy } from "@/components/sections/philosophy";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Divider } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

export default function Home() {
  // Structured data helps search engines connect the site to a person.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    sameAs: [`https://github.com/${siteConfig.githubUsername}`],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Serialised from a local literal — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <OpenSource />
      <Divider />
      <Philosophy />
      <Divider />
      <Contact />
    </>
  );
}
