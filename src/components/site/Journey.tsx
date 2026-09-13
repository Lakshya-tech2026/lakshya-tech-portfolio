import { experienceFallback, timeline } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./primitives";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education & Experience"
          title="Journey"
          subtitle="Where I'm studying, what I'm focused on, and what I'm building along the way."
        />

        <ol className="relative mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={`${entry.institution}-${i}`} delay={i * 90} className="relative">
              <span
                aria-hidden
                className="absolute top-7 -left-[1.9rem] h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_var(--background),0_0_16px_var(--primary)] sm:-left-[2.65rem]"
              />
              <article className="panel card-hover p-6">
                <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  {entry.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold sm:text-xl">{entry.role}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{entry.institution}</p>
                <p className="mt-3 text-sm text-muted-foreground">{entry.description}</p>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={timeline.length * 90} className="relative">
            <span
              aria-hidden
              className="absolute top-7 -left-[1.78rem] h-2.5 w-2.5 rounded-full border border-border bg-background sm:-left-[2.53rem]"
            />
            <div className="rounded-3xl border border-dashed border-border p-6">
              <p className="text-sm text-muted-foreground sm:text-base">{experienceFallback}</p>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
