import { signal } from '@angular/core';

export type Lang = 'en' | 'es';

export interface ProjectData {
  id: string;
  title: string;
  category: 'fullstack' | 'systems' | 'ai-cloud';
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  metrics?: string[];
  liveUrl?: string;
  repoUrl?: string;
  badge?: string;
  featured: boolean;
  icon: string;
  architectureDetails?: {
    flow: string[];
    keyDecisions: string[];
  };
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

export interface AboutPillar {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutData {
  tag: string;
  title: string;
  subtitle: string;
  pillars: AboutPillar[];
}

export interface TranslationSchema {
  nav: {
    overview: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    viewProjectsBtn: string;
    downloadCvBtn: string;
    copyEmailBtn: string;
    copiedToast: string;
  };
  about: AboutData;
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    all: string;
    fullstack: string;
    systems: string;
    aiCloud: string;
    featuredBadge: string;
    viewArch: string;
    liveDemo: string;
    repo: string;
    keyHighlights: string;
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
  };
  experience: {
    tag: string;
    title: string;
    subtitle: string;
    honorsTitle: string;
    educationTitle: string;
    educationDegree: string;
    educationSchool: string;
    educationPeriod: string;
    educationHonors: string;
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    emailLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    availabilityValue: string;
    targetRolesLabel: string;
    targetRolesValue: string;
    copyEmail: string;
    sendEmail: string;
  };
  modal: {
    architectureTitle: string;
    keyDecisions: string;
    techStack: string;
    metrics: string;
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
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      downloadCv: 'Resume (PDF)'
    },
    hero: {
      badge: 'OPEN TO WORK · JUNIOR FULL-STACK DEVELOPER',
      titleMain: 'Building Reliable',
      titleHighlight: 'Full-Stack Web Applications',
      titleSuffix: '& Scalable Cloud Backends',
      subtitle: 'Junior Full-Stack Developer with 1.5+ years of practical experience developing reactive web applications with Angular, robust REST APIs with Python (FastAPI, Django), and structured data systems with PostgreSQL. Final-year Systems Engineering student at Universidad de Huánuco (Upper Third).',
      viewProjectsBtn: 'Explore Work',
      downloadCvBtn: 'Download CV (PDF)',
      copyEmailBtn: 'Copy Email',
      copiedToast: 'Email copied to clipboard!'
    },
    about: {
      tag: 'ABOUT ME',
      title: 'Professional Profile & Engineering Strengths',
      subtitle: 'A disciplined approach to software development focused on pragmatic architectures, clean code, and rapid technical adaptability.',
      pillars: [
        {
          icon: 'fa-layer-group',
          title: 'Full-Stack Web Development',
          desc: 'End-to-end development of web applications: designing modular REST APIs with FastAPI and Django, coupled with clean, reactive frontends using Angular (Signals) and TypeScript.'
        },
        {
          icon: 'fa-cloud',
          title: 'Data & Cloud Fundamentals',
          desc: 'Hands-on experience structuring PostgreSQL databases, containerizing applications with Docker, deploying microservices to Google Cloud Run, and leveraging Firebase Pub/Sub for async tasks.'
        },
        {
          icon: 'fa-brain',
          title: 'Fast Learning & Problem Solving',
          desc: 'Demonstrated ability to pick up new frameworks, libraries, and protocols rapidly. 1st place winner in regional inter-university programming competitions.'
        },
        {
          icon: 'fa-users-cog',
          title: 'Accountability & Engineering Rigor',
          desc: 'Taking full ownership from requirements gathering to testing and deployment. Curious about system internals, networking, and low-level computer science concepts.'
        }
      ]
    },
    projects: {
      tag: 'PORTFOLIO',
      title: 'Featured Projects & Systems',
      subtitle: 'Production web platforms, low-level systems explorations, and automation tools built with high technical rigor.',
      all: 'All Projects',
      fullstack: 'Full-Stack & Web',
      systems: 'Systems & Tools',
      aiCloud: 'AI & Automation',
      featuredBadge: 'Featured Project',
      viewArch: 'View Details',
      liveDemo: 'Live Application',
      repo: 'Source Code',
      keyHighlights: 'Key Engineering Highlights'
    },
    skills: {
      tag: 'TECHNICAL SKILLS',
      title: 'Skills & Technology Stack',
      subtitle: 'Grounded technical capabilities across modern web development, cloud services, and software engineering tools.',
    },
    experience: {
      tag: 'TRAJECTORY',
      title: 'Work Experience & Education',
      subtitle: '1.5+ years of practical software development experience and continuous academic excellence.',
      honorsTitle: 'Honors & Recognitions',
      educationTitle: 'Education',
      educationDegree: 'Bachelor of Science in Systems & Informatics Engineering',
      educationSchool: 'Universidad de Huánuco (UDH) · Huánuco, Peru',
      educationPeriod: '2021 – Dec 2026 (10th Cycle / Graduating)',
      educationHonors: 'Academic Merit (Upper Third / Tercio Superior)'
    },
    contact: {
      tag: 'GET IN TOUCH',
      title: "Let's Build Something Together",
      desc: 'Available for Junior Full-Stack Developer, Backend Engineer, or Web Developer roles (Remote across Americas/Global or Hybrid in Peru).',
      emailLabel: 'Direct Email',
      locationLabel: 'Location & Timezone',
      availabilityLabel: 'Status',
      availabilityValue: 'Open to Opportunities (Immediate)',
      targetRolesLabel: 'Target Roles',
      targetRolesValue: 'Junior Full-Stack / Backend / Web Engineer',
      copyEmail: 'Copy Email',
      sendEmail: 'Send Email'
    },
    modal: {
      architectureTitle: 'Architecture & Technical Overview',
      keyDecisions: 'Key Engineering Highlights',
      techStack: 'Technologies Used',
      metrics: 'Outcomes & Metrics',
      repo: 'View Repository',
      liveDemo: 'Visit Live Project',
      close: 'Close'
    },
    projectsList: [
      {
        id: 'kuantum-educa',
        title: 'Kuantum Educa Platform',
        category: 'fullstack',
        subtitle: 'Full-Stack Exam Prep & Simulation Platform',
        shortDesc: 'Production web platform built with Angular 19, FastAPI on Google Cloud Run, and Firebase Pub/Sub for asynchronous simulation handling.',
        fullDesc: 'Sole architect and developer of Kuantum Educa from scratch. Built a decoupled system where student exam submissions are queued via Firebase Pub/Sub for reliable asynchronous aggregation during traffic spikes. Developed a Dockerized FastAPI backend deployed on Google Cloud Run for transaction and user management. Prototyped and tested a semantic vocational guidance module using PostgreSQL pgvector in staging environments.',
        techStack: ['Angular 19', 'Signals', 'FastAPI (Python)', 'Firebase Pub/Sub', 'PostgreSQL (pgvector)', 'Docker', 'Google Cloud Run', 'PrimeNG'],
        metrics: [
          'Asynchronous simulation aggregation via Firebase Pub/Sub',
          'FastAPI microservice containerized with Docker on Google Cloud Run',
          'Prototyped & tested pgvector career matching in staging',
          'Reactive administrative UI built with Angular 19 Signals & PrimeNG'
        ],
        liveUrl: 'https://kuantum.pe',
        badge: 'Flagship Web Platform',
        featured: true,
        icon: 'fa-graduation-cap',
        architectureDetails: {
          flow: [
            'Student completes multi-topic admission simulation in Angular 19 frontend',
            'Submission payload pushed to Firebase Pub/Sub asynchronous queue',
            'Cloud Functions worker aggregates scores, percentile ranks, and topic weaknesses',
            'FastAPI microservice on Google Cloud Run handles user attempts and PostgreSQL storage',
            'Administrative dashboard renders real-time analytics with server-side pagination'
          ],
          keyDecisions: [
            'Asynchronous Pub/Sub ingestion ensures zero UI freezing during concurrent test submissions',
            'FastAPI + Cloud Run keeps operational costs low with fast autoscaling',
            'Angular Signals provide fine-grained reactivity and minimal change detection overhead',
            'Vocational matching tested with PostgreSQL pgvector embeddings in staging'
          ]
        }
      },
      {
        id: 'sysmon-3ds',
        title: 'SysMon — 3DS Systems Companion',
        category: 'systems',
        subtitle: 'Low-Level PC Telemetry & Touch Controller via 3DS',
        shortDesc: 'A personal systems programming project converting a Nintendo 3DS into a secondary hardware monitor and macro pad over Wi-Fi using Rust (Tokio) and C.',
        fullDesc: 'A personal project built to explore low-level systems programming, networking, and Linux kernel drivers. Developed a multi-threaded Rust server with Tokio to gather live hardware stats and virtualize input events via /dev/uinput. Wrote a low-overhead C client for the 3DS using devkitARM with zero-heap TCP packet parsing.',
        techStack: ['Rust 2024', 'Tokio', 'C (devkitARM)', 'evdev / uinput', 'sysinfo', 'Linux RPM'],
        metrics: [
          'Sub-millisecond local network response time (<1ms)',
          'Zero-heap string and packet parsing in C (libctru)',
          'Linux kernel input injection via /dev/uinput and evdev',
          'Packaged as a native Fedora/RHEL RPM package'
        ],
        repoUrl: 'https://github.com/Just-a-Spider/SysMon',
        badge: 'Personal Systems Project',
        featured: true,
        icon: 'fa-gamepad'
      },
      {
        id: 'papeletas-automaticas',
        title: 'Papeletas Automáticas',
        category: 'ai-cloud',
        subtitle: 'Automated Digital Traffic Ticket & OCR System',
        shortDesc: 'Computer vision proof of concept for license plate detection and automated traffic ticketing using Python, YOLOv5, and PyQt6.',
        fullDesc: 'Developed a proof of concept for an automated digital traffic ticket system. Utilized YOLOv5 for vehicle and license plate bounding box detection, integrated EasyOCR for character recognition, and built a desktop operator interface with PyQt6.',
        techStack: ['Python', 'YOLOv5', 'PyQt6', 'EasyOCR', 'OpenCV', 'SQLite'],
        metrics: [
          'Integrated YOLOv5 object detection with EasyOCR optical character extraction',
          'Desktop operator GUI built with PyQt6 and SQLite logging',
          'Automated proof-of-concept pipeline for vehicle infraction capture'
        ],
        repoUrl: 'https://github.com/Just-a-Spider/papeletas_automaticas',
        badge: 'Computer Vision POC',
        featured: false,
        icon: 'fa-camera'
      },
      {
        id: 'ai-assistant-class',
        title: 'AI Assistant For Class',
        category: 'ai-cloud',
        subtitle: 'Desktop Speech Transcription & AI Assistant',
        shortDesc: 'Local desktop productivity assistant with OpenAI Whisper integration and non-blocking audio capture built with PyQt6.',
        fullDesc: 'Built a local desktop utility to capture lecture audio and provide AI-assisted summaries. Integrated OpenAI Whisper for speech transcription using multi-threaded PyQt6 workers to prevent UI lockups, with global hotkey support via pynput.',
        techStack: ['Python', 'PyQt6', 'OpenAI API', 'Whisper', 'pynput', 'Threading'],
        metrics: [
          'Multi-threaded audio ingestion to keep the desktop interface responsive',
          'OpenAI Whisper speech-to-text integration',
          'Global keyboard hotkey shortcuts via pynput'
        ],
        repoUrl: 'https://github.com/Just-a-Spider/AI_Assistant_For_Class',
        badge: 'Desktop Tool',
        featured: false,
        icon: 'fa-microphone'
      },
      {
        id: 'gatilin-digital',
        title: 'Gatilín Digital POS & Billing',
        category: 'fullstack',
        subtitle: 'Commercial Billing & Inventory Web Platform',
        shortDesc: 'Award-winning web platform for inventory management and automated electronic billing using Django REST Framework and Angular.',
        fullDesc: 'Engineered a web application for local commercial inventory tracking, electronic ticket generation, and automated PDF receipt generation. Built with Django REST Framework and Angular, deployed on Heroku with PostgreSQL.',
        techStack: ['Django REST Framework', 'Angular 16', 'PostgreSQL', 'Heroku', 'TypeScript'],
        metrics: [
          'Awarded 1st Place in Amarilis Municipal Innovation Competition',
          'Electronic PDF ticket and receipt generation',
          'Real-time inventory and sales tracking'
        ],
        badge: 'Municipal Award Winner',
        featured: false,
        icon: 'fa-cash-register'
      },
      {
        id: 'estructura-datos',
        title: 'Estructura de Datos Platform',
        category: 'fullstack',
        subtitle: 'Academic Code Execution & Evaluation Platform',
        shortDesc: 'Web platform for academic code evaluation with sandboxed C++ and Python execution environments built with Django.',
        fullDesc: 'Developed a comprehensive web platform for computer science coursework. Included a custom code submission module with sandboxed container execution for C++ and Python scripts to automate grading and test-case verification.',
        techStack: ['Django', 'PostgreSQL', 'Docker', 'Python', 'C++', 'Bootstrap'],
        metrics: [
          'Sandboxed execution environment for student code evaluation',
          'Supports automated test-case evaluation for C++ and Python',
          'Utilized across university algorithm coursework'
        ],
        badge: 'Academic Platform',
        featured: false,
        icon: 'fa-code-branch'
      }
    ],
    skillsList: [
      {
        name: 'Core Web & Backend',
        icon: 'fa-server',
        skills: [
          { name: 'Python (FastAPI, Django, DRF)', level: 'Advanced / Daily', highlight: true },
          { name: 'Angular (Signals, TypeScript)', level: 'Advanced / Daily', highlight: true },
          { name: 'PostgreSQL & Relational DBs', level: 'Intermediate / Daily', highlight: true },
          { name: 'RESTful API Architecture', level: 'Intermediate / Daily', highlight: true },
          { name: 'HTML5, CSS3 & TailwindCSS', level: 'Intermediate / Daily' }
        ]
      },
      {
        name: 'Cloud, DevOps & Tools',
        icon: 'fa-cloud',
        skills: [
          { name: 'Docker & Containerization', level: 'Intermediate', highlight: true },
          { name: 'Google Cloud Run & GCP', level: 'Intermediate', highlight: true },
          { name: 'Firebase (Pub/Sub, Functions)', level: 'Intermediate' },
          { name: 'Linux Server Administration', level: 'Intermediate' },
          { name: 'Git, GitHub & Version Control', level: 'Daily' }
        ]
      },
      {
        name: 'Systems & Technical Explorations',
        icon: 'fa-microchip',
        skills: [
          { name: 'Rust (axum, tokio, uinput)', level: 'Personal Projects', highlight: true },
          { name: 'C & Embedded / devkitARM', level: 'Personal Projects' },
          { name: 'Linux Kernel Input (/dev/uinput)', level: 'Personal Projects' },
          { name: 'TCP Socket Networking', level: 'Personal Projects' }
        ]
      },
      {
        name: 'Applied AI & Practical Tools',
        icon: 'fa-robot',
        skills: [
          { name: 'OpenAI API & Local Whisper', level: 'Practical / Tooling', highlight: true },
          { name: 'pgvector & RAG Concepts', level: 'Staging / Research' },
          { name: 'Computer Vision (YOLOv5, OpenCV)', level: 'Foundational / POC' },
          { name: 'PyQt6 Desktop Tooling', level: 'Intermediate' }
        ]
      }
    ],
    experiencesList: [
      {
        role: 'Full-Stack Developer',
        company: 'Kuantum Innovation',
        period: 'Feb 2025 – Jun 2026',
        location: 'Huánuco, Peru (Remote)',
        highlights: [
          'Sole architect and developer of Kuantum Educa from scratch, designing the complete data schema and API contracts.',
          'Built an event-driven backend using Firebase Cloud Functions and Pub/Sub to asynchronously process thousands of concurrent simulation attempts without blocking the user interface.',
          'Developed and deployed a dedicated FastAPI microservice containerized with Docker on Google Cloud Run to handle transaction records and student operations with PostgreSQL.',
          'Prototyped and tested a career-matching module using PostgreSQL pgvector in staging environments.',
          'Created the responsive administrative web dashboard using Angular 19 with Signals for reactive state management and PrimeNG data charts.'
        ],
        stack: ['Angular 19', 'Signals', 'FastAPI', 'Python', 'Firebase Pub/Sub', 'PostgreSQL', 'Docker', 'Cloud Run']
      },
      {
        role: 'Full-Stack Developer & Cloud Admin',
        company: 'E-learning Platform "Comienza Pro"',
        period: 'Aug 2025 – Nov 2025',
        location: 'Huánuco, Peru (Remote)',
        highlights: [
          'Managed end-to-end server provisioning, Linux configuration, and continuous maintenance in the Hetzner cloud infrastructure.',
          'Customized and administered the e-learning platform to support 9 specialized courses with an intuitive user experience.'
        ],
        stack: ['Linux', 'Hetzner Cloud', 'Moodle', 'PHP', 'MySQL', 'Nginx']
      }
    ],
    recognitionsList: [
      {
        title: '1st Place — Inter-University Programming Contest (ACM Format)',
        entity: 'Universidad Nacional Hermilio Valdizán (UNHEVAL)',
        date: '2023',
        icon: 'fa-trophy'
      },
      {
        title: '1st Place — Innovation & Business Pitch Day',
        entity: 'Universidad de Huánuco (UDH)',
        date: '2024',
        icon: 'fa-medal'
      },
      {
        title: 'Municipal Recognition for Digital Innovation',
        entity: 'Municipalidad Distrital de Amarilis',
        date: '2023',
        icon: 'fa-award'
      }
    ]
  },
  es: {
    nav: {
      overview: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      downloadCv: 'CV (PDF)'
    },
    hero: {
      badge: 'DISPONIBLE PARA TRABAJAR · DESARROLLADOR FULL-STACK JUNIOR',
      titleMain: 'Construyendo Aplicaciones',
      titleHighlight: 'Web Full-Stack Confiables',
      titleSuffix: 'y Backends Escalables',
      subtitle: 'Desarrollador Full-Stack Junior con más de 1.5 años de experiencia práctica creando aplicaciones web reactivas con Angular, APIs REST robustas con Python (FastAPI, Django) y bases de datos PostgreSQL. Estudiante de 10mo ciclo en Ingeniería de Sistemas en la Universidad de Huánuco (Tercio Superior).',
      viewProjectsBtn: 'Ver Proyectos',
      downloadCvBtn: 'Descargar CV (PDF)',
      copyEmailBtn: 'Copiar Correo',
      copiedToast: '¡Correo copiado al portapapeles!'
    },
    about: {
      tag: 'SOBRE MÍ',
      title: 'Perfil Profesional y Fortalezas Técnicas',
      subtitle: 'Un enfoque pragmático del desarrollo de software centrado en arquitecturas limpias, código mantenible y rápida adaptabilidad técnica.',
      pillars: [
        {
          icon: 'fa-layer-group',
          title: 'Desarrollo Web Full-Stack',
          desc: 'Desarrollo de aplicaciones web de extremo a extremo: diseño de APIs REST modulares con FastAPI y Django, integradas con frontends modernos y reactivos en Angular (Signals) y TypeScript.'
        },
        {
          icon: 'fa-cloud',
          title: 'Bases de Datos y Fundamentos Cloud',
          desc: 'Experiencia práctica estructurando esquemas en PostgreSQL, contenerizando servicios con Docker, desplegando en Google Cloud Run y procesando tareas asíncronas con Firebase Pub/Sub.'
        },
        {
          icon: 'fa-brain',
          title: 'Rápido Aprendizaje y Resolución de Problemas',
          desc: 'Capacidad demostrada para dominar nuevos frameworks, librerías y protocolos de forma autodidacta. 1er puesto en concursos interuniversitarios de programación competitiva (estilo ACM).'
        },
        {
          icon: 'fa-users-cog',
          title: 'Responsabilidad y Rigor Técnico',
          desc: 'Compromiso total desde la toma de requerimientos hasta el despliegue y pruebas. Gran curiosidad por el funcionamiento interno de sistemas operativos, redes y computación de bajo nivel.'
        }
      ]
    },
    projects: {
      tag: 'PORTAFOLIO',
      title: 'Proyectos y Sistemas Destacados',
      subtitle: 'Plataformas web en producción, exploraciones de sistemas de bajo nivel y herramientas de automatización.',
      all: 'Todos',
      fullstack: 'Full-Stack y Web',
      systems: 'Sistemas y Herramientas',
      aiCloud: 'IA y Automatización',
      featuredBadge: 'Proyecto Destacado',
      viewArch: 'Ver Detalles',
      liveDemo: 'Ver en Vivo',
      repo: 'Código Fuente',
      keyHighlights: 'Aspectos Técnicos Clave'
    },
    skills: {
      tag: 'HABILIDADES TÉCNICAS',
      title: 'Stack Tecnológico y Competencias',
      subtitle: 'Habilidades técnicas fundamentadas en desarrollo web moderno, servicios en la nube y herramientas de ingeniería.',
    },
    experience: {
      tag: 'TRAYECTORIA',
      title: 'Experiencia Laboral y Educación',
      subtitle: 'Más de 1.5 años de experiencia práctica en desarrollo de software y constante excelencia académica.',
      honorsTitle: 'Logros y Reconocimientos',
      educationTitle: 'Educación',
      educationDegree: 'Bachiller en Ingeniería de Sistemas e Informática',
      educationSchool: 'Universidad de Huánuco (UDH) · Huánuco, Perú',
      educationPeriod: '2021 – Dic 2026 (10mo Ciclo / Egresando)',
      educationHonors: 'Mérito Académico (Tercio Superior)'
    },
    contact: {
      tag: 'CONTACTO',
      title: 'Construyamos Algo Juntos',
      desc: 'Disponible para roles de Desarrollador Full-Stack Junior, Desarrollador Backend o Ingeniero Web (Remoto en América/Global o Híbrido en Perú).',
      emailLabel: 'Correo Directo',
      locationLabel: 'Ubicación y Zona Horaria',
      availabilityLabel: 'Disponibilidad',
      availabilityValue: 'Abierto a Oportunidades (Inmediata)',
      targetRolesLabel: 'Roles de Interés',
      targetRolesValue: 'Desarrollador Full-Stack / Backend / Web Junior',
      copyEmail: 'Copiar Correo',
      sendEmail: 'Enviar Correo'
    },
    modal: {
      architectureTitle: 'Visión Técnica y Arquitectura',
      keyDecisions: 'Decisiones de Ingeniería Clave',
      techStack: 'Tecnologías Utilizadas',
      metrics: 'Resultados y Métricas',
      repo: 'Ver Repositorio',
      liveDemo: 'Visitar Proyecto',
      close: 'Cerrar'
    },
    projectsList: [
      {
        id: 'kuantum-educa',
        title: 'Plataforma Kuantum Educa',
        category: 'fullstack',
        subtitle: 'Plataforma Web de Simulaciones y Preparación de Exámenes',
        shortDesc: 'Plataforma web en producción construida con Angular 19, microservicios FastAPI en Google Cloud Run y Firebase Pub/Sub para procesamiento asíncrono.',
        fullDesc: 'Único arquitecto y desarrollador de Kuantum Educa desde cero. Diseñé un sistema desacoplado donde los envíos de exámenes se encolan mediante Firebase Pub/Sub para procesamiento asíncrono durante picos de tráfico. Desarrollé un backend contenerizado en FastAPI desplegado en Google Cloud Run para transacciones y usuarios en PostgreSQL. Diseñé y probé un módulo de orientación vocacional semántico con PostgreSQL pgvector en entornos locales y de staging.',
        techStack: ['Angular 19', 'Signals', 'FastAPI (Python)', 'Firebase Pub/Sub', 'PostgreSQL (pgvector)', 'Docker', 'Google Cloud Run', 'PrimeNG'],
        metrics: [
          'Procesamiento asíncrono de simulaciones mediante Firebase Pub/Sub',
          'Microservicio FastAPI contenerizado con Docker en Google Cloud Run',
          'Pipeline de emparejamiento vocacional con pgvector probado en staging',
          'Panel administrativo reactivo desarrollado con Angular 19 Signals y PrimeNG'
        ],
        liveUrl: 'https://kuantum.pe',
        badge: 'Plataforma Web Principal',
        featured: true,
        icon: 'fa-graduation-cap',
        architectureDetails: {
          flow: [
            'El estudiante completa su simulación de examen en el frontend Angular 19',
            'La carga útil se envía a la cola asíncrona de Firebase Pub/Sub',
            'Workers en Cloud Functions agregan puntajes y percentiles sin bloquear la UI',
            'Microservicio FastAPI en Cloud Run gestiona transacciones y almacenamiento en PostgreSQL',
            'Panel administrativo muestra métricas en tiempo real con paginación en servidor'
          ],
          keyDecisions: [
            'La ingesta asíncrona vía Pub/Sub previene bloqueos de UI durante exámenes concurrentes',
            'FastAPI + Cloud Run minimiza costos operativos con autoescalado rápido',
            'Angular Signals permite reactividad precisa con mínimo costo de detección de cambios',
            'Emparejamiento vocacional validado con embeddings en PostgreSQL pgvector en staging'
          ]
        }
      },
      {
        id: 'sysmon-3ds',
        title: 'SysMon — Monitor y Macro Pad 3DS',
        category: 'systems',
        subtitle: 'Telemetría de PC y Macro Pad Táctil mediante 3DS',
        shortDesc: 'Proyecto personal de sistemas que convierte una Nintendo 3DS en un monitor secundario de hardware y macro pad sobre Wi-Fi usando Rust (Tokio) y C.',
        fullDesc: 'Proyecto personal desarrollado para profundizar en programación de bajo nivel, redes y controladores de Linux. Desarrollé un servidor multi-hilo en Rust con Tokio para consultar estadísticas del sistema y virtualizar entradas mediante /dev/uinput. Escribí un cliente ligero en C para la 3DS usando devkitARM con parsing de paquetes TCP sin asignación dinámica en heap.',
        techStack: ['Rust 2024', 'Tokio', 'C (devkitARM)', 'evdev / uinput', 'sysinfo', 'Linux RPM'],
        metrics: [
          'Tiempo de respuesta en red local sub-milisegundo (<1ms)',
          'Parsing de paquetes en C sin asignaciones en heap (libctru)',
          'Virtualización de entradas en kernel Linux vía /dev/uinput y evdev',
          'Empaquetado nativo como paquete RPM para Fedora/RHEL'
        ],
        repoUrl: 'https://github.com/Just-a-Spider/SysMon',
        badge: 'Proyecto Personal de Sistemas',
        featured: true,
        icon: 'fa-gamepad'
      },
      {
        id: 'papeletas-automaticas',
        title: 'Papeletas Automáticas',
        category: 'ai-cloud',
        subtitle: 'Sistema de Multas Digitales con Detección y OCR',
        shortDesc: 'Prueba de concepto de visión computacional para detección de placas vehiculares y gestión de multas usando Python, YOLOv5 y PyQt6.',
        fullDesc: 'Desarrollé una prueba de concepto para un sistema automatizado de infracciones de tránsito. Utilicé YOLOv5 para detección de vehículos y matrículas, integré EasyOCR para reconocimiento óptico de caracteres y construí una interfaz de escritorio con PyQt6.',
        techStack: ['Python', 'YOLOv5', 'PyQt6', 'EasyOCR', 'OpenCV', 'SQLite'],
        metrics: [
          'Integración de YOLOv5 para detección de objetos con EasyOCR',
          'Interfaz gráfica para operadores en PyQt6 con registro en SQLite',
          'Pipeline automatizado para captura de infracciones vehiculares'
        ],
        repoUrl: 'https://github.com/Just-a-Spider/papeletas_automaticas',
        badge: 'POC de Visión Computacional',
        featured: false,
        icon: 'fa-camera'
      },
      {
        id: 'ai-assistant-class',
        title: 'AI Assistant For Class',
        category: 'ai-cloud',
        subtitle: 'Asistente de Escritorio para Transcripción de Audio',
        shortDesc: 'Herramienta de escritorio local con transcripción Whisper e ingesta de audio en segundo plano construida con PyQt6.',
        fullDesc: 'Construí una utilidad de escritorio para capturar audio de clases y generar resúmenes con IA. Integré Whisper de OpenAI para transcripción mediante hilos secundarios en PyQt6 para evitar bloqueos en la interfaz gráfica, con atajos de teclado globales mediante pynput.',
        techStack: ['Python', 'PyQt6', 'OpenAI API', 'Whisper', 'pynput', 'Threading'],
        metrics: [
          'Ingesta de audio multi-hilo para mantener la interfaz de escritorio fluida',
          'Integración de transcripción de voz con OpenAI Whisper',
          'Atajos de teclado globales con pynput'
        ],
        repoUrl: 'https://github.com/Just-a-Spider/AI_Assistant_For_Class',
        badge: 'Herramienta de Escritorio',
        featured: false,
        icon: 'fa-microphone'
      },
      {
        id: 'gatilin-digital',
        title: 'Gatilín Digital — POS y Facturación',
        category: 'fullstack',
        subtitle: 'Plataforma Web de Facturación e Inventario',
        shortDesc: 'Plataforma web galardonada para gestión de inventario y facturación electrónica construida con Django REST Framework y Angular.',
        fullDesc: 'Desarrollé una aplicación web para el seguimiento de inventarios comerciales, emisión de comprobantes y generación automatizada de boletas en PDF. Construida con Django REST Framework y Angular, desplegada en Heroku con PostgreSQL.',
        techStack: ['Django REST Framework', 'Angular 16', 'PostgreSQL', 'Heroku', 'TypeScript'],
        metrics: [
          'Ganador del 1er Puesto en el Concurso de Innovación Municipal de Amarilis',
          'Generación automatizada de boletas y reportes en PDF',
          'Control de inventario y registro de ventas en tiempo real'
        ],
        badge: 'Premio Municipal de Innovación',
        featured: false,
        icon: 'fa-cash-register'
      },
      {
        id: 'estructura-datos',
        title: 'Plataforma de Estructura de Datos',
        category: 'fullstack',
        subtitle: 'Plataforma de Evaluación y Ejecución de Código',
        shortDesc: 'Plataforma web para evaluación académica de código con entornos seguros en contenedores para C++ y Python desarrollada en Django.',
        fullDesc: 'Desarrollé una plataforma web para cursos de ciencias de la computación. Incluyó un módulo de envío de código con ejecución aislada en contenedores para scripts en C++ y Python, permitiendo calificar automáticamente casos de prueba.',
        techStack: ['Django', 'PostgreSQL', 'Docker', 'Python', 'C++', 'Bootstrap'],
        metrics: [
          'Entorno de ejecución aislado para evaluación de código de estudiantes',
          'Soporte para pruebas automatizadas en C++ y Python',
          'Utilizado en cursos universitarios de algoritmos'
        ],
        badge: 'Plataforma Académica',
        featured: false,
        icon: 'fa-code-branch'
      }
    ],
    skillsList: [
      {
        name: 'Desarrollo Web y Backend',
        icon: 'fa-server',
        skills: [
          { name: 'Python (FastAPI, Django, DRF)', level: 'Avanzado / Diario', highlight: true },
          { name: 'Angular (Signals, TypeScript)', level: 'Avanzado / Diario', highlight: true },
          { name: 'PostgreSQL y Bases Relacionales', level: 'Intermedio / Diario', highlight: true },
          { name: 'Diseño de APIs RESTful', level: 'Intermedio / Diario', highlight: true },
          { name: 'HTML5, CSS3 y TailwindCSS', level: 'Intermedio / Diario' }
        ]
      },
      {
        name: 'Nube, DevOps y Herramientas',
        icon: 'fa-cloud',
        skills: [
          { name: 'Docker y Contenerización', level: 'Intermedio', highlight: true },
          { name: 'Google Cloud Run y GCP', level: 'Intermedio', highlight: true },
          { name: 'Firebase (Pub/Sub, Functions)', level: 'Intermedio' },
          { name: 'Administración de Servidores Linux', level: 'Intermedio' },
          { name: 'Git, GitHub y Control de Versiones', level: 'Diario' }
        ]
      },
      {
        name: 'Sistemas y Exploraciones Técnicas',
        icon: 'fa-microchip',
        skills: [
          { name: 'Rust (axum, tokio, uinput)', level: 'Proyectos Personales', highlight: true },
          { name: 'C y Embebidos / devkitARM', level: 'Proyectos Personales' },
          { name: 'Controladores de Entrada Linux (/dev/uinput)', level: 'Proyectos Personales' },
          { name: 'Redes y Sockets TCP', level: 'Proyectos Personales' }
        ]
      },
      {
        name: 'IA Aplicada y Herramientas Prácticas',
        icon: 'fa-robot',
        skills: [
          { name: 'API de OpenAI y Whisper Local', level: 'Práctico / Herramientas', highlight: true },
          { name: 'pgvector y Conceptos RAG', level: 'Staging / Investigación' },
          { name: 'Visión Computacional (YOLOv5, OpenCV)', level: 'Fundamentos / POC' },
          { name: 'Herramientas de Escritorio PyQt6', level: 'Intermedio' }
        ]
      }
    ],
    experiencesList: [
      {
        role: 'Desarrollador Full-Stack',
        company: 'Kuantum Innovation',
        period: 'Feb 2025 – Jun 2026',
        location: 'Huánuco, Perú (Remoto)',
        highlights: [
          'Único arquitecto y desarrollador de Kuantum Educa desde cero, diseñando el esquema de datos y contratos de API.',
          'Diseñé un backend orientado a eventos con Firebase Cloud Functions y Pub/Sub para procesar asíncronamente miles de simulaciones concurrentes.',
          'Desarrollé y desplegué un microservicio en FastAPI contenerizado con Docker en Google Cloud Run para transacciones y usuarios en PostgreSQL.',
          'Diseñé y probé un módulo de emparejamiento vocacional con PostgreSQL pgvector en entornos de staging.',
          'Construí el panel administrativo web en Angular 19 utilizando Signals para manejo reactivo del estado y gráficos interactivos con PrimeNG.'
        ],
        stack: ['Angular 19', 'Signals', 'FastAPI', 'Python', 'Firebase Pub/Sub', 'PostgreSQL', 'Docker', 'Cloud Run']
      },
      {
        role: 'Desarrollador Full-Stack y Admin Cloud',
        company: 'Plataforma E-learning "Comienza Pro"',
        period: 'Ago 2025 – Nov 2025',
        location: 'Huánuco, Perú (Remoto)',
        highlights: [
          'Gestioné el aprovisionamiento, configuración Linux y mantenimiento continuo de servidores en la nube de Hetzner.',
          'Personalicé y administré la plataforma de e-learning para dar soporte a 9 cursos especializados con una interfaz intuitiva.'
        ],
        stack: ['Linux', 'Hetzner Cloud', 'Moodle', 'PHP', 'MySQL', 'Nginx']
      }
    ],
    recognitionsList: [
      {
        title: '1er Puesto — Concurso Interuniversitario de Programación (Formato ACM)',
        entity: 'Universidad Nacional Hermilio Valdizán (UNHEVAL)',
        date: '2023',
        icon: 'fa-trophy'
      },
      {
        title: '1er Puesto — Pitch Day de Innovación y Emprendimiento',
        entity: 'Universidad de Huánuco (UDH)',
        date: '2024',
        icon: 'fa-medal'
      },
      {
        title: 'Diploma de Reconocimiento Municipal a la Innovación Digital',
        entity: 'Municipalidad Distrital de Amarilis',
        date: '2023',
        icon: 'fa-award'
      }
    ]
  }
};

export class TranslationService {
  private readonly storageKey = 'andre_portfolio_lang';
  readonly currentLang = signal<Lang>(this.getInitialLang());

  readonly t = () => TRANSLATIONS[this.currentLang()];

  setLang(lang: Lang) {
    this.currentLang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, lang);
    }
  }

  private getInitialLang(): Lang {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.storageKey) as Lang;
      if (saved === 'en' || saved === 'es') return saved;
    }
    if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
      return 'es';
    }
    return 'en';
  }
}
