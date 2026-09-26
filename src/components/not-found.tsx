import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/layout/container";

export function NotFound() {
  return (
    <section className="bg-navy text-paper">
      <Container className="py-24 md:py-32">
        <Eyebrow>Not found</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-paper md:text-5xl">
          This page is not on the cause-list.
        </h1>
        <p className="mt-5 max-w-xl text-paper/70">
          The address may have moved, or the brief was never filed here. Return to chambers or write
          to us with the matter you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="gold">
            <Link to="/">Back to chambers</Link>
          </Button>
          <Button asChild variant="invert">
            <Link to="/contact">Instruct us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
