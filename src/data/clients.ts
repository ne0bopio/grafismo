/**
 * Óscar's client list (sent 2026-09-17), plus Ethicon and Aurobindo from the
 * original strip. Ethicon sits next to J&J because it is J&J's line.
 *
 * `logo` points at a trimmed PNG in public/images/clients/, produced by
 * scripts/build-client-logos.sh from the originals in
 * reference/client-logos/. A client without a logo file renders its name in
 * the same tile, so the list never waits on a missing asset.
 */
export type Client = { name: string; logo?: string };

const img = (slug: string) => `/images/clients/${slug}.png`;

export const clients: Client[] = [
  { name: "Johnson & Johnson", logo: img("johnson-johnson") },
  { name: "Ethicon", logo: img("ethicon") },
  { name: "DePuy Synthes", logo: img("depuy-synthes") },
  { name: "Cardinal Health", logo: img("cardinal-health") },
  { name: "Bayer", logo: img("bayer") },
  { name: "Chevron", logo: img("chevron") },
  { name: "Falabella", logo: img("falabella") },
  { name: "Oxxo", logo: img("oxxo") },
  { name: "Indra", logo: img("indra") },
  { name: "Symrise", logo: img("symrise") },
  { name: "Terranum", logo: img("terranum") },
  { name: "Gobernación de Cundinamarca", logo: img("gobernacion-cundinamarca") },
  { name: "Aceros Diaco", logo: img("diaco") },
  { name: "Constructora Capital", logo: img("constructora-capital") },
  { name: "Centro Comercial Hayuelos", logo: img("hayuelos") },
  { name: "TV y Novelas", logo: img("tv-y-novelas") },
  { name: "Laberinto Cine y TV", logo: img("laberinto") },
  { name: "Aurobindo", logo: img("aurobindo") },
  { name: "Vesalius Pharma", logo: img("vesalius-pharma") },
  { name: "Proclim Pharma", logo: img("proclim-pharma") },
  { name: "Laboratorio Lissia", logo: img("lissia") },
  { name: "Thyms", logo: img("thyms") },
  // No logo until Óscar confirms which Quanta this is.
  { name: "Quanta" },
  { name: "Eurociencia", logo: img("eurociencia") },
];
