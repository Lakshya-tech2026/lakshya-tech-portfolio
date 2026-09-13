import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { links } from "@/data/portfolio";
import { ActionButton, Reveal, SectionHeading } from "./primitives";

const field =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-[color:var(--border-strong)] focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have an idea?"
            highlight="Let's build it."
            subtitle="Send a message and it will reach my inbox directly."
          />

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="panel mt-9 space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                    Name
                  </span>
                  <input name="name" required placeholder="Your name" className={field} />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={field}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the idea, role or project…"
                  className={`${field} resize-y`}
                />
              </label>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <ActionButton type="submit">
                  Send Message
                  <Send size={15} />
                </ActionButton>
                {sent ? (
                  <span aria-live="polite" className="text-sm text-muted-foreground">
                    Opening your email app…
                  </span>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ul className="panel space-y-2 p-6 sm:p-7">
            {[
              { label: "Email", value: links.email, href: `mailto:${links.email}`, Icon: Mail },
              {
                label: "LinkedIn",
                value: "lakshya-tech",
                href: links.linkedin,
                Icon: Linkedin,
              },
              {
                label: "GitHub",
                value: links.githubUsername,
                href: links.github,
                Icon: Github,
              },
            ].map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="flex items-center gap-4 rounded-xl px-2 py-3.5 transition-colors hover:bg-muted/40"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
