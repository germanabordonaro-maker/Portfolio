import type { VisualStudy as Study } from "../content";
import { MediaFrame } from "./MediaFrame";
import { Reveal } from "./Reveal";

/** Frammento dell'archivio visivo personale: piccola immagine + didascalia. */
export function VisualStudy({ study, className = "", dark = false }: { study: Study; className?: string; dark?: boolean }) {
  return (
    <figure className={`group ${className}`}>
      <Reveal>
        <MediaFrame dark={dark} media={study.media} ratio={study.ratio} />
        <figcaption className={`label mt-3 flex gap-3 px-1 text-[0.625rem] ${dark ? "text-ivory/55" : "text-mute"}`}>
          <span className="text-accent" aria-hidden="true">
            +
          </span>
          <span>
            Visual study {study.code} — {study.title}
          </span>
        </figcaption>
      </Reveal>
    </figure>
  );
}
