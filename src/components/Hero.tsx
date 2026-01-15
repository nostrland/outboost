import React from "react";

type HeroProps = {
  headline?: string;
  subhead?: string;
};

export default function Hero({
  headline = "Fast, honest computer repair that feels effortless.",
  subhead = "Hardware and software fixes, virus removal, data recovery, and new computer setup. Clear pricing, plain-English explanations, and privacy-first care.",
}: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/75 ring-1 ring-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />
              Local support, same-day options when available
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {headline}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {subhead}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Get a free estimate
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
              >
                See services
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-4">
              <Stat label="Clear pricing" value="Upfront" />
              <Stat label="Privacy-first" value="Data-safe" />
              <Stat label="Turnaround" value="Fast" />
              <Stat label="Support" value="Friendly" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white">
                  Popular requests
                </h2>
                <span className="text-xs text-white/60">Typical</span>
              </div>

              <ul className="mt-4 space-y-3">
                <CardLine title="Virus and malware removal" detail="Clean, secure, and updated" />
                <CardLine title="Slow Mac or PC tune-up" detail="Speed boost and cleanup" />
                <CardLine title="Data recovery" detail="Drives, laptops, and transfers" />
                <CardLine title="New computer setup" detail="Accounts, backups, and apps" />
                <CardLine title="Wi-Fi and network help" detail="Home and small office" />
              </ul>

              <div className="mt-5 rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm text-white/70">
                  Prefer text? Send a quick summary and any error message or photo.
                </p>
                <div className="mt-3 flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 rounded-xl bg-white px-3 py-2 text-center text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Contact
                  </a>
                  <a
                    href="#services"
                    className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
                  >
                    Services
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-white/50">
              Tip: We can refine copy and prices later. This layout is the foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 font-semibold text-white">{value}</div>
    </div>
  );
}

function CardLine({ title, detail }: { title: string; detail: string }) {
  return (
    <li className="rounded-xl bg-black/20 px-4 py-3 ring-1 ring-white/10">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-white/60">{detail}</div>
    </li>
  );
}