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

/** Bilingual string pair used inside editorial story blocks. */
export type L = { es: string; en: string };

/** One image inside a story grid, with a bilingual caption and an optional column span (out of 12). */
export type StoryImage = { src: string; caption: L; span?: number; ratio?: string };

/**
 * Editorial "case-story" blocks — the photo-led spread Óscar asked for
 * ("imágenes que hablen por sí solas"). A project that defines `story`
 * renders this in place of the generic gallery tiles.
 */
export type StoryBlock =
  | { kind: "intro"; eyebrow: L; title: L; lead: L; services: { es: string[]; en: string[] } }
  | { kind: "chapter"; index: string; eyebrow: L; title: L; lead: L }
  | { kind: "feature"; src: string; ratio?: string; caption: L; contain?: boolean }
  | { kind: "split"; src: string; ratio?: string; title: L; body: L; caption?: L; flip?: boolean; contain?: boolean }
  | { kind: "grid"; images: StoryImage[] };

export type Project = {
  slug: string;
  number: string;
  sector: Sector;
  years: string;
  metric: string;
  coverImage: string;
  /** Optional override for the home hero carousel (tile + thumbnail). Falls back to coverImage. */
  heroImage?: string;
  /** Optional aspect ratio for the case-page cover frame (e.g. "3 / 2"). Defaults to 16:9. */
  coverRatio?: string;
  /**
   * Render the cover with object-contain (on a cream card) in listing/hero tiles.
   * Use for composed sheets with text or logos at the edges — cropping would clip them.
   */
  coverFit?: "contain";
  galleryImages: string[];
  /** When true, the project is hidden from listings, routes, and the next-project chain. */
  draft?: boolean;
  /** Optional editorial spread. When present it replaces the generic gallery section. */
  story?: StoryBlock[];
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
    // Óscar's training-scene visual (a labeled recreation) — native 3:2.
    coverImage: "/images/projects/johnson-johnson/cover.jpg",
    coverRatio: "3 / 2",
    galleryImages: [
      "/images/projects/johnson-johnson/gallery-01.jpg",
      "/images/projects/johnson-johnson/gallery-02.jpg",
      "/images/projects/johnson-johnson/gallery-03.jpg",
    ],
    // Editorial spread following Óscar's "Caso Ethicon — textos finales" brief:
    // reto → desarrollo del modelo → validación → implementación → producción.
    story: [
      {
        kind: "intro",
        eyebrow: {
          es: "Ethicon · Johnson & Johnson",
          en: "Ethicon · Johnson & Johnson",
        },
        title: {
          es: "Entrenamiento. Precisión. Resultados reales.",
          en: "Training. Precision. Real results.",
        },
        lead: {
          es: "Desarrollo de simuladores anatómicos y soluciones visuales aplicadas al entrenamiento quirúrgico, la validación de dispositivos médicos y la comunicación especializada para la línea Ethicon de Johnson & Johnson.",
          en: "Development of anatomical simulators and visual solutions applied to surgical training, medical-device validation, and specialized communication for Johnson & Johnson's Ethicon line.",
        },
        services: {
          es: [
            "Diseño anatómico",
            "Exploración de materiales",
            "Producción en espuma y gel",
            "Validación clínica",
            "Comunicación visual",
            "Señalización y activaciones",
          ],
          en: [
            "Anatomical design",
            "Material research",
            "Foam & gel production",
            "Clinical validation",
            "Visual communication",
            "Signage & activations",
          ],
        },
      },
      {
        kind: "chapter",
        index: "01",
        eyebrow: { es: "El reto", en: "The challenge" },
        title: {
          es: "Un reto sin proveedores disponibles.",
          en: "A brief with no available suppliers.",
        },
        lead: {
          es: "No existían proveedores — locales ni internacionales — capaces de producir simuladores anatómicos funcionales bajo las especificaciones requeridas para pruebas clínicas y entrenamiento técnico. Había que investigar materiales, desarrollar geometrías anatómicas y traducir conceptos médicos complejos en estructuras físicas capaces de soportar sutura, corte y validación de dispositivos.",
          en: "No suppliers — local or international — could produce functional anatomical simulators under the specifications required for clinical testing and technical training. It meant researching materials, developing anatomical geometries, and translating complex medical concepts into physical structures able to withstand suturing, cutting, and device validation.",
        },
      },
      {
        kind: "split",
        src: "/images/projects/johnson-johnson/story/material-aorta.jpg",
        ratio: "3 / 4",
        title: {
          es: "Materialidad que se comporta como tejido.",
          en: "Material that behaves like tissue.",
        },
        body: {
          es: "Espumas y geles seleccionados para replicar elasticidad, densidad y comportamiento superficial del tejido biológico — cada pieza parte de un bloque calibrado y termina como una geometría anatómica funcional.",
          en: "Foams and gels selected to replicate the elasticity, density, and surface behavior of biological tissue — each piece starts as a calibrated block and ends as a functional anatomical geometry.",
        },
        caption: {
          es: "Exploración material · modelo aórtico en espuma",
          en: "Material exploration · foam aortic model",
        },
      },
      {
        kind: "chapter",
        index: "02",
        eyebrow: { es: "Desarrollo del modelo", en: "Model development" },
        title: {
          es: "Diseño anatómico, del bloque al órgano.",
          en: "Anatomical design, from block to organ.",
        },
        lead: {
          es: "Simuladores en espuma y gel para representar corazón, pulmón, riñón e intestinos: conceptualización visual, corte, producción, validación física y adaptación funcional para distintos escenarios de entrenamiento clínico.",
          en: "Foam and gel simulators representing the heart, lung, kidney, and intestines: visual conceptualization, cutting, production, physical validation, and functional adaptation for different clinical training scenarios.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/johnson-johnson/story/model-aorta.jpg",
            span: 6,
            ratio: "4 / 3",
            caption: {
              es: "Modelo aórtico · vista frontal",
              en: "Aortic model · front view",
            },
          },
          {
            src: "/images/projects/johnson-johnson/story/model-lung.jpg",
            span: 6,
            ratio: "4 / 3",
            caption: {
              es: "Modelo pulmonar · vista lateral",
              en: "Lung model · side view",
            },
          },
        ],
      },
      {
        kind: "chapter",
        index: "03",
        eyebrow: { es: "Validación y entrenamiento", en: "Validation & training" },
        title: {
          es: "Entrenamiento clínico en entornos controlados.",
          en: "Clinical training in controlled environments.",
        },
        lead: {
          es: "Los simuladores se usaron en formación médica, entrenamiento quirúrgico y validación de dispositivos de sutura y sellado de la línea Ethicon — pruebas funcionales y práctica controlada para profesionales de la salud.",
          en: "The simulators were used in medical education, surgical training, and validation of Ethicon suturing and sealing devices — functional testing and controlled practice for healthcare professionals.",
        },
      },
      {
        kind: "feature",
        src: "/images/projects/johnson-johnson/story/training-detail.jpg",
        ratio: "16 / 9",
        caption: {
          es: "Práctica de sutura sobre simulador · recreación visual del entorno de entrenamiento",
          en: "Suture practice on a simulator · visual recreation of the training environment",
        },
      },
      {
        kind: "chapter",
        index: "04",
        eyebrow: {
          es: "Implementación y experiencia",
          en: "Implementation & experience",
        },
        title: {
          es: "Comunicación visual aplicada al entorno médico.",
          en: "Visual communication for medical environments.",
        },
        lead: {
          es: "El proyecto incluyó soporte en comunicación visual, experiencias de marca, piezas impresas, señalización y activaciones para los programas de entrenamiento y el posicionamiento corporativo de Johnson & Johnson.",
          en: "The project also covered visual communication, brand experiences, printed pieces, signage, and activations for Johnson & Johnson's training programs and corporate positioning.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/johnson-johnson/story/env-senalizacion.jpg",
            span: 4,
            ratio: "3 / 4",
            caption: {
              es: "Señalización interna · espacios J&J",
              en: "Interior signage · J&J spaces",
            },
          },
          {
            src: "/images/projects/johnson-johnson/story/env-install.jpg",
            span: 4,
            ratio: "3 / 4",
            caption: {
              es: "Instalación en sitio · equipo Grafismo",
              en: "On-site installation · Grafismo team",
            },
          },
          {
            src: "/images/projects/johnson-johnson/story/env-totem.jpg",
            span: 4,
            ratio: "3 / 4",
            caption: {
              es: "Tótem exterior · wayfinding corporativo",
              en: "Outdoor totem · corporate wayfinding",
            },
          },
        ],
      },
      {
        kind: "split",
        src: "/images/projects/johnson-johnson/story/production-batch.jpg",
        ratio: "16 / 9",
        flip: true,
        title: {
          es: "Producción en serie, lista para despacho.",
          en: "Serial production, ready to ship.",
        },
        body: {
          es: "Lotes de simuladores producidos, empacados y rotulados para entrega a Johnson & Johnson — la respuesta a un brief que empezó sin proveedores disponibles.",
          en: "Batches of simulators produced, packed, and labeled for delivery to Johnson & Johnson — the answer to a brief that began with no available suppliers.",
        },
        caption: {
          es: "Lote de estómagos en espuma · despacho a J&J",
          en: "Foam stomach batch · dispatch to J&J",
        },
      },
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
    // The cover is a composed 3:2 sheet with the logo/headline at the edges —
    // shown uncropped on the case page and contained in listing/hero tiles.
    coverImage: "/images/projects/cardinal-health/cover.jpg",
    coverRatio: "3 / 2",
    coverFit: "contain",
    galleryImages: [
      "/images/projects/cardinal-health/gallery-01.jpg",
      "/images/projects/cardinal-health/gallery-02.jpg",
      "/images/projects/cardinal-health/gallery-03.jpg",
      "/images/projects/cardinal-health/gallery-04.jpg",
      "/images/projects/cardinal-health/gallery-05.jpg",
    ],
    story: [
      {
        kind: "intro",
        eyebrow: { es: "Sistema de comunicación · Cardinal Health", en: "Communication system · Cardinal Health" },
        title: {
          es: "Un sistema que traduce lo clínico sin diluirlo.",
          en: "A system that translates the clinical without diluting it.",
        },
        lead: {
          es: "Sistema integral de comunicación visual para divisiones médicas de Cardinal Health: diseño editorial, comunicación de producto, campañas de concientización y materiales de producción listos para implementación real.",
          en: "An integrated visual communication system for Cardinal Health's medical divisions: editorial design, product communication, awareness campaigns, and production-ready materials built for real-world implementation.",
        },
        services: {
          es: [
            "Sistemas de marca",
            "Comunicación healthcare",
            "Diseño editorial",
            "Producción impresa",
            "Material corporativo",
            "Eventos & trade marketing",
            "Gráfica POP & stand",
            "Comunicación de producto médico",
            "Desarrollo de campañas",
            "Adaptación a redes sociales",
            "Supervisión de producción",
          ],
          en: [
            "Branding systems",
            "Healthcare communication",
            "Editorial design",
            "Print production",
            "Corporate materials",
            "Event & trade marketing",
            "POP & booth graphics",
            "Medical product communication",
            "Campaign development",
            "Social media adaptation",
            "Production supervision",
          ],
        },
      },
      {
        kind: "chapter",
        index: "01",
        eyebrow: { es: "Comunicación de producto", en: "Product communication" },
        title: {
          es: "Información clínica que se lee de un vistazo.",
          en: "Clinical information you read at a glance.",
        },
        lead: {
          es: "Sistemas editoriales para comunicación de producto healthcare: folletos técnicos, sistemas de información de cuidado de heridas y layouts de presentación con jerarquía clara y estética farmacéutica premium.",
          en: "Editorial systems for healthcare product communication: technical brochures, wound-care information systems, and presentation layouts with clear hierarchy and a premium pharmaceutical aesthetic.",
        },
      },
      {
        kind: "split",
        src: "/images/projects/cardinal-health/story/accordion-spread.jpg",
        ratio: "3 / 1",
        contain: true,
        title: {
          es: "Folleto acordeón · cuidado de heridas",
          en: "Accordion brochure · wound care",
        },
        body: {
          es: "Folleto editorial multipanel para control de infección y manejo avanzado de heridas, con jerarquía de información codificada por color y especificaciones listas para impresión industrial.",
          en: "A multi-panel editorial brochure for infection control and advanced wound management, with color-coded information hierarchy and specifications ready for industrial print.",
        },
        caption: {
          es: "Sistema acordeón · 6 paneles",
          en: "Accordion system · 6 panels",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/cardinal-health/story/wound-care.jpg",
            span: 4,
            ratio: "3 / 4",
            caption: { es: "Cuidado de heridas · TIME", en: "Wound care · TIME" },
          },
          {
            src: "/images/projects/cardinal-health/story/protexis-gloves.jpg",
            span: 4,
            ratio: "3 / 4",
            caption: { es: "Guantes Protexis · ajuste perfecto", en: "Protexis gloves · perfect fit" },
          },
          {
            src: "/images/projects/cardinal-health/story/ted-compression.jpg",
            span: 4,
            ratio: "3 / 4",
            caption: { es: "Medias T.E.D. · terapia de compresión", en: "T.E.D. stockings · compression therapy" },
          },
          {
            src: "/images/projects/cardinal-health/story/kendall-product.jpg",
            span: 12,
            ratio: "16 / 7",
            caption: { es: "Kendall · comunicación de producto", en: "Kendall · product communication" },
          },
        ],
      },
      {
        kind: "chapter",
        index: "02",
        eyebrow: { es: "Campañas de concientización", en: "Awareness campaigns" },
        title: {
          es: "Educar y mover, sin perder el rigor clínico.",
          en: "Educate and move, without losing clinical rigor.",
        },
        lead: {
          es: "Sistemas de campaña para concientización de pacientes y prevención, combinando claridad educativa con narrativa visual emocional.",
          en: "Campaign systems for patient awareness and prevention, combining educational clarity with emotionally engaging visual storytelling.",
        },
      },
      {
        kind: "feature",
        src: "/images/projects/cardinal-health/story/thrombosis-campaign.jpg",
        ratio: "16 / 9",
        contain: true,
        caption: {
          es: "Campaña de prevención de trombosis · #ViaLibreATuVida",
          en: "Thrombosis prevention campaign · #ViaLibreATuVida",
        },
      },
      {
        kind: "chapter",
        index: "03",
        eyebrow: { es: "Sistemas para redes sociales", en: "Social media systems" },
        title: {
          es: "La marca, consistente en cada fecha.",
          en: "The brand, consistent on every date.",
        },
        lead: {
          es: "Piezas digitales para campañas de salud, fechas conmemorativas y reconocimiento profesional, con tipografía limpia y consistencia de marca Cardinal Health.",
          en: "Digital pieces for health campaigns, commemorative dates, and professional recognition — clean typography and strong Cardinal Health brand consistency.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/cardinal-health/story/social-womens-day.jpg",
            span: 4,
            ratio: "1 / 1",
            caption: { es: "Día Internacional de la Mujer", en: "International Women's Day" },
          },
          {
            src: "/images/projects/cardinal-health/story/social-nurses-day.jpg",
            span: 4,
            ratio: "1 / 1",
            caption: { es: "Día Mundial de la Enfermera", en: "International Nurses Day" },
          },
          {
            src: "/images/projects/cardinal-health/story/social-health-day.jpg",
            span: 4,
            ratio: "1 / 1",
            caption: { es: "Día Mundial de la Salud", en: "World Health Day" },
          },
        ],
      },
      {
        kind: "split",
        src: "/images/projects/cardinal-health/story/calendar-2026.jpg",
        ratio: "3 / 4",
        contain: true,
        flip: true,
        title: {
          es: "Material corporativo & producción",
          en: "Corporate material & production",
        },
        body: {
          es: "Calendarios, libretas y credenciales corporativas producidas a escala real — del concepto a la ejecución impresa, con consistencia visual de principio a fin.",
          en: "Calendars, notebooks, and corporate credentials produced at real scale — from concept to printed execution, with visual consistency end to end.",
        },
        caption: {
          es: "Calendario corporativo · 2026",
          en: "Corporate calendar · 2026",
        },
      },
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
    slug: "regulatory-packaging",
    number: "PRJ—03",
    sector: "pharma",
    years: "2021 — 2025",
    metric: "LatAm",
    coverImage: "/images/projects/regulatory-packaging/cover.jpg",
    galleryImages: [
      "/images/projects/regulatory-packaging/gallery-01.jpg",
      "/images/projects/regulatory-packaging/gallery-02.jpg",
      "/images/projects/regulatory-packaging/gallery-03.jpg",
    ],
    story: [
      {
        kind: "intro",
        eyebrow: {
          es: "Empaques & artes regulatorios · LatAm",
          en: "Pharmaceutical packaging & regulatory artwork · LatAm",
        },
        title: {
          es: "Precisión técnica con estándares internacionales.",
          en: "Technical precision to international standards.",
        },
        lead: {
          es: "Soluciones integrales para la industria farmacéutica y healthcare: cajas plegadizas, insertos, etiquetas, roll labels y artes regulatorios listos para producción industrial. El sistema combina diseño gráfico especializado, organización técnica, control de versiones y cumplimiento normativo para mercados de Latinoamérica y Centroamérica.",
          en: "End-to-end solutions for the pharmaceutical and healthcare industry: folding cartons, inserts, labels, roll labels, and regulatory artwork ready for industrial production. The system combines specialized graphic design, technical organization, version control, and regulatory compliance for Latin American and Central American markets.",
        },
        services: {
          es: [
            "Sistemas de empaque",
            "Artes regulatorios",
            "Insertos y prospectos",
            "Producción de etiquetas",
            "Archivos listos para imprenta",
            "Control de calidad",
          ],
          en: [
            "Packaging systems",
            "Regulatory artwork",
            "Insert & leaflet design",
            "Label production",
            "Print-ready files",
            "Quality control",
          ],
        },
      },
      {
        kind: "feature",
        src: "/images/projects/regulatory-packaging/story/printed-systems.jpg",
        ratio: "15 / 8",
        contain: true,
        caption: {
          es: "Sistemas impresos — cajas plegadizas, insertos, etiquetas y roll labels para healthcare",
          en: "Printed systems — folding cartons, inserts, labels, and roll labels for healthcare",
        },
      },
      {
        kind: "chapter",
        index: "01",
        eyebrow: { es: "Experiencia", en: "Experience" },
        title: {
          es: "Sistemas gráficos para todo el empaque healthcare.",
          en: "Graphic systems across healthcare packaging.",
        },
        lead: {
          es: "Cartones farmacéuticos, productos inyectables, suspensiones orales, roll labels, insertos médicos, cajas plegadizas y productos OTC y de prescripción — desarrollados bajo lineamientos regulatorios de la región.",
          en: "Pharmaceutical cartons, injectable products, oral suspensions, roll labels, medical inserts, folding cartons, and OTC & prescription products — developed under the region's regulatory guidelines.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/regulatory-packaging/story/ketamina-artwork.jpg",
            span: 6,
            ratio: "9 / 8",
            caption: { es: "Arte final · inyectable", en: "Final artwork · injectable" },
          },
          {
            src: "/images/projects/regulatory-packaging/story/dieline-5cm.jpg",
            span: 6,
            ratio: "9 / 8",
            caption: { es: "Troquel y arte · eurofix 5 cm", en: "Dieline & artwork · eurofix 5 cm" },
          },
          {
            src: "/images/projects/regulatory-packaging/story/dieline-10cm.jpg",
            span: 6,
            ratio: "3 / 2",
            caption: { es: "Troquel y arte · eurofix 10 cm", en: "Dieline & artwork · eurofix 10 cm" },
          },
          {
            src: "/images/projects/regulatory-packaging/story/dieline-15cm.jpg",
            span: 6,
            ratio: "3 / 2",
            caption: { es: "Troquel y arte · eurofix 15 cm", en: "Dieline & artwork · eurofix 15 cm" },
          },
        ],
      },
      {
        kind: "split",
        src: "/images/projects/regulatory-packaging/story/quality-control.jpg",
        ratio: "3 / 2",
        flip: true,
        title: {
          es: "Control de calidad antes de imprenta.",
          en: "Quality control before print.",
        },
        body: {
          es: "Cada arte pasa control de calidad antes de producción: pruebas físicas contra archivo digital, dimensiones, tipografía, códigos, variables, Pantones y barniz. Trabajamos con estructuras reales de producción y líneas de troquel listas para imprenta.",
          en: "Every artwork passes quality control before production: physical proofs checked against the digital file, dimensions, typography, codes, variables, Pantones, and varnish. We work with real production structures and print-ready dielines.",
        },
        caption: {
          es: "Validación de artes · control de calidad",
          en: "Artwork validation · quality control",
        },
      },
    ],
    es: {
      title: "Empaques & Artes Regulatorios",
      client: "Multi-cliente · LatAm",
      industry: "Farmacéutico · LatAm",
      deck:
        "Sistemas completos de empaque farmacéutico y artes regulatorios para clientes de Latinoamérica: cajas plegadizas, insertos, etiquetas y roll labels desarrollados con precisión técnica, control de versiones y cumplimiento normativo — listos para producción industrial.",
      challengeTitle: "Precisión para mercados regulados.",
      challenge: [
        "El empaque farmacéutico no admite errores: cada pieza debe cumplir lineamientos regulatorios y sanitarios —INVIMA y agencias de la región—, sostener jerarquías de información críticas y ser compatible con procesos industriales de impresión.",
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
        "Pharmaceutical packaging allows no errors: every piece must meet regulatory and health requirements — INVIMA and regional agencies — hold critical information hierarchies, and stay compatible with industrial printing processes.",
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
    slug: "oxxo",
    number: "PRJ—04",
    sector: "retail",
    years: "2023",
    metric: "Escala nacional",
    // Case cover = the full labeling montage (3:2, shown uncropped via coverRatio);
    // the hero carousel uses the in-store scene cropped from its top-left panel.
    coverImage: "/images/projects/oxxo/story/labeling-montage.jpg",
    coverRatio: "3 / 2",
    heroImage: "/images/projects/oxxo/hero-instore.jpg",
    // Ordered so orientation matches the gallery tiles: the native 16:9 food
    // shot leads the wide tile, portraits sit in the portrait slot. gallery-01
    // was a sideways phone photo — corrected upright.
    galleryImages: [
      "/images/projects/oxxo/gallery-02.jpg",
      "/images/projects/oxxo/gallery-05.jpg",
      "/images/projects/oxxo/gallery-01.jpg",
      "/images/projects/oxxo/gallery-03.jpg",
      "/images/projects/oxxo/gallery-04.jpg",
    ],
    story: [
      {
        kind: "intro",
        eyebrow: {
          es: "Sistema de empaque retail · OXXO",
          en: "Retail packaging system · OXXO",
        },
        title: {
          es: "Un sistema de empaque hecho para el ritmo del retail.",
          en: "A packaging system built for retail pace.",
        },
        lead: {
          es: "Desarrollo de un sistema de empaque de alimentos a la medida para entornos retail: branding, diseño de empaque, etiquetado operativo y experiencia de cliente integrados en una solución funcional y visualmente atractiva.",
          en: "Development of a custom food packaging system for retail environments: branding, packaging design, operational labeling, and customer experience combined into a functional, visually engaging solution.",
        },
        services: {
          es: [
            "Branding",
            "Diseño de empaque",
            "Etiquetado operativo",
            "Implementación en retail",
          ],
          en: [
            "Branding",
            "Packaging design",
            "Operational labeling",
            "Retail implementation",
          ],
        },
      },
      {
        kind: "chapter",
        index: "01",
        eyebrow: { es: "Etiquetado operativo", en: "Operational labeling" },
        title: {
          es: "Trazabilidad que la operación puede sostener.",
          en: "Traceability the operation can sustain.",
        },
        lead: {
          es: "Sistema integrado de etiquetas para manipulación de alimentos, trazabilidad, control de inventario y eficiencia operativa en entornos de comida retail — impresión térmica, lote, fechas y horas diligenciadas en tienda.",
          en: "An integrated labeling system for food handling, traceability, inventory control, and operational efficiency in retail food environments — thermal printing with batch, dates, and times filled in-store.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/oxxo/story/label-systems.jpg",
            span: 6,
            ratio: "3 / 2",
            caption: { es: "Sistema de etiquetas · código de barras y fast food", en: "Label system · barcode and fast food" },
          },
          {
            src: "/images/projects/oxxo/story/label-machine.jpg",
            span: 6,
            ratio: "3 / 2",
            caption: { es: "Impresión térmica · etiquetas en rollo", en: "Thermal printing · roll labels" },
          },
        ],
      },
      {
        kind: "chapter",
        index: "02",
        eyebrow: { es: "Experiencia de cliente", en: "Customer experience" },
        title: {
          es: "Diseñado para experiencias reales.",
          en: "Designed for real retail experiences.",
        },
        lead: {
          es: "El empaque combina funcionalidad práctica con una presentación visual atractiva para el retail de conveniencia moderno — protege el producto, presenta la marca y mejora la entrega.",
          en: "The packaging combines practical functionality with an appetizing visual presentation for modern convenience retail — it protects the product, carries the brand, and improves hand-off.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/oxxo/story/box-front.jpg",
            span: 4,
            ratio: "4 / 3",
            caption: { es: "Caja cerrada · etiqueta aplicada", en: "Closed box · label applied" },
          },
          {
            src: "/images/projects/oxxo/story/box-angle.jpg",
            span: 4,
            ratio: "4 / 3",
            caption: { es: "Empaque · vista en ángulo", en: "Packaging · angled view" },
          },
          {
            src: "/images/projects/oxxo/story/box-open-angle.jpg",
            span: 4,
            ratio: "4 / 3",
            caption: { es: "Caja abierta · producto real", en: "Open box · real product" },
          },
        ],
      },
      {
        kind: "split",
        src: "/images/projects/oxxo/story/case-sheet.jpg",
        ratio: "5 / 4",
        contain: true,
        flip: true,
        title: {
          es: "Listo para producción y operación diaria.",
          en: "Ready for production and daily operation.",
        },
        body: {
          es: "El proyecto incluyó artes finales listos para producción y aplicaciones de empaque desarrolladas para operaciones retail reales y uso comercial diario — del concepto al mostrador.",
          en: "The project included production-ready artwork and packaging applications developed for real-world retail operations and daily commercial use — from concept to counter.",
        },
        caption: {
          es: "Sistema completo · presentación del caso",
          en: "Full system · case presentation",
        },
      },
    ],
    es: {
      title: "OXXO",
      industry: "Empaque de alimentos · retail",
      deck:
        "Sistema de empaque de alimentos a la medida para entornos retail — branding, diseño estructural, etiquetado operativo y experiencia de cliente en una sola solución funcional.",
      challengeTitle: "Proteger, marcar y operar a la vez.",
      challenge: [
        "El empaque de comida en retail exige tres cosas al mismo tiempo: proteger el producto, sostener la marca y darle a la operación un sistema de etiquetado que cualquier turno pueda ejecutar sin fricción.",
        "El pedido: un sistema de empaque y etiquetado operativo que funcionara al ritmo de tienda — manipulación, trazabilidad e inventario — sin sacrificar presentación.",
      ],
      approachTitle: "Marca apetitosa, operación simple.",
      approach: [
        "Diseñamos la caja y su sistema visual con la identidad OXXO — colores llamativos y un lenguaje gráfico apetitoso adaptado a entornos de alto volumen — junto a etiquetas operativas de impresión térmica para diligenciar producto, lote, fechas y horas.",
        "El resultado: un flujo de seis pasos que va de la impresión de la etiqueta a la entrega al cliente, con la información visible para control interno, trazabilidad y seguridad alimentaria.",
      ],
      metricLabel: "Resultado · Escala nacional",
      metricStatement: "Un sistema sostenido sin perder ritmo.",
      metricBody:
        "Empaque funcional, marca consistente y un sistema de etiquetado que el equipo de tienda adopta sin fricción — listo para operación comercial diaria.",
      cover: "Imagen principal · OXXO",
      gallery: [
        "Empaque de alimentos · OXXO",
        "Etiquetado operativo",
        "Trazabilidad de lote",
        "Control de empaque",
        "Presentación en punto de venta",
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
      industry: "Food packaging · retail",
      deck:
        "A custom food packaging system for retail environments — branding, structural design, operational labeling, and customer experience in one functional solution.",
      challengeTitle: "Protect, brand, and operate at once.",
      challenge: [
        "Retail food packaging demands three things at the same time: protect the product, carry the brand, and give the operation a labeling system any shift can run without friction.",
        "The brief: a packaging and operational labeling system that worked at store pace — handling, traceability, inventory — without sacrificing presentation.",
      ],
      approachTitle: "Appetizing brand, simple operation.",
      approach: [
        "We designed the box and its visual system around the OXXO identity — bold colors and a playful, food-oriented graphic language built for high-volume environments — alongside thermal-print operational labels for product, batch, dates, and times.",
        "The result: a six-step flow from label printing to customer hand-off, with information visible for internal control, traceability, and food safety.",
      ],
      metricLabel: "Result · National scale",
      metricStatement: "A system sustained without losing pace.",
      metricBody:
        "Functional packaging, consistent branding, and a labeling system store teams adopt without friction — ready for daily commercial operation.",
      cover: "Hero image · OXXO",
      gallery: [
        "Food packaging · OXXO",
        "Operational labeling",
        "Batch traceability",
        "Packaging control",
        "Point-of-sale presentation",
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
    // Cover = 3:2 crop of the dusk photo — the finished illuminated sign on the
    // real storefront (replaces the blurry night video-frame from launch).
    coverImage: "/images/projects/horowitz-pharmacy/cover-dusk.jpg",
    coverRatio: "3 / 2",
    galleryImages: [
      "/images/projects/horowitz-pharmacy/gallery-01.jpg",
      "/images/projects/horowitz-pharmacy/gallery-02.jpg",
      "/images/projects/horowitz-pharmacy/gallery-03.jpg",
    ],
    // Editorial spread following Óscar's Horowitz brief: overview → before →
    // design & production → installation → final result (day + night).
    story: [
      {
        kind: "intro",
        eyebrow: {
          es: "Señalización comercial · New Jersey, USA",
          en: "Storefront signage · New Jersey, USA",
        },
        title: {
          es: "Una fachada que se lee desde la calle.",
          en: "A storefront you can read from the street.",
        },
        lead: {
          es: "Transformación visual completa de la fachada de Horowitz Pharmacy: rediseño del aviso principal, visualización arquitectónica, producción en gran formato e instalación final — una identidad más limpia y profesional, legible a distancia de día y de noche.",
          en: "A complete storefront transformation for Horowitz Pharmacy: main-sign redesign, architectural visualization, large-format production, and final installation — a cleaner, more professional identity, readable from a distance by day and by night.",
        },
        services: {
          es: [
            "Identidad visual",
            "Rediseño de señalización",
            "Visualización arquitectónica",
            "Producción gran formato",
            "Planeación de instalación",
            "Implementación final",
          ],
          en: [
            "Visual identity enhancement",
            "Storefront signage redesign",
            "Architectural visualization",
            "Large-format production",
            "Installation planning",
            "Final implementation",
          ],
        },
      },
      {
        kind: "chapter",
        index: "01",
        eyebrow: { es: "Antes", en: "Before" },
        title: {
          es: "El punto de partida.",
          en: "The starting point.",
        },
        lead: {
          es: "El aviso anterior carecía de jerarquía, consistencia y legibilidad a distancia. En una calle de alto tráfico, la farmacia pasaba desapercibida tanto para peatones como para el tráfico vehicular.",
          en: "The previous signage lacked hierarchy, consistency, and long-distance readability. On a high-traffic street, the pharmacy went unnoticed by both pedestrians and incoming traffic.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/horowitz-pharmacy/story/before-street.jpg",
            span: 6,
            ratio: "16 / 9",
            caption: {
              es: "Fachada anterior · vista de calle",
              en: "Previous storefront · street view",
            },
          },
          {
            src: "/images/projects/horowitz-pharmacy/story/before-sign.jpg",
            span: 6,
            ratio: "16 / 9",
            caption: {
              es: "Aviso anterior · sin jerarquía visual",
              en: "Previous sign · no visual hierarchy",
            },
          },
        ],
      },
      {
        kind: "chapter",
        index: "02",
        eyebrow: { es: "Diseño y producción", en: "Design & production" },
        title: {
          es: "Azul marino y dorado, hechos para durar.",
          en: "Navy and gold, built to last.",
        },
        lead: {
          es: "La paleta azul marino y dorado comunica profesionalismo, confianza y posicionamiento premium. Tipografía, proporciones y contraste se optimizaron para lectura a varias distancias, y la producción en gran formato usó materiales exteriores de alta durabilidad compatibles con iluminación.",
          en: "The navy-blue and gold palette communicates professionalism, trust, and premium positioning. Typography, proportions, and contrast were optimized for reading at multiple distances, and large-format production used durable, illumination-compatible exterior materials.",
        },
      },
      {
        kind: "feature",
        src: "/images/projects/horowitz-pharmacy/story/production-banner.jpg",
        ratio: "16 / 9",
        caption: {
          es: "Impresión en gran formato · la lona extendida antes del montaje",
          en: "Large-format print · the banner laid out before mounting",
        },
      },
      {
        kind: "chapter",
        index: "03",
        eyebrow: { es: "Instalación", en: "Installation" },
        title: {
          es: "Remoción, preparación y montaje.",
          en: "Removal, preparation, and mounting.",
        },
        lead: {
          es: "La instalación comenzó con la remoción completa del aviso existente, seguida de la preparación estructural de la fachada, la integración eléctrica y el montaje alineado del nuevo sistema iluminado.",
          en: "Installation began with the complete removal of the existing sign, followed by structural preparation of the façade, electrical integration, and aligned mounting of the new illuminated system.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/horowitz-pharmacy/story/install-removal.jpg",
            span: 6,
            ratio: "4 / 3",
            caption: {
              es: "Inicio de la remoción · aviso anterior",
              en: "Removal begins · previous sign",
            },
          },
          {
            src: "/images/projects/horowitz-pharmacy/story/install-prep.jpg",
            span: 6,
            ratio: "4 / 3",
            caption: {
              es: "Preparación de fachada · estructura lista",
              en: "Façade preparation · structure ready",
            },
          },
        ],
      },
      {
        kind: "split",
        src: "/images/projects/horowitz-pharmacy/story/install-mounting.jpg",
        // Native 16:9 — the printed sign spans the full frame; a tighter ratio
        // would clip the "Rx" at its left edge.
        ratio: "16 / 9",
        flip: true,
        title: {
          es: "Integrado a la arquitectura.",
          en: "Integrated with the architecture.",
        },
        body: {
          es: "El nuevo aviso llegó impreso y ensamblado para montarse en sitio: alineación estructural, conexión eléctrica y ajustes finales para un acabado limpio, integrado a la arquitectura del edificio.",
          en: "The new sign arrived printed and assembled for on-site mounting: structural alignment, electrical hookup, and final adjustments for a clean finish fully integrated with the building's architecture.",
        },
        caption: {
          es: "El aviso nuevo en sitio · montaje final",
          en: "The new sign on site · final mounting",
        },
      },
      {
        kind: "chapter",
        index: "04",
        eyebrow: { es: "Resultado", en: "Result" },
        title: {
          es: "De día y de noche.",
          en: "By day and by night.",
        },
        lead: {
          es: "La nueva fachada transformó la percepción del negocio: lectura a larga distancia, presencia comercial más fuerte y un aviso iluminado que sostiene el impacto visual durante la noche.",
          en: "The new storefront transformed how the business reads: long-distance legibility, a stronger commercial presence, and an illuminated sign that holds its visual impact through the night.",
        },
      },
      {
        kind: "grid",
        images: [
          {
            src: "/images/projects/horowitz-pharmacy/story/result-dusk.jpg",
            span: 6,
            ratio: "3 / 4",
            caption: {
              es: "Resultado · al atardecer",
              en: "Result · at dusk",
            },
          },
          {
            src: "/images/projects/horowitz-pharmacy/story/result-night.jpg",
            span: 6,
            ratio: "3 / 4",
            caption: {
              es: "Aviso iluminado · de noche",
              en: "Illuminated sign · at night",
            },
          },
        ],
      },
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
      cover: "Aviso iluminado · al atardecer",
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
      cover: "Illuminated sign · at dusk",
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
    slug: "gobernacion",
    number: "PRJ—08",
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
