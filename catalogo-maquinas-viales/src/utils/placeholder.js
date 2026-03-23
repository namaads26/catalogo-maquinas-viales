export function crearPlaceholder(nombre = 'Máquina vial') {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#171c22" />
        <stop offset="100%" stop-color="#0f1318" />
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bg)"/>
    <rect x="80" y="80" width="1040" height="640" rx="36" fill="none" stroke="#2a333d" stroke-width="4" stroke-dasharray="14 10"/>
    <circle cx="600" cy="300" r="74" fill="#f38b1f" opacity="0.18"/>
    <path d="M520 390h160l40 60H480z" fill="#f38b1f" opacity="0.8"/>
    <text x="600" y="530" fill="#f5f7fa" font-family="Arial, Helvetica, sans-serif" font-size="42" text-anchor="middle">${nombre}</text>
    <text x="600" y="585" fill="#aeb7c2" font-family="Arial, Helvetica, sans-serif" font-size="26" text-anchor="middle">Imagen no disponible</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
