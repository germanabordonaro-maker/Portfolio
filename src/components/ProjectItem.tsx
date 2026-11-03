import type { Project } from "../content";
import { MediaFrame } from "./MediaFrame";
import { Reveal } from "./Reveal";

type Props = {
  project: Project;
  className?: string;
  /** Classi di proporzione responsive; se assenti usa project.ratio. */
  aspectClass?: string;
};

/** Progetto su fondo scuro: immagine a filo, didascalia minima sotto. */
export function ProjectItem({ project, className = "", aspectClass }: Props) {
  const { number, category, disciplines, title, year, description, media, ratio, href } = project;
  const titleEl = href ? (
    <a href={href} className="link-underline after:absolute after:inset-0 after:content-['']">
      {title}
    </a>
  ) : (
    title
  );

  return (
    <article className={`group relative text-ivory ${className}`}>
      <Reveal>
        <MediaFrame dark media={media} ratio={aspectClass ? undefined : ratio} className={aspectClass} />
      </Reveal>
      <Reveal delay={0.06} className="px-1 pt-4">
        <div className="flex items-baseline justify-between gap-6">
          <p className="label">
            <span className="text-accent">{number}</span>
            <span className="mx-2 text-ivory/40" aria-hidden="true">
              +
            </span>
            {category}
          </p>
          {year && <p className="label text-ivory/50">{year}</p>}
        </div>
        {title && (
          <h3 className="display mt-3 flex items-baseline gap-3 text-h3">
            <span>{titleEl}</span>
            {href && (
              <span
                aria-hidden="true"
                className="inline-block text-[0.55em] text-accent transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
            )}
          </h3>
        )}
        <p className="label mt-2 text-ivory/50">{disciplines}</p>
        {description && <p className="mt-3 max-w-[40ch] text-small text-ivory/75">{description}</p>}
      </Reveal>
    </article>
  );
}
