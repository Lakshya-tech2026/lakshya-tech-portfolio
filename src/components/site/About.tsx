import { GraduationCap, Building2, Target, Activity } from "lucide-react";
import { personal } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./primitives";
import { ProfileCard } from "./ProfileCard";

export function About() {
  const info = [
    { label: "Education", value: personal.education, Icon: GraduationCap },
    { label: "Institute", value: personal.institute, Icon: Building2 },
    { label: "Focus", value: personal.focus, Icon: Target },
    { label: "Current Status", value: personal.currentStatus, Icon: Activity },
  ];

  return (
    <section id="about" className="scroll-mt-24 border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <ProfileCard />

        <div>
          <SectionHeading eyebrow="About" title="Turning Curiosity Into" highlight="Code." />
          <div className="mt-7 space-y-5">
            {personal.about.paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <ul className="panel space-y-1 p-5 sm:p-6">
            {info.map(({ label, value, Icon }) => (
              <li
                key={label}
                className="flex items-start gap-4 rounded-xl px-2 py-3.5 transition-colors hover:bg-muted/40"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                    {label}
                  </span>
                  <span className="mt-1 block font-semibold">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
