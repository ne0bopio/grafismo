export type Sector = "pharma" | "retail" | "corporate" | "public";
export type Lang = "es" | "en";

export type ProjectCopy = {
  title: string;
  /** Optional override for the "Client" meta cell when the case is multi-client. Falls back to title. */
  client?: string;
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
  /** When true, the project is hidden from listings, routes, and the next-project chain. */
  draft?: boolean;
  es: ProjectCopy;
  en: ProjectCopy;
};

export const projects: Project[] = [
  {
    slug: "johnson-johnson",
    number: "PRJ—01",
    sector: "pharma",
    years: "2023 — 2024",
    metric: "Sin referentes",
    coverImage: "/images/projects/johnson-johnson/cover.jpg",
    galleryImages: [
      "/images/projects/johnson-johnson/gallery-01.jpg",
      "/images/projects/johnson-johnson/gallery-02.jpg",
      "/images/projects/johnson-johnson/gallery-03.jpg",
    ],
    es: {
      title: "Ethicon",
      industry: "Simuladores anatómicos · J&J",
      deck:
        "Desarrollo de simuladores anatómicos y soluciones visuales aplicadas al entrenamiento quirúrgico, la validación de dispositivos médicos y la comunicación especializada para la línea Ethicon de Johnson & Johnson.",
      challengeTitle: "Un reto sin proveedores disponibles.",
      challenge: [
        "El proyecto surgió ante la necesidad de desarrollar simuladores anatómicos funcionales para entrenamiento médico especializado. En ese momento no existían proveedores capaces de producir este tipo de soluciones a nivel local ni internacional bajo las especificaciones requeridas para pruebas clínicas y entrenamiento técnico.",
        "El desafío implicó investigar materiales, desarrollar geometrías anatómicas funcionales y traducir conceptos médicos complejos en estructuras físicas capaces de soportar procesos de sutura, corte y validación de dispositivos quirúrgicos.",
      ],
      approachTitle: "Diseño anatómico y exploración material.",
      approach: [
        "Se desarrollaron simuladores anatómicos en espuma y gel para representar órganos como corazón, pulmón, riñón e intestinos, con materiales capaces de replicar elasticidad, densidad y comportamiento superficial similares al tejido biológico.",
        "El proceso incluyó conceptualización visual, corte, producción, validación física y adaptación funcional para distintos escenarios de entrenamiento clínico.",
        "Los simuladores se utilizaron en formación médica, entrenamiento quirúrgico y validación de dispositivos de sutura y sellado de la línea Ethicon, con soporte adicional en comunicación visual y piezas para los programas de entrenamiento de Johnson & Johnson.",
      ],
      metricLabel: "Resultado · Sin referentes",
      metricStatement: "Soluciones funcionales donde no existían referentes.",
      metricBody:
        "Se desarrollaron soluciones anatómicas funcionales para entrenamiento médico especializado en un contexto sin proveedores capaces de cumplir los requerimientos técnicos. Las piezas facilitaron procesos de validación, entrenamiento y comunicación clínica para la línea Ethicon.",
      cover: "Entrenamiento quirúrgico · Ethicon",
      gallery: [
        "Simuladores anatómicos en espuma",
        "Modelo anatómico · vista frontal",
        "Modelo pulmonar · detalle",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Desarrollo de producto", value: "Equipo Grafismo" },
        { key: "Validación clínica", value: "Equipo médico · Ethicon / J&J" },
        { key: "Producción", value: "Proveedores homologados · CO" },
      ],
    },
    en: {
      title: "Ethicon",
      industry: "Anatomical simulators · J&J",
      deck:
        "Development of anatomical simulators and visual solutions applied to surgical training, medical-device validation, and specialized communication for Johnson & Johnson's Ethicon line.",
      challengeTitle: "A brief with no available suppliers.",
      challenge: [
        "The project emerged from the need to develop functional anatomical simulators for specialized medical training. At the time, no suppliers — local or international — could produce this kind of solution under the specifications required for clinical testing and technical training.",
        "The challenge meant researching materials, developing functional anatomical geometries, and translating complex medical concepts into physical structures able to withstand suturing, cutting, and surgical-device validation.",
      ],
      approachTitle: "Anatomical design and material exploration.",
      approach: [
        "We developed foam and gel anatomical simulators representing organs such as the heart, lung, kidney, and intestines, using materials that replicate elasticity, density, and surface behavior close to biological tissue.",
        "The process spanned visual conceptualization, cutting, production, physical validation, and functional adaptation for different clinical training scenarios.",
        "The simulators were used in medical education, surgical training, and validation of Ethicon suturing and sealing devices — alongside visual communication support and pieces for Johnson & Johnson training programs.",
      ],
      metricLabel: "Result · No precedent",
      metricStatement: "Functional solutions where none existed.",
      metricBody:
        "Functional anatomical solutions delivered for specialized medical training in a context with no suppliers able to meet the technical requirements. The pieces enabled validation, training, and clinical communication for the Ethicon line.",
      cover: "Surgical training · Ethicon",
      gallery: [
        "Anatomical foam simulators",
        "Anatomical model · front view",
        "Lung model · detail",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Product development", value: "Grafismo team" },
        { key: "Clinical validation", value: "Medical team · Ethicon / J&J" },
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
    slug: "horowitz-pharmacy",
    number: "PRJ—07",
    sector: "corporate",
    years: "2024",
    metric: "NJ · USA",
    coverImage: "/images/projects/horowitz-pharmacy/cover.jpg",
    galleryImages: [
      "/images/projects/horowitz-pharmacy/gallery-01.jpg",
      "/images/projects/horowitz-pharmacy/gallery-02.jpg",
      "/images/projects/horowitz-pharmacy/gallery-03.jpg",
    ],
    es: {
      title: "Horowitz Pharmacy",
      industry: "Señalización comercial · NJ, USA",
      deck:
        "Transformación visual completa de la fachada de Horowitz Pharmacy en Nueva Jersey: rediseño de la señalización para mejorar la visibilidad desde la calle, modernizar la percepción de marca y construir una presencia comercial más fuerte en un entorno urbano de alto tráfico.",
      challengeTitle: "Una fachada sin jerarquía ni visibilidad.",
      challenge: [
        "La señalización anterior carecía de jerarquía, consistencia y legibilidad a distancia. El local necesitaba destacar en una calle de alto tráfico y proyectar una identidad más profesional.",
        "El reto: rediseñar la señalización principal de fachada con mayor impacto visual, legible de día y de noche, y planificar su producción e instalación en condiciones reales.",
      ],
      approachTitle: "Diseño, visualización e instalación.",
      approach: [
        "Exploramos un sistema de doble aviso para maximizar la visibilidad desde varios ángulos y desarrollamos un render arquitectónico realista para validar el impacto comercial antes de producir.",
        "La paleta azul marino y dorado se eligió para comunicar profesionalismo, confianza y posicionamiento premium, con tipografía y contraste optimizados para lectura a distancia.",
        "La producción en gran formato usó materiales exteriores de alta durabilidad. La instalación incluyó la remoción del aviso anterior, preparación de fachada, integración eléctrica y montaje del sistema iluminado.",
      ],
      metricLabel: "Resultado · NJ, USA",
      metricStatement: "Identidad moderna. Mayor presencia. Mejor visibilidad.",
      metricBody:
        "La nueva fachada logró una identidad visual más fuerte, mejor visibilidad comercial y una presencia más profesional en la calle — combinando diseño, visualización, producción e instalación en una solución integral de gráfica ambiental.",
      cover: "Aviso iluminado · resultado final",
      gallery: [
        "Aviso anterior · antes",
        "Instalación en fachada",
        "Resultado nocturno iluminado",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño & visualización", value: "Equipo Grafismo" },
        { key: "Producción gran formato", value: "Grafismo · NJ, USA" },
        { key: "Instalación", value: "Equipo en sitio · NJ, USA" },
      ],
    },
    en: {
      title: "Horowitz Pharmacy",
      industry: "Storefront signage · NJ, USA",
      deck:
        "A complete storefront transformation for Horowitz Pharmacy in New Jersey: redesign of the façade signage to improve street visibility, modernize brand perception, and build a stronger commercial presence in a high-traffic urban environment.",
      challengeTitle: "A façade with no hierarchy or visibility.",
      challenge: [
        "The previous signage lacked hierarchy, consistency, and long-distance readability. The storefront needed to stand out on a high-traffic street and project a more professional identity.",
        "The brief: redesign the main façade signage for stronger visual impact — readable day and night — and plan its production and installation under real-world conditions.",
      ],
      approachTitle: "Design, visualization, and installation.",
      approach: [
        "We explored a dual-signage system to maximize visibility from multiple street angles and developed a realistic architectural render to validate commercial impact before production.",
        "A navy-blue and gold palette was chosen to communicate professionalism, trust, and premium positioning, with typography and contrast optimized for distance reading.",
        "Large-format production used durable exterior materials. Installation included removing the old sign, façade preparation, electrical integration, and mounting the new illuminated system.",
      ],
      metricLabel: "Result · NJ, USA",
      metricStatement: "Modern identity. Stronger presence. Better visibility.",
      metricBody:
        "The new façade achieved a stronger visual identity, improved commercial visibility, and a more professional street presence — combining design, visualization, production, and installation into a complete environmental-graphics solution.",
      cover: "Illuminated sign · final result",
      gallery: [
        "Previous sign · before",
        "Façade installation",
        "Illuminated night result",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Design & visualization", value: "Grafismo team" },
        { key: "Large-format production", value: "Grafismo · NJ, USA" },
        { key: "Installation", value: "On-site team · NJ, USA" },
      ],
    },
  },
  {
    slug: "regulatory-packaging",
    number: "PRJ—08",
    sector: "pharma",
    years: "2021 — 2025",
    metric: "LatAm",
    coverImage: "/images/projects/regulatory-packaging/cover.jpg",
    galleryImages: [
      "/images/projects/regulatory-packaging/gallery-01.jpg",
      "/images/projects/regulatory-packaging/gallery-02.jpg",
      "/images/projects/regulatory-packaging/gallery-03.jpg",
    ],
    es: {
      title: "Empaques & Artes Regulatorios",
      client: "Multi-cliente · LatAm",
      industry: "Farmacéutico · LatAm",
      deck:
        "Sistemas completos de empaque farmacéutico y artes regulatorios para clientes de Latinoamérica: cajas plegadizas, insertos, etiquetas y roll labels desarrollados con precisión técnica, control de versiones y cumplimiento normativo — listos para producción industrial.",
      challengeTitle: "Precisión para mercados regulados.",
      challenge: [
        "El empaque farmacéutico no admite errores: cada pieza debe cumplir lineamientos regulatorios y sanitarios, sostener jerarquías de información críticas y ser compatible con procesos industriales de impresión.",
        "El hilo común de estos proyectos —Aurobindo, Proclin, Vesalius, Eurociencia— fue traducir requerimientos técnicos y normativos en artes finales consistentes, sin sacrificar claridad visual ni tiempos de producción.",
      ],
      approachTitle: "Del brief técnico al archivo listo para imprenta.",
      approach: [
        "Desarrollamos sistemas gráficos completos: estructura de empaque, diagramación regulatoria, insertos y prospectos de alta densidad técnica, y etiquetas autoadhesivas / roll labels con sus sistemas de codificación.",
        "Cada arte pasa por control de calidad —dimensiones, tipografía, códigos, variables, Pantones y barniz— antes de entregar archivos optimizados para flexografía y offset.",
        "El sistema reduce errores, mantiene la consistencia entre lotes y entrega artes maestros versionados, listos para producción real.",
      ],
      metricLabel: "Alcance · LatAm",
      metricStatement: "Precisión. Cumplimiento. Healthcare.",
      metricBody:
        "Sistemas gráficos para cartones farmacéuticos, inyectables, suspensiones orales, roll labels e insertos médicos — desarrollados con estándar técnico y entregados listos para producción industrial.",
      cover: "Validación de arte regulatorio",
      gallery: [
        "Portafolio de empaques farmacéuticos",
        "Especificación de etiqueta · roll label",
        "Troquel estructural · caja plegadiza",
      ],
      credits: [
        { key: "Dirección", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Diseño regulatorio", value: "Equipo Grafismo" },
        { key: "Clientes", value: "Aurobindo · Proclin · Vesalius · Eurociencia" },
        { key: "Producción", value: "Flexografía / offset · proveedores homologados" },
      ],
    },
    en: {
      title: "Regulatory Packaging Systems",
      client: "Multiple clients · LatAm",
      industry: "Pharmaceutical · LatAm",
      deck:
        "Complete pharmaceutical packaging and regulatory artwork systems for Latin American clients: folding cartons, inserts, labels, and roll labels developed with technical precision, version control, and regulatory compliance — ready for industrial production.",
      challengeTitle: "Precision for regulated markets.",
      challenge: [
        "Pharmaceutical packaging allows no errors: every piece must meet regulatory and health requirements, hold critical information hierarchies, and stay compatible with industrial printing processes.",
        "The common thread across these projects — Aurobindo, Proclin, Vesalius, Eurociencia — was translating technical and regulatory requirements into consistent print-ready artwork, without sacrificing visual clarity or production timelines.",
      ],
      approachTitle: "From technical brief to print-ready file.",
      approach: [
        "We develop complete graphic systems: packaging structure, regulatory layout, high-density medical inserts and leaflets, and self-adhesive labels / roll labels with their coding systems.",
        "Every artwork passes quality control — dimensions, typography, codes, variables, Pantones, and varnish — before delivering files optimized for flexography and offset.",
        "The system reduces errors, keeps consistency across batches, and delivers versioned master artworks, ready for real production.",
      ],
      metricLabel: "Reach · LatAm",
      metricStatement: "Precision. Compliance. Healthcare.",
      metricBody:
        "Graphic systems for pharmaceutical cartons, injectables, oral suspensions, roll labels, and medical inserts — built to technical standard and delivered ready for industrial production.",
      cover: "Regulatory artwork validation",
      gallery: [
        "Pharmaceutical packaging portfolio",
        "Label specification · roll label",
        "Structural dieline · folding carton",
      ],
      credits: [
        { key: "Direction", value: "Óscar · Grafismo Comunicaciones" },
        { key: "Regulatory design", value: "Grafismo team" },
        { key: "Clients", value: "Aurobindo · Proclin · Vesalius · Eurociencia" },
        { key: "Production", value: "Flexography / offset · certified vendors" },
      ],
    },
  },
  {
    slug: "gobernacion",
    number: "PRJ—09",
    draft: true,
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

export const featuredSlugs = ["johnson-johnson", "cardinal-health", "horowitz-pharmacy"] as const;

/** Projects visible on the public site (drafts excluded). Use this for listings, routes, and chaining. */
export const publishedProjects: Project[] = projects.filter((p) => !p.draft);

export function getFeaturedProjects(): Project[] {
  return featuredSlugs
    .map((slug) => publishedProjects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
}

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = publishedProjects.findIndex((p) => p.slug === slug);
  return publishedProjects[(i + 1) % publishedProjects.length];
}
