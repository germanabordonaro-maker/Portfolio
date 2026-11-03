import { useState } from "react";
import type { Media } from "../content";

type Props = {
  media: Media;
  /** Proporzione CSS, es. "4/5". Evita i layout shift. */
  ratio?: string;
  /** Classi aggiuntive (anche aspect-[..] responsive). */
  className?: string;
  eager?: boolean;
  /** Se true, l'immagine ingrandisce leggermente al hover del gruppo. */
  zoom?: boolean;
  /** Segnaposto per sfondi scuri. */
  dark?: boolean;
};

/**
 * Contenitore per immagini e video. Senza `src`/`video`, o se il file non
 * si carica, mostra un segnaposto neutro con segni di inquadratura.
 */
export function MediaFrame({ media, ratio, className = "", eager = false, zoom = true, dark = false }: Props) {
  const [failed, setFailed] = useState(false);
  const style = ratio ? { aspectRatio: ratio } : undefined;
  const zoomCls = zoom
    ? "transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.035] group-focus-within:scale-[1.035]"
    : "";

  if (media.video && !failed) {
    return (
      <div className={`relative overflow-hidden bg-stone ${className}`} style={style}>
        <video
          className={`h-full w-full object-cover ${zoomCls}`}
          src={media.video}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  if (media.src && !failed) {
    return (
      <div className={`relative overflow-hidden bg-stone ${className}`} style={style}>
        <img
          className={`h-full w-full object-cover ${zoomCls}`}
          src={media.src}
          alt={media.alt ?? ""}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  const mark = dark ? "border-ivory/35" : "border-ink/35";
  return (
    <div
      className={`relative overflow-hidden ${dark ? "bg-night" : "bg-stone"} ${className}`}
      style={style}
      role="img"
      aria-label={media.note ? `Segnaposto: ${media.note}` : "Segnaposto media"}
    >
      <div className={`absolute inset-0 grain ${dark ? "opacity-20" : "opacity-50"} ${zoomCls}`} aria-hidden="true" />
      {(["left-3 top-3 border-l border-t", "right-3 top-3 border-r border-t", "left-3 bottom-3 border-l border-b", "right-3 bottom-3 border-r border-b"] as const).map(
        (c) => (
          <span key={c} aria-hidden="true" className={`absolute h-3.5 w-3.5 ${mark} ${c}`} />
        ),
      )}
      {media.note && (
        <p className={`label absolute bottom-6 left-6 right-6 text-[0.625rem] ${dark ? "text-ivory/45" : "text-ink/50"}`}>
          {media.note}
        </p>
      )}
    </div>
  );
}
