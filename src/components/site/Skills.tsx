import {
  Braces,
  Brain,
  Code2,
  Coffee,
  Cpu,
  Figma,
  GitBranch,
  Github,
  Layout,
  Lightbulb,
  Palette,
  PenTool,
  Puzzle,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/portfolio";
import { Badge, Reveal, SectionHeading } from "./primitives";

const iconMap: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  coffee: Coffee,
  brain: Brain,
  sparkles: Sparkles,
  cpu: Cpu,
  layout: Layout,
  palette: Palette,
  braces: Braces,
  smartphone: Smartphone,
  git: GitBranch,
  github: Github,
  figma: Figma,
  puzzle: Puzzle,
  pen: PenTool,
  lightbulb: Lightbulb,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technical"
          highlight="Arsenal"
          subtitle="The languages, frameworks and tools I use to turn ideas into working software."
        />

        <div className="mt-12 space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.group}>
              <Reveal className="mb-5 flex items-center gap-4">
                <h3 className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
                  {group.group}
                </h3>
                <span className="h-px flex-1 bg-border" />
              </Reveal>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.skills.map((skill, si) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <Reveal as="li" key={skill.name} delay={Math.min(si, 3) * 60}>
                      <article className="panel card-hover group flex h-full flex-col p-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                          <Icon size={18} />
                        </span>
                        <h4 className="mt-3.5 text-[0.95rem] font-semibold">{skill.name}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {skill.description}
                        </p>
                        <div className="mt-4 flex flex-1 items-end">
                          {skill.level ? <Badge>{skill.level}</Badge> : null}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
