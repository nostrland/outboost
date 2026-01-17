import type React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import AnimatedBackground from "./components/AnimatedBackground";

const PHONE_DISPLAY = "(203) 854-5555";
const PHONE_TEL = "+12038545555";

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <div className="font-mono text-xs tracking-[0.25em] text-accent">{eyebrow}</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function IconComputer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 20h10M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWifi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4.5 9.5C9.2 5.5 14.8 5.5 19.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 12.5c3.2-2.8 5.8-2.8 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.2 15.5c1.5-1.3 2.1-1.3 3.6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="18.2" r="1" fill="currentColor" />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 12l1.7 1.7L15 9.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDatabase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="6.5" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 6.5V12c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5V6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12v5.5c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5V12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
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
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/30 hover:bg-accent-glow sm:p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2.5">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", issue: "", contact: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Tech Support Request");
    const body = encodeURIComponent(
      `Name: ${formState.name}\n\nIssue: ${formState.issue}\n\nContact: ${formState.contact}`
    );
    window.location.href = `mailto:help@outboost.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Describe your issue"
          rows={3}
          value={formState.issue}
          onChange={(e) => setFormState({ ...formState, issue: e.target.value })}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone or email"
          value={formState.contact}
          onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
      >
        Send Request
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <AnimatedBackground />

      <div className="relative">
        <Nav />

        <main className="pt-20 sm:pt-24">
          {/* Hero */}
          <section className="py-16 sm:py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Nashville, TN
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Fast, friendly
                  <br />
                  <span className="text-accent">tech repair</span>
                  <br />
                  & IT support.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                  Computer repair, network setup, cybersecurity, and small business IT for homes and businesses in Nashville. Clear pricing. No nonsense.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Call or Text Now
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Get Free Estimate
                  </a>
                </div>

                <p className="mt-4 text-sm text-white/40">
                  Same-day service available · {PHONE_DISPLAY}
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <Section id="services" eyebrow="SERVICES" title="What we fix">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Computer & Laptop Repair"
                description="Hardware and software troubleshooting for PCs and Macs."
                Icon={IconComputer}
                bullets={["Virus & malware removal", "Hardware fixes & upgrades", "Crashes, slowdowns, tune-ups"]}
              />
              <ServiceCard
                title="Home Network & Wi-Fi"
                description="Router setup, range extension, and connectivity fixes."
                Icon={IconWifi}
                bullets={["Router & extender setup", "Dead zone elimination", "Printer & device connectivity"]}
              />
              <ServiceCard
                title="Cybersecurity & Protection"
                description="Keep your devices and data safe from threats."
                Icon={IconShield}
                bullets={["Antivirus setup & config", "Basic security audits", "Secure backup solutions"]}
              />
              <ServiceCard
                title="Data Backup & Recovery"
                description="Prevent data loss and recover what's been lost."
                Icon={IconDatabase}
                bullets={["Cloud & offsite backups", "Drive failure recovery", "Account access restoration"]}
              />
              <ServiceCard
                title="Small Business IT"
                description="Reliable IT support without the big contracts."
                Icon={IconBriefcase}
                bullets={["Network & server setup", "Cloud & email configuration", "Remote monitoring options"]}
              />
              <ServiceCard
                title="On-Site & Remote Help"
                description="We come to you or connect remotely—whatever's faster."
                Icon={IconMapPin}
                bullets={["Same-day Nashville visits", "Secure remote sessions", "Flexible scheduling"]}
              />
            </div>
          </Section>

          {/* Process */}
          <Section id="how-it-works" eyebrow="PROCESS" title="How it works">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { n: "01", t: "Describe the issue", d: "Call, text, or fill out the form. Tell us what's going on with your device or network." },
                { n: "02", t: "Get a clear estimate", d: "We'll give you upfront pricing before any work begins. No surprises, no hidden fees." },
                { n: "03", t: "We fix it", d: "On-site or remote, we solve the problem and explain what we did in plain English." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="font-mono text-2xl font-bold text-accent">{s.n}</div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" eyebrow="FAQ" title="Common questions">
            <div className="mx-auto max-w-3xl space-y-3">
              {[
                { q: "Do you work on Macs and PCs?", a: "Yes, we service both. Laptops, desktops, and common accessories like printers and external drives." },
                { q: "Do you offer remote help?", a: "Absolutely. Many issues can be resolved quickly via secure remote session. We'll let you know if on-site is needed." },
                { q: "What areas in Nashville do you serve?", a: "We cover the greater Nashville area including Davidson, Williamson, and Rutherford counties. Same-day visits available for most locations." },
                { q: "How much does a typical repair cost?", a: "Most repairs fall between $75–$200. We always provide a clear estimate before starting any work." },
                { q: "Do you offer business support contracts?", a: "We offer flexible ongoing support without long-term contracts. Pay monthly or per-visit—your choice." },
                { q: "What if you can't fix it?", a: "If we can't resolve your issue, you don't pay for the diagnostic. We're upfront about what's fixable." },
              ].map((f) => (
                <details key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6">
                  <summary className="cursor-pointer text-sm font-semibold text-white/90 sm:text-base">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>

          {/* Contact */}
          <Section id="contact" eyebrow="CONTACT" title="Get help today">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white">Send us a message</h3>
                <p className="mt-2 text-sm text-white/60">Describe your issue and we'll get back to you quickly.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white">Call or text</h3>
                  <p className="mt-2 text-sm text-white/60">Fastest way to reach us. We respond quickly.</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-4 inline-flex items-center gap-2 text-2xl font-bold text-accent hover:text-accent-hover"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white">Why Outboost?</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Local Nashville business
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Same-day service available
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Clear, upfront pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      No fix, no charge guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="border-t border-white/10 py-8 sm:py-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-accent">
                    O
                  </span>
                  <span className="text-sm font-semibold">Outboost</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-white/50">
                  <span>Nashville, TN</span>
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE_DISPLAY}</a>
                </div>
                <div className="text-xs text-white/40">
                  © {new Date().getFullYear()} Outboost. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
