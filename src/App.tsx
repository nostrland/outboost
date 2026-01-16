import type React from "react";
import Nav from "./components/Nav";
import AnimatedBackground from "./components/AnimatedBackground";

const PHONE_DISPLAY = "(203) 854-5555";
const PHONE_TEL = "+12038545555";

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <div className="font-mono text-xs tracking-[0.22em] text-white/45">{eyebrow}</div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:mt-3 sm:text-2xl md:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function IconChip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10 10h4v4h-4z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.7 1.7L15 9.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDatabase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse
        cx="12"
        cy="6.5"
        rx="7"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 6.5V12c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5V6.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 12v5.5c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5V12"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l1.1 4.2L17.3 7 13.1 8.1 12 12.3 10.9 8.1 6.7 7l4.2-.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.5L22 15l-2.3.5L19 18l-.7-2.5L16 15l2.3-.5L19 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 13.5l.6 2.1L7.2 16l-2.1.4-.6 2.1-.6-2.1L1.8 16l2.1-.4.6-2.1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWifi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 9.5C9.2 5.5 14.8 5.5 19.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 12.5c3.2-2.8 5.8-2.8 9 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.2 15.5c1.5-1.3 2.1-1.3 3.6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="18.2" r="1" fill="currentColor" />
    </svg>
  );
}

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 18l-3 3V6.5C4 5.1 5.1 4 6.5 4h11C18.9 4 20 5.1 20 6.5v8C20 15.9 18.9 17 17.5 17H9.2L7 18z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.8h8M8 11.8h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServiceCard({
  title,
  description,
  Icon,
  bullets,
}: {
  title: string;
  description: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  bullets: string[];
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 sm:p-5">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/90 sm:h-11 sm:w-11">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold tracking-tight sm:text-base">{title}</div>
          <div className="mt-1.5 text-xs leading-relaxed text-white/65 sm:mt-2 sm:text-sm">{description}</div>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5 text-xs text-white/70 sm:mt-4 sm:space-y-2 sm:text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <AnimatedBackground />

      <div className="relative">
        <Nav />

        <main className="pt-20 sm:pt-24 md:pt-28">
          {/* Hero */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Fast, friendly
                  <br />
                  computer repair.
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg">
                  Hardware and software repair, virus removal, data recovery, new computer setup,
                  and ongoing help. One page. Clear pricing. No nonsense.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Get a free estimate
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <span className="hidden sm:inline">Call or text </span>
                    <span className="sm:hidden">Call </span>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <Section id="services" eyebrow="SERVICES" title="Help that fixes the problem">
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Computer repair"
                description="Hardware and software troubleshooting, done right."
                Icon={IconChip}
                bullets={["Crashes, slowdowns, errors", "Hardware diagnostics", "Updates and stability fixes"]}
              />
              <ServiceCard
                title="Virus removal"
                description="Clean-up, hardening, and safer setup going forward."
                Icon={IconShield}
                bullets={["Malware and pop-up removal", "Browser cleanup", "Security checkup"]}
              />
              <ServiceCard
                title="Data recovery"
                description="Best-effort recovery for drives, devices, and accounts."
                Icon={IconDatabase}
                bullets={["Deleted files and corrupted drives", "Backup strategy", "Account access recovery"]}
              />
              <ServiceCard
                title="New computer setup"
                description="Migration, backups, security, and essentials installed."
                Icon={IconSpark}
                bullets={["Move your files safely", "Email and app setup", "Speed and security baseline"]}
              />
              <ServiceCard
                title="Wi-Fi and printer fixes"
                description="Home network tuning and annoying printer issues handled."
                Icon={IconWifi}
                bullets={["Dropouts and dead zones", "Printer setup and drivers", "Network cleanup"]}
              />
              <ServiceCard
                title="Ongoing support"
                description="A real person you can text when something breaks."
                Icon={IconChat}
                bullets={["Quick help sessions", "Preventive tune-ups", "Priority troubleshooting"]}
              />
            </div>
          </Section>

          {/* How it works */}
          <Section id="how-it-works" eyebrow="PROCESS" title="Simple, transparent steps">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { n: "01", t: "Describe the issue", d: "Text or call with symptoms and device details." },
                { n: "02", t: "Get a clear estimate", d: "You'll know cost and timing before work begins." },
                { n: "03", t: "Repair and verify", d: "Fix, test, and explain what changed in plain English." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <div className="font-mono text-xs tracking-[0.22em] text-white/45">{s.n}</div>
                  <div className="mt-2 text-sm font-semibold tracking-tight sm:mt-3 sm:text-base">{s.t}</div>
                  <div className="mt-1.5 text-xs leading-relaxed text-white/65 sm:mt-2 sm:text-sm">{s.d}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" eyebrow="FAQ" title="Common questions">
            <div className="space-y-2.5 sm:space-y-3">
              {[
                { q: "Do you work on Macs and PCs?", a: "Yes. Laptops, desktops, and common accessories." },
                { q: "Do you offer remote help?", a: "Yes, when it's safe and appropriate for the issue." },
                { q: "Do you do data recovery?", a: "Yes. We'll tell you the realistic chances up front." },
              ].map((f) => (
                <details key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <summary className="cursor-pointer list-none text-xs font-semibold text-white/90 sm:text-sm">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-xs leading-relaxed text-white/65 sm:mt-3 sm:text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>

          {/* Contact */}
          <Section id="contact" eyebrow="CONTACT" title="Get help today">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
              <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
                Call or text{" "}
                <a
                  className="font-semibold text-white underline underline-offset-4"
                  href={`tel:${PHONE_TEL}`}
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                for a quick estimate.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Call now
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View services
                </a>
              </div>
            </div>

            <footer className="mt-8 pb-8 text-xs text-white/45 sm:mt-10 sm:pb-10">
              © {new Date().getFullYear()} Outboost. All rights reserved.
            </footer>
          </Section>
        </main>
      </div>
    </div>
  );
}