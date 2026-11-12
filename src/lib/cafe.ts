/**
 * =====================================================================================================
 *  DATOS DEL LOCAL · EDITA ESTE ARCHIVO
 *  Dirección, horarios, teléfono, WhatsApp, correo e Instagram son los datos reales del local.
 *  Los PRECIOS de la carta y los nombres de las opiniones son de ejemplo: cámbialos cuando quieras.
 * =====================================================================================================
 */

export const cafe = {
  name: 'La cafetería de Tortoli',
  /** Nombre corto de la marca (logo). */
  brand: 'La Esquina Café',

  address: {
    street: 'Via Piamonte, 5',
    city: 'Tortoli, Italia',
    locality: 'Tortoli',
    country: 'IT',
  },

  /** Teléfono y WhatsApp. `phoneHref` es el mismo número sin espacios, para el enlace de llamada. */
  phone: '+34 645 371 038',
  phoneHref: '+34645371038',

  /**
   * WHATSAPP: número en formato internacional, solo cifras y sin el "+" (así lo pide WhatsApp).
   * Cámbialo aquí cuando quieras usar otro número: el botón flotante se actualiza solo.
   */
  whatsapp: '34645371038',
  whatsappMessage: 'Hola, me gustaría hacer una consulta.',

  /** Horario: martes a domingo de 7:00 a 18:00; lunes cerrado. */
  hours: [
    { days: 'Martes a domingo', time: '07:00 – 18:00' },
    { days: 'Lunes', time: 'Cerrado' },
  ],

  /** Instagram: usuario sin la arroba. */
  instagram: 'tu_esquinatortoli',

  /** Correo de contacto: déjalo vacío ('') para ocultarlo. */
  email: 'hola@laesquinadetortoli.es',

  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },

  /**
   * ENLACE A GOOGLE MAPS: se genera con la dirección de arriba. Cuando tengas la dirección real, las
   * indicaciones se abrirán solas en el sitio correcto. Si prefieres pegar el enlace de "Compartir" de
   * Google Maps, sustituye todo el valor por esa URL.
   */
  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${this.address.street}, ${this.address.city}`,
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
    photo: '/fotos/cafe',
    alt: 'Cappuccino con latte art en una taza de cerámica, con granos de café sobre la mesa de madera',
    items: [
      { name: 'Espresso italiano', price: '1,30 €' },
      { name: 'Cappuccino', price: '2,20 €' },
      { name: 'Flat white', price: '2,60 €' },
      { name: 'Latte', price: '2,50 €' },
    ],
  },
  {
    id: 'desayunos',
    title: 'Desayunos',
    blurb: 'Para empezar el día con calma y con hambre.',
    photo: '/fotos/tostadas',
    alt: 'Tostadas de masa madre con aguacate y huevo, y con tomate y aceite, junto a un café',
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
    photo: '/fotos/croissants',
    alt: 'Croissants de pistacho, de mermelada, de crema y de mantequilla sobre una tabla de madera',
    items: [
      { name: 'Croissant de mantequilla', price: '1,90 €' },
      { name: 'Croissant de pistacho', price: '2,90 €' },
      { name: 'Croissant de mermelada', price: '2,30 €' },
      { name: 'Croissant de crema', price: '2,50 €' },
            { name: 'Tarta casera del día (porción)', price: '3,80 €' },
    ],
  },
  {
    id: 'meriendas',
    title: 'Meriendas',
    blurb: 'Cafés especiales y bollería para la pausa de la tarde.',
    photo: '/fotos/bandeja',
    alt: 'Bandeja de croissants recién horneados, con y sin crema de pistacho',
    items: [
      { name: 'Café especial del mes', price: '3,20 €' },
      { name: 'Café especial + croissant', price: '4,50 €' },
      { name: 'Merienda de la esquina: café especial + dulce', price: '5,00 €' },
    ],
  },
];

/** OPINIONES: textos de muestra. Sustitúyelos por reseñas verdaderas (con permiso) cuando las tengas. */
export const testimonials = [
  {
    quote:
      'Por fin un café italiano de verdad: intenso, cremoso y bien hecho. Entro a por uno "rápido" y acabo quedándome un buen rato.',
    name: 'Marco',
    role: 'Cliente de todas las mañanas',
  },
  {
    quote: 'El croissant de pistacho es el mejor que he probado por la zona. Ya sé a dónde ir cada fin de semana.',
    name: 'Giulia',
    role: 'Vecina de Tortoli',
  },
  {
    quote: 'Perfecto para una merienda con amigas: buena bollería, buen café y una mesa junto a la ventana.',
    name: 'Lucía',
    role: 'Meriendas de los sábados',
  },
];

/** Fotografías de estilo editorial (en public/fotos): cada una tiene versión grande (.webp) y pequeña (-s.webp). */
export const photos = {
  hero: '/fotos/hero.webp',
  heroSmall: '/fotos/hero-s.webp',
  about: '/fotos/mesa.webp',
  visit: '/fotos/bandeja.webp',
  gallery: [
    {
      src: '/fotos/barra.webp',
      alt: 'La barra de madera con la máquina de espresso, tazas y bollería bajo una campana de cristal',
      caption: 'La barra',
    },
    {
      src: '/fotos/interior.webp',
      alt: 'Interior cálido de la cafetería, con mesas de madera natural, lámparas colgantes y un gran ventanal',
      caption: 'Mesas de madera y luz cálida',
    },
    {
      src: '/fotos/rincon.webp',
      alt: 'Rincón acogedor con una mesa de madera, dos sillas, plantas y luz de ventana',
      caption: 'Rincones con carácter',
    },
  ],
};

/** Foto de la carta: versión pequeña para tarjetas. */
export const cardPhoto = (url: string) => `${url}-s.webp`;
