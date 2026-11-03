import { about } from "../content";
import { EditorialLabel } from "../components/EditorialLabel";
import { MediaFrame } from "../components/MediaFrame";
import { Reveal } from "../components/Reveal";

export function About() {
  const { before, em, after } = about.statement;
  return (
    <section id="about" aria-labelledby="about-title" className="gutter py-24 sm:py-32 lg:py-44">
      <Reveal className="flex justify-center">
        <EditorialLabel className="border-b border-ink/40 pb-1.5">{about.label}</EditorialLabel>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 id="about-title" className="display mx-auto mt-10 text-center text-h2 sm:mt-14">
          {before}
          <em className="italic">{em}</em>
          {after}
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-y-14 lg:mt-28 lg:grid-cols-12 lg:gap-x-6">
        {/* ritratto: a sinistra, più in basso rispetto al testo */}
        <Reveal className="lg:col-span-4 lg:col-start-2 lg:pt-24">
          <MediaFrame media={about.portrait} ratio="3/4" className="w-[78%] lg:w-full" />
          <p className="label mt-3 text-[0.625rem] text-mute">
            <span className="text-accent">+</span> Fig. 01
          </p>
        </Reveal>

        <div className="space-y-6 lg:col-span-5 lg:col-start-8">
          {about.paragraphs.map((p) => (
            <Reveal key={p}>
              <p className="max-w-[46ch] text-body text-ink/85">{p}</p>
            </Reveal>
          ))}
          <Reveal className="pt-10">
            <p className="display max-w-[16ch] text-h3">{about.today}</p>
          </Reveal>
          <Reveal>
            <p className="max-w-[46ch] text-body text-ink/85">{about.todayBody}</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-28 sm:mt-36 lg:mt-48">
        <blockquote className="display text-center text-h3 italic text-accent">
          {about.closing.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
      </Reveal>

      {/* background: solo tipografia e filetti */}
      <div className="mt-28 sm:mt-36 lg:mt-48">
        <Reveal>
          <EditorialLabel>{about.timelineLabel}</EditorialLabel>
        </Reveal>
        <ol className="mt-8">
          {about.timeline.map((t) => (
            <li key={t.title}>
              <Reveal>
                <div className="rule grid gap-x-6 gap-y-3 py-7 sm:py-9 lg:grid-cols-12">
                  <p className="label text-mute lg:col-span-3 lg:pt-2">{t.when}</p>
                  <h3 className="display text-h3 lg:col-span-5">{t.title}</h3>
                  <div className="label leading-relaxed text-ink/75 lg:col-span-4 lg:pt-2">
                    {t.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="rule" />
      </div>
    </section>
  );
}
