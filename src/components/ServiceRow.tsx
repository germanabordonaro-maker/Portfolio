import { Reveal } from "./Reveal";

type Props = {
  number: string;
  title: string;
  description: string;
  /** Parte finale della descrizione, in corsivo. */
  descriptionEm?: string;
  areas: string[];
  note?: string;
};

export function ServiceRow({ number, title, description, descriptionEm, areas, note }: Props) {
  return (
    <Reveal>
      <article className="group rule grid gap-x-6 gap-y-6 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
        <p className="label lg:col-span-1 lg:pt-4" aria-hidden="true">
          <span className="transition-colors duration-500 group-hover:text-accent">{number}</span> +
        </p>

        <h3 className="display text-h2 lg:col-span-6 lg:col-start-2">{title}</h3>

        <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
          <p className="max-w-[38ch] text-body">
            {description}
            {descriptionEm && <em className="italic">{descriptionEm}</em>}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 sm:mt-8" aria-label={`Ambiti: ${title}`}>
            {areas.map((a) => (
              <li key={a} className="label flex items-center gap-2 text-ink/65">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
          {note && <p className="mt-8 max-w-[34ch] text-body text-accent">{note}</p>}
        </div>
      </article>
    </Reveal>
  );
}
