import { TranslationSchema } from './types';

export const TRANSLATIONS_EN: TranslationSchema = {
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
    badge: 'OPEN TO WORK · FULL-STACK & SYSTEMS DEVELOPER',
    titleMain: 'High-Precision Engineering,',
    titleHighlight: 'AI Platforms & Low-Level Systems',
    titleSuffix: 'Architected with Technical Rigor',
    subtitle: 'Systems engineer with 1.5+ years of practical experience developing reactive Angular applications, FastAPI services, semantic pgvector architectures, and embedded Linux/C systems. Author of @just-a-spider/blobatar-ng on npm. Final-year Systems Engineering student at Universidad de Huánuco (Upper Third).',
    viewProjectsBtn: 'Explore Systems',
    downloadCvBtn: 'Download CV (PDF)',
    copyEmailBtn: 'Copy Email',
    copiedToast: 'Email copied to clipboard!',
    metrics: [
      { val: '1.5+', unit: 'Years', lbl: 'Full-Stack & Systems Engineering' },
      { val: '10th', unit: 'Cycle', lbl: 'Systems Engineering (UDH · Upper Third)' },
      { val: 'NPM', unit: 'Package', lbl: '@just-a-spider/blobatar-ng' },
      { val: 'Python · Angular · C/Rust', unit: '', lbl: 'FastAPI, Signals & Systems' }
    ]
  },
  about: {
    tag: 'ABOUT ME',
    title: 'Engineering Profile & Technical Capabilities',
    subtitle: 'A disciplined approach to software development focused on pragmatic architectures, mathematical correctness, and rapid low-level adaptability.',
    pillars: [
      {
        icon: 'fa-cubes',
        title: 'Full-Stack & Parametric CAD Systems',
        desc: 'Designing end-to-end web architectures: Angular 22 with Signals for high-performance reactive frontends, Server-Driven UI (SDUI), and FastAPI backends outputting production DXF vector graphics.'
      },
      {
        icon: 'fa-brain',
        title: 'AI, RAG & Vector Search',
        desc: 'Implementing multi-service retrieval systems using PostgreSQL 17 pgvector (HNSW), Gemini LLM integrations, real-time SSE typewriter streaming, and Redis Streams telemetry pipelines.'
      },
      {
        icon: 'fa-microchip',
        title: 'Low-Level Systems & Embedded Telemetry',
        desc: 'Curious about system internals: C socket clients on Nintendo 3DS (libctru), Rust Tokio concurrency, Linux /dev/uinput driver emulation, and native RPM packaging.'
      },
      {
        icon: 'fa-code-branch',
        title: 'Open Source & Package Authorship',
        desc: 'Author of @just-a-spider/blobatar-ng on npm (Angular adapter for Alain00\'s blobatar with upstream PR submitted), emphasizing clean API contracts and zero-dependency Signals state.'
      }
    ]
  },
  projects: {
    tag: 'PORTFOLIO',
    title: 'Featured Projects & Systems',
    subtitle: 'Parametric CAD engineering, low-level telemetry, open-source libraries, and AI vector platforms.',
    all: 'All Projects',
    fullstack: 'Full-Stack & CAD',
    systems: 'Systems & Embedded',
    aiCloud: 'AI & Cloud',
    featuredBadge: 'Featured System',
    viewArch: 'View Details',
    liveDemo: 'Live Demo',
    repo: 'Source Code',
    npm: 'NPM Package',
    keyHighlights: 'Key Engineering Highlights',
    tabFlow: 'System Flow',
    tabDecisions: 'Architectural Decisions'
  },
  playground: {
    tag: 'LIVE COMPONENT PLAYGROUND',
    title: 'Interactive @just-a-spider/blobatar-ng Sandbox',
    subtitle: 'Type any seed string into the text box below to watch deterministic geometric SVG avatar generation in real time with pointer gaze tracking and facial expressions.',
    seedLabel: 'Input Seed String:',
    seedPlaceholder: 'Type any word, name, or hash (e.g. spider)...',
    expressionLabel: 'Select Facial Expression:',
    gazeLabel: 'Pointer Gaze',
    animateLabel: 'Idle Motion',
    copyBtn: 'Copy Install Command',
    copiedToast: 'Copied: pnpm add @just-a-spider/blobatar-ng blobatar',
    activeGaze: 'gaze: active',
    clickToCycle: 'click avatar to cycle expression'
  },
  skills: {
    tag: 'TECHNICAL SKILLS',
    title: 'Skills & Technology Stack',
    subtitle: 'Grounded technical capabilities across modern web development, cloud services, and low-level engineering tools.'
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
    desc: 'Available for Junior Full-Stack Developer, Backend Engineer, or Systems Developer roles (Remote across Americas/Global or Hybrid in Peru).',
    emailLabel: 'Direct Email',
    locationLabel: 'Location & Timezone',
    availabilityLabel: 'Status',
    availabilityValue: 'Open to Opportunities (Immediate)',
    targetRolesLabel: 'Target Roles',
    targetRolesValue: 'Junior Full-Stack / Backend / Systems Engineer',
    copyEmail: 'Copy Email',
    sendEmail: 'Send Email'
  },
  modal: {
    architectureTitle: 'Architecture & Technical Overview',
    keyDecisions: 'Key Engineering Highlights',
    techStack: 'Technologies Used',
    metrics: 'Outcomes & Metrics',
    repo: 'View Repository',
    liveDemo: 'Visit Live Platform',
    npm: 'View on NPM Registry',
    close: 'Close'
  },
  projectsList: [
    {
      id: 'estructuras-peru-cad',
      title: 'Estructuras Peru CAD',
      category: 'fullstack',
      subtitle: 'Parametric Structural Detailing & Vector CAD Platform (RNE E.060)',
      shortDesc: 'Engineering platform for real-time parametric structural calculation, interactive SVG CAD generation, production DXF R2018 export, and AutoLISP script generation.',
      fullDesc: 'Architected a full-stack parametric engineering system compliant with the Peruvian National Building Code (RNE E.060 / E.050). The Angular 22 Signals frontend features an interactive 2D SVG CAD canvas with infinite pan, zoom, and live world coordinate tracking, driven by Server-Driven UI (SDUI) dynamic forms. The FastAPI backend employs a domain plugin architecture isolating structural physics, dynamic forms, and drafting routines, generating high-precision DXF R2018 drawings and executable AutoLISP scripts for AutoCAD & Civil 3D.',
      techStack: ['Angular 22 (Signals)', 'FastAPI (Python 3.13)', 'SVG CAD Engine', 'DXF R2018 Serializer', 'AutoLISP Formatter', 'Redis Token Bucket', 'Supabase RLS', 'RNE E.060'],
      metrics: [
        'Interactive 2D vector CAD canvas (SVG) with infinite pan, zoom, and live world coordinate tracking',
        'Automated 4-scene structural package: Plan View, Section 1-1, Section A-A, and Cuadro Técnico schedule',
        'Automated material takeoffs: concrete volume (m³), steel weight (kg), and formwork area (m²)',
        'Distributed Redis Token Bucket rate limiting across account tiers'
      ],
      badge: 'Architecture Case Study · Private System',
      featured: true,
      icon: 'fa-drafting-compass',
      architectureDetails: {
        flow: [
          'Structural dimensions and loads entered via dynamic Server-Driven UI (SDUI) in Angular 22 frontend',
          'Debounced calculation trigger dispatched to FastAPI domain physics plugin under Python 3.13',
          'Backend computes reinforcement physics, shear/bending capacities, and generates 4 normalized CAD scenes',
          'Vector geometry rendered to interactive SVG viewport with real-time dimensions and section cuts',
          'One-click export compiles DXF R2018 structural layers or executable AutoLISP scripts for AutoCAD / Civil 3D'
        ],
        keyDecisions: [
          'Domain plugin architecture isolates code formulas from drafting generators and form contracts',
          'SVG-based rendering eliminates canvas rasterization blur while preserving native DOM interaction',
          'Token bucket rate limiter backed by Redis guarantees compute protection across multi-tier accounts',
          'Strict adherence to Peruvian structural codes (RNE E.060 Concrete & E.050 Soils/Foundations)'
        ]
      }
    },
    {
      id: 'orientate-platform',
      title: 'OrientaTe Platform',
      category: 'ai-cloud',
      subtitle: 'AI Vocational Guidance & Career Intelligence Platform',
      shortDesc: 'Modular career intelligence platform designed around the OrientaTest evaluation engine, combining FastAPI, PostgreSQL pgvector embeddings, and Google Gemini AI.',
      fullDesc: 'Designing and developing the OrientaTe Platform as a scalable career intelligence ecosystem. Its initial core module, OrientaTest, conducts structured multi-dimensional vocational assessments. Employs a modern FastAPI backend with asyncpg and SQLAlchemy for asynchronous performance, Google Gemini LLM API for contextual qualitative analysis, and PostgreSQL pgvector for high-dimensional vector similarity matching against university career profiles.',
      techStack: ['Angular 22 (Signals)', 'FastAPI (Python 3.13)', 'PostgreSQL (pgvector)', 'Google GenAI (Gemini)', 'Firebase Admin', 'asyncpg', 'Docker'],
      metrics: [
        'High-dimensional semantic vector search matching student profiles against career databases using pgvector',
        'Contextual guidance analysis and qualitative reasoning via Google Gemini integration',
        'Fully asynchronous non-blocking backend pipeline powered by asyncpg and FastAPI',
        'Modular platform architecture designed for multi-institution scaling from OrientaTest engine'
      ],
      badge: 'Active Development · Private Beta',
      featured: true,
      icon: 'fa-compass',
      architectureDetails: {
        flow: [
          'Student completes multi-attribute RIASEC and psychometric assessments in Angular 22 interface',
          'FastAPI async engine validates submissions and persists state via asyncpg and PostgreSQL',
          'Google GenAI embedding model generates dense representation of user aptitudes and interests',
          'pgvector executes cosine similarity search across indexed national career knowledge bases',
          'Gemini LLM synthesizes personalized qualitative guidance report with strengths and career paths'
        ],
        keyDecisions: [
          'pgvector vector indexing replaces rigid score matrices with nuanced semantic similarity',
          'Decoupled platform design isolates the OrientaTest engine to enable future institutional modules',
          'asyncpg connection pooling eliminates I/O bottlenecks during concurrent class evaluations',
          'Firebase Admin handles secure token authentication across student and counselor roles'
        ]
      }
    },
    {
      id: 'sysmon-3ds',
      title: 'SysMon — 3DS Systems Companion',
      category: 'systems',
      subtitle: 'Low-Level PC Telemetry & Input Injection via 3DS',
      shortDesc: 'Systems programming project converting a Nintendo 3DS into a secondary hardware monitor and macro pad over Wi-Fi using Rust (Tokio) and C.',
      fullDesc: 'Built to explore low-level systems programming, networking, and Linux kernel drivers. Developed a multi-threaded Rust server with Tokio to gather live hardware stats and virtualize input events via /dev/uinput. Wrote a low-overhead C client for the 3DS using devkitARM with zero-heap TCP packet parsing.',
      techStack: ['Rust (Tokio)', 'C (devkitARM)', 'Linux /dev/uinput', 'evdev', 'sysinfo', 'Linux RPM'],
      metrics: [
        'Sub-millisecond local network response time (<1ms)',
        'Zero-heap string and packet parsing in C (libctru)',
        'Linux kernel input injection via /dev/uinput and evdev',
        'Packaged as a native Fedora/RHEL RPM package'
      ],
      repoUrl: 'https://github.com/Just-a-Spider/SysMon',
      badge: 'Architecture Case Study · Public System',
      featured: true,
      icon: 'fa-terminal',
      architectureDetails: {
        flow: [
          'Nintendo 3DS client initializes network sockets and renders hardware dashboard via libctru/citro2d',
          'Low-overhead C client establishes bidirectional TCP socket stream with host PC over local Wi-Fi',
          'Multi-threaded Rust daemon powered by Tokio polls CPU/GPU/RAM metrics using sysinfo crate',
          'Physical button presses and touchscreen inputs on 3DS packaged into compact zero-heap binary frames',
          'Rust server decodes incoming input packets and writes kernel events directly to Linux /dev/uinput via evdev'
        ],
        keyDecisions: [
          'Tokio asynchronous runtime manages non-blocking multi-client telemetry loops without latency spikes',
          'Zero-heap C packet parser avoids fragmentation on Nintendo 3DS 128MB FCRAM memory budget',
          'Linux /dev/uinput kernel driver emulation creates virtual gamepads/macros without third-party drivers',
          'Packaged with native Fedora/RHEL RPM spec files for systemd service auto-start'
        ]
      }
    },
    {
      id: 'blobatar-ng',
      title: '@just-a-spider/blobatar-ng',
      category: 'fullstack',
      subtitle: 'Angular Adapter for Deterministic Geometric SVG Avatars',
      shortDesc: 'Published open-source npm library adapting Alain00\'s blobatar for Angular. Features Signals reactivity, pointer gaze tracking, and 14 animated facial expressions.',
      fullDesc: 'Authored and published the Angular adapter for Alain00\'s open-source blobatar project (@just-a-spider/blobatar-ng on npm, with upstream PR submitted). Built with Angular Signals for lightweight, reactive SVG avatar rendering with zero unnecessary change detection cycles. Features real-time cursor/pointer gaze tracking, CSS keyframe idle animations, custom SVG content projection, 14 built-in expressions, and customizable color palettes.',
      techStack: ['Angular Signals', 'TypeScript', 'SVG Generation', 'NPM Registry', 'Gaze Tracking', 'CSS Keyframes'],
      metrics: [
        'Published on npm as @just-a-spider/blobatar-ng (Angular adapter for Alain00\'s blobatar, PR submitted upstream)',
        'Driven entirely by Angular Signals for optimal change detection and rendering performance',
        'Real-time pointer and cursor gaze tracking calculating relative angle and pupil positioning',
        'Built-in catalog of 14 dynamic expressions and support for child SVG content projection'
      ],
      liveUrl: 'https://www.npmjs.com/package/@just-a-spider/blobatar-ng',
      repoUrl: 'https://github.com/Just-a-Spider/blobatar-ng',
      npmUrl: 'https://www.npmjs.com/package/@just-a-spider/blobatar-ng',
      badge: 'Open Source NPM Library',
      featured: true,
      icon: 'fa-cube'
    },
    {
      id: 'cripto-3ds',
      title: 'Cripto-3DS',
      category: 'systems',
      subtitle: 'Binance Crypto Bot & Nintendo 3DS Real-Time Monitor',
      shortDesc: 'Algorithmic cryptocurrency trading engine (Python/FastAPI) and Nintendo 3DS homebrew application (C/libctru) deployed 24/7 on an Android Termux server with Gemini AI.',
      fullDesc: 'A high-performance algorithmic trading system and embedded hardware companion. Includes a dedicated Nintendo 3DS homebrew client written in C with libctru using Berkeley TCP sockets for hardware-button trade confirmations and live market telemetry. The trading engine runs 24/7 on a low-power Motorola Moto E20 Android host via Termux, broadcasting real-time REST and WebSocket feeds. Integrated with an interactive Discord Gateway bot for approvals and charts, and Google Gemini AI for contextual quantitative risk evaluations.',
      techStack: ['C (libctru)', 'Berkeley Sockets', 'Python (FastAPI)', 'Android (Termux)', 'Discord Gateway API', 'Gemini AI'],
      metrics: [
        'Sub-millisecond TCP telemetry between Nintendo 3DS client and Android server via Berkeley sockets',
        '24/7 continuous autonomous trading engine running on low-power Moto E20 Android host via Termux',
        'Interactive Discord Gateway bot with candlestick chart rendering and Gemini AI risk analysis',
        'Rigorous automated test suite (17/17 passing tests in pytest verifying algorithmic engine)'
      ],
      repoUrl: 'https://github.com/Just-a-Spider/Cripto-3DS',
      badge: 'Public Systems Project',
      featured: true,
      icon: 'fa-gamepad'
    },
    {
      id: 'hco-ai-news',
      title: 'Huanuco AI News',
      category: 'ai-cloud',
      subtitle: 'Regional AI Journalism & Semantic RAG Platform',
      shortDesc: 'Full-scale RAG journalism platform powered by 8 containerized microservices, Angular 22 SSR, PostgreSQL 17 pgvector (3,072-dim), Redis Streams, and Caddy 2.',
      fullDesc: 'Engineered an intelligent regional journalism platform for central Peru and the Amazon basin. Orchestrated 8 containerized microservices: an Angular 22 SSR public feed with Newsprint editorial design, a dedicated Chat Studio with real-time SSE typewriter streaming and split-view citation inspection, a FastAPI Clean Architecture backend with dynamic scraper catalogs, PostgreSQL 17 with 3,072-dimension HNSW pgvector indexing (gemini-embedding-001), Redis Streams for telemetry (retrieval rate, TTFT), and Caddy 2 with HTTP/3.',
      techStack: ['Angular 22 SSR (Signals)', 'FastAPI (Clean Arch)', 'PostgreSQL 17 (pgvector)', 'Redis Streams', 'Caddy 2 (HTTP/3)', 'Docker (8 Services)', 'Supabase Auth'],
      metrics: [
        '8 containerized microservices orchestrated via Docker Compose and Caddy 2 HTTP/3 reverse proxy',
        'Dense 3,072-dimension vector embeddings using PostgreSQL 17 pgvector with HNSW index',
        'Angular 22 SSR with httpResource reactivity and real-time SSE typewriter chat streaming',
        'Redis Streams telemetry monitoring retrieval precision, TTFT (time-to-first-token), and user quotas'
      ],
      badge: 'Architecture Case Study · Private System',
      featured: false,
      icon: 'fa-newspaper',
      architectureDetails: {
        flow: [
          'Dynamic scrapers index regional press feeds and ingest articles into PostgreSQL 17',
          'Embedding pipeline produces 3,072-dimension vector representations via gemini-embedding-001',
          'HNSW index in pgvector executes sub-second semantic retrieval across thousands of news reports',
          'Chat Studio streams AI-synthesized responses via Server-Sent Events (SSE) typewriter effect',
          'Split-view citation inspector allows users to verify original sources directly alongside answers'
        ],
        keyDecisions: [
          'Clean Architecture separates domain logic from infrastructure, scrapers, and AI providers',
          'Angular 22 SSR delivers instant First Contentful Paint (FCP) and optimal editorial SEO',
          'Redis Streams decouples analytics collection from user-facing query latency',
          'Caddy 2 automates TLS certificate lifecycle and enables low-latency HTTP/3 transport'
        ]
      }
    },
    {
      id: 'kuantum-educa',
      title: 'Kuantum Educa Platform',
      category: 'fullstack',
      subtitle: 'Full-Stack Exam Prep & Simulation Platform',
      shortDesc: 'Production web platform built with Angular 19, FastAPI on Google Cloud Run, and Firebase Pub/Sub for asynchronous simulation handling (Core Architect Feb 2025 – Aug 2026).',
      fullDesc: 'Sole architect and foundational developer of Kuantum Educa from scratch. Built a decoupled system where student exam submissions are queued via Firebase Pub/Sub for reliable asynchronous aggregation during traffic spikes. Developed a Dockerized FastAPI backend deployed on Google Cloud Run for transaction and user management. In August 2026, successfully handed off the stable core platform architecture to the internal engineering team.',
      techStack: ['Angular 19', 'Signals', 'FastAPI (Python)', 'Firebase Pub/Sub', 'Google Cloud Run', 'PostgreSQL', 'Docker'],
      metrics: [
        'Asynchronous simulation aggregation via Firebase Pub/Sub handling concurrent exam submissions',
        'FastAPI microservice containerized with Docker on Google Cloud Run with autoscaling',
        'Foundational architecture developed and maintained until August 2026 handoff to internal team',
        'Reactive administrative UI built with Angular 19 Signals & PrimeNG'
      ],
      liveUrl: 'https://kuantumeduca.com',
      badge: 'Production Platform · Core Handed Off Aug 2026',
      featured: false,
      icon: 'fa-graduation-cap'
    },
    {
      id: 'qr-plates-tickets',
      title: 'QR-Plates-Tickets (Papeletas)',
      category: 'ai-cloud',
      subtitle: 'Computer Vision Plate Detection & Infraction System',
      shortDesc: 'Automated traffic ticketing proof of concept integrating YOLOv5 vehicle plate detection, EasyOCR, and QR code verification.',
      fullDesc: 'Developed a computer vision pipeline for automated digital traffic ticket issuance. Utilizes custom YOLOv5 weights for vehicle and license plate bounding box detection, integrated EasyOCR/Tesseract for character extraction, and camera stream ingestion for QR code ticket verification.',
      techStack: ['Python', 'YOLOv5', 'OpenCV', 'QR Detection', 'EasyOCR / Tesseract', 'SQLite'],
      metrics: [
        'Integrated YOLOv5 object detection model with optical character extraction',
        'Automated QR ticket cross-referencing and data verification pipeline',
        'Modular camera selector and image processing datahandler'
      ],
      repoUrl: 'https://github.com/Just-a-Spider/QR-Plates-Tickets',
      badge: 'Computer Vision Tool',
      featured: false,
      icon: 'fa-camera'
    },
    {
      id: 'gatilin-digital',
      title: 'Gatilín Digital',
      category: 'fullstack',
      subtitle: 'Cultural Festivity Tracking & Documentation Platform',
      shortDesc: 'Web application and documentation platform for dance cofradías during Festival de los Negritos de Huánuco 2024, built with Django REST Framework, Angular 16, and PostgreSQL on Heroku.',
      fullDesc: 'Developed a cultural documentation and real-time tracking web application for dance cofradías during the Festival de los Negritos de Huánuco 2024. Built with Django REST Framework for the backend API and Angular 16 for the responsive frontend, backed by PostgreSQL and deployed on Heroku. Officially recognized by the District Municipality of Amarilis.',
      techStack: ['Django REST Framework', 'Angular 16', 'PostgreSQL', 'Heroku', 'TypeScript'],
      metrics: [
        'Official Municipal Recognition Diploma (Municipalidad Distrital de Amarilis, 2024)',
        'Real-time itinerary and route tracking for participating dance cofradías',
        'Historical documentation and cultural schedule archive'
      ],
      badge: 'Official Municipal Recognition',
      featured: false,
      icon: 'fa-map-marked-alt'
    }
  ],
  skillsList: [
    {
      name: 'Core Web & Backend',
      badge: 'Core Daily Stack',
      icon: 'fa-server',
      desc: 'Designing modular REST APIs, clean database schemas, and reactive web applications.',
      skills: [
        { name: 'Angular 22 (Signals)', highlight: true },
        { name: 'FastAPI (Python)', highlight: true },
        { name: 'PostgreSQL & pgvector', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'Python 3.13', highlight: true },
        { name: 'Django & DRF', highlight: true },
        { name: 'TailwindCSS', highlight: true },
        { name: 'Server-Driven UI (SDUI)' },
        { name: 'RESTful APIs' },
        { name: 'SQLite' }
      ]
    },
    {
      name: 'AI, RAG & Vector Systems',
      badge: 'AI & Data Architecture',
      icon: 'fa-brain',
      desc: 'Vector databases, dense embedding retrieval, and contextual LLM platform engineering.',
      skills: [
        { name: 'pgvector (HNSW Indexing)', highlight: true },
        { name: 'Google GenAI (Gemini)', highlight: true },
        { name: 'RAG Architecture', highlight: true },
        { name: 'SSE Typewriter Streaming', highlight: true },
        { name: 'Redis Streams Telemetry' },
        { name: 'OpenAI Whisper API' },
        { name: 'YOLOv5 Computer Vision' },
        { name: 'OpenCV Basics' }
      ]
    },
    {
      name: 'Systems, Embedded & CAD',
      badge: 'Low-Level & Engineering',
      icon: 'fa-microchip',
      desc: 'Exploring operating systems, embedded hardware companions, and CAD file formats.',
      skills: [
        { name: 'C (libctru / devkitARM)', highlight: true },
        { name: 'Rust (Tokio async)', highlight: true },
        { name: 'DXF R2018 Generation', highlight: true },
        { name: 'AutoLISP Scripting', highlight: true },
        { name: 'Linux /dev/uinput Emulation' },
        { name: 'Berkeley Sockets TCP' },
        { name: 'Go Tooling Basics' },
        { name: 'Linux RPM Packaging' }
      ]
    },
    {
      name: 'Cloud, DevOps & Infrastructure',
      badge: 'Cloud & Operations',
      icon: 'fa-cloud',
      desc: 'Deploying containerized microservices and managing cloud server environments.',
      skills: [
        { name: 'Docker & Compose', highlight: true },
        { name: 'Google Cloud Run', highlight: true },
        { name: 'Caddy 2 (HTTP/3)', highlight: true },
        { name: 'Firebase Pub/Sub & Admin', highlight: true },
        { name: 'Linux Administration' },
        { name: 'Git & GitHub' },
        { name: 'Hetzner Cloud' },
        { name: 'Nginx' }
      ]
    }
  ],
  experiencesList: [
    {
      role: 'Full-Stack Developer & Foundational Architect',
      company: 'Kuantum Innovation',
      period: 'Feb 2025 – Aug 2026',
      location: 'Peru (Remote)',
      highlights: [
        'Sole architect and foundational developer of Kuantum Educa from scratch, designing database schema and API contracts.',
        'Architected event-driven backend using Firebase Cloud Functions and Pub/Sub to asynchronously process concurrent simulation submissions.',
        'Built and deployed containerized FastAPI microservices on Google Cloud Run for transactional PostgreSQL workloads.',
        'Designed and validated semantic career matching module with PostgreSQL pgvector in staging environments.',
        'Successfully completed knowledge transfer and handoff of the stable core platform architecture to the internal team in August 2026.'
      ],
      stack: ['Angular 19', 'Signals', 'FastAPI', 'Python', 'Firebase Pub/Sub', 'PostgreSQL', 'Docker', 'Cloud Run']
    },
    {
      role: 'Full-Stack Developer & Cloud Admin',
      company: '"Comienza Pro" E-Learning Platform',
      period: 'Aug 2025 – Nov 2025',
      location: 'Peru (Remote)',
      highlights: [
        'Managed cloud provisioning, Linux system configuration, and ongoing maintenance of Hetzner Cloud virtual instances.',
        'Customized and administered e-learning platform supporting 9 specialized courses with intuitive responsive interface.'
      ],
      stack: ['Linux', 'Hetzner Cloud', 'Moodle', 'PHP', 'MySQL', 'Nginx']
    }
  ],
  recognitionsList: [
    {
      title: '1st Place — Programming Contest',
      entity: 'Universidad de Huánuco (UDH)',
      date: '2023',
      icon: 'fa-trophy'
    },
    {
      title: '1st Place — I Innovation & Research Project Competition "Pitch Day 2023"',
      entity: 'Universidad de Huánuco (UDH)',
      date: '2023',
      icon: 'fa-medal'
    },
    {
      title: 'Recognition Diploma for Technological Contribution ("Gatilín Digital")',
      entity: 'District Municipality of Amarilis',
      date: '2024',
      icon: 'fa-award'
    }
  ]
};
