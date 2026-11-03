import { footer, site } from "../content";

/** Fascia a tinta piena nel colore d'accento, solo testo. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-accent text-paper">
      <div className="gutter flex items-end justify-between pb-8 pt-20 sm:pt-28 lg:pt-48">
        <p className="label font-bold">
          {site.name} {year}
        </p>
        <a href="#top" className="label link-underline inline-flex items-center gap-2 font-bold">
          {footer.topLabel}
          <svg aria-hidden="true" width="8" height="10" viewBox="0 0 8 10" fill="none" className="shrink-0">
            <path d="M4 10V1M1 4l3-3 3 3" stroke="currentColor" strokeWidth="1" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
