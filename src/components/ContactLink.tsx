import type { ContactItem } from "../content";

/** Voce di contatto. Con `href` è un link, altrimenti testo semplice. */
export function ContactLink({ label, value, href }: ContactItem) {
  return (
    <li className="rule py-5">
      <p className="label text-mute">{label}</p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="link-underline mt-2 inline-block break-all text-small hover:text-accent"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 break-all text-small text-ink/80">{value}</p>
      )}
    </li>
  );
}
