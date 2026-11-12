import Link from 'next/link';

import { SiteMenu } from '@/components/site-menu';
import { hasShell, site } from '@/lib/site';

/** Logo tipográfico "La Esquina Café": una esquina redondeada (la marca) y el nombre en serif. */
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg aria-hidden className="size-9 shrink-0" viewBox="0 0 36 36">
        <path d="M2 36V16C2 7.7 8.7 1 17 1h19v35H2Z" fill="var(--color-accent)" />
        <path d="M10 36V19c0-4.4 3.6-8 8-8h8v25H10Z" fill={light ? 'var(--color-brand)' : 'var(--color-cream)'} />
      </svg>
      <span className="grid leading-none">
        <span className="font-display text-[1.35rem] tracking-tight">La Esquina</span>
        <span className={`mt-1 text-[0.7rem] font-semibold tracking-[0.32em] uppercase ${light ? 'text-accent' : 'text-clay'}`}>
          Café
        </span>
      </span>
    </span>
  );
}

const cta = { href: '/#contacto', label: 'Ven a visitarnos' };

// Cabecera compartida (la pinta layout.tsx): los enlaces se editan en `src/lib/site.ts`.
export function SiteHeader() {
  if (!hasShell()) return null;
  return (
    <header suppressHydrationWarning className="sticky top-0 z-30 border-b border-brand/10 bg-cream/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          aria-label={`${site.name}: inicio`}
          className="rounded-lg focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:outline-none"
          href="/#inicio"
        >
          <Wordmark />
        </Link>
        <nav aria-label="Principal" suppressHydrationWarning className="hidden items-center gap-1 md:flex">
          {site.nav.map((l) => (
            <a
              suppressHydrationWarning
              className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-brand/5 hover:text-clay focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:outline-none"
              href={l.href}
              key={l.href}
            >
              {l.label}
            </a>
          ))}
          <a
            suppressHydrationWarning
            className="ml-3 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-clay focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:outline-none"
            href={cta.href}
          >
            {cta.label}
          </a>
        </nav>
        <SiteMenu cta={cta} links={site.nav} />
      </div>
    </header>
  );
}
