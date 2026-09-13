import { UserRound } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./primitives";

export function ProfileCard() {
  return (
    <Reveal className="mx-auto w-full max-w-[320px] lg:max-w-[380px]">
      <div className="relative">
        {/* subtle blue ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-primary/15 blur-2xl"
        />
        <div className="overflow-hidden rounded-[22px] border border-primary/30 bg-surface/60 shadow-[0_24px_60px_-30px_rgba(56,189,248,0.45)]">
          <div className="aspect-[4/5] w-full overflow-hidden">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-b border-dashed border-border bg-muted/30 px-6 text-center">
                <UserRound size={40} className="text-primary/70" />
                <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  Photo placeholder
                </p>
                <p className="text-xs text-muted-foreground">
                  Send me your portrait and it will appear here.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-3 p-5 sm:p-6">
            <div>
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <p className="text-sm text-primary">{profile.role}</p>
            </div>
            <div className="space-y-0.5 text-sm text-muted-foreground">
              <p>{profile.degree}</p>
              <p>{profile.institute}</p>
            </div>
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
              {profile.keywords.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
