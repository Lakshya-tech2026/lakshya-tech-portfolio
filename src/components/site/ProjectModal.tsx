import { useEffect, useRef } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ActionLink, Badge } from "./primitives";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-5">
      <h4 className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">{title}</h4>
      <div className="mt-2.5 text-sm text-muted-foreground sm:text-base">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="panel my-auto w-full max-w-3xl animate-fade-up p-6 sm:p-9">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
              {project.number} — {project.category}
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{project.name}</h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {project.placeholder ? (
          <p className="mt-5 rounded-xl border border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
            Placeholder case study — replace this content in{" "}
            <span className="font-mono text-foreground">src/data/portfolio.ts</span>.
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <Block title="Overview">{cs.overview}</Block>
          <Block title="Problem">{cs.problem}</Block>
          <Block title="Approach">{cs.approach}</Block>
          <Block title="Technology">
            <div className="flex flex-wrap gap-2">
              {cs.technology.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Block>
          <Block title="Key Features">
            <List items={cs.keyFeatures} />
          </Block>
          <Block title="Challenges">{cs.challenges}</Block>
          <Block title="What I Learned">{cs.learned}</Block>
          <Block title="Future Improvements">
            <List items={cs.future} />
          </Block>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <ActionLink href={project.liveUrl} external>
              {project.liveLabel ?? "View Project"}
              <ExternalLink size={15} />
            </ActionLink>
          ) : null}
          {project.repoUrl ? (
            <ActionLink href={project.repoUrl} variant="outline" external>
              <Github size={15} />
              {project.repoLabel ?? "GitHub"}
            </ActionLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
