import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { WhyHire } from "@/components/portfolio/WhyHire";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mhlenge Kenneth Mathenjwa — Software Developer & IT Specialist" },
      {
        name: "description",
        content:
          "Computer Science & IT graduate specialising in software development, Microsoft 365 administration, networking and cybersecurity. Cisco Endpoint Security certified.",
      },
      {
        name: "keywords",
        content:
          "Mhlenge Mathenjwa, Software Developer, IT Support, Systems Administrator, Microsoft 365, Cisco, Cybersecurity, ASP.NET, Python, South Africa",
      },
      { property: "og:title", content: "Mhlenge Kenneth Mathenjwa — Portfolio" },
      {
        property: "og:description",
        content:
          "Software Developer, IT Support Specialist, Systems & Network Infrastructure professional.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mhlenge Kenneth Mathenjwa",
          jobTitle: "Software Developer & IT Support Specialist",
          alumniOf: "University of KwaZulu-Natal",
          knowsAbout: [
            "Software Development",
            "Microsoft 365",
            "Networking",
            "Cybersecurity",
            "Systems Administration",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <WhyHire />
      <Blog />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
