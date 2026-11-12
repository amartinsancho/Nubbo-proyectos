import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { cafe, cardPhoto, menu, photos, testimonials } from '@/lib/cafe';

export const metadata: Metadata = {
  title: { absolute: 'La Esquina de Tortoli · Cafetería de barrio con café, desayunos y dulces' },
  description:
    'La Esquina de Tortoli: tu cafetería de barrio para empezar el día, hacer una pausa y disfrutar sin prisas. Café, desayunos, bollería y tartas caseras. Mira la carta y ven a visitarnos.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'La Esquina de Tortoli · Cafetería de barrio',
    description: 'Los pequeños momentos saben mejor con café. Carta, espacio e información para visitarnos.',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: photos.hero, alt: 'Cappuccino y croissants sobre una mesa de terraza' }],
  },
};

/* ---------- piezas pequeñas ---------- */

const focus = 'focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:outline-none';
const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-cream transition-colors hover:bg-clay ${focus}`;
const btnSecondary = `inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand px-7 py-3.5 font-semibold text-brand transition-colors hover:bg-brand hover:text-cream ${focus}`;
const label = 'text-xs font-semibold tracking-[0.28em] uppercase';

/** Cartel de calle esmaltado: el motivo de la "esquina". */
function Plate({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`inline-block rounded-2xl bg-olive-deep p-1.5 text-cream shadow-lg shadow-brand/20 ${className}`}>
      <div className="rounded-xl border-2 border-cream/70 px-5 py-3">{children}</div>
    </div>
  );
}

const Arrow = () => (
  <svg aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Pin = () => (
  <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
const Phone = () => (
  <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path
      d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
      strokeLinejoin="round"
    />
  </svg>
);
const Clock = () => (
  <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);
const Insta = () => (
  <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <rect height="18" rx="5" width="18" x="3" y="3" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" fill="currentColor" r="0.6" />
  </svg>
);

const values = [
  {
    title: 'Buen café',
    text: 'Elegimos el grano con cuidado y lo preparamos como nos gustaría que nos lo sirvieran a nosotros.',
  },
  {
    title: 'Productos frescos',
    text: 'Bollería, tostadas y tartas del día, con ingredientes frescos y recetas sencillas, de las de casa.',
  },
  {
    title: 'Trato cercano',
    text: 'Aquí te llamamos por tu nombre, te preguntamos qué tal el día y nadie te mete prisa.',
  },
];

/* ---------- página ---------- */

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section aria-labelledby="titulo-inicio" className="relative overflow-hidden" id="inicio">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-6">
            <p className={`${label} text-clay motion-safe:animate-rise`}>Cafetería de barrio</p>
            <h1
              className="mt-5 font-display text-[2.8rem] leading-[1.04] tracking-tight text-balance motion-safe:animate-rise sm:text-6xl lg:text-[4.4rem]"
              id="titulo-inicio"
              style={{ animationDelay: '80ms' }}
            >
              Los pequeños momentos saben mejor <span className="text-clay">con café</span>
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-8 text-brand/85 motion-safe:animate-rise"
              style={{ animationDelay: '180ms' }}
            >
              Tu rincón favorito del barrio para empezar el día, hacer una pausa y disfrutar sin prisas.
            </p>
            <div
              className="mt-9 flex flex-col gap-3 motion-safe:animate-rise sm:flex-row"
              style={{ animationDelay: '280ms' }}
            >
              <a className={btnPrimary} href="#carta">
                Descubre nuestra carta <Arrow />
              </a>
              <a className={btnSecondary} href={cafe.mapsUrl} rel="noopener noreferrer" target="_blank">
                Cómo llegar
              </a>
            </div>
            <ul
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand/80 motion-safe:animate-rise"
              style={{ animationDelay: '380ms' }}
            >
              {['Buen café', 'Producto fresco', 'Trato cercano'].map((t) => (
                <li className="flex items-center gap-2" key={t}>
                  <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-6">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-tl-[5rem] rounded-br-[2rem] bg-accent/35 sm:translate-x-5 sm:translate-y-5 lg:rounded-tl-[8rem]"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[5rem] rounded-br-[2rem] bg-brand/10 motion-safe:animate-fade sm:aspect-[5/4] lg:aspect-[4/5] lg:rounded-tl-[8rem]">
              <img
                alt="Un cappuccino y dos croissants rellenos sobre una mesa de terraza"
                className="size-full object-cover"
                decoding="async"
                fetchPriority="high"
                src={photos.hero}
              />
            </div>
            <Plate className="absolute -bottom-6 left-3 -rotate-2 sm:-left-4">
              <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-cream/75 uppercase">Café de barrio</p>
              <p className="font-display text-xl leading-tight">Café · Desayunos · Dulces</p>
            </Plate>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section aria-labelledby="titulo-historia" className="bg-paper py-20 sm:py-28" id="historia">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-tr-[5rem] rounded-bl-[2rem] bg-brand/10 lg:rounded-tr-[7rem]">
              <img
                alt="Rincón de la cafetería junto a un gran ventanal, con taburetes de madera y plantas"
                className="size-full object-cover"
                decoding="async"
                loading="lazy"
                src={photos.about}
              />
            </div>
            <div className="absolute -right-2 -bottom-8 grid size-32 -rotate-6 place-items-center rounded-full bg-olive-deep p-1.5 text-cream shadow-lg shadow-brand/20 sm:-right-6 sm:size-36">
              <div className="grid size-full place-items-center rounded-full border-2 border-dashed border-cream/60 text-center font-display leading-tight">
                <span>
                  Café
                  <br />
                  familiar
                  <br />
                  <span className="text-sm text-cream/75">de barrio</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className={`${label} text-clay`}>Nuestra historia</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl" id="titulo-historia">
              Más que una cafetería, somos parte del barrio
            </h2>
            <div className="mt-6 grid max-w-prose gap-4 text-lg leading-8 text-brand/85">
              <p>
                La Esquina de Tortoli es una cafetería familiar con una idea muy sencilla: que el barrio tenga un sitio
                donde tomarse un buen café sin mirar el reloj.
              </p>
              <p>
                Apostamos por el café bien hecho, por los productos frescos y por algo que no se compra: el trato de
                siempre, el de saludarte por tu nombre y guardarte tu mesa favorita.
              </p>
            </div>
            <ol className="mt-10 grid gap-0 border-t border-brand/15">
              {values.map((v, i) => (
                <li className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-brand/15 py-5 sm:grid-cols-[4rem_1fr]" key={v.title}>
                  <span className="font-display text-3xl text-accent sm:text-4xl">{`0${i + 1}`}</span>
                  <div>
                    <h3 className="font-display text-2xl">{v.title}</h3>
                    <p className="mt-1 leading-7 text-brand/80">{v.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* NUESTRA CARTA */}
      <section aria-labelledby="titulo-carta" className="py-20 sm:py-28" id="carta">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className={`${label} text-clay`}>La carta</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl" id="titulo-carta">
                Nuestra carta
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-brand/85">
                De la primera taza de la mañana a la merienda: lo que sale de la barra y de la cocina, todos los días.
              </p>
            </div>
            <p className="lg:col-span-5 lg:justify-self-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-clay/40 bg-paper px-4 py-2 text-sm font-medium text-clay">
                <span aria-hidden className="size-2 rounded-full bg-accent" />
                Precios de ejemplo, a modo de muestra
              </span>
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-start lg:gap-8">
            {menu.map((c, i) => (
              <article
                className={`group overflow-hidden rounded-[2rem] border border-brand/10 bg-paper transition-shadow hover:shadow-xl hover:shadow-brand/10 ${i % 2 ? 'md:mt-14' : ''}`}
                id={c.id}
                key={c.id}
              >
                <div className={`aspect-[5/4] overflow-hidden bg-brand/10 ${i % 2 ? 'rounded-bl-[4rem]' : 'rounded-br-[4rem]'}`}>
                  <img
                    alt={c.alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    decoding="async"
                    loading="lazy"
                    src={cardPhoto(c.photo)}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl">{c.title}</h3>
                    <span aria-hidden className="font-display text-xl text-accent">{`0${i + 1}`}</span>
                  </div>
                  <p className="mt-2 text-brand/80">{c.blurb}</p>
                  <ul className="mt-6 grid gap-3">
                    {c.items.map((it) => (
                      <li className="flex items-baseline gap-3" key={it.name}>
                        <span className="min-w-0">{it.name}</span>
                        <span aria-hidden className="mb-1 min-w-4 flex-1 border-b border-dotted border-brand/35" />
                        <span className="shrink-0 font-semibold tabular-nums">{it.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO ESPACIO */}
      <section aria-labelledby="titulo-espacio" className="bg-brand py-20 text-cream sm:py-28" id="espacio">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className={`${label} text-accent`}>Nuestro espacio</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl" id="titulo-espacio">
                Un espacio para desconectar y sentirte como en casa
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-cream/80 lg:col-span-4 lg:justify-self-end">
              Luz cálida, madera y una mesa libre. Trae un libro, tu portátil o a quien más te apetezca.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:items-start md:gap-6">
            {photos.gallery.map((p, i) => (
              <figure className={i === 1 ? 'md:mt-16' : ''} key={p.src}>
                <div
                  className={`aspect-[5/4] overflow-hidden bg-cream/10 md:aspect-[3/4] ${
                    i === 0
                      ? 'rounded-tl-[4rem] rounded-br-[1.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tl-[5rem]'
                      : i === 1
                        ? 'rounded-t-[4rem] rounded-b-[1.5rem] md:rounded-t-full'
                        : 'rounded-[1.5rem] rounded-br-[4rem] md:rounded-br-[5rem]'
                  }`}
                >
                  <img
                    alt={p.alt}
                    className="size-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={p.src}
                  />
                </div>
                <figcaption className="mt-4 font-display text-xl">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 text-sm text-cream/65">
            Fotografías de archivo a modo de ejemplo: sustitúyelas por imágenes de nuestro local.
          </p>
        </div>
      </section>

      {/* OPINIONES */}
      <section aria-labelledby="titulo-opiniones" className="bg-accent/15 py-20 sm:py-28" id="opiniones">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${label} text-clay`}>Opiniones</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl" id="titulo-opiniones">
                Lo que se dice en la esquina
              </h2>
            </div>
            <p className="inline-flex w-fit items-center rounded-full bg-olive-deep px-4 py-2 text-sm font-medium text-cream">
              Opiniones de demostración
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {testimonials.map((t, i) => (
              <figure
                className={`flex flex-col justify-between rounded-[2rem] bg-paper p-7 shadow-sm shadow-brand/5 sm:p-9 ${
                  i === 0 ? 'lg:col-span-7 lg:row-span-2 lg:p-12' : 'lg:col-span-5'
                }`}
                key={t.name}
              >
                <div>
                  <svg aria-hidden className="size-9 text-accent" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M4 20c0-7 3-12 9-14l1.2 2.4C11 9.700 9.800 12 9.600 14H13v10H4v-4Zm15 0c0-7 3-12 9-14l1.200 2.400C26 9.700 24.800 12 24.600 14H28v10h-9v-4Z" />
                  </svg>
                  <blockquote
                    className={`mt-4 font-display leading-snug ${i === 0 ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl'}`}
                  >
                    <p>{t.quote}</p>
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-olive-deep font-display text-xl text-cream"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-brand/75">{t.role}</span>
                    <span className="mt-0.5 block text-xs font-semibold tracking-wide text-clay uppercase">
                      Opinión de ejemplo
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMACIÓN PRÁCTICA */}
      <section aria-labelledby="titulo-contacto" className="bg-paper py-20 sm:py-28" id="contacto">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className={`${label} text-clay`}>Información práctica</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl" id="titulo-contacto">
              Ven a vernos a la esquina
            </h2>

            <Plate className="mt-8 -rotate-1">
              <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-cream/75 uppercase">
                Dirección de ejemplo
              </p>
              <p className="mt-1 font-display text-2xl sm:text-3xl">{cafe.address.street}</p>
              <p className="text-cream/85">{cafe.address.city}</p>
            </Plate>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 font-display text-2xl">
                  <span className="text-clay">
                    <Clock />
                  </span>
                  Horario
                </h3>
                <dl className="mt-4 grid gap-3">
                  {cafe.hours.map((h) => (
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-brand/10 pb-3" key={h.days}>
                      <dt className="text-brand/80">{h.days}</dt>
                      <dd className="font-semibold tabular-nums">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-sm text-clay">Horario de ejemplo, editable.</p>
              </div>

              <div className="grid content-start gap-6">
                <div>
                  <h3 className="flex items-center gap-2 font-display text-2xl">
                    <span className="text-clay">
                      <Phone />
                    </span>
                    Teléfono
                  </h3>
                  <a
                    className={`mt-3 inline-block rounded text-xl font-semibold tabular-nums underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-clay ${focus}`}
                    href={`tel:${cafe.phoneHref}`}
                  >
                    {cafe.phone}
                  </a>
                  <p className="mt-1 text-sm text-clay">Teléfono de ejemplo, editable.</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-display text-2xl">
                    <span className="text-clay">
                      <Insta />
                    </span>
                    Instagram
                  </h3>
                  <a
                    className={`mt-3 inline-block rounded text-lg font-semibold underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-clay ${focus}`}
                    href={cafe.instagramUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    @{cafe.instagram}
                  </a>
                  <p className="mt-1 text-sm text-clay">Usuario de ejemplo, editable.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className={btnPrimary} href={cafe.mapsUrl} rel="noopener noreferrer" target="_blank">
                <Pin /> Abrir indicaciones
              </a>
              <a className={btnSecondary} href={`tel:${cafe.phoneHref}`}>
                <Phone /> Llamar
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-tl-[5rem] rounded-br-[2rem] bg-brand/10 lg:sticky lg:top-28">
                <img
                  alt="Café con leche en taza azul junto a un croissant, frente a una ventana"
                  className="size-full object-cover"
                  decoding="async"
                  loading="lazy"
                  src={photos.visit}
                />
              </div>
              <a
                className={`absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 rounded-2xl bg-paper/95 px-5 py-4 font-semibold shadow-lg shadow-brand/20 backdrop-blur transition-colors hover:bg-cream ${focus}`}
                href={cafe.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="text-clay">
                    <Pin />
                  </span>
                  <span className="truncate">Ver el mapa en Google Maps</span>
                </span>
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADA FINAL */}
      <section aria-labelledby="titulo-final" className="bg-accent py-16 text-brand sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl" id="titulo-final">
              Tu café te espera en la esquina
            </h2>
            <p className="mt-3 text-xl font-semibold">Pasa a saludar: siempre hay una mesa y un buen café esperándote.</p>
          </div>
          <a
            className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-cream transition-colors hover:bg-olive-deep focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-accent focus-visible:outline-none`}
            href={cafe.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ven a visitarnos <Arrow />
          </a>
        </div>
      </section>
    </main>
  );
}
