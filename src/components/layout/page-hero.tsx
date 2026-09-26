import { Container, Eyebrow } from "@/components/layout/container";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-paper">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/images/hero-colonnade.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/92 to-navy/70" aria-hidden="true" />
      <Container className="relative py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-paper md:text-5xl">
          {title}
        </h1>
        {lead ? <p className="mt-5 max-w-2xl text-pretty text-paper/72">{lead}</p> : null}
      </Container>
    </section>
  );
}
