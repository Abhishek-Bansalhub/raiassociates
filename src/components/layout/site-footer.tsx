import { Link } from "@tanstack/react-router";
import { firm, nav } from "@/data/site";
import { desks } from "@/data/desks";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src="/mark.png" alt="" className="h-14 w-14 object-contain" />
            <p className="mt-5 font-display text-2xl text-paper">{firm.name}</p>
            <p className="mt-1 text-xs uppercase tracking-mark text-gold-soft">{firm.tagline}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">{firm.description}</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-mark text-gold">Chambers</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="hover:text-paper">
                  Instruct us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-mark text-gold">Practice</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              {desks.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link to="/practice/$slug" params={{ slug: d.slug }} className="hover:text-paper">
                    {d.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/practice" className="text-gold-soft hover:text-gold">
                  All desks
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-mark text-gold">Instruct</p>
            <p className="mt-4 text-sm text-paper/75">{firm.address}</p>
            <p className="mt-2 text-sm text-paper/75">{firm.appearances.join(" · ")}</p>
            <a
              href={`mailto:${firm.email}`}
              className="mt-4 inline-block text-sm text-gold-soft hover:text-gold"
            >
              {firm.email}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/10 pt-8 text-xs leading-relaxed text-paper/50">
          <p>
            This website is intended for information only. The Bar Council of India does not permit
            advertisement or solicitation by advocates. By continuing to browse you acknowledge that
            you are seeking this information of your own accord and that nothing on this site is legal
            advice or creates a lawyer-client relationship.
          </p>
          <p className="mt-4 text-paper/40">
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
