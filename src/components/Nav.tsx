import { useLayoutEffect, useRef, useState } from "react";

const PHONE_DISPLAY = "(203) 854-5555";
const PHONE_TEL = "+12038545555";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const close = () => {
    if (menuRef.current) {
      menuRef.current.style.display = 'none';
    }
    document.body.style.overflow = "";
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex items-center justify-between border-b border-white/10 py-4">
          <a
            href="#"
            className="flex items-center gap-3 text-sm font-semibold tracking-tight"
            onClick={close}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent font-bold">
              O
            </span>
            <span className="hidden sm:inline">Outboost</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop call to action */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 lg:inline-flex"
            >
              {PHONE_DISPLAY}
            </a>

            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent-hover lg:inline-flex"
            >
              Get Estimate
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (open) {
                  close();
                } else {
                  if (menuRef.current) {
                    menuRef.current.style.display = '';
                  }
                  setOpen(true);
                }
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-white/90 active:bg-white/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile panel */}
        {open && (
          <div ref={menuRef} className="md:hidden">
            {/* Backdrop */}
            <button
              type="button"
              className="fixed inset-0 z-40 cursor-default bg-black/60"
              aria-label="Close menu backdrop"
              onClick={close}
            />

            <div className="relative z-50 mt-2 rounded-2xl border border-white/10 bg-black p-4">
              <div className="space-y-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 active:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-black active:bg-accent-hover"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href="#contact"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white active:bg-white/10"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
