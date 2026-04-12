export type Sector = "pharma" | "retail" | "corporate" | "public";
export type Lang = "es" | "en";

export type ProjectCopy = {
  title: string;
  industry: string;
  deck: string;
  challengeTitle: string;
  challenge: string[];
  approachTitle: string;
  approach: string[];
  metricLabel: string;
  metricStatement: string;
  metricBody: string;
  cover: string;
  gallery: string[];
  credits: { key: string; value: string }[];
};

export type Project = {
  slug: string;
  number: string;
  sector: Sector;
  years: string;
  metric: string;
  coverImage: string;
  galleryImages: string[];
  es: ProjectCopy;
  en: ProjectCopy;
};

export const projects: Project[] = [
  {
    slug: "johnson-johnson",
    number: "PRJ—01",
    sector: "pharma",
    years: "2023 — 2024",
    metric: "Sistema unificado",
    coverImage: "/images/projects/johnson-johnson/cover.jpg",
    galleryImages: [
      "/images/projects/johnson-johnson/gallery-01.jpg",
      "/images/projects/johnson-johnson/gallery-02.jpg",
      "/images/projects/johnson-johnson/gallery-03.jpg",
      "/images/projects/johnson-johnson/gallery-04.jpg",
      "/images/projects/johnson-johnson/gallery-05.jpg",
    ],
    es: {
      title: "Johnson & Johnson",
      industry: "Bienestar corporativo · Farmacéutico",
      deck:
        "Programa de bienestar corporativo — sistema visual unificado para campañas internas de salud, prevención y comunicación a colaboradores.",
      challengeTitle: "Comunicar salud sin fragmentar la marca.",
      challenge: [
        "Cada línea de bienestar corporativo usaba su propio lenguaje visual. Resultado: piezas inconsistentes, baja recordación, y fricción operativa al producir materiales nuevos.",
        "El reto: construir un sistema que cualquier área pudiera adoptar sin comprometer el estándar visual de J&J.",
      ],
      approachTitle: "Un sistema que escala, no un kit de piezas.",
      approach: [
        "Definimos un sistema editorial con jerarquía tipográfica, plantillas adaptables y guías de uso para equipos internos.",
        "Cada pieza nueva parte de un molde — no se rediseña desde cero. El tiempo de producción cayó, la consistencia subió.",
      ],
      metricLabel: "Resultado · Sistema unificado",
      metricStatement: "Un único sistema, adoptado por todas las áreas.",
      metricBody:
        "Plantillas, tipografía y jerarquía visual auditables. Producción más rápida, marca más consistente, comunicación interna alineada.",
      cover: "Imagen principal · J&J",
      gallery: [
        "Imagen · Campaña salud",
        "Imagen · Plantilla editorial",
        "Imagen · Pieza interna",
        "Imagen · Guía de uso",
        "Imagen · Aplicación corporativa",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño", value: "Equipo editorial · Grafismo" },
        { key: "Validación", value: "Comunicaciones internas J&J" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Johnson & Johnson",
      industry: "Corporate Wellbeing · Pharmaceutical",
      deck:
        "Corporate wellbeing program — unified visual system for internal health, prevention, and employee communication campaigns.",
      challengeTitle: "Communicating health without fragmenting the brand.",
      challenge: [
        "Each wellbeing vertical had its own visual language. The result: inconsistent pieces, low recall, and operational friction producing new materials.",
        "The brief: build a system any internal team could adopt without compromising J&J's visual standard.",
      ],
      approachTitle: "A system that scales — not a collection of assets.",
      approach: [
        "We defined an editorial system with typographic hierarchy, adaptable templates, and usage guidelines for internal teams.",
        "Every new piece starts from a mold — never from scratch. Production time dropped, consistency rose.",
      ],
      metricLabel: "Result · Unified system",
      metricStatement: "A single system, adopted across all verticals.",
      metricBody:
        "Auditable templates, typography, and visual hierarchy. Faster production, more consistent brand, aligned internal communication.",
      cover: "Hero image · J&J",
      gallery: [
        "Image · Health campaign",
        "Image · Editorial template",
        "Image · Internal piece",
        "Image · Usage guide",
        "Image · Corporate application",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Design", value: "Editorial team · Grafismo" },
        { key: "Validation", value: "J&J internal comms" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
  {
    slug: "cardinal-health",
    number: "PRJ—02",
    sector: "pharma",
    years: "2022",
    metric: "Audiencia clínica",
    coverImage: "/images/projects/cardinal-health/cover.jpg",
    galleryImages: [
      "/images/projects/cardinal-health/gallery-01.jpg",
      "/images/projects/cardinal-health/gallery-02.jpg",
      "/images/projects/cardinal-health/gallery-03.jpg",
      "/images/projects/cardinal-health/gallery-04.jpg",
      "/images/projects/cardinal-health/gallery-05.jpg",
    ],
    es: {
      title: "Cardinal Health",
      industry: "Comunicación a profesionales de la salud",
      deck:
        "Comunicación visual dirigida a profesionales de la salud — materiales técnicos, científicos y de formación bajo estándar clínico.",
      challengeTitle: "Traducir lo técnico sin diluirlo.",
      challenge: [
        "La audiencia clínica exige precisión. Un error tipográfico o una jerarquía confusa compromete la credibilidad científica de la marca.",
        "Pedido: materiales con lenguaje visual clínico que los profesionales pudieran usar en contextos de formación y consulta sin reservas.",
      ],
      approachTitle: "Diseño como instrumento de lectura clínica.",
      approach: [
        "Tipografía calibrada para legibilidad médica, jerarquías diseñadas para escaneo rápido, infografía que prioriza datos sobre estilo.",
        "El diseño desaparece para que el contenido hable — que es exactamente lo que esta audiencia necesita.",
      ],
      metricLabel: "Resultado · Audiencia clínica",
      metricStatement: "Materiales validados por especialistas.",
      metricBody:
        "Piezas técnicas, científicas y de formación con el estándar de lectura que el contexto clínico exige.",
      cover: "Imagen principal · Cardinal",
      gallery: [
        "Imagen · Material técnico",
        "Imagen · Infografía clínica",
        "Imagen · Pieza de formación",
        "Imagen · Detalle tipográfico",
        "Imagen · Aplicación digital",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño", value: "Equipo editorial · Grafismo" },
        { key: "Validación", value: "Equipo médico Cardinal" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Cardinal Health",
      industry: "Communication for healthcare professionals",
      deck:
        "Visual communication aimed at healthcare professionals — technical, scientific, and training materials under clinical standards.",
      challengeTitle: "Translating the technical without diluting it.",
      challenge: [
        "A clinical audience demands precision. A typographic error or confusing hierarchy undermines the brand's scientific credibility.",
        "The brief: materials with a clinical visual language that professionals could use in training and consultation contexts without reservation.",
      ],
      approachTitle: "Design as a clinical reading instrument.",
      approach: [
        "Typography calibrated for medical legibility, hierarchies designed for fast scanning, infographics that prioritize data over style.",
        "The design disappears so the content speaks — which is exactly what this audience needs.",
      ],
      metricLabel: "Result · Clinical audience",
      metricStatement: "Materials validated by specialists.",
      metricBody:
        "Technical, scientific, and training pieces meeting the reading standard that clinical contexts demand.",
      cover: "Hero image · Cardinal",
      gallery: [
        "Image · Technical material",
        "Image · Clinical infographic",
        "Image · Training piece",
        "Image · Typographic detail",
        "Image · Digital application",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Design", value: "Editorial team · Grafismo" },
        { key: "Validation", value: "Cardinal medical team" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
  {
    slug: "proclin-pharma",
    number: "PRJ—03",
    sector: "pharma",
    years: "2021 — 2024",
    metric: "+100K /mes",
    coverImage: "/images/projects/proclin-pharma/cover.jpg",
    galleryImages: [
      "/images/projects/proclin-pharma/gallery-01.jpg",
      "/images/projects/proclin-pharma/gallery-02.jpg",
      "/images/projects/proclin-pharma/gallery-03.jpg",
      "/images/projects/proclin-pharma/gallery-04.jpg",
      "/images/projects/proclin-pharma/gallery-05.jpg",
    ],
    es: {
      title: "Proclin Pharma",
      industry: "Etiquetado regulatorio farmacéutico",
      deck:
        "Rediseño del sistema de etiquetado farmacéutico bajo requisitos INVIMA — desde la plantilla editorial hasta los flujos de aprobación, con foco en trazabilidad, legibilidad clínica y tiempos de respuesta para lotes industriales.",
      challengeTitle: "Cumplimiento sin sacrificar ritmo.",
      challenge: [
        "El sistema previo acumulaba observaciones en cada revisión de lote: inconsistencias tipográficas, jerarquía confusa de advertencias, tiempos largos de aprobación interna.",
        "El reto: un rediseño que pasara auditorías INVIMA sin observaciones y que el equipo pudiera sostener a ritmo industrial, lote tras lote, sin reabrir cada artwork.",
      ],
      approachTitle: "Plantillas editoriales, no artworks sueltos.",
      approach: [
        "Construimos una plantilla maestra con la jerarquía regulatoria embebida — campos obligatorios, márgenes de seguridad, zonas tipográficas y advertencias codificadas.",
        "Definimos un flujo de aprobación documentado paso a paso, con evidencia archivable para cada lote. El diseño pasó de ser un entregable a ser un proceso auditable.",
      ],
      metricLabel: "Resultado · Lote mensual",
      metricStatement: "Etiquetas producidas al mes, cero observaciones.",
      metricBody:
        "Lotes mensuales sostenidos con aprobación INVIMA sin reprocesos. Flujo auditable, documentado, y escalable al volumen real de producción.",
      cover: "Imagen principal · Proclin Pharma",
      gallery: [
        "Imagen · Etiqueta maestra",
        "Imagen · Empaque primario",
        "Imagen · Lote industrial",
        "Imagen · Flujo auditable",
        "Imagen · Detalle tipográfico",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño regulatorio", value: "Equipo editorial · Grafismo" },
        { key: "Validación técnica", value: "Dirección técnica Proclin Pharma" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Proclin Pharma",
      industry: "Pharmaceutical regulatory labeling",
      deck:
        "Redesign of the pharmaceutical labeling system under INVIMA requirements — from the editorial template to the approval flow, focused on traceability, clinical legibility, and response times for industrial batches.",
      challengeTitle: "Compliance without sacrificing speed.",
      challenge: [
        "The previous system accumulated observations at every batch review: typographic inconsistencies, confusing warning hierarchy, long internal approval times.",
        "The brief: a redesign that would pass INVIMA audits without observations and that the team could sustain at industrial pace, batch after batch, without reopening every artwork.",
      ],
      approachTitle: "Editorial templates, not loose artworks.",
      approach: [
        "We built a master template with the regulatory hierarchy embedded — mandatory fields, safety margins, typographic zones, and coded warnings.",
        "We defined a step-by-step documented approval flow with archivable evidence for each batch. Design went from deliverable to auditable process.",
      ],
      metricLabel: "Result · Monthly batch",
      metricStatement: "Labels produced per month, zero observations.",
      metricBody:
        "Monthly batches sustained with INVIMA approval and no rework. Auditable, documented, scalable to real production volume.",
      cover: "Hero image · Proclin Pharma",
      gallery: [
        "Image · Master label",
        "Image · Primary packaging",
        "Image · Industrial batch",
        "Image · Auditable flow",
        "Image · Typographic detail",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Regulatory design", value: "Editorial team · Grafismo" },
        { key: "Technical validation", value: "Proclin Pharma technical direction" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
  {
    slug: "oxxo",
    number: "PRJ—04",
    sector: "retail",
    years: "2023",
    metric: "Escala nacional",
    coverImage: "/images/projects/oxxo/cover.jpg",
    galleryImages: [
      "/images/projects/oxxo/gallery-01.jpg",
      "/images/projects/oxxo/gallery-02.jpg",
      "/images/projects/oxxo/gallery-03.jpg",
      "/images/projects/oxxo/gallery-04.jpg",
      "/images/projects/oxxo/gallery-05.jpg",
    ],
    es: {
      title: "OXXO",
      industry: "Trazabilidad y operación",
      deck:
        "Sistema de trazabilidad y operación visual para punto de venta — señalización, etiquetado operativo y comunicación interna a escala nacional.",
      challengeTitle: "Sostener consistencia a ritmo retail.",
      challenge: [
        "El volumen de puntos de venta, los tiempos operativos, y la rotación de personal hacían imposible sostener estándares visuales uniformes con el sistema previo.",
        "El pedido: un sistema visual operativo, claro, y replicable — que no dependiera del criterio individual de cada tienda.",
      ],
      approachTitle: "Plantillas, no criterio individual.",
      approach: [
        "Construimos un sistema visual operativo con plantillas prescritas, jerarquías documentadas y materiales de formación para equipos de tienda.",
        "El resultado: consistencia visual sostenible, tiempos de implementación reducidos, y una marca que se lee igual en cada punto de venta del país.",
      ],
      metricLabel: "Resultado · Escala nacional",
      metricStatement: "Un sistema sostenido sin perder ritmo.",
      metricBody:
        "Consistencia visual nacional, tiempos de implementación reducidos, y un sistema que el equipo operativo adopta sin fricción.",
      cover: "Imagen principal · OXXO",
      gallery: [
        "Imagen · Señalización punto",
        "Imagen · Etiquetado operativo",
        "Imagen · Plantilla prescrita",
        "Imagen · Formación equipo",
        "Imagen · Aplicación nacional",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño operativo", value: "Equipo editorial · Grafismo" },
        { key: "Validación", value: "Operaciones OXXO" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "OXXO",
      industry: "Traceability and operations",
      deck:
        "Operational and traceability visual system for point of sale — signage, operational labeling, and internal communication at national scale.",
      challengeTitle: "Sustaining consistency at retail pace.",
      challenge: [
        "The volume of stores, operational timings, and staff rotation made sustaining uniform visual standards impossible with the previous system.",
        "The brief: an operational visual system — clear, replicable — that did not depend on each store's individual judgment.",
      ],
      approachTitle: "Templates, not individual judgment.",
      approach: [
        "We built an operational visual system with prescribed templates, documented hierarchies, and training materials for store teams.",
        "The result: sustainable national consistency, reduced implementation times, and a brand that reads the same at every point of sale in the country.",
      ],
      metricLabel: "Result · National scale",
      metricStatement: "A system sustained without losing pace.",
      metricBody:
        "National visual consistency, reduced implementation times, and a system the operations team adopts without friction.",
      cover: "Hero image · OXXO",
      gallery: [
        "Image · Point signage",
        "Image · Operational labeling",
        "Image · Prescribed template",
        "Image · Team training",
        "Image · National application",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Operational design", value: "Editorial team · Grafismo" },
        { key: "Validation", value: "OXXO operations" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
  {
    slug: "terranum",
    number: "PRJ—05",
    sector: "corporate",
    years: "2022",
    metric: "Wayfinding",
    coverImage: "/images/projects/terranum/cover.jpg",
    galleryImages: [
      "/images/projects/terranum/gallery-01.jpg",
      "/images/projects/terranum/gallery-02.jpg",
      "/images/projects/terranum/gallery-03.jpg",
      "/images/projects/terranum/gallery-04.jpg",
      "/images/projects/terranum/gallery-05.jpg",
    ],
    es: {
      title: "Terranum",
      industry: "Señalización corporativa",
      deck:
        "Sistema de señalización corporativa — wayfinding, identidad visual de espacios y comunicación interna para edificios de oficina.",
      challengeTitle: "Navegar un edificio sin pensarlo.",
      challenge: [
        "Un edificio corporativo exige señalización que guíe sin ser notada — que informe sin decorar, que dirija sin fricción.",
        "Pedido: un sistema de wayfinding coherente con la marca Terranum que los usuarios pudieran leer de un vistazo, desde cualquier punto del edificio.",
      ],
      approachTitle: "Señalética como arquitectura de lectura.",
      approach: [
        "Definimos un sistema visual con jerarquías claras, tipografía funcional, códigos de color por piso y nomenclatura uniforme.",
        "El sistema es parte del edificio — no un añadido decorativo. Se implementa, se mantiene, y se expande sin perder coherencia.",
      ],
      metricLabel: "Resultado · Wayfinding sostenible",
      metricStatement: "Un sistema de lectura por piso.",
      metricBody:
        "Señalización consistente, funcional, y alineada con la identidad Terranum. Implementación y mantenimiento simplificados.",
      cover: "Imagen principal · Terranum",
      gallery: [
        "Imagen · Señalización principal",
        "Imagen · Código de piso",
        "Imagen · Nomenclatura",
        "Imagen · Detalle tipográfico",
        "Imagen · Implementación edificio",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño de señalética", value: "Equipo editorial · Grafismo" },
        { key: "Validación", value: "Equipo Terranum" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Terranum",
      industry: "Corporate signage",
      deck:
        "Corporate signage system — wayfinding, spatial visual identity, and internal communication for office buildings.",
      challengeTitle: "Navigating a building without thinking about it.",
      challenge: [
        "A corporate building needs signage that guides without being noticed — that informs without decorating, that directs without friction.",
        "The brief: a wayfinding system coherent with the Terranum brand that users could read at a glance from anywhere in the building.",
      ],
      approachTitle: "Signage as reading architecture.",
      approach: [
        "We defined a visual system with clear hierarchies, functional typography, floor-based color codes, and uniform nomenclature.",
        "The system is part of the building — not a decorative add-on. It's implemented, maintained, and expanded without losing coherence.",
      ],
      metricLabel: "Result · Sustainable wayfinding",
      metricStatement: "A per-floor reading system.",
      metricBody:
        "Consistent, functional signage aligned with the Terranum identity. Simplified implementation and maintenance.",
      cover: "Hero image · Terranum",
      gallery: [
        "Image · Primary signage",
        "Image · Floor code",
        "Image · Nomenclature",
        "Image · Typographic detail",
        "Image · Building implementation",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Signage design", value: "Editorial team · Grafismo" },
        { key: "Validation", value: "Terranum team" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
  {
    slug: "symrise",
    number: "PRJ—06",
    sector: "corporate",
    years: "2021",
    metric: "Branding sostenido",
    coverImage: "/images/projects/symrise/cover.jpg",
    galleryImages: [
      "/images/projects/symrise/gallery-01.jpg",
      "/images/projects/symrise/gallery-02.jpg",
      "/images/projects/symrise/gallery-03.jpg",
      "/images/projects/symrise/gallery-04.jpg",
      "/images/projects/symrise/gallery-05.jpg",
    ],
    es: {
      title: "Symrise",
      industry: "Branding corporativo",
      deck:
        "Desarrollo de branding corporativo — sistema visual, aplicaciones, y guías de uso para la operación regional de Symrise.",
      challengeTitle: "Una marca global con ritmo local.",
      challenge: [
        "La marca global Symrise tenía estándares claros, pero la operación regional necesitaba aplicaciones específicas al contexto colombiano y latinoamericano.",
        "Pedido: un desarrollo de branding respetuoso del estándar global, pero con vida propia en la operación local.",
      ],
      approachTitle: "Extender, no reemplazar.",
      approach: [
        "Trabajamos sobre los fundamentos del sistema global y construimos aplicaciones específicas — piezas, materiales, guías regionales.",
        "El resultado: la marca se mantiene reconocible globalmente y útil localmente al mismo tiempo.",
      ],
      metricLabel: "Resultado · Branding sostenido",
      metricStatement: "Marca global, operación local.",
      metricBody:
        "Aplicaciones regionales coherentes con el sistema global, materiales operativos listos para uso, y guías de extensión documentadas.",
      cover: "Imagen principal · Symrise",
      gallery: [
        "Imagen · Sistema visual",
        "Imagen · Aplicación regional",
        "Imagen · Pieza corporativa",
        "Imagen · Guía de uso",
        "Imagen · Material operativo",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Branding", value: "Equipo editorial · Grafismo" },
        { key: "Validación", value: "Equipo regional Symrise" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Symrise",
      industry: "Corporate branding",
      deck:
        "Corporate branding development — visual system, applications, and usage guides for Symrise's regional operation.",
      challengeTitle: "A global brand with local rhythm.",
      challenge: [
        "The global Symrise brand had clear standards, but the regional operation needed applications specific to the Colombian and Latin American context.",
        "The brief: a branding development respectful of the global standard but with its own life in the local operation.",
      ],
      approachTitle: "Extend, not replace.",
      approach: [
        "We worked on the fundamentals of the global system and built specific applications — pieces, materials, regional guides.",
        "The result: the brand stays globally recognizable and locally useful at the same time.",
      ],
      metricLabel: "Result · Sustained branding",
      metricStatement: "Global brand, local operation.",
      metricBody:
        "Regional applications coherent with the global system, operational materials ready for use, and documented extension guides.",
      cover: "Hero image · Symrise",
      gallery: [
        "Image · Visual system",
        "Image · Regional application",
        "Image · Corporate piece",
        "Image · Usage guide",
        "Image · Operational material",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Branding", value: "Editorial team · Grafismo" },
        { key: "Validation", value: "Symrise regional team" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
  {
    slug: "gobernacion",
    number: "PRJ—07",
    sector: "public",
    years: "2020 — 2022",
    metric: "Impacto comunitario",
    coverImage: "",
    galleryImages: [],
    es: {
      title: "Gobernación",
      industry: "Campañas comunitarias",
      deck:
        "Desarrollo de campañas comunitarias para sector público — comunicación dirigida a ciudadanía, con foco en claridad, impacto y accesibilidad.",
      challengeTitle: "Comunicar al público sin fricción.",
      challenge: [
        "Comunicar una campaña del sector público exige claridad inmediata — los ciudadanos deben entender el mensaje a la primera, sin ambigüedad.",
        "Pedido: campañas que priorizaran el mensaje sobre el estilo, y que funcionaran tanto en medios impresos como digitales.",
      ],
      approachTitle: "Claridad antes que estilo.",
      approach: [
        "Construimos un sistema visual con jerarquías claras, tipografía accesible, y mensajes directos. Cada pieza pasa por un filtro de legibilidad y comprensión.",
        "El resultado: campañas que la ciudadanía entiende sin esfuerzo, y que la administración puede sostener a lo largo del tiempo.",
      ],
      metricLabel: "Resultado · Impacto comunitario",
      metricStatement: "Campañas que la ciudadanía entiende.",
      metricBody:
        "Comunicación visual con estándar de lectura pública, aplicaciones digitales e impresas, y un sistema sostenible para administraciones futuras.",
      cover: "Imagen principal · Gobernación",
      gallery: [
        "Imagen · Campaña principal",
        "Imagen · Pieza digital",
        "Imagen · Material impreso",
        "Imagen · Jerarquía visual",
        "Imagen · Aplicación comunitaria",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño", value: "Equipo editorial · Grafismo" },
        { key: "Validación", value: "Equipo comunicaciones públicas" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Gobernación",
      industry: "Community campaigns",
      deck:
        "Community campaign development for the public sector — communication aimed at citizens, focused on clarity, impact, and accessibility.",
      challengeTitle: "Communicating to the public without friction.",
      challenge: [
        "Communicating a public-sector campaign demands immediate clarity — citizens must understand the message on the first read, without ambiguity.",
        "The brief: campaigns that prioritized message over style, and that worked in both print and digital media.",
      ],
      approachTitle: "Clarity before style.",
      approach: [
        "We built a visual system with clear hierarchies, accessible typography, and direct messaging. Every piece passes through a legibility and comprehension filter.",
        "The result: campaigns citizens understand effortlessly, and that the administration can sustain over time.",
      ],
      metricLabel: "Result · Community impact",
      metricStatement: "Campaigns citizens understand.",
      metricBody:
        "Visual communication with a public reading standard, digital and print applications, and a sustainable system for future administrations.",
      cover: "Hero image · Gobernación",
      gallery: [
        "Image · Main campaign",
        "Image · Digital piece",
        "Image · Print material",
        "Image · Visual hierarchy",
        "Image · Community application",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Design", value: "Editorial team · Grafismo" },
        { key: "Validation", value: "Public communications team" },
        { key: "Production", value: "Certified vendors · CO" },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
