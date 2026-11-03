import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { approach } from "../content";
import { EditorialLabel } from "../components/EditorialLabel";
import { AccentMark } from "../components/AccentMark";

type Step = (typeof approach.steps)[number];

/** Ogni parola prende peso mentre attraversa il centro dello schermo. */
function Word({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 50%", "end 15%"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 1, 0.4]);
  const x = useTransform(scrollYProgress, [0, 0.5], [reduce ? 0 : -16, 0]);
  const shift = ["", "lg:pl-[18%]", "lg:pl-[6%]"][index];

  return (
    <div ref={ref} className={`rule grid gap-6 py-10 sm:py-14 lg:grid-cols-12 lg:items-end ${shift}`}>
      <motion.h3 style={reduce ? undefined : { opacity, x }} className="display text-h1 lg:col-span-8">
        {step.word}
      </motion.h3>
      <div className="lg:col-span-4 lg:pb-4">
        <p className="label text-accent">{step.number} +</p>
        <p className="label mt-4 max-w-[34ch] leading-relaxed">{step.text}</p>
      </div>
    </div>
  );
}

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="py-24 sm:py-32 lg:py-44">
      <div className="gutter">
        <div className="flex items-center justify-between">
          <EditorialLabel>{approach.label}</EditorialLabel>
          <AccentMark size={12} />
        </div>
        <h2 id="approach-title" className="sr-only">
          Osservo. Immagino. Creo.
        </h2>
        <div className="mt-10 sm:mt-16">
          {approach.steps.map((s, i) => (
            <Word key={s.number} step={s} index={i} />
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
