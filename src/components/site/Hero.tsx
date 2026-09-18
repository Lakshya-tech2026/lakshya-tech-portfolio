import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Coffee,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { links, personal, profile } from "@/data/portfolio";
import { ActionLink } from "./primitives";
import { NeuralVisual } from "./NeuralVisual";

export function Hero() {
  const { hero } = personal;
  const strengths = [
    { label: hero.strengths[0], Icon: Code2 },
    { label: hero.strengths[1], Icon: Coffee },
    { label: hero.strengths[2], Icon: BrainCircuit },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-2rem)] overflow-hidden border-b border-border pt-24 md:pt-28"
    >
      <div aria-hidden className="grid-backdrop absolute inset-0 opacity-40" />

      <div className="container-page relative grid min-h-[calc(100svh-7rem)] items-center gap-10 pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-0 lg:pb-0">
        <div className="relative z-20 py-8 lg:py-14">
          <p
            className="animate-fade-up font-mono text-[11px] tracking-[0.42em] text-muted-foreground uppercase sm:text-xs"
          >
            {hero.eyebrow}
          </p>

          <h1
            className="mt-4 animate-fade-up text-[3.7rem] leading-[0.9] font-bold sm:text-[5rem] lg:text-[6rem] [animation-delay:100ms]"
          >
            <span className="accent-text block">{hero.headlineLead}</span>
            <span className="mt-2 block text-foreground">{hero.headlineHighlight}</span>
          </h1>

          <p
            className="mt-7 max-w-md animate-fade-up text-sm text-muted-foreground sm:text-base [animation-delay:180ms]"
          >
            {hero.subtitle}
          </p>

          <div
            aria-hidden="true"
            className="mt-6 h-0.5 w-10 animate-fade-up bg-primary [animation-delay:220ms]"
          />

          <ul className="mt-6 grid max-w-md animate-fade-up grid-cols-3 [animation-delay:260ms]">
            {strengths.map(({ label, Icon }, index) => (
              <li
                key={label}
                className={`flex min-h-20 flex-col items-center justify-center gap-2 px-2 text-center ${index ? "border-l border-border" : ""}`}
              >
                <Icon size={23} strokeWidth={1.5} className="text-primary" />
                <span className="text-[11px] leading-tight text-muted-foreground sm:text-xs">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="mt-7 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:340ms]"
          >
            <ActionLink href="#projects">
              {hero.primaryCta}
              <ArrowRight size={16} />
            </ActionLink>
            <ActionLink href="#contact" variant="outline">
              {hero.secondaryCta}
            </ActionLink>
          </div>

          <div
            className="mt-8 flex animate-fade-up items-center gap-3 [animation-delay:420ms]"
          >
            {[
              { href: links.github, label: "GitHub", Icon: Github },
              { href: links.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${links.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-primary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] self-stretch sm:min-h-[620px] lg:min-h-0">
          <div
            aria-hidden
            className="absolute inset-0 z-0 scale-110 opacity-25 [&_.panel]:hidden"
          >
            <NeuralVisual />
          </div>

          <div className="portrait-in absolute inset-0 z-10 overflow-hidden [animation-delay:180ms] lg:-right-[max(2rem,calc((100vw-78rem)/2))]">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              className="h-full w-full object-cover object-[52%_center]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background via-background/15 to-transparent" />
            <div aria-hidden className="portrait-sheen absolute inset-y-0 -left-1/3 w-1/4 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-5 flex items-end justify-between gap-5 px-5 sm:px-8 lg:px-12">
              <div>
                <p className="text-lg font-bold">{profile.name}</p>
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  {profile.degree}
                </p>
                <p className="mt-1 text-xs text-primary">{profile.institute}</p>
              </div>
              <p className="hidden max-w-40 border-l border-primary pl-4 text-right text-[10px] leading-relaxed text-muted-foreground sm:block">
                “{personal.footerTagline}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
