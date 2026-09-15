import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { links, personal, profile } from "@/data/portfolio";
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
            className="mt-6 animate-fade-up text-[2.15rem] font-bold sm:text-5xl md:text-6xl"
            style={{ animationDelay: "140ms" }}
          >
            <span className="block">{hero.headlineLead.trim()}</span>
            <span className="accent-text block">{hero.headlineHighlight}</span>
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

        <div className="relative">
          <div
            aria-hidden
            className="animate-fade-up absolute inset-0 -z-10 opacity-60"
            style={{ animationDelay: "300ms" }}
          >
            <NeuralVisual />
          </div>

          <div
            className="portrait-in relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]"
            style={{ animationDelay: "260ms" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-5 -z-10 rounded-[34px] bg-primary/15 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[24px] border border-primary/30 bg-surface/60 shadow-[0_30px_70px_-32px_rgba(56,189,248,0.5)]">
              <div className="aspect-[4/5] w-full">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent"
              />
              <div
                aria-hidden
                className="portrait-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-base font-bold">{profile.name}</p>
                <p className="text-sm text-primary">{profile.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
