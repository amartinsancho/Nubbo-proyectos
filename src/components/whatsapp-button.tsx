import { cafe } from '@/lib/cafe';

// Botón flotante de WhatsApp (abajo a la derecha). El número se cambia en `src/lib/cafe.ts` (`whatsapp`).
export function WhatsAppButton() {
  if (!cafe.whatsapp) return null;
  return (
    <a
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none sm:right-6 sm:bottom-6 sm:size-16"
      href={cafe.whatsappUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg aria-hidden className="size-8 sm:size-9" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.9.9-3-.2-.32a8.2 8.2 0 1 1 6.9 3.75Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.74 2.65 4.2 3.72 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}
