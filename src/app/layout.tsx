import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grafismobusiness.com"),
  title: {
    default: "Grafismo Comunicaciones — Diseño que cumple, protege y vende",
    template: "%s · Grafismo Comunicaciones",
  },
  description:
    "Estudio B2B de comunicación visual y diseño regulado en Colombia. Farmacéutica, retail e industrial bajo el mismo estándar editorial y regulatorio.",
  keywords: [
    "etiquetado INVIMA",
    "diseño farmacéutico Colombia",
    "señalética industrial",
    "comunicación visual retail",
    "cumplimiento normativo",
  ],
  authors: [{ name: "Grafismo Comunicaciones" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grafismobusiness.com",
    siteName: "Grafismo Comunicaciones",
    title: "Grafismo Comunicaciones — Diseño que cumple, protege y vende",
    description:
      "Estudio B2B de comunicación visual y diseño regulado. Farmacéutica, retail e industrial.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      "en-US": "/en",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://grafismobusiness.com#org",
      name: "Grafismo Comunicaciones",
      alternateName: "Grafismo Business Group",
      url: "https://grafismobusiness.com",
      email: "hola@grafismobusiness.com",
      foundingDate: "2010",
      description:
        "B2B studio for visual communication and regulated design. Pharmaceutical, retail and industrial sectors.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO",
      },
      areaServed: ["CO", "LATAM", "US"],
      knowsAbout: [
        "INVIMA pharmaceutical labeling",
        "industrial signage",
        "high-volume retail visual systems",
        "regulatory design",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://grafismobusiness.com#oscar",
      name: "Óscar",
      jobTitle: "Founding partner · Marketing Director",
      worksFor: { "@id": "https://grafismobusiness.com#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
