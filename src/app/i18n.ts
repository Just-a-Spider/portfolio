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

export interface TranslationSchema {
  nav: {
    overview: string;
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
      projects: 'Systems & Projects',
      skills: 'Technical Skills',
      experience: 'Experience',
      contact: 'Contact',
      downloadCv: 'Resume (PDF)'
    },
    hero: {
      badge: 'Systems & Full-Stack Engineer · 1.5+ YOE · 10th Cycle UDH',
      titleMain: 'Building Scalable',
      titleHighlight: 'Event-Driven Systems',
      titleSuffix: '& Low-Level Tools',
      subtitle: 'Senior Systems Engineering student with 1.5+ years of professional experience architecting highly available web platforms, event-driven cloud pipelines, and low-level Rust systems applications.',
      viewProjectsBtn: 'Explore Systems',
      downloadCvBtn: 'Download CV',
      copyEmailBtn: 'Copy Email',
      copiedToast: 'Email copied to clipboard!'
    },
    projects: {
      tag: 'PORTFOLIO',
      title: 'Featured Systems & Engineering Projects',
      subtitle: 'Selected production platforms, systems companions, and AI-driven tools with measurable architectural impact.',
      all: 'All Systems',
      fullstack: 'Full-Stack & Cloud',
      systems: 'Systems & Rust',
      aiCloud: 'AI & Automation',
      featuredBadge: 'Featured System',
      viewArch: 'Architecture & Details',
      liveDemo: 'Live Application',
      repo: 'Source Code',
      keyHighlights: 'Key Engineering Highlights:'
    },
    skills: {
      tag: 'CAPABILITIES',
      title: 'Technical Domains & Stack',
      subtitle: 'Core competencies across cloud architecture, backend engineering, low-level systems, and reactive user interfaces.'
    },
    experience: {
      tag: 'TRACK RECORD',
      title: 'Professional Experience',
      subtitle: 'Hands-on software development and cloud operations delivering mission-critical applications.',
      honorsTitle: 'Academic Honors & Recognitions',
      educationTitle: 'Education',
      educationDegree: 'B.S. in Systems and Informatics Engineering (10th cycle, upper third)',
      educationSchool: 'Universidad de Huánuco, Peru',
      educationPeriod: '2021 – Present (Graduating Dec 2026)',
      educationHonors: '3-time 1st Place of the Academic Cohort'
    },
    contact: {
      tag: 'GET IN TOUCH',
      title: "Let's build something extraordinary.",
      desc: "Open to full-time remote roles (LATAM/Americas) and hybrid/on-site positions in Lima, Peru. Let's discuss backend architectures, systems engineering, or full-stack opportunities.",
      emailLabel: 'Direct Email',
      locationLabel: 'Location',
      availabilityLabel: 'Availability',
      availabilityValue: 'Immediate · Flexible schedule for morning/async until graduation',
      copyEmail: 'Copy Email Address',
      sendEmail: 'Send Email'
    },
    modal: {
      architectureTitle: 'System Architecture & Data Flow',
      keyDecisions: 'Key Architectural Decisions',
      techStack: 'Tech Stack & Infrastructure',
      metrics: 'Quantified Impact & Metrics',
      repo: 'View Repository',
      liveDemo: 'Visit Live Platform',
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
        subtitle: 'Scalable Event-Driven Simulation Platform & Semantic RAG Engine',
        shortDesc: 'Sole architect and developer for an educational platform processing thousands of simultaneous exam simulations with zero UI latency and automated AI career guidance.',
        fullDesc: 'Architected and deployed a multi-tier educational platform from scratch. Designed an asynchronous, three-stage Firebase Cloud Functions and Pub/Sub event pipeline that offloads heavy simulation data aggregation into atomic transaction workers. Implemented a dedicated FastAPI microservice containerized with Docker on Google Cloud Run to process payments and semantic RAG matching with PostgreSQL (pgvector/HNSW). Developed the frontend with Angular 19 using native Signals for reactive state management and PrimeNG for high-density administrative dashboards.',
        techStack: ['Angular 19 (Signals)', 'FastAPI (Python)', 'Firebase Cloud Functions', 'Google Cloud Pub/Sub', 'PostgreSQL (pgvector)', 'Docker', 'Google Cloud Run', 'Gemini 3.1 Flash-Lite', 'PrimeNG', 'TailwindCSS'],
        metrics: [
          'Handled thousands of concurrent simulation evaluations under peak exam loads without downtime',
          'RAG pipeline indexing 200+ academic degree programs and 105 SUNEDU-licensed universities',
          'Decoupled payments and inference onto Google Cloud Run, achieving zero cold starts with CPU throttling'
        ],
        architectureDetails: {
          flow: [
            'Client (Angular 19) submits completed student simulation via lightweight HTTPS trigger',
            'Lightweight Cloud Function saves raw attempt and flags state as pending',
            'Cron dispatcher triggers Google Cloud Pub/Sub topics per simulation batch',
            'Single-instance worker processes batch results in atomic transaction (reads-before-writes)',
            'FastAPI service queries PostgreSQL (pgvector HNSW index) for semantic career matching'
          ],
          keyDecisions: [
            'Decoupled analytics from UI write paths to guarantee responsive student experience',
            'Used Angular Signals instead of RxJS subscriptions for synchronous, fine-grained DOM updates',
            'Implemented hybrid inference (local Ollama for dev/staging, Gemini Flash in production) saving 100% API costs during development'
          ]
        }
      },
      {
        id: 'sysmon-3ds',
        title: 'SysMon — 3DS Systems Companion',
        category: 'systems',
        featured: true,
        badge: 'Rust & C Homebrew System',
        icon: 'fa-gamepad',
        repoUrl: 'https://github.com/Just-a-Spider/SysMon',
        subtitle: 'Wireless PC Telemetry Monitor & Kernel-Level Macro Deck',
        shortDesc: 'Turns a Nintendo 3DS handheld into a wireless real-time PC telemetry display, tap-to-kill process manager, and Linux macro pad over Wi-Fi.',
        fullDesc: 'Engineered a full-stack systems project comprising an asynchronous Rust PC server and an embedded C client on Nintendo 3DS homebrew. The Rust daemon uses axum and tokio for lightweight API handling, sysinfo for real-time hardware telemetry (CPU/GPU temps, RAM, fan speeds), and the Linux evdev/uinput subsystem to instantiate a virtual keyboard device for kernel-level macro execution. Packaged natively into a distributable Linux RPM using cargo-generate-rpm with udev permission rules. The 3DS client is compiled to native .cia using devkitARM and libctru, featuring zero-dependency byte buffer parsing.',
        techStack: ['Rust (axum, tokio, evdev)', 'C (devkitARM, libctru)', 'Linux (RPM, udev, systemd)', 'D-Bus / MPRIS', 'Wayland Screencast (ashpd)', 'WebSockets / HTTP'],
        metrics: [
          'Sub-millisecond latency telemetry and macro dispatch over local Wi-Fi',
          'Kernel-level virtual input device bypassing Wayland synthetic event restrictions',
          'Production RPM package installable on Linux and native .cia binary on real 3DS hardware'
        ],
        architectureDetails: {
          flow: [
            'Rust daemon starts in Linux system tray, reading telemetry via sysinfo and D-Bus MPRIS',
            '3DS client establishes authenticated TCP/HTTP connection to server port',
            'Server streams live CPU/GPU/RAM metrics and active heavy processes to handheld screen',
            'User touches macro tab on 3DS bottom screen -> transmits command packet over Wi-Fi',
            'Rust server writes input events to /dev/uinput virtual device or executes shell pipeline'
          ],
          keyDecisions: [
            'Used raw buffer scanning (strstr/sscanf) on 3DS to eliminate memory overhead from bulky JSON libraries',
            'Implemented uinput virtual kernel device with udev rules to guarantee compatibility on modern Wayland compositors',
            'Integrated local web dashboard with PIN auth for secure configuration from PC localhost'
          ]
        }
      },
      {
        id: 'papeletas-cv',
        title: 'Papeletas Automáticas',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-camera',
        repoUrl: 'https://github.com/Just-a-Spider/QR-Plates-Tickets',
        subtitle: 'Computer Vision Vehicle License Recognition & Digital Ticketing',
        shortDesc: 'Automated digital traffic ticket system with vehicle license plate detection and OCR text extraction using YOLOv5 and PyQt6.',
        fullDesc: 'Engineered an automated traffic violation desktop tool combining YOLOv5 object detection with easyocr. Overcame GUI blocking during heavy inference by optimizing image preprocessing (ROI cropping and grayscale filtering) and manually pumping the PyQt6 event loop.',
        techStack: ['Python', 'YOLOv5', 'PyQt6', 'easyocr', 'OpenCV'],
        metrics: [
          'High-confidence license plate localization (>0.8 threshold)',
          'Non-blocking continuous video feed integration in desktop GUI'
        ]
      },
      {
        id: 'ai-class-assistant',
        title: 'AI Assistant For Class',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-robot',
        repoUrl: 'https://github.com/Just-a-Spider/AI_Assistant_For_Class',
        subtitle: 'Desktop Voice Assistant & System Action Automation',
        shortDesc: 'Local desktop virtual assistant automating operating system commands, browser actions, and speech-to-text queries with OpenAI models.',
        fullDesc: 'Developed a responsive PyQt6 desktop application for natural language workflow automation. Offloaded audio capture and speech recognition to background Python worker threads, and bound global OS shortcuts via pynput to toggle recording seamlessly without freezing the interface.',
        techStack: ['Python', 'PyQt6', 'OpenAI Whisper', 'pynput', 'Threading'],
        metrics: [
          'Zero UI freezing during long-running cloud transcription and model queries',
          'Global keyboard shortcuts for instant voice recording across desktop environments'
        ]
      },
      {
        id: 'gatilin-digital',
        title: 'Gatilín Digital',
        category: 'fullstack',
        featured: false,
        badge: 'Municipal Recognition',
        icon: 'fa-map-marked-alt',
        subtitle: 'Real-Time Festival Tracking & Cultural Documentation Portal',
        shortDesc: 'Mobile-friendly tracking platform and historical documentation portal for traditional Cofradías during the Festival de Negritos 2024.',
        fullDesc: 'Designed and deployed a public tracking portal and administrative platform for regional cultural heritage. Built using Django REST Framework and Angular 16 on PostgreSQL. Officially recognized by the District Municipality of Amarilis for technological contribution to local culture.',
        techStack: ['Angular 16', 'Django REST Framework', 'PostgreSQL', 'Heroku', 'TailwindCSS'],
        metrics: [
          'Live tracking and schedule coordination during major regional festival',
          'Official recognition diploma issued by the District Municipality of Amarilis'
        ]
      },
      {
        id: 'estructura-datos',
        title: 'Estructura de Datos Compendium',
        category: 'systems',
        featured: false,
        icon: 'fa-terminal',
        subtitle: 'Algorithmic Platform & Sandboxed Code Execution Engine',
        shortDesc: 'Interactive web platform with a secure backend sandbox that dynamically compiles and executes C++ and Python algorithms on-the-fly.',
        fullDesc: 'Built an algorithmic compendium for university students with an integrated remote code execution view. Used g++ with subprocess and pexpect in Django to compile and run student algorithms interactively with strict timeouts and output capture.',
        techStack: ['Django', 'PostgreSQL', 'C++ (g++)', 'Python', 'pexpect', 'subprocess'],
        metrics: [
          'Interactive sandboxed compilation and execution of C++ and Python snippets',
          'Dual-language algorithmic translation and data modeling'
        ]
      }
    ],
    skillsList: [
      {
        name: 'Backend & Cloud Systems',
        icon: 'fa-server',
        skills: [
          { name: 'Django & DRF', level: 'Advanced', highlight: true },
          { name: 'FastAPI (Python)', level: 'Advanced', highlight: true },
          { name: 'PostgreSQL (pgvector / HNSW)', level: 'Advanced', highlight: true },
          { name: 'Firebase Cloud Functions & Pub/Sub', level: 'Advanced', highlight: true },
          { name: 'Docker & Google Cloud Run', level: 'Advanced', highlight: true },
          { name: 'Hetzner Cloud & Linux Sysadmin', level: 'Intermediate' }
        ]
      },
      {
        name: 'Systems & Low-Level Programming',
        icon: 'fa-microchip',
        skills: [
          { name: 'Rust (axum, tokio, evdev)', level: 'Intermediate', highlight: true },
          { name: 'Linux OS (udev, systemd, RPM packaging)', level: 'Advanced', highlight: true },
          { name: 'C / C++ (devkitARM, libctru)', level: 'Intermediate', highlight: true },
          { name: 'D-Bus / MPRIS & Wayland Screencast', level: 'Intermediate' },
          { name: 'WebSockets & TCP Protocols', level: 'Advanced' }
        ]
      },
      {
        name: 'Frontend & Reactive UI',
        icon: 'fa-code',
        skills: [
          { name: 'Angular (Signals, v16-v19)', level: 'Advanced', highlight: true },
          { name: 'TypeScript & Modern JavaScript', level: 'Advanced', highlight: true },
          { name: 'PrimeNG & TailwindCSS', level: 'Advanced', highlight: true },
          { name: 'HTML5 & Modern CSS3', level: 'Advanced' },
          { name: 'PyQt6 Desktop Applications', level: 'Advanced' }
        ]
      },
      {
        name: 'AI, LLMs & Computer Vision',
        icon: 'fa-brain',
        skills: [
          { name: 'RAG & Vector Semantic Search', level: 'Advanced', highlight: true },
          { name: 'Gemini API & LLM Integrations', level: 'Advanced', highlight: true },
          { name: 'Ollama & Local Model Workflows', level: 'Advanced', highlight: true },
          { name: 'YOLOv5 Computer Vision & OCR', level: 'Intermediate' }
        ]
      }
    ],
    experiencesList: [
      {
        role: 'Full-Stack Developer & Technical Lead',
        company: 'Kuantum Innovations',
        period: 'Feb 2025 – Jun 2026',
        location: 'Peru (Remote)',
        highlights: [
          'Sole technical resource responsible for architecture, development, and deployment of Kuantum Educa platform from scratch.',
          'Designed scalable asynchronous result processing with Firebase Cloud Functions and Pub/Sub, guaranteeing zero UI latency under peak loads.',
          'Engineered dedicated FastAPI microservice on Google Cloud Run with PostgreSQL (pgvector) for secure payments and semantic RAG matching across 200+ academic programs.',
          'Built administrative analytics dashboard using Angular 19 Signals and PrimeNG for reactive real-time state management.'
        ],
        stack: ['Angular 19', 'FastAPI', 'Firebase Functions', 'Pub/Sub', 'PostgreSQL (pgvector)', 'Google Cloud Run', 'Docker']
      },
      {
        role: 'Full-Stack Developer & Infrastructure Admin',
        company: 'E-learning Platform "Comienza Pro"',
        period: 'Aug 2025 – Nov 2025',
        location: 'Peru (Remote)',
        highlights: [
          'Provisioned, configured, and maintained Moodle e-learning infrastructure on Hetzner Cloud for 9 specialized courses.',
          'Customized web services, optimized database performance, and maintained 99.9% uptime for active students.'
        ],
        stack: ['Hetzner Cloud', 'Moodle', 'PHP', 'MySQL', 'Linux', 'Apache']
      }
    ],
    recognitionsList: [
      { title: '1st Place — Programming Contest', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-trophy' },
      { title: '1st Place — Pitch Day Innovation Contest', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-award' },
      { title: 'Official Recognition for Gatilín Digital', entity: 'District Municipality of Amarilis', date: 'Feb 2024', icon: 'fa-certificate' }
    ]
  },
  es: {
    nav: {
      overview: 'Inicio',
      projects: 'Sistemas y Proyectos',
      skills: 'Habilidades Técnicas',
      experience: 'Experiencia',
      contact: 'Contacto',
      downloadCv: 'Currículum (PDF)'
    },
    hero: {
      badge: 'Ingeniero de Sistemas y Full-Stack · 1.5+ Años Exp. · 10mo Ciclo UDH',
      titleMain: 'Construyendo Sistemas',
      titleHighlight: 'Orientados a Eventos',
      titleSuffix: 'y Herramientas de Bajo Nivel',
      subtitle: 'Estudiante de último año de Ingeniería de Sistemas con más de 1.5 años de experiencia profesional diseñando plataformas web altamente disponibles, pipelines en la nube orientados a eventos y herramientas de sistemas en Rust.',
      viewProjectsBtn: 'Ver Proyectos',
      downloadCvBtn: 'Descargar CV',
      copyEmailBtn: 'Copiar Correo',
      copiedToast: '¡Correo copiado al portapapeles!'
    },
    projects: {
      tag: 'PORTAFOLIO',
      title: 'Sistemas Destacados y Proyectos de Ingeniería',
      subtitle: 'Plataformas en producción, utilidades de sistemas y herramientas con IA con impacto técnico medible.',
      all: 'Todos los Sistemas',
      fullstack: 'Full-Stack y Nube',
      systems: 'Sistemas y Rust',
      aiCloud: 'IA y Automatización',
      featuredBadge: 'Sistema Destacado',
      viewArch: 'Arquitectura y Detalles',
      liveDemo: 'Plataforma en Vivo',
      repo: 'Código Fuente',
      keyHighlights: 'Puntos Clave de Ingeniería:'
    },
    skills: {
      tag: 'CAPACIDADES',
      title: 'Dominios Técnicos y Stack',
      subtitle: 'Competencias en arquitectura en la nube, backend, programación de sistemas de bajo nivel e interfaces reactivas.'
    },
    experience: {
      tag: 'TRAYECTORIA',
      title: 'Experiencia Profesional',
      subtitle: 'Desarrollo de software y operaciones en la nube entregando aplicaciones de misión crítica.',
      honorsTitle: 'Reconocimientos Académicos e Institucionales',
      educationTitle: 'Educación',
      educationDegree: 'Ingeniería de Sistemas e Informática (10mo ciclo, tercio superior)',
      educationSchool: 'Universidad de Huánuco, Perú',
      educationPeriod: '2021 – Presente (Graduación Dic 2026)',
      educationHonors: '3 veces 1er puesto del ciclo académico'
    },
    contact: {
      tag: 'CONTACTO',
      title: 'Construyamos algo extraordinario.',
      desc: 'Disponible para roles remotos a tiempo completo (LATAM/Américas) y posiciones híbridas o presenciales en Lima, Perú. Conversemos sobre arquitectura backend, ingeniería de sistemas o desarrollo full-stack.',
      emailLabel: 'Correo Directo',
      locationLabel: 'Ubicación',
      availabilityLabel: 'Disponibilidad',
      availabilityValue: 'Inmediata · Horario flexible mañana/asíncrono hasta graduación',
      copyEmail: 'Copiar Correo Electrónico',
      sendEmail: 'Enviar Correo'
    },
    modal: {
      architectureTitle: 'Arquitectura del Sistema y Flujo de Datos',
      keyDecisions: 'Decisiones Clave de Arquitectura',
      techStack: 'Stack Tecnológico e Infraestructura',
      metrics: 'Impacto Cuantificable y Métricas',
      repo: 'Ver Repositorio',
      liveDemo: 'Visitar Plataforma en Vivo',
      close: 'Cerrar Ventana'
    },
    projectsList: [
      {
        id: 'kuantum-educa',
        title: 'Plataforma Kuantum Educa',
        category: 'fullstack',
        featured: true,
        badge: 'Sistema Full-Stack Insignia',
        icon: 'fa-graduation-cap',
        liveUrl: 'https://kuantumeduca.com',
        subtitle: 'Plataforma de Simulaciones Orientada a Eventos y Motor RAG Semántico',
        shortDesc: 'Único arquitecto y desarrollador de una plataforma educativa que procesa miles de simulacros simultáneos con cero latencia de interfaz y orientación vocacional con IA.',
        fullDesc: 'Diseñé e implementé una plataforma integral desde cero. Creé un pipeline asíncrono con Firebase Cloud Functions y Google Cloud Pub/Sub que delega la agregación pesada de datos en workers transaccionales atómicos. Implementé un microservicio con FastAPI (Python) contenerizado con Docker en Google Cloud Run para procesar pagos y búsqueda semántica RAG con PostgreSQL (pgvector/HNSW). Desarrollé la interfaz en Angular 19 utilizando Signals nativos y PrimeNG para tableros administrativos.',
        techStack: ['Angular 19 (Signals)', 'FastAPI (Python)', 'Firebase Cloud Functions', 'Google Cloud Pub/Sub', 'PostgreSQL (pgvector)', 'Docker', 'Google Cloud Run', 'Gemini 3.1 Flash-Lite', 'PrimeNG', 'TailwindCSS'],
        metrics: [
          'Procesamiento masivo de evaluaciones simultáneas durante picos de simulacros sin caídas de servicio',
          'Pipeline RAG indexando más de 200 programas académicos y 105 universidades licenciadas por SUNEDU',
          'Desacoplamiento de pagos e inferencia en Google Cloud Run con cero cold starts mediante CPU throttling'
        ],
        architectureDetails: {
          flow: [
            'Cliente (Angular 19) envía simulación completada mediante trigger ligero HTTPS',
            'Cloud Function ligera guarda intento y marca el documento como pendiente',
            'Cron job despacha mensajes a temas de Google Cloud Pub/Sub por lote de simulaciones',
            'Worker Pub/Sub de instancia única procesa lotes en una transacción atómica única',
            'Microservicio FastAPI consulta índice HNSW en pgvector para emparejamiento vocacional RAG'
          ],
          keyDecisions: [
            'Desacoplamiento de analítica pesada de las rutas críticas de usuario para garantizar respuesta instantánea',
            'Uso de Angular Signals en lugar de suscripciones RxJS para actualizaciones sincrónicas y limpias del DOM',
            'Flujo de inferencia híbrido (Ollama local para desarrollo/staging, Gemini Flash en producción) ahorrando 100% de costos de API en desarrollo'
          ]
        }
      },
      {
        id: 'sysmon-3ds',
        title: 'SysMon — Acompañante de Sistemas para 3DS',
        category: 'systems',
        featured: true,
        badge: 'Sistema Homebrew en Rust y C',
        icon: 'fa-gamepad',
        repoUrl: 'https://github.com/Just-a-Spider/SysMon',
        subtitle: 'Monitor Inalámbrico de Telemetría de PC y Panel de Macros a Nivel Kernel',
        shortDesc: 'Convierte una consola Nintendo 3DS en un monitor de telemetría de PC en tiempo real, gestor de procesos pesados y panel de macros táctiles para Linux sobre Wi-Fi.',
        fullDesc: 'Desarrollé un proyecto de sistemas compuesto por un servidor asíncrono en Rust y un cliente embebido en C para homebrew de Nintendo 3DS. El demonio en Rust utiliza axum y tokio para APIs ligeras, sysinfo para telemetría de hardware en tiempo real (temperaturas CPU/GPU, RAM, ventiladores), y el subsistema evdev/uinput de Linux para instanciar un teclado virtual a nivel kernel. Empaquetado como RPM nativo con reglas udev. El cliente en C fue compilado con devkitARM y libctru, con parsing manual de buffers.',
        techStack: ['Rust (axum, tokio, evdev)', 'C (devkitARM, libctru)', 'Linux (RPM, udev, systemd)', 'D-Bus / MPRIS', 'Wayland Screencast (ashpd)', 'WebSockets / HTTP'],
        metrics: [
          'Transmisión de telemetría y ejecución de macros con latencia inferior a 1ms sobre Wi-Fi',
          'Dispositivo virtual de entrada a nivel kernel evitando restricciones de Wayland en eventos sintéticos',
          'Paquete RPM de producción instalable en Linux y binario .cia ejecutable en hardware real de 3DS'
        ],
        architectureDetails: {
          flow: [
            'Demonio en Rust se ejecuta en bandeja del sistema Linux leyendo telemetría vía sysinfo y D-Bus',
            'Cliente 3DS establece conexión TCP/HTTP autenticada con PIN al puerto del servidor',
            'Servidor transmite métricas en vivo y lista de procesos pesados a la pantalla superior',
            'Usuario presiona una pestaña de macro en la pantalla táctil inferior -> envía paquete por Wi-Fi',
            'Servidor en Rust escribe eventos de entrada en el dispositivo virtual /dev/uinput o ejecuta comandos shell'
          ],
          keyDecisions: [
            'Parsing manual de buffers (strstr/sscanf) en 3DS para eliminar sobrecarga de memoria de librerías JSON',
            'Dispositivo virtual de kernel con reglas udev para garantizar compatibilidad con compositores Wayland modernos',
            'Dashboard web local con autenticación por PIN para configuración segura desde el localhost de la PC'
          ]
        }
      },
      {
        id: 'papeletas-cv',
        title: 'Papeletas Automáticas',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-camera',
        repoUrl: 'https://github.com/Just-a-Spider/QR-Plates-Tickets',
        subtitle: 'Reconocimiento de Placas Vehiculares con Visión Computacional',
        shortDesc: 'Sistema automatizado de infracciones de tránsito con detección de placas vehiculares y extracción OCR utilizando YOLOv5 y PyQt6.',
        fullDesc: 'Desarrollé una aplicación de escritorio combinando detección de objetos YOLOv5 con easyocr. Evité bloqueos de la interfaz gráfica optimizando el preprocesamiento de imágenes (recorte de ROI y escala de grises) y procesando continuamente el bucle de eventos de PyQt6.',
        techStack: ['Python', 'YOLOv5', 'PyQt6', 'easyocr', 'OpenCV'],
        metrics: [
          'Detección de placas vehiculares de alta confianza (umbral >0.8)',
          'Integración fluida con transmisión de video continuo sin congelar la UI'
        ]
      },
      {
        id: 'ai-class-assistant',
        title: 'Asistente de IA Local',
        category: 'ai-cloud',
        featured: false,
        icon: 'fa-robot',
        repoUrl: 'https://github.com/Just-a-Spider/AI_Assistant_For_Class',
        subtitle: 'Asistente de Voz de Escritorio y Automatización de Acciones del Sistema',
        shortDesc: 'Asistente virtual de escritorio para automatizar comandos del sistema operativo, navegación web y transcripción de voz con modelos de OpenAI.',
        fullDesc: 'Desarrollé una aplicación en PyQt6 para automatización de flujos de trabajo en lenguaje natural. Delegué la captura de audio y transcripción en hilos de trabajo en segundo plano, e integré atajos de teclado globales con pynput para alternar la grabación sin congelar la interfaz.',
        techStack: ['Python', 'PyQt6', 'OpenAI Whisper', 'pynput', 'Threading'],
        metrics: [
          'Cero bloqueos de interfaz durante transcripciones en la nube y consultas a modelos',
          'Atajos globales de teclado para grabación instantánea de voz en todo el entorno de escritorio'
        ]
      },
      {
        id: 'gatilin-digital',
        title: 'Gatilín Digital',
        category: 'fullstack',
        featured: false,
        badge: 'Reconocimiento Municipal',
        icon: 'fa-map-marked-alt',
        subtitle: 'Portal de Seguimiento de Cofradías y Documentación Cultural',
        shortDesc: 'Plataforma móvil y portal histórico para seguimiento de cofradías durante el Festival de Negritos de Huánuco 2024.',
        fullDesc: 'Diseñé e implementé un portal público de seguimiento y gestión para el patrimonio cultural regional. Construido con Django REST Framework y Angular 16 sobre PostgreSQL. Reconocimiento oficial otorgado por la Municipalidad Distrital de Amarilis.',
        techStack: ['Angular 16', 'Django REST Framework', 'PostgreSQL', 'Heroku', 'TailwindCSS'],
        metrics: [
          'Seguimiento en vivo y coordinación de recorridos durante la festividad regional',
          'Diploma de reconocimiento oficial emitido por la Municipalidad Distrital de Amarilis'
        ]
      },
      {
        id: 'estructura-datos',
        title: 'Compendio de Estructura de Datos',
        category: 'systems',
        featured: false,
        icon: 'fa-terminal',
        subtitle: 'Plataforma Algorítmica y Motor de Ejecución de Código en Sandbox',
        shortDesc: 'Plataforma web con sandbox en el backend para compilar y ejecutar algoritmos en C++ y Python de forma interactiva y segura.',
        fullDesc: 'Construí un compendio interactivo para estudiantes universitarios con entorno de ejecución remota segura. Utilicé g++ con subprocess y pexpect en Django para compilar y ejecutar algoritmos con límites de tiempo y captura de salidas.',
        techStack: ['Django', 'PostgreSQL', 'C++ (g++)', 'Python', 'pexpect', 'subprocess'],
        metrics: [
          'Compilación y ejecución interactiva de algoritmos en C++ y Python en un entorno controlado',
          'Traducción algorítmica dual y modelado de datos escalable'
        ]
      }
    ],
    skillsList: [
      {
        name: 'Sistemas Backend y Nube',
        icon: 'fa-server',
        skills: [
          { name: 'Django & DRF', level: 'Avanzado', highlight: true },
          { name: 'FastAPI (Python)', level: 'Avanzado', highlight: true },
          { name: 'PostgreSQL (pgvector / HNSW)', level: 'Avanzado', highlight: true },
          { name: 'Firebase Cloud Functions & Pub/Sub', level: 'Avanzado', highlight: true },
          { name: 'Docker & Google Cloud Run', level: 'Avanzado', highlight: true },
          { name: 'Hetzner Cloud y Sysadmin Linux', level: 'Intermedio' }
        ]
      },
      {
        name: 'Programación de Sistemas y Bajo Nivel',
        icon: 'fa-microchip',
        skills: [
          { name: 'Rust (axum, tokio, evdev)', level: 'Intermedio', highlight: true },
          { name: 'Linux OS (udev, systemd, empaquetado RPM)', level: 'Avanzado', highlight: true },
          { name: 'C / C++ (devkitARM, libctru)', level: 'Intermedio', highlight: true },
          { name: 'D-Bus / MPRIS y Wayland Screencast', level: 'Intermedio' },
          { name: 'WebSockets y Protocolos TCP', level: 'Avanzado' }
        ]
      },
      {
        name: 'Frontend e Interfaces Reactivas',
        icon: 'fa-code',
        skills: [
          { name: 'Angular (Signals, v16-v19)', level: 'Avanzado', highlight: true },
          { name: 'TypeScript y JavaScript Moderno', level: 'Avanzado', highlight: true },
          { name: 'PrimeNG y TailwindCSS', level: 'Avanzado', highlight: true },
          { name: 'HTML5 y CSS3 Moderno', level: 'Avanzado' },
          { name: 'Aplicaciones de Escritorio PyQt6', level: 'Avanzado' }
        ]
      },
      {
        name: 'IA, Modelos de Lenguaje y Visión',
        icon: 'fa-brain',
        skills: [
          { name: 'RAG y Búsqueda Semántica Vectorial', level: 'Avanzado', highlight: true },
          { name: 'API de Gemini e Integración de LLMs', level: 'Avanzado', highlight: true },
          { name: 'Ollama y Flujos con Modelos Locales', level: 'Avanzado', highlight: true },
          { name: 'Visión Computacional YOLOv5 y OCR', level: 'Intermedio' }
        ]
      }
    ],
    experiencesList: [
      {
        role: 'Desarrollador Full-Stack y Líder Técnico',
        company: 'Kuantum Innovations',
        period: 'Feb 2025 – Jun 2026',
        location: 'Perú (Remoto)',
        highlights: [
          'Único recurso técnico responsable de la arquitectura, desarrollo y despliegue de la plataforma Kuantum Educa desde cero.',
          'Diseñé un procesamiento asíncrono y escalable con Firebase Cloud Functions y Pub/Sub, garantizando cero latencia en interfaz durante picos de simulacros.',
          'Implementé microservicio en FastAPI sobre Google Cloud Run con PostgreSQL (pgvector) para pagos seguros y RAG semántico conectando más de 200 programas académicos.',
          'Desarrollé panel administrativo reactivo con Angular 19 Signals y PrimeNG para gestión en tiempo real.'
        ],
        stack: ['Angular 19', 'FastAPI', 'Firebase Functions', 'Pub/Sub', 'PostgreSQL (pgvector)', 'Google Cloud Run', 'Docker']
      },
      {
        role: 'Desarrollador Full-Stack y Administración de Infraestructura',
        company: 'Plataforma E-learning "Comienza Pro"',
        period: 'Ago 2025 – Nov 2025',
        location: 'Perú (Remoto)',
        highlights: [
          'Aprovisioné, configuré y administré la infraestructura de e-learning Moodle en la nube de Hetzner para 9 cursos especializados.',
          'Personalicé servicios web, optimicé el rendimiento de la base de datos y mantuve 99.9% de disponibilidad para los estudiantes.'
        ],
        stack: ['Hetzner Cloud', 'Moodle', 'PHP', 'MySQL', 'Linux', 'Apache']
      }
    ],
    recognitionsList: [
      { title: '1er Puesto — Concurso de Programación', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-trophy' },
      { title: '1er Puesto — Concurso de Innovación Pitch Day', entity: 'Universidad de Huánuco', date: 'Nov 2023', icon: 'fa-award' },
      { title: 'Reconocimiento Oficial por Gatilín Digital', entity: 'Municipalidad Distrital de Amarilis', date: 'Feb 2024', icon: 'fa-certificate' }
    ]
  }
};

export class TranslationService {
  private readonly _lang = signal<Lang>('en');
  readonly currentLang = this._lang.asReadonly();
  readonly t = () => TRANSLATIONS[this._lang()];

  setLang(lang: Lang) {
    this._lang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  }

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang') as Lang;
      if (saved === 'en' || saved === 'es') {
        this._lang.set(saved);
      }
    }
  }
}
