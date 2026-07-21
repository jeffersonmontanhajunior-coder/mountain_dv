import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import { SERVICES_DATA } from "@/constants/services-data";

export function Services() {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <Reveal className="max-w-xl">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">Serviços</p>
        <h2 className="mt-3 text-h2 font-bold text-text-primary">O que a Mountain Dev constrói.</h2>
      </Reveal>
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DATA.map((service) => (
          <RevealItem key={service.slug}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits.slice(0, 3)}
              href={`/servicos/${service.slug}`}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
