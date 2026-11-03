import type { ReactNode } from "react";

/** Etichetta piccola, maiuscola e spaziata. Lo slash è il dettaglio viola. */
export function EditorialLabel({
  children,
  className = "",
  tone = "ink",
}: {
  children: string;
  className?: string;
  tone?: "ink" | "ivory";
}) {
  const parts = children.split(" / ");
  const color = tone === "ivory" ? "text-ivory" : "text-ink";
  const out: ReactNode[] = [];
  parts.forEach((p, i) => {
    if (i > 0)
      out.push(
        <span key={`s${i}`} className="mx-[0.7em] text-accent" aria-hidden="true">
          /
        </span>,
      );
    out.push(<span key={`p${i}`}>{p}</span>);
  });
  return <p className={`label ${color} ${className}`}>{out}</p>;
}
