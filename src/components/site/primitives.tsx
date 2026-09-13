import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Adds `.is-visible` when the element scrolls into view (once). */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs tracking-[0.25em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title} {highlight ? <span className="accent-text">{highlight}</span> : null}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground px-6 py-3 hover:shadow-[var(--glow-accent)] hover:brightness-110",
  outline:
    "border border-border bg-transparent px-6 py-3 text-foreground hover:border-[color:var(--border-strong)] hover:bg-muted/60",
  ghost:
    "border border-border bg-transparent px-4 py-2 text-muted-foreground hover:text-foreground hover:border-[color:var(--border-strong)]",
} as const;

export type ButtonVariant = keyof typeof variants;

export function ActionLink({
  href,
  variant = "primary",
  className,
  children,
  external,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...rest
}: {
  variant?: ButtonVariant;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
