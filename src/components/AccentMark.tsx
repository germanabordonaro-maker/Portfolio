/** Segno grafico ricorrente: un piccolo "obiettivo" viola. */
export function AccentMark({ className = "", size = 10 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 10 10"
      className={`inline-block shrink-0 text-accent ${className}`}
    >
      <circle cx="5" cy="5" r="5" fill="currentColor" />
      <circle cx="5" cy="5" r="1.6" fill="#F6F3ED" />
    </svg>
  );
}
