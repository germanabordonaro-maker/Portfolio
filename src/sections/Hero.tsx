import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "../content";
import { MediaFrame } from "../components/MediaFrame";
import { AccentMark } from "../components/AccentMark";

/**
 * Su schermi larghi il palco replica la composizione di Figma (1344 × 678):
 * le immagini sono posizionate in percentuale e il titolo le attraversa.
 * Sotto lg tutto scorre in colonna.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" aria-labelledby="hero-title" className="gutter pb-20 pt-28 sm:pt-36 lg:pb-28">
      <motion.p className="label flex items-center justify-center gap-3 text-center" {...fade(0)}>
        <AccentMark size={8} />
        {site.descriptor}
      </motion.p>

      <div className="relative mt-8 sm:mt-12 lg:aspect-[1344/678]">
        <motion.h1 id="hero-title" className="display relative z-10 text-h1" {...fade(0.1)}>
          <span className="block">{hero.headline[0]}</span>
          <span className="block text-right sm:pr-[2%]">
            {hero.headline[1].replace(".", "")}
            <span className="text-accent">.</span>
          </span>
        </motion.h1>

        <motion.div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 lg:mt-0 lg:block" {...fade(0.3)}>
          <MediaFrame
            media={hero.main}
            eager
            zoom={false}
            className="col-span-2 mx-auto aspect-[3/4] w-[72%] sm:w-[52%] lg:absolute lg:left-[37.4%] lg:top-[0.3%] lg:mx-0 lg:w-[25.1%]"
          />
          <MediaFrame
            media={hero.detailLeft}
            eager
            zoom={false}
            className="aspect-[195/244] lg:absolute lg:left-[11.3%] lg:top-[-6.2%] lg:w-[14.5%]"
          />
          <MediaFrame
            media={hero.detailRight}
            eager
            zoom={false}
            className="aspect-[195/244] lg:absolute lg:left-[73.5%] lg:top-[69.6%] lg:w-[14.5%]"
          />
          <p className="label col-span-2 max-w-[30ch] leading-relaxed lg:absolute lg:left-0 lg:top-[50.4%] lg:w-[19%] lg:min-w-[11rem]">
            {hero.intro}
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="label link-underline mx-auto mt-16 flex w-fit items-center gap-3 hover:text-accent lg:mt-14"
        {...fade(0.7)}
      >
        {hero.scroll}
        <span aria-hidden="true" className="inline-block animate-bounce [animation-duration:2.4s] motion-reduce:animate-none">
          ↓
        </span>
      </motion.a>
    </section>
  );
}
