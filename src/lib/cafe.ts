/**
 * =====================================================================================================
 *  DATOS DE EJEMPLO · EDITA ESTE ARCHIVO
 *  Todo lo que aparece aquí (dirección, horarios, teléfono, Instagram, precios y opiniones) es un
 *  EJEMPLO, no un dato real de La Esquina de Tortoli. Cámbialo por los datos verdaderos del local:
 *  la web (cabecera, carta, contacto y pie de página) se actualiza sola.
 * =====================================================================================================
 */

export const cafe = {
  name: 'La Esquina de Tortoli',

  /** DIRECCIÓN DE EJEMPLO: sustitúyela por la real. */
  address: {
    street: 'Calle de Ejemplo, 12',
    city: '00000 Localidad de ejemplo',
  },

  /** TELÉFONO DE EJEMPLO. `phoneHref` es el mismo número sin espacios, para el enlace de llamada. */
  phone: '+34 000 000 000',
  phoneHref: '+34000000000',

  /** HORARIO DE EJEMPLO: cambia días y horas a tu gusto (puedes añadir o quitar filas). */
  hours: [
    { days: 'Lunes a viernes', time: '08:00 – 20:00' },
    { days: 'Sábados', time: '09:00 – 21:00' },
    { days: 'Domingos y festivos', time: '09:00 – 15:00' },
  ],

  /** INSTAGRAM DE EJEMPLO: pon aquí el usuario real, sin la arroba. */
  instagram: 'tu_instagram_ejemplo',

  /** Correo de contacto: déjalo vacío ('') para ocultarlo. */
  email: '',

  /**
   * ENLACE A GOOGLE MAPS: se genera con la dirección de arriba. Cuando tengas la dirección real, las
   * indicaciones se abrirán solas en el sitio correcto. Si prefieres pegar el enlace de "Compartir" de
   * Google Maps, sustituye todo el valor por esa URL.
   */
  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${this.name}, ${this.address.street}, ${this.address.city}`,
    )}`;
  },
  get instagramUrl() {
    return `https://www.instagram.com/${this.instagram}/`;
  },
};

/** CARTA DE EJEMPLO: platos y PRECIOS DE EJEMPLO (€). Edita nombres, notas y precios. */
export const menu = [
  {
    id: 'cafe',
    title: 'Café',
    blurb: 'Grano de tueste artesanal, molido al momento.',
    photo: 'https://images.unsplash.com/photo-1660401413411-0d145e57b149',
    alt: 'Café con leche con dibujo de corazón en taza blanca, junto a un jarrón con flores secas',
    items: [
      { name: 'Espresso', price: '1,30 €' },
      { name: 'Cappuccino', price: '2,20 €' },
      { name: 'Flat white', price: '2,60 €' },
      { name: 'Latte', price: '2,50 €' },
    ],
  },
  {
    id: 'desayunos',
    title: 'Desayunos',
    blurb: 'Para empezar el día con calma y con hambre.',
    photo: 'https://images.unsplash.com/photo-1543393786-6b9844cc148d',
    alt: 'Dos platos de desayuno servidos en una mesa de madera junto a tazas de café',
    items: [
      { name: 'Tostada con tomate y aceite de oliva', price: '2,90 €' },
      { name: 'Tostada de aguacate y huevo', price: '5,50 €' },
      { name: 'Bowl de yogur, fruta y granola', price: '5,80 €' },
      { name: 'Porridge de avena con fruta (opción saludable)', price: '5,20 €' },
    ],
  },
  {
    id: 'dulces',
    title: 'Dulces',
    blurb: 'Bollería del día y tartas hechas en casa.',
    photo: 'https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9',
    alt: 'Dos croissants dorados sobre un plato oscuro con un vaso de leche',
    items: [
      { name: 'Croissant de mantequilla', price: '1,90 €' },
      { name: 'Cookie de chocolate', price: '2,20 €' },
      { name: 'Tarta casera del día (porción)', price: '3,80 €' },
    ],
  },
  {
    id: 'meriendas',
    title: 'Meriendas',
    blurb: 'Cafés especiales y bollería para la pausa de la tarde.',
    photo: 'https://images.unsplash.com/photo-1767065584563-c95f726ce857',
    alt: 'Café con espuma decorada junto a una tartaleta de fruta sobre una mesa de madera',
    items: [
      { name: 'Café especial del mes', price: '3,20 €' },
      { name: 'Café especial + croissant', price: '4,50 €' },
      { name: 'Merienda de la esquina: café especial + dulce', price: '5,00 €' },
    ],
  },
];

/** OPINIONES DE DEMOSTRACIÓN: no son clientes reales. Sustitúyelas por reseñas verdaderas (con permiso). */
export const testimonials = [
  {
    quote:
      'Entro a por un café "rápido" y acabo quedándome una hora. Aquí nadie te mete prisa y el croissant está siempre recién hecho.',
    name: 'María',
    role: 'Vecina de la calle de al lado',
  },
  {
    quote: 'El flat white es de los mejores que he probado, y el trato es como el de casa.',
    name: 'Javier',
    role: 'Viene cada mañana antes de trabajar',
  },
  {
    quote: 'Perfecto para una merienda con amigas: tarta casera, buen café y una mesa junto a la ventana.',
    name: 'Lucía',
    role: 'Meriendas de los sábados',
  },
];

/** Fotografías de archivo (Unsplash). Sustitúyelas por fotos propias del local cuando las tengas. */
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
export const photos = {
  hero: u('1786426119462-380a67b9d838'),
  about: u('1780307205444-a8693eef2f4a', 1200),
  visit: u('1769138886139-b6aa68782f53', 1200),
  gallery: [
    {
      src: u('1567880905822-56f8e06fe630', 1000),
      alt: 'La barra de madera del café, con grandes ventanales y mucha luz natural',
      caption: 'La barra',
    },
    {
      src: u('1511081692775-05d0f180a065', 1000),
      alt: 'Mesa de madera y lámparas colgantes en el interior de una cafetería',
      caption: 'Mesas de madera y luz cálida',
    },
    {
      src: u('1780039584176-399d8676f9c8', 1000),
      alt: 'Rincón acogedor de la cafetería con sillas de color terracota y decoración en la pared',
      caption: 'Rincones con carácter',
    },
  ],
};

/** Optimiza una URL de la carta para tarjetas (ancho 900). */
export const cardPhoto = (url: string) => `${url}?auto=format&fit=crop&w=900&q=75`;
