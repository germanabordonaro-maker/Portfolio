import { useEffect, useState } from "react";
import { nav, site } from "../content";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = nav.map((n) => n.href.slice(1));

export function Navigation() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ivory/95" : "bg-transparent"
      }`}
    >
      <div className="gutter flex h-16 items-center justify-between sm:h-20">
        <a href="#top" onClick={() => setOpen(false)} className="label link-underline" aria-label={`${site.name} — torna all'inizio`}>
          {site.name}
        </a>

        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((n) => {
              const isActive = active === n.href.slice(1);
              return (
                <li key={n.href}>
                  <a
                    href={n.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`label inline-flex items-center gap-1.5 transition-colors hover:text-accent ${
                      isActive ? "text-ink" : "text-ink/55"
                    }`}
                  >
                    {n.label}
                    <span aria-hidden="true" className={isActive ? "text-accent" : ""}>
                      +
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="label -mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="fixed inset-x-0 bottom-0 top-16 bg-ivory md:hidden">
          <ul className="gutter flex h-full flex-col justify-center pb-24">
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-ink/15 py-4">
                <a href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 text-[3rem] font-extralight leading-none tracking-tight">
                  <span className="label text-accent">0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
