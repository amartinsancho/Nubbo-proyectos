'use client';

import { useEffect, useState } from 'react';

// Menú móvil de la cabecera: se cierra al elegir un enlace o al pulsar Escape.
export function SiteMenu({
  links,
  cta,
}: {
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-controls="menu-movil"
        aria-expanded={open}
        aria-label={open ? 'Cerrar el menú' : 'Abrir el menú'}
        className="grid size-11 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:bg-brand/5 focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:outline-none"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <svg aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 8h16M4 16h10" strokeLinecap="round" />
          )}
        </svg>
      </button>
      <nav
        aria-label="Menú principal"
        className={`absolute inset-x-0 top-full border-b border-brand/10 bg-cream px-4 pt-2 pb-6 shadow-lg shadow-brand/10 ${open ? 'block' : 'hidden'}`}
        id="menu-movil"
      >
        <ul className="grid">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="block border-b border-brand/10 py-4 font-display text-2xl transition-colors hover:text-clay"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="mt-6 block rounded-full bg-brand px-6 py-3.5 text-center font-medium text-cream transition-colors hover:bg-clay focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:outline-none"
          href={cta.href}
          onClick={() => setOpen(false)}
        >
          {cta.label}
        </a>
      </nav>
    </div>
  );
}
