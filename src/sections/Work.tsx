import { archive, work } from "../content";
import { ProjectItem } from "../components/ProjectItem";
import { SectionHeading } from "../components/SectionHeading";
import { VisualStudy } from "../components/VisualStudy";
import { EditorialLabel } from "../components/EditorialLabel";
import { Reveal } from "../components/Reveal";

/**
 * Selected work: sequenza di immagini separate da bordi scuri.
 * Su lg le posizioni replicano il file Figma (griglia a 12 colonne, margini
 * verticali in px); sotto lg le voci scorrono in colonna, sfalsate a destra.
 */
export function Work() {
  const [p1, p2, p3, p4] = work.projects;
  return (
    <section id="work" aria-labelledby="work-title" className="bg-ink py-24 text-ivory sm:py-32 lg:py-44">
      <div className="gutter">
        <div id="work-title">
          <SectionHeading tone="ivory" label={work.label} lines={work.heading} intro={work.intro} />
        </div>
        <Reveal className="mt-16 sm:mt-24">
          <EditorialLabel tone="ivory" className="text-ivory/55">
            {work.rangeLabel}
          </EditorialLabel>
        </Reveal>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-2.5 gap-y-14 px-2.5 lg:grid-cols-12 lg:gap-y-0">
        {/* riga 1 */}
        <ProjectItem project={p1} className="lg:col-span-7" />
        <ProjectItem
          project={p2}
          className="ml-auto w-[84%] lg:col-span-4 lg:col-start-9 lg:ml-0 lg:mt-40 lg:w-auto"
        />

        {/* riga 2 */}
        <VisualStudy
          dark
          study={archive[0]}
          className="w-[60%] lg:col-span-4 lg:col-start-1 lg:ml-[16.3%] lg:mt-[466px] lg:w-[72%]"
        />
        <ProjectItem
          project={p3}
          className="ml-auto w-[88%] lg:col-span-4 lg:col-start-5 lg:ml-0 lg:mt-[29px] lg:w-auto"
        />
        <VisualStudy
          dark
          study={archive[1]}
          className="w-[48%] lg:col-span-4 lg:col-start-9 lg:ml-[15.6%] lg:mt-[108px] lg:w-[80.3%]"
        />

        {/* riga 3: immagine o video a tutta larghezza */}
        <ProjectItem
          project={p4}
          aspectClass="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[1420/609]"
          className="lg:col-span-12 lg:mt-[244px]"
        />

        {/* riga 4 */}
        <VisualStudy
          dark
          study={archive[2]}
          className="lg:col-span-12 lg:mt-[358px] lg:w-[41.3%] lg:justify-self-center"
        />
      </div>
    </section>
  );
}
