import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Journey } from "@/components/site/Journey";
import { Achievements } from "@/components/site/Achievements";
import { Developer } from "@/components/site/Developer";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Lakshya.Tech | AI/ML Engineer & Developer";
const description =
  "Portfolio of Lakshya, a B.Tech CSE (AI/ML) student passionate about Artificial Intelligence, Machine Learning, Generative AI, and software development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Lakshya Chandra" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Lakshya Chandra",
          alternateName: "Lakshya.Tech",
          jobTitle: "Aspiring AI/ML Engineer",
          description,
          alumniOf: { "@type": "CollegeOrUniversity", name: "PW Institute of Innovation" },
          knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Generative AI",
            "Python",
            "Java",
            "Web Development",
          ],
          sameAs: [
            "https://github.com/Lakshya-tech2026",
            "https://www.linkedin.com/in/lakshya-tech-0042ba433",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Developer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
