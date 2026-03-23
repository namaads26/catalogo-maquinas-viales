export function formatearWhatsapp(texto, numero = '5490000000000') {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}
