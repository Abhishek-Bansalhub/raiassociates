import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/layout/container";

export function CtaBand({
  title = "A short note is enough to begin.",
  lead = "Write with the forum, the next date if any, and the papers that already exist. Chambers will say quickly whether the matter can be taken.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-navy text-paper">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
        <div className="max-w-xl">
          <Eyebrow>Instruct</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">{title}</h2>
          <p className="mt-4 text-paper/70">{lead}</p>
        </div>
        <Button asChild variant="gold" size="lg">
          <Link to="/contact">Write to chambers</Link>
        </Button>
      </Container>
    </section>
  );
}
