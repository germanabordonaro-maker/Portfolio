import { contact } from "../content";
import { ContactLink } from "../components/ContactLink";
import { EditorialLabel } from "../components/EditorialLabel";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="gutter pb-32 pt-24 sm:pt-32 lg:pb-44 lg:pt-44">
      <Reveal className="flex justify-center">
        <EditorialLabel className="border-b border-ink/40 pb-1.5">{contact.label}</EditorialLabel>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          id="contact-title"
          className="mt-10 text-center font-display font-normal leading-[0.8] tracking-normal sm:mt-14 lg:leading-[0.725]"
          style={{ fontSize: "clamp(3.25rem, 0.8rem + 13vw, 15rem)" }}
        >
          <span className="block">{contact.heading[0]}</span>
          <span className="block">{contact.heading[1]}</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 sm:mt-24 lg:grid-cols-12 lg:gap-x-6">
        <Reveal className="lg:col-span-4 lg:col-start-1">
          <p className="label max-w-[34ch] leading-relaxed">{contact.copy}</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-baseline gap-4 border-b border-ink pb-3 text-h3 font-extralight transition-colors duration-500 hover:border-accent hover:text-accent"
          >
            <span>{contact.cta}</span>
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="shrink-0 text-accent transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <path d="M1 13L13 1M4 1h9v9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>

          <ul className="mt-14 grid max-w-xl gap-x-8 sm:grid-cols-2">
            {contact.items.map((item) => (
              <ContactLink key={item.label} {...item} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
