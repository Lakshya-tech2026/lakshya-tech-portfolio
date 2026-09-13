import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { links } from "@/data/portfolio";
import { ActionLink, Reveal, SectionHeading } from "./primitives";

export function Developer() {
  return (
    <section id="developer" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Developer"
          title="Code. Build."
          highlight="Iterate."
          subtitle="Everything I build ends up on GitHub — experiments included."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="panel card-hover flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                  <Github size={22} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">Explore my code</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  Repositories, project source and work-in-progress experiments live on my GitHub
                  profile.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Terminal size={14} className="text-primary" />@{links.githubUsername}
                </p>
              </div>
              <ActionLink href={links.github} external className="self-start">
                <Github size={16} />
                Visit GitHub
              </ActionLink>
            </article>
          </Reveal>

          <Reveal delay={110}>
            <article className="panel card-hover flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                  <Linkedin size={22} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">Let's connect professionally.</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  Open to internships, collaborations, hackathon teams and conversations about AI/ML.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionLink href={links.linkedin} external>
                  <Linkedin size={16} />
                  LinkedIn
                </ActionLink>
                <ActionLink href={links.github} variant="outline" external>
                  <Github size={16} />
                  GitHub
                </ActionLink>
                <ActionLink href={`mailto:${links.email}`} variant="outline">
                  <Mail size={16} />
                  Email
                </ActionLink>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
