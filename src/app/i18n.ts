import { signal, computed } from '@angular/core';

export type Lang = 'en' | 'es';

export interface ProjectData {
  id: string;
  title: string;
  category: 'fullstack' | 'ai-cloud' | 'systems';
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  metrics?: string[];
  liveUrl?: string;
  repoUrl?: string;
  badge?: string;
  featured: boolean;
  icon: string;
}

export interface SkillCategoryData {
  name: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export interface ExperienceData {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface RecognitionData {
  title: string;
  entity: string;
  date: string;
  icon: string;
}

export interface TranslationSchema {
  nav: {
    overview: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    status: string;
    titleMain: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    exploreBtn: string;
    contactBtn: string;
  };
  projects: {
    screenTag: string;
    title: string;
    all: string;
    fullstack: string;
    aiCloud: string;
    systems: string;
    viewArch: string;
    liveDemo: string;
    repo: string;
  };
  skills: {
    screenTag: string;
    title: string;
  };
  experience: {
    screenTag: string;
    title: string;
    honorsTitle: string;
  };
  contact: {
    screenTag: string;
    title: string;
    desc: string;
    sendEmail: string;
  };
  modal: {
    sysHighlights: string;
    techStack: string;
    repo: string;
    liveDemo: string;
    close: string;
  };
  projectsList: ProjectData[];
  skillsList: SkillCategoryData[];
  experiencesList: ExperienceData[];
  recognitionsList: RecognitionData[];
}

export const TRANSLATIONS: Record<Lang, TranslationSchema> = {
  en: {
    nav: {
      overview: 'Overview',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      status: 'SYS_STATUS: ONLINE // ACCEPTING FREELANCE PROJECTS',
      titleMain: 'Full-Stack Software Consultant',
      titleHighlight: 'Solving Complex Problems',
      titleSuffix: 'Through Scalable Systems',
      subtitle: "I build high-performance, conversion-focused web applications and cloud architectures. Whether you need a highly scalable event-driven backend or an AI-integrated business tool, I deliver robust technical solutions that drive business results.",
      exploreBtn: 'View Featured Work',
      contactBtn: 'Let\'s Discuss Your Project'
    },
    projects: {
      screenTag: '// PORTFOLIO',
      title: 'Selected Works & Systems',
      all: 'All Systems',
      fullstack: 'Full-Stack',
      aiCloud: 'AI & Cloud',
      systems: 'Low-Level & Rust',
      viewArch: '// View Architecture',
      liveDemo: 'Live Demo',
      repo: 'Repository'
    },
    skills: {
      screenTag: '// SERVICES & EXPERTISE',
      title: 'Consulting Services'
    },
    experience: {
      screenTag: '// PROFESSIONAL EXPERIENCE',
      title: 'Experience & Track Record',
      honorsTitle: 'Industry Recognitions'
    },
    contact: {
      screenTag: '// CONSULTATION',
      title: "Have a complex project in mind?",
      desc: "Let's discuss how we can bring it to life on time and within budget. I'm currently accepting new freelance clients.",
      sendEmail: 'Send Direct Email'
    },
    modal: {
      sysHighlights: '// SYSTEM HIGHLIGHTS:',
      techStack: 'TECH STACK:',
      repo: 'Source Code',
      liveDemo: 'Visit Live Site',
      close: 'Close Window'
    },
    projectsList: [
      {
        id: 'kuantum-educa',
        title: 'Kuantum Educa Platform',
        category: 'fullstack',
        featured: true,
        badge: 'Flagship Full-Stack System',
        icon: 'fa-graduation-cap',
        liveUrl: 'https://kuantumeduca.com',
        shortDesc: 'Architected a highly scalable educational platform processing thousands of simultaneous exams with zero downtime, integrating AI for automated career matching.',
        fullDesc: 'Delivered an end-to-end cloud solution for a major educational initiative. Built an event-driven backend (Firebase/PubSub) that processes massive exam analytics asynchronously, ensuring zero UI latency for end-users. Additionally, integrated a RAG-based AI service (FastAPI/pgvector) to provide automated, highly personalized career guidance.',
        techStack: ['Angular', 'Firebase Cloud Functions', 'Pub/Sub', 'FastAPI', 'PostgreSQL (pgvector)', 'Gemini AI', 'PrimeNG', 'TailwindCSS'],
        metrics: ['Asynchronous event processing for 1000s of exam results', '200+ academic program RAG embeddings', '5-8s AI latency handled via slick Async UI']
      },
      {
        id: 'sysmon-3ds',
        title: 'SysMon - 3DS PC Monitor & Macro Pad',
        category: 'systems',
        featured: true,
        badge: 'Rust & C Homebrew',
        icon: 'fa-gamepad',
        repoUrl: 'https://github.com/Just-a-Spider/SysMon',
        shortDesc: 'Turns a Nintendo 3DS into a wireless live PC telemetry display, Pomodoro tracker, and tap-to-execute Linux macro controller.',
        fullDesc: 'Built the host telemetry server in Rust (packaged natively as Linux RPM via cargo-generate-rpm) and the handheld client in C using devkitARM and libctru for Nintendo 3DS homebrew. Features real-time WebSockets telemetry streams, process manager (tap to kill), volume/media controls, and custom macro injection.',
        techStack: ['Rust', 'C (devkitARM / libctru)', 'WebSockets', 'Linux RPM', 'HTTP API'],
        metrics: ['Low latency Wi-Fi telemetry stream', 'Compiled native .cia for 3DS & RPM for Linux']
      },
      {
        id: 'ai-class-assistant',
        title: 'AI Desktop Assistant for Class',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-robot',
        repoUrl: 'https://github.com/Just-a-Spider/AI_Assistant_For_Class',
        shortDesc: 'PyQt6 desktop assistant utilizing natural language to automate system actions, open applications, and query OpenAI models.',
        fullDesc: 'Personal assistant tool designed to streamline classroom workflows. Features browser integration, quick app launcher, and custom prompt execution via local desktop hotkeys.',
        techStack: ['Python', 'PyQt6', 'OpenAI API', 'System Automation']
      },
      {
        id: 'papeletas-cv',
        title: 'Automated Ticket System (YOLO Vision)',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-camera',
        repoUrl: 'https://github.com/Just-a-Spider/QR-Plates-Tickets',
        shortDesc: 'Computer Vision traffic ticketing system with real-time license plate detection using YOLO model and PyQt6 GUI.',
        fullDesc: 'Trained YOLO vision model to detect vehicle license plates and extract alphanumeric codes, generating automated digital infractions.',
        techStack: ['Python', 'YOLO Vision', 'PyQt6', 'OpenCV']
      },
      {
        id: 'eventos-udh',
        title: 'EventosUDH Management Platform',
        category: 'fullstack',
        featured: false,
        icon: 'fa-calendar-check',
        repoUrl: 'https://github.com/Just-a-Spider/EventosUDH',
        shortDesc: 'Academic event & speaker management system for university faculty coordinators and student registrations.',
        fullDesc: 'Designed to streamline conference speaker bookings, attendance tracking, and digital certificate issuing.',
        techStack: ['Django Rest Framework', 'Angular', 'PostgreSQL', 'Python']
      },
      {
        id: 'gatilin-digital',
        title: 'Gatilín Digital Cultural Tracker',
        category: 'fullstack',
        featured: false,
        badge: 'Municipal Recognition',
        icon: 'fa-map-marked-alt',
        shortDesc: 'Real-time location and documentation platform for traditional Cofradías during Festival de Negritos de Huánuco 2024.',
        fullDesc: 'Built tracking mobile-friendly app and historical documentation page. Recognized by the District Municipality of Amarilis for cultural innovation.',
        techStack: ['Angular', 'Django Rest Framework', 'PostgreSQL', 'Heroku']
      }
    ],
    skillsList: [
      {
        name: 'Backend & Databases',
        icon: 'fa-server',
        skills: [
          { name: 'Django & DRF', level: 'Expert', highlight: true },
          { name: 'PostgreSQL (pgvector)', level: 'Advanced', highlight: true },
          { name: 'Firebase (Functions, Data Connect)', level: 'Expert', highlight: true },
          { name: 'FastAPI (Python)', level: 'Advanced' },
          { name: 'NestJS & Node.js', level: 'Intermediate' }
        ]
      },
      {
        name: 'Frontend Engineering',
        icon: 'fa-code',
        skills: [
          { name: 'Angular (Signals, RxJS)', level: 'Expert', highlight: true },
          { name: 'TypeScript & JavaScript', level: 'Expert', highlight: true },
          { name: 'HTML5 & Modern CSS3', level: 'Expert' },
          { name: 'PrimeNG & TailwindCSS', level: 'Advanced' }
        ]
      },
      {
        name: 'Cloud, Systems & AI',
        icon: 'fa-microchip',
        skills: [
          { name: 'Rust (Cargo RPM)', level: 'Intermediate', highlight: true },
          { name: 'RAG & Vector Search (HNSW)', level: 'Advanced', highlight: true },
          { name: 'GCP (Cloud Run, Vertex AI)', level: 'Advanced' },
          { name: 'Ollama & Local LLMs', level: 'Advanced' },
          { name: 'Docker & Hetzner Cloud', level: 'Advanced' }
        ]
      }
    ],
    experiencesList: [
      {
        role: 'Full-Stack Developer & Tech Lead',
        company: 'Kuantum Innovations',
        period: 'Feb 2025 - Jun 2026',
        location: 'Peru',
        highlights: [
          'Sole architect for Kuantum Educa platform handling large-scale student admissions exam simulations.',
          'Engineered event-driven cloud architecture with Firebase Cloud Functions & Pub/Sub.',
          'Created Angular state-driven management dashboard using Signals and PrimeNG.',
          'Implemented semantic RAG career matching connecting student RIASEC profiles to 200+ academic programs using FastAPI & pgvector on Google Cloud Run.'
        ],
        stack: ['Angular', 'Firebase', 'FastAPI', 'PostgreSQL', 'Gemini AI', 'GCP']
      },
      {
        role: 'Full-Stack Developer & DevOps',
        company: 'Comienza Pro E-Learning',
        period: 'Aug 2025 - Nov 2025',
        location: 'Peru',
        highlights: [
          'Provisioned and maintained Moodle e-learning infrastructure on Hetzner Cloud for 9 specialized courses.',
          'Customized themes, user roles, and optimized database query execution.'
        ],
        stack: ['Moodle', 'Hetzner Cloud', 'PHP', 'MySQL', 'Linux']
      },
      {
        role: 'Full-Stack Web Developer',
        company: 'Private Client',
        period: 'Sep 2024 - Dec 2024',
        location: 'Huánuco, Peru',
        highlights: [
          'Designed and implemented a municipal construction licensing management portal.',
          'Built full stack with DRF backend, Angular frontend, and PostgreSQL.'
        ],
        stack: ['Django Rest Framework', 'Angular', 'PostgreSQL']
      }
    ],
    recognitionsList: [
      { title: '1st Place - Programming Contest', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-trophy' },
      { title: '1st Place - Pitch Day 2023 Innovation', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-award' },
      { title: 'Official Recognition for Gatilín Digital', entity: 'District Municipality of Amarilis', date: 'Feb 2024', icon: 'fa-certificate' }
    ]
  },
  es: {
    nav: {
      overview: 'Visión General',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      status: 'SYS_STATUS: EN LÍNEA // ACEPTANDO PROYECTOS FREELANCE',
      titleMain: 'Consultor de Software Full-Stack',
      titleHighlight: 'Resolviendo Problemas',
      titleSuffix: 'con Sistemas Escalables',
      subtitle: 'Construyo aplicaciones web y arquitecturas en la nube de alto rendimiento. Ya sea que necesites un backend escalable orientado a eventos o una herramienta empresarial integrada con IA, entrego soluciones técnicas robustas que impulsan resultados de negocio.',
      exploreBtn: 'Ver Trabajos Destacados',
      contactBtn: 'Hablemos de tu Proyecto'
    },
    projects: {
      screenTag: '// PORTAFOLIO',
      title: 'Proyectos y Sistemas Destacados',
      all: 'Todos los Sistemas',
      fullstack: 'Full-Stack',
      aiCloud: 'IA y Nube',
      systems: 'Bajo Nivel y Rust',
      viewArch: '// Ver Arquitectura',
      liveDemo: 'Sitio en Vivo',
      repo: 'Repositorio'
    },
    skills: {
      screenTag: '// SERVICIOS Y EXPERIENCIA',
      title: 'Servicios de Consultoría'
    },
    experience: {
      screenTag: '// EXPERIENCIA PROFESIONAL',
      title: 'Experiencia y Trayectoria',
      honorsTitle: 'Reconocimientos'
    },
    contact: {
      screenTag: '// CONSULTORÍA',
      title: '¿Tienes un proyecto complejo en mente?',
      desc: 'Hablemos sobre cómo podemos hacerlo realidad a tiempo y dentro del presupuesto. Actualmente estoy aceptando nuevos clientes freelance.',
      sendEmail: 'Enviar Correo Directo'
    },
    modal: {
      sysHighlights: '// ASPECTOS DESTACADOS DEL SISTEMA:',
      techStack: 'TECNOLOGÍAS:',
      repo: 'Código Fuente',
      liveDemo: 'Visitar Sitio en Vivo',
      close: 'Cerrar Ventana'
    },
    projectsList: [
      {
        id: 'kuantum-educa',
        title: 'Plataforma Kuantum Educa',
        category: 'fullstack',
        featured: true,
        badge: 'Sistema Full-Stack Principal',
        icon: 'fa-graduation-cap',
        liveUrl: 'https://kuantumeduca.com',
        shortDesc: 'Arquitecté una plataforma educativa de alta escalabilidad que procesa miles de exámenes simultáneos sin interrupciones, integrando IA para orientación vocacional.',
        fullDesc: 'Entregué una solución integral en la nube para una importante iniciativa educativa. Desarrollé un backend orientado a eventos (Firebase/PubSub) que procesa análisis masivos de exámenes asíncronamente, asegurando cero latencia para los usuarios. Además, integré un servicio de IA basado en RAG (FastAPI/pgvector) para brindar orientación profesional automatizada y altamente personalizada.',
        techStack: ['Angular', 'Firebase Cloud Functions', 'Pub/Sub', 'FastAPI', 'PostgreSQL (pgvector)', 'Gemini AI', 'PrimeNG', 'TailwindCSS'],
        metrics: ['Procesamiento asíncrono de eventos para 1000s de exámenes', 'Embeddings RAG para +200 programas académicos', 'Gestión fluida de latencia de IA de 5-8s en la interfaz']
      },
      {
        id: 'sysmon-3ds',
        title: 'SysMon - Monitor PC y Macro Pad en 3DS',
        category: 'systems',
        featured: true,
        badge: 'Homebrew en Rust y C',
        icon: 'fa-gamepad',
        repoUrl: 'https://github.com/Just-a-Spider/SysMon',
        shortDesc: 'Convierte una Nintendo 3DS en un monitor inalámbrico de telemetría de PC en tiempo real, rastreador Pomodoro y controlador de macros en Linux.',
        fullDesc: 'Desarrollé el servidor de telemetría anfitrión en Rust (empaquetado nativamente como RPM para Linux vía cargo-generate-rpm) y el cliente en C utilizando devkitARM y libctru para homebrew de Nintendo 3DS. Incluye transmisión WebSockets en tiempo real, gestor de procesos (tocar para cerrar), controles de volumen y ejecución de macros.',
        techStack: ['Rust', 'C (devkitARM / libctru)', 'WebSockets', 'RPM Linux', 'HTTP API'],
        metrics: ['Telemetría Wi-Fi de ultra baja latencia', 'Compilado ejecutable nativo .cia para 3DS y RPM para Linux']
      },
      {
        id: 'ai-class-assistant',
        title: 'Asistente de IA para Clases',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-robot',
        repoUrl: 'https://github.com/Just-a-Spider/AI_Assistant_For_Class',
        shortDesc: 'Asistente de escritorio en PyQt6 que utiliza lenguaje natural para automatizar acciones del sistema, abrir aplicaciones y consultar modelos OpenAI.',
        fullDesc: 'Herramienta de asistencia personal diseñada para agilizar flujos de trabajo en clases. Incluye integración con el navegador, lanzador rápido de apps y ejecución de prompts vía atajos globales.',
        techStack: ['Python', 'PyQt6', 'OpenAI API', 'Automatización de Sistema']
      },
      {
        id: 'papeletas-cv',
        title: 'Sistema de Papeletas Automáticas (Visión YOLO)',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-camera',
        repoUrl: 'https://github.com/Just-a-Spider/QR-Plates-Tickets',
        shortDesc: 'Sistema de fotopapeletas de tránsito con detección de placas vehiculares en tiempo real usando modelo de visión YOLO y GUI en PyQt6.',
        fullDesc: 'Entrenamiento de modelo de visión YOLO para detectar placas de vehículos y extraer código alfanumérico, generando infracciones digitales automáticas.',
        techStack: ['Python', 'Visión YOLO', 'PyQt6', 'OpenCV']
      },
      {
        id: 'eventos-udh',
        title: 'Plataforma EventosUDH',
        category: 'fullstack',
        featured: false,
        icon: 'fa-calendar-check',
        repoUrl: 'https://github.com/Just-a-Spider/EventosUDH',
        shortDesc: 'Sistema de gestión de eventos académicos y ponentes para coordinadores de facultad e inscripciones de estudiantes.',
        fullDesc: 'Diseñado para optimizar la agenda de ponentes, control de asistencia y emisión digital de certificados.',
        techStack: ['Django Rest Framework', 'Angular', 'PostgreSQL', 'Python']
      },
      {
        id: 'gatilin-digital',
        title: 'Rastreador Cultural Gatilín Digital',
        category: 'fullstack',
        featured: false,
        badge: 'Reconocimiento Municipal',
        icon: 'fa-map-marked-alt',
        shortDesc: 'Plataforma de documentación y ubicación en tiempo real de Cofradías durante el Festival de Negritos de Huánuco 2024.',
        fullDesc: 'Desarrollo de aplicación web móvil de rastreo y página de documentación histórica. Reconocido por la Municipalidad Distrital de Amarilis por innovación cultural.',
        techStack: ['Angular', 'Django Rest Framework', 'PostgreSQL', 'Heroku']
      }
    ],
    skillsList: [
      {
        name: 'Backend y Bases de Datos',
        icon: 'fa-server',
        skills: [
          { name: 'Django & DRF', level: 'Experto', highlight: true },
          { name: 'PostgreSQL (pgvector)', level: 'Avanzado', highlight: true },
          { name: 'Firebase (Functions, Data Connect)', level: 'Experto', highlight: true },
          { name: 'FastAPI (Python)', level: 'Avanzado' },
          { name: 'NestJS & Node.js', level: 'Intermedio' }
        ]
      },
      {
        name: 'Ingeniería Frontend',
        icon: 'fa-code',
        skills: [
          { name: 'Angular (Signals, RxJS)', level: 'Experto', highlight: true },
          { name: 'TypeScript & JavaScript', level: 'Experto', highlight: true },
          { name: 'HTML5 & Modern CSS3', level: 'Experto' },
          { name: 'PrimeNG & TailwindCSS', level: 'Avanzado' }
        ]
      },
      {
        name: 'Nube, Sistemas e IA',
        icon: 'fa-microchip',
        skills: [
          { name: 'Rust (Cargo RPM)', level: 'Intermedio', highlight: true },
          { name: 'RAG & Vector Search (HNSW)', level: 'Avanzado', highlight: true },
          { name: 'GCP (Cloud Run, Vertex AI)', level: 'Avanzado' },
          { name: 'Ollama & Local LLMs', level: 'Avanzado' },
          { name: 'Docker & Hetzner Cloud', level: 'Avanzado' }
        ]
      }
    ],
    experiencesList: [
      {
        role: 'Desarrollador Full-Stack y Tech Lead',
        company: 'Kuantum Innovations',
        period: 'Feb 2025 - Jun 2026',
        location: 'Perú',
        highlights: [
          'Arquitecto único de la plataforma Kuantum Educa para procesamiento masivo de simulacros de admisión.',
          'Ingeniería de arquitectura en la nube orientada a eventos con Firebase Cloud Functions y Pub/Sub.',
          'Creación de panel administrativo responsivo en Angular usando Signals y PrimeNG.',
          'Implementación de orientación vocacional semántica RAG conectando perfiles RIASEC a 200+ carreras universitarias usando FastAPI y pgvector en Google Cloud Run.'
        ],
        stack: ['Angular', 'Firebase', 'FastAPI', 'PostgreSQL', 'Gemini AI', 'GCP']
      },
      {
        role: 'Desarrollador Full-Stack y DevOps',
        company: 'Comienza Pro E-Learning',
        period: 'Ago 2025 - Nov 2025',
        location: 'Perú',
        highlights: [
          'Aprovisionamiento y mantenimiento de infraestructura e-learning en Moodle sobre Hetzner Cloud para 9 cursos especializados.',
          'Personalización de temas, roles de usuario y optimización de consultas a la base de datos.'
        ],
        stack: ['Moodle', 'Hetzner Cloud', 'PHP', 'MySQL', 'Linux']
      },
      {
        role: 'Desarrollador Web Full-Stack',
        company: 'Cliente Privado',
        period: 'Set 2024 - Dic 2024',
        location: 'Huánuco, Perú',
        highlights: [
          'Diseño e implementación de portal de solicitudes y gestión de licencias de construcción municipal.',
          'Desarrollo full-stack con backend DRF, frontend en Angular y PostgreSQL.'
        ],
        stack: ['Django Rest Framework', 'Angular', 'PostgreSQL']
      }
    ],
    recognitionsList: [
      { title: '1er Lugar - Concurso de Programación', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-trophy' },
      { title: '1er Lugar - Pitch Day 2023 Innovación', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-award' },
      { title: 'Reconocimiento Oficial por Gatilín Digital', entity: 'Municipalidad Distrital de Amarilis', date: 'Feb 2024', icon: 'fa-certificate' }
    ]
  }
};

export class TranslationService {
  readonly currentLang = signal<Lang>('en');
  readonly t = computed(() => TRANSLATIONS[this.currentLang()]);

  toggleLang() {
    this.currentLang.update(l => l === 'en' ? 'es' : 'en');
  }

  setLang(lang: Lang) {
    this.currentLang.set(lang);
  }
}
