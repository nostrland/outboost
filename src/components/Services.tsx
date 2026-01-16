import Reveal from "./Reveal";

const services = [
  {
    title: "Computer repair",
    desc: "Hardware and software fixes for Macs and PCs. Fast diagnosis, clear recommendations.",
  },
  {
    title: "Virus removal",
    desc: "Remove malware, popups, and unwanted programs. Lock things down so it stays clean.",
  },
  {
    title: "Data recovery",
    desc: "Accidental deletes, failing drives, and corrupted files. We will tell you the odds first.",
  },
  {
    title: "New computer setup",
    desc: "Transfer files, install essentials, set up backups, and make it feel familiar again.",
  },
  {
    title: "Speed tune-up",
    desc: "Startup cleanup, storage fixes, updates, and performance improvements that actually stick.",
  },
  {
    title: "Ongoing help",
    desc: "Monthly or as-needed support for home or small business. Remote or onsite.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-[color:var(--muted-2)]">Services</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
                The stuff you actually need fixed
              </h2>
              <p className="mt-3 max-w-2xl text-[color:var(--muted)]">
                Straightforward help for the most common computer problems. Clear options, no pressure.
              </p>
            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 md:inline-flex"
            >
              Get a free estimate
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delayMs={idx * 70} className="h-full">
              <div className="h-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 backdrop-blur transition hover:bg-[color:var(--panel-2)]">
                <h3 className="text-base font-semibold text-[color:var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}