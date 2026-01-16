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

  // Lock page scroll when the mobile menu is open - use useLayoutEffect for synchronous execution
  useLayoutEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    } else {
      // Immediately unlock when closing
      document.body.style.overflow = "";
    }
  }, [open]);

  const close = () => {
    // Immediately hide menu visually before React re-renders
    if (menuRef.current) {
      menuRef.current.style.display = 'none';
    }
    // Unlock scroll immediately
    document.body.style.overflow = "";
    // Then update state
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <nav className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/95 px-3 py-2.5 sm:mt-4 sm:px-4 sm:py-3">
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-semibold tracking-tight sm:gap-3 sm:text-sm"
            onClick={close}
          >
            <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5 sm:h-9 sm:w-9">
              O
            </span>
            <span className="hidden sm:inline">Outboost</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex lg:gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop call to action */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 lg:inline-flex lg:px-4 lg:py-2 lg:text-sm"
            >
              <span className="hidden 2xl:inline">Call or text </span>
              {PHONE_DISPLAY}
            </a>

            <a
              href="#contact"
              className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90 lg:inline-flex lg:px-4 lg:py-2 lg:text-sm"
            >
              Get estimate
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
                  // Reset display style when opening
                  if (menuRef.current) {
                    menuRef.current.style.display = '';
                  }
                  setOpen(true);
                }
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/90 active:bg-white/10 md:hidden"
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
              className="fixed inset-0 z-40 cursor-default bg-black/50"
              aria-label="Close menu backdrop"
              onClick={close}
            />

            <div className="relative z-50 mt-2 rounded-2xl border border-white/10 bg-black/95 p-3 sm:mt-3 sm:p-4">
              <div className="space-y-1.5 sm:space-y-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white/90 active:bg-white/10 sm:px-4 sm:py-3"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 grid gap-2 sm:mt-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black active:bg-white/90"
                >
                  Call or text {PHONE_DISPLAY}
                </a>
                <a
                  href="#contact"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white active:bg-white/10"
                >
                  Get a free estimate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}