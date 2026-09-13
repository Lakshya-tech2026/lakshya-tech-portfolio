import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { links, personal } from "@/data/portfolio";
import { ActionLink } from "./primitives";
import { NeuralVisual } from "./NeuralVisual";

export function Hero() {
  const { hero } = personal;
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-secondary/15 blur-[120px]"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p
            className="animate-fade-up font-mono text-[11px] tracking-[0.3em] text-primary uppercase sm:text-xs"
            style={{ animationDelay: "60ms" }}
          >
            {hero.eyebrow}
          </p>

          <h1
            className="mt-6 animate-fade-up text-4xl leading-[1.08] font-bold sm:text-5xl md:text-6xl"
            style={{ animationDelay: "140ms" }}
          >
            {hero.headlineLead}
            <span className="accent-text">{hero.headlineHighlight}</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            {hero.subtitle}
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
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
            className="mt-9 flex animate-fade-up items-center gap-3"
            style={{ animationDelay: "380ms" }}
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
          <NeuralVisual />
        </div>
      </div>
    </section>
  );
}
