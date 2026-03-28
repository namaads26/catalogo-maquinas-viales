export function formatearWhatsapp(texto, numero = '+543574415329') {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}
