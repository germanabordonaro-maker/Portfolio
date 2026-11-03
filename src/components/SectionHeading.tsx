import { EditorialLabel } from "./EditorialLabel";
import { Reveal } from "./Reveal";

type Props = {
  label: string;
  lines: string[];
  intro?: string;
  tone?: "ink" | "ivory";
  className?: string;
};

export function SectionHeading({ label, lines, intro, tone = "ink", className = "" }: Props) {
  return (
    <header className={className}>
      <Reveal>
        <EditorialLabel tone={tone}>{label}</EditorialLabel>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-8 text-h2 sm:mt-10">
          {lines.map((l, i) => (
            <span key={l} className={`block ${i % 2 === 1 ? "sm:pl-[12%]" : ""}`}>
              {l}
            </span>
          ))}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="label mt-8 max-w-[34ch] leading-relaxed sm:mt-12 sm:ml-[12%] lg:ml-[48%]">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}
