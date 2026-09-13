import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Plus } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Badge, Reveal, SectionHeading } from "./primitives";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've"
          highlight="Built"
          subtitle="Projects where ideas become working technology."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * 80}>
              <article className="panel card-hover group relative flex h-full flex-col overflow-hidden p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-3xl font-bold text-muted-foreground/30 transition-colors group-hover:text-primary/50">
                    {project.number}
                  </span>
                  <div className="flex gap-2">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.name} — ${project.repoLabel ?? "GitHub"}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground opacity-70 transition-all hover:-translate-y-0.5 hover:text-primary group-hover:opacity-100"
                      >
                        <Github size={16} />
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.name} — ${project.liveLabel ?? "Live demo"}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground opacity-70 transition-all hover:-translate-y-0.5 hover:text-primary group-hover:opacity-100"
                      >
                        <ExternalLink size={15} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                {project.placeholder ? (
                  <span className="mt-2 w-fit rounded-full border border-border bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    Placeholder
                  </span>
                ) : null}
                <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
                >
                  Read case study
                  <ArrowUpRight size={15} />
                </button>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={projects.length * 80}>
            <article className="card-hover flex h-full min-h-56 flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border p-6 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary">
                <Plus size={18} />
              </span>
              <h3 className="text-base font-semibold">More Projects Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                Currently building and experimenting — new work lands here.
              </p>
            </article>
          </Reveal>
        </ul>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
