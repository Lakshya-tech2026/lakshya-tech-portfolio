import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 animate-fade-up border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="container-page flex h-16 items-center justify-between gap-4 md:h-20"
      >
        <a href="#home" className="text-base font-bold tracking-tight md:text-lg">
          Lakshya<span className="text-primary">.Tech</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {personal.status}
          </span>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/60 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2 pb-1 text-xs text-primary">{personal.status}</li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
