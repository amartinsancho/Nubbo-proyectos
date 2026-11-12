import { Wordmark } from '@/components/site-header';
import { cafe } from '@/lib/cafe';
import { hasShell, site } from '@/lib/site';

// Pie compartido (lo pinta layout.tsx). Los datos de contacto salen de `src/lib/cafe.ts` (datos de ejemplo).
export function SiteFooter() {
  if (!hasShell()) return null;
  const heading = 'text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase';
  const link =
    'rounded transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none';
  return (
    <footer className="bg-brand text-cream">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark light />
            <p className="mt-5 max-w-xs leading-7 text-cream/80">
              La cafetería de la esquina: buen café, producto fresco y una mesa esperándote.
            </p>
            <a
              className={`mt-5 inline-flex items-center gap-2 font-medium ${link}`}
              href={cafe.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                <rect height="18" rx="5" width="18" x="3" y="3" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" fill="currentColor" r="0.6" />
              </svg>
              Instagram @{cafe.instagram}
            </a>
          </div>

          <div className="md:col-span-3">
            <h2 className={heading}>Dónde estamos</h2>
            <address className="mt-4 leading-7 not-italic text-cream/90">
              {cafe.address.street}
              <br />
              {cafe.address.city}
            </address>
            <a className={`mt-4 inline-block font-medium underline underline-offset-4 ${link}`} href={cafe.mapsUrl} rel="noopener noreferrer" target="_blank">
              Cómo llegar
            </a>
          </div>

          <div className="md:col-span-3">
            <h2 className={heading}>Horario</h2>
            <dl className="mt-4 grid gap-3 text-cream/90">
              {cafe.hours.map((h) => (
                <div key={h.days}>
                  <dt className="text-sm text-cream/70">{h.days}</dt>
                  <dd className="tabular-nums">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-2">
            <h2 className={heading}>Contacto</h2>
            <ul className="mt-4 grid gap-2 text-cream/90">
              <li>
                <a className={`inline-block py-1 tabular-nums ${link}`} href={`tel:${cafe.phoneHref}`}>
                  {cafe.phone}
                </a>
              </li>
              {cafe.email ? (
                <li>
                  <a className={`inline-block py-1 break-all ${link}`} href={`mailto:${cafe.email}`}>
                    {cafe.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Pie" className="flex flex-wrap gap-x-5 gap-y-2">
            {site.nav.map((l) => (
              <a className={link} href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
