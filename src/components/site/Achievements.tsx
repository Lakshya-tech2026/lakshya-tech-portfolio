import { Award, ExternalLink, Trophy } from "lucide-react";
import { achievements, achievementsFallback } from "@/data/portfolio";
import { Badge, Reveal, SectionHeading } from "./primitives";

const categories = [
  "Certifications",
  "Hackathons",
  "Competitions",
  "Projects",
  "Courses",
  "Technical milestones",
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones"
          subtitle="Certifications, hackathons, competitions and technical milestones — added here as they happen."
        />

        {achievements.length > 0 ? (
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <article className="panel card-hover h-full p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                    <Trophy size={18} />
                  </span>
                  <Badge className="mt-4 inline-block">{item.category}</Badge>
                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  {item.date ? (
                    <p className="mt-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                      {item.date}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  ) : null}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      View <ExternalLink size={14} />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="mt-12 max-w-3xl" delay={80}>
            <div className="panel p-8 text-center sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                <Award size={20} />
              </span>
              <p className="mt-5 text-lg font-semibold">{achievementsFallback}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tracked categories: {categories.join(" · ")}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
