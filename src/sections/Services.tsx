import { services } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceRow } from "../components/ServiceRow";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="gutter py-24 sm:py-32 lg:py-44">
      <div id="services-title">
        <SectionHeading label={services.label} lines={services.heading} intro={services.intro} />
      </div>
      <div className="mt-16 sm:mt-24 lg:mt-32">
        {services.items.map((s) => (
          <ServiceRow key={s.number} {...s} />
        ))}
        <div className="rule" />
      </div>
    </section>
  );
}
