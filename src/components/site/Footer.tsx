import { Github, Linkedin, Mail } from "lucide-react";
import { links, personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border py-16 md:py-20">
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-10 opacity-60" />
      <div className="container-page">
        <p className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Lakshya<span className="accent-text">.Tech</span>
        </p>
        <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          {personal.footerTagline}
        </p>

        <nav aria-label="Footer" className="mt-9 flex flex-wrap items-center gap-3">
          {[
            { label: "GitHub", href: links.github, Icon: Github },
            { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
            { label: "Email", href: `mailto:${links.email}`, Icon: Mail },
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-foreground"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Designed &amp; Developed by Lakshya.Tech</p>
          <p>© {year} Lakshya Chandra · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
