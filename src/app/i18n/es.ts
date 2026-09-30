import { TranslationSchema } from './types';

export const TRANSLATIONS_ES: TranslationSchema = {
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
    badge: 'DISPONIBLE PARA TRABAJAR · DESARROLLADOR FULL-STACK Y SISTEMAS',
    titleMain: 'Ingeniería de Precisión,',
    titleHighlight: 'Plataformas de IA y Sistemas de Bajo Nivel',
    titleSuffix: 'Construidos con Rigor Técnico',
    subtitle: 'Ingeniero de sistemas con más de 1.5 años de experiencia desarrollando aplicaciones reactivas en Angular, microservicios en FastAPI, arquitecturas semánticas con pgvector y sistemas embebidos en Linux/C. Autor de @just-a-spider/blobatar-ng en npm. Estudiante de 10mo ciclo en la Universidad de Huánuco (Tercio Superior).',
    viewProjectsBtn: 'Ver Proyectos',
    downloadCvBtn: 'Descargar CV (PDF)',
    copyEmailBtn: 'Copiar Correo',
    copiedToast: '¡Correo copiado al portapapeles!',
    metrics: [
      { val: '1.5+', unit: 'Años', lbl: 'Experiencia Web y Sistemas' },
      { val: '10mo', unit: 'Ciclo', lbl: 'Ingeniería de Sistemas (UDH · Tercio Sup.)' },
      { val: 'NPM', unit: 'Paquete', lbl: '@just-a-spider/blobatar-ng' },
      { val: 'Python · Angular · C/Rust', unit: '', lbl: 'FastAPI, Signals y Sistemas' }
    ]
  },
  about: {
    tag: 'SOBRE MÍ',
    title: 'Perfil de Ingeniería y Capacidades Técnicas',
    subtitle: 'Un enfoque pragmático del software centrado en arquitecturas limpias, corrección matemática y rápida adaptabilidad a bajo nivel.',
    pillars: [
      {
        icon: 'fa-cubes',
        title: 'Sistemas Full-Stack y CAD Paramétrico',
        desc: 'Diseño de aplicaciones web integrales: Angular 22 con Signals para frontends de alto rendimiento, Server-Driven UI (SDUI) y backends en FastAPI con generación vectorial DXF para ingeniería civil.'
      },
      {
        icon: 'fa-brain',
        title: 'IA, RAG y Búsqueda Vectorial',
        desc: 'Implementación de sistemas de recuperación semántica con PostgreSQL 17 pgvector (HNSW), integración de LLMs con Gemini, streaming SSE typewriter en tiempo real y telemetría con Redis Streams.'
      },
      {
        icon: 'fa-microchip',
        title: 'Sistemas de Bajo Nivel y Telemetría Embebida',
        desc: 'Curiosidad constante por el funcionamiento interno: clientes socket en C para Nintendo 3DS (libctru), concurrencia en Rust Tokio, emulación de drivers de entrada en Linux con /dev/uinput y empaquetado RPM.'
      },
      {
        icon: 'fa-code-branch',
        title: 'Código Abierto y Autoría de Paquetes',
        desc: 'Autor de @just-a-spider/blobatar-ng en npm (adaptador Angular para blobatar de Alain00 con PR enviado upstream), enfocado en contratos de API limpios y reactividad nativa por Signals.'
      }
    ]
  },
  projects: {
    tag: 'PORTAFOLIO',
    title: 'Proyectos y Sistemas Destacados',
    subtitle: 'Ingeniería CAD paramétrica, telemetría de bajo nivel, librerías open-source y plataformas de IA vectorial.',
    all: 'Todos',
    fullstack: 'Full-Stack y CAD',
    systems: 'Sistemas y Embebidos',
    aiCloud: 'IA y Cloud',
    featuredBadge: 'Sistema Destacado',
    viewArch: 'Ver Detalles',
    liveDemo: 'Ver en Vivo',
    repo: 'Código Fuente',
    npm: 'Paquete NPM',
    keyHighlights: 'Aspectos Técnicos Clave',
    tabFlow: 'Flujo del Sistema',
    tabDecisions: 'Decisiones Arquitectónicas'
  },
  playground: {
    tag: 'PLAYGROUND DEL COMPONENTE EN VIVO',
    title: 'Sandbox Interactivo de @just-a-spider/blobatar-ng',
    subtitle: 'Ingresa cualquier texto en el campo inferior para ver la generación determinista de avatares SVG geométricos en tiempo real con seguimiento de puntero y expresiones.',
    seedLabel: 'Semilla / Texto de Entrada:',
    seedPlaceholder: 'Escribe cualquier palabra, nombre o hash (ej. spider)...',
    expressionLabel: 'Seleccionar Expresión Facial:',
    gazeLabel: 'Mirada por Puntero',
    animateLabel: 'Animación Idle',
    copyBtn: 'Copiar Comando de Instalación',
    copiedToast: 'Copiado: pnpm add @just-a-spider/blobatar-ng blobatar',
    activeGaze: 'mirada: activa',
    clickToCycle: 'haz clic para cambiar expresión'
  },
  skills: {
    tag: 'HABILIDADES TÉCNICAS',
    title: 'Stack Tecnológico y Competencias',
    subtitle: 'Habilidades técnicas fundamentadas en desarrollo web moderno, servicios en la nube y herramientas de ingeniería.'
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
    desc: 'Disponible para roles de Desarrollador Full-Stack Junior, Desarrollador Backend o Ingeniero de Sistemas (Remoto en América/Global o Híbrido en Perú).',
    emailLabel: 'Correo Directo',
    locationLabel: 'Ubicación y Zona Horaria',
    availabilityLabel: 'Disponibilidad',
    availabilityValue: 'Abierto a Oportunidades (Inmediata)',
    targetRolesLabel: 'Roles de Interés',
    targetRolesValue: 'Desarrollador Full-Stack / Backend / Sistemas Junior',
    copyEmail: 'Copiar Correo',
    sendEmail: 'Enviar Correo'
  },
  modal: {
    architectureTitle: 'Visión Técnica y Arquitectura',
    keyDecisions: 'Decisiones de Ingeniería Clave',
    techStack: 'Tecnologías Utilizadas',
    metrics: 'Resultados y Métricas',
    repo: 'Ver Repositorio',
    liveDemo: 'Visitar Plataforma',
    npm: 'Ver en Registro NPM',
    close: 'Cerrar'
  },
  projectsList: [
    {
      id: 'estructuras-peru-cad',
      title: 'Estructuras Peru CAD',
      category: 'fullstack',
      subtitle: 'Plataforma de Detallamiento Estructural Paramétrico y Dibujo CAD (RNE E.060)',
      shortDesc: 'Plataforma de ingeniería para cálculo estructural paramétrico en tiempo real, generación de planos vectoriales SVG, exportación DXF R2018 y scripts AutoLISP.',
      fullDesc: 'Diseñé y desarrollé un sistema paramétrico integral de ingeniería estructural alineado a las normas peruanas RNE E.060 y E.050. El frontend en Angular 22 con Signals incorpora un visor CAD vectorial interactivo en SVG con paneo y zoom infinito, seguimiento de coordenadas de mundo en tiempo real y formularios dinámicos Server-Driven UI (SDUI). El backend en FastAPI implementa una arquitectura modular de plugins de dominio, serializando paquetes de planos DXF R2018 y scripts AutoLISP ejecutables para AutoCAD y Civil 3D.',
      techStack: ['Angular 22 (Signals)', 'FastAPI (Python 3.13)', 'Motor CAD en SVG', 'Serializador DXF R2018', 'Formateador AutoLISP', 'Token Bucket en Redis', 'Supabase RLS', 'RNE E.060'],
      metrics: [
        'Visor CAD 2D vectorial interactivo en SVG con paneo, zoom y coordenadas de mundo en tiempo real',
        'Generación automática del paquete estándar de 4 escenas: Planta, Corte 1-1, Corte A-A y Cuadro Técnico',
        'Metrados de materiales automatizados: volumen de concreto (m³), peso de acero (kg) y área de encofrado (m²)',
        'Limitador de tasa distribuido Token Bucket con Redis para protección de computo según nivel de cuenta'
      ],
      badge: 'Caso de Arquitectura · Sistema Privado',
      featured: true,
      icon: 'fa-drafting-compass',
      architectureDetails: {
        flow: [
          'El ingeniero ingresa dimensiones y parámetros estructurales mediante formularios dinámicos SDUI',
          'Se despacha el cálculo con debounce al plugin de física estructural en FastAPI con Python 3.13',
          'El backend calcula armaduras, verificaciones por corte/flexión y estructura 4 escenas de dibujo',
          'La geometría vectorial se renderiza al lienzo SVG con cotas, ejes y marcas de corte en tiempo real',
          'Exportación en un clic hacia archivos DXF R2018 por capas o scripts AutoLISP ejecutables en AutoCAD'
        ],
        keyDecisions: [
          'La arquitectura de plugins de dominio aísla fórmulas normativas de serializadores de dibujo y UI',
          'El renderizado en SVG evita la pérdida de nitidez de canvas y mantiene interactividad nativa del DOM',
          'El rate limiter Token Bucket con Redis previene sobrecarga en cálculos estructurales intensivos',
          'Cumplimiento estricto del Reglamento Nacional de Edificaciones (RNE E.060 Concreto Armado y E.050 Suelos)'
        ]
      }
    },
    {
      id: 'orientate-platform',
      title: 'OrientaTe Platform',
      category: 'ai-cloud',
      subtitle: 'Plataforma de Orientación Vocacional e Inteligencia de Carrera con IA',
      shortDesc: 'Plataforma modular de orientación vocacional diseñada sobre el motor de evaluación OrientaTest, combinando FastAPI, embeddings pgvector y Google Gemini AI.',
      fullDesc: 'Diseño y desarrollo de la plataforma OrientaTe como un ecosistema modular de orientación profesional. Su módulo inicial, OrientaTest, ejecuta evaluaciones vocacionales multidimensionales estructuradas. Implementa un backend asíncrono en FastAPI con asyncpg y SQLAlchemy, análisis cualitativo contextual mediante la API de Google Gemini y búsqueda de similitud vectorial de alta dimensión con PostgreSQL pgvector contra perfiles profesionales.',
      techStack: ['Angular 22 (Signals)', 'FastAPI (Python 3.13)', 'PostgreSQL (pgvector)', 'Google GenAI (Gemini)', 'Firebase Admin', 'asyncpg', 'Docker'],
      metrics: [
        'Búsqueda semántica vectorial de alta dimensión emparejando perfiles con pgvector',
        'Razonamiento cualitativo y orientación contextual mediante integración con Google Gemini',
        'Pipeline de backend completamente asíncrono impulsado por asyncpg y FastAPI',
        'Arquitectura de plataforma desacoplada para escalar desde el motor OrientaTest'
      ],
      badge: 'En Desarrollo Activo · Beta Privada',
      featured: true,
      icon: 'fa-compass',
      architectureDetails: {
        flow: [
          'El estudiante completa evaluaciones psicométricas y RIASEC en la interfaz de Angular 22',
          'El motor asíncrono de FastAPI valida el envío y persiste las respuestas en PostgreSQL vía asyncpg',
          'El modelo de embeddings de Google GenAI genera representaciones vectoriales densas de aptitudes',
          'pgvector ejecuta búsqueda por similitud de coseno sobre la base de conocimiento de carreras',
          'Gemini sintetiza un informe cualitativo personalizado con fortalezas y opciones académicas'
        ],
        keyDecisions: [
          'La indexación vectorial con pgvector supera matrices rígidas al capturar afinidad semántica real',
          'El diseño modular desacopla OrientaTest para admitir futuros módulos institucionales',
          'El pool de conexiones con asyncpg elimina cuellos de botella de E/S durante pruebas masivas',
          'Firebase Admin gestiona tokens seguros diferenciando roles de estudiantes y orientadores'
        ]
      }
    },
    {
      id: 'sysmon-3ds',
      title: 'SysMon — Monitor y Macro Pad 3DS',
      category: 'systems',
      subtitle: 'Telemetría de PC y Control de Entrada en Linux vía 3DS',
      shortDesc: 'Proyecto personal de sistemas que convierte una Nintendo 3DS en un monitor secundario de hardware y macro pad sobre Wi-Fi usando Rust (Tokio) y C.',
      fullDesc: 'Proyecto personal desarrollado para profundizar en programación de bajo nivel, redes y controladores de Linux. Desarrollé un servidor multi-hilo en Rust con Tokio para consultar estadísticas del sistema y virtualizar entradas mediante /dev/uinput. Escribí un cliente ligero en C para la 3DS usando devkitARM con parsing de paquetes TCP sin asignación dinámica en heap.',
      techStack: ['Rust (Tokio)', 'C (devkitARM)', 'Linux /dev/uinput', 'evdev', 'sysinfo', 'Linux RPM'],
      metrics: [
        'Tiempo de respuesta en red local sub-milisegundo (<1ms)',
        'Parsing de paquetes en C sin asignaciones en heap (libctru)',
        'Virtualización de entradas en kernel Linux vía /dev/uinput y evdev',
        'Empaquetado nativo como paquete RPM para Fedora/RHEL'
      ],
      repoUrl: 'https://github.com/Just-a-Spider/SysMon',
      badge: 'Caso de Arquitectura · Sistema Público',
      featured: true,
      icon: 'fa-terminal',
      architectureDetails: {
        flow: [
          'El cliente Nintendo 3DS inicializa sockets de red y renderiza métricas en pantalla mediante libctru/citro2d',
          'El cliente en C de bajo consumo establece un flujo TCP bidireccional con la PC anfitriona vía Wi-Fi local',
          'El demonio multihilo en Rust impulsado por Tokio sondea métricas de CPU, GPU y RAM usando sysinfo',
          'Las pulsaciones de botones físicos y toques de pantalla táctil se empaquetan en tramas binarias sin heap',
          'El servidor en Rust decodifica paquetes de entrada e inyecta eventos de kernel directamente a /dev/uinput mediante evdev'
        ],
        keyDecisions: [
          'El runtime asíncrono Tokio gestiona la telemetría concurrente de baja latencia sin bloqueos de E/S',
          'El parser de paquetes en C sin asignaciones dinámicas evita fragmentar la memoria FCRAM de 128MB de la 3DS',
          'La emulación por kernel Linux /dev/uinput crea gamepads virtuales y macros sin controladores de terceros',
          'Empaquetado nativo con archivos RPM spec para Fedora/RHEL con auto-inicio mediante systemd'
        ]
      }
    },
    {
      id: 'blobatar-ng',
      title: '@just-a-spider/blobatar-ng',
      category: 'fullstack',
      subtitle: 'Adaptador Angular para Avatares SVG Geométricos Deterministas',
      shortDesc: 'Librería de código abierto publicada en npm adaptando blobatar de Alain00 para Angular. Incluye reactividad por Signals, seguimiento de mirada por cursor y 14 expresiones animadas.',
      fullDesc: 'Creé y publiqué el adaptador para Angular del proyecto de código abierto blobatar de Alain00 (@just-a-spider/blobatar-ng en npm, con pull request enviado al repositorio principal). Desarrollado con Angular Signals para renderizado SVG ultraligero y reactivo sin ciclos innecesarios de detección de cambios. Incorpora seguimiento de cursor/puntero en tiempo real, animaciones CSS fluidas, proyección de contenido SVG personalizado y 14 expresiones dinámicas.',
      techStack: ['Angular Signals', 'TypeScript', 'Generación SVG', 'Registro NPM', 'Seguimiento de Mirada', 'CSS Keyframes'],
      metrics: [
        'Publicado en npm como @just-a-spider/blobatar-ng (adaptador Angular para blobatar de Alain00, PR en revisión upstream)',
        'Impulsado completamente por Angular Signals para óptimo rendimiento y cero sobrecarga de renderizado',
        'Seguimiento de puntero y cursor en tiempo real calculando ángulos relativos de pupila y mirada',
        'Catálogo integrado de 14 expresiones emocionales y soporte para proyección de elementos SVG hijos'
      ],
      liveUrl: 'https://www.npmjs.com/package/@just-a-spider/blobatar-ng',
      repoUrl: 'https://github.com/Just-a-Spider/blobatar-ng',
      npmUrl: 'https://www.npmjs.com/package/@just-a-spider/blobatar-ng',
      badge: 'Librería Open Source NPM',
      featured: true,
      icon: 'fa-cube'
    },
    {
      id: 'cripto-3ds',
      title: 'Cripto-3DS',
      category: 'systems',
      subtitle: 'Bot Cripto Binance y Monitor en Tiempo Real en Nintendo 3DS',
      shortDesc: 'Motor de trading algorítmico (Python/FastAPI) y cliente homebrew para Nintendo 3DS (C/libctru) desplegado 24/7 en servidor Android Termux con IA Gemini.',
      fullDesc: 'Sistema de trading algorítmico de alto rendimiento y compañero embebido en hardware. Incluye una aplicación homebrew en C con libctru para Nintendo 3DS utilizando sockets Berkeley TCP para confirmaciones físicas de órdenes y telemetría de mercado en vivo. El motor opera 24/7 en un servidor de bajo consumo Motorola Moto E20 con Termux, emitiendo datos por REST y WebSockets. Integrado con bot interactivo de Discord y Google Gemini para análisis cualitativo de riesgo.',
      techStack: ['C (libctru)', 'Sockets Berkeley', 'Python (FastAPI)', 'Android (Termux)', 'API Discord Gateway', 'Gemini AI'],
      metrics: [
        'Telemetría TCP sub-milisegundo entre cliente Nintendo 3DS y servidor Android con sockets Berkeley',
        'Motor de trading autónomo operando 24/7 en servidor de bajo consumo Moto E20 con Termux',
        'Bot interactivo de Discord con generación de gráficos de velas y evaluación cuantitativa de riesgo',
        'Suite rigurosa de pruebas automatizadas (17/17 pruebas aprobadas en pytest validando el motor)'
      ],
      repoUrl: 'https://github.com/Just-a-Spider/Cripto-3DS',
      badge: 'Proyecto de Sistemas Público',
      featured: true,
      icon: 'fa-gamepad'
    },
    {
      id: 'hco-ai-news',
      title: 'Huanuco AI News',
      category: 'ai-cloud',
      subtitle: 'Plataforma de Periodismo Regional Inteligente y RAG Semántico',
      shortDesc: 'Sistema RAG completo de periodismo inteligente estructurado en 8 microservicios contenerizados, Angular 22 SSR, PostgreSQL 17 pgvector (3,072 dim), Redis Streams y Caddy 2.',
      fullDesc: 'Plataforma de periodismo regional inteligente para Huánuco y la Amazonía peruana. Opera mediante 8 microservicios contenerizados: frontend de noticias en Angular 22 SSR con diseño editorial Newsprint, Chat Studio asistido por IA con streaming SSE typewriter e inspector de citas split-view, backend FastAPI con catálogo de scrapers dinámicos, base de datos PostgreSQL 17 con embeddings de 3,072 dimensiones con pgvector e índice HNSW, telemetría con Redis Streams y Caddy 2 con soporte HTTP/3.',
      techStack: ['Angular 22 SSR (Signals)', 'FastAPI (Clean Arch)', 'PostgreSQL 17 (pgvector)', 'Redis Streams', 'Caddy 2 (HTTP/3)', 'Docker (8 Servicios)', 'Supabase Auth'],
      metrics: [
        '8 microservicios contenerizados orquestados con Docker Compose y proxy inverso Caddy 2 HTTP/3',
        'Embeddings densos de 3,072 dimensiones usando PostgreSQL 17 pgvector con índice HNSW',
        'Angular 22 SSR con reactividad por httpResource y streaming de chat en tiempo real vía SSE',
        'Telemetría en Redis Streams midiendo precisión de recuperación, TTFT y control de cuotas'
      ],
      badge: 'Caso de Arquitectura · Sistema Privado',
      featured: false,
      icon: 'fa-newspaper',
      architectureDetails: {
        flow: [
          'Scrapers dinámicos indexan fuentes de noticias regionales y las almacenan en PostgreSQL 17',
          'El pipeline genera representaciones vectoriales de 3,072 dimensiones mediante gemini-embedding-001',
          'El índice HNSW en pgvector realiza búsqueda semántica sub-segundo entre miles de artículos',
          'El Chat Studio transmite respuestas sintetizadas por IA mediante Server-Sent Events (SSE)',
          'El inspector de citas en split-view permite verificar las fuentes originales directamente en pantalla'
        ],
        keyDecisions: [
          'Clean Architecture separa la lógica de dominio de scrapers, infraestructura y proveedores de IA',
          'Angular 22 SSR garantiza carga instantánea (FCP) y posicionamiento SEO editorial óptimo',
          'Redis Streams desacopla la recolección de analíticas de la latencia percibida por el usuario',
          'Caddy 2 automatiza certificados TLS y habilita comunicación de baja latencia con HTTP/3'
        ]
      }
    },
    {
      id: 'kuantum-educa',
      title: 'Plataforma Kuantum Educa',
      category: 'fullstack',
      subtitle: 'Plataforma Web de Simulaciones y Preparación de Exámenes',
      shortDesc: 'Plataforma web en producción construida con Angular 19, FastAPI en Google Cloud Run y Firebase Pub/Sub para procesamiento asíncrono (Arquitecto Fundacional Feb 2025 – Ago 2026).',
      fullDesc: 'Único arquitecto y desarrollador de Kuantum Educa desde cero. Diseñé un sistema desacoplado donde los envíos de exámenes se encolan mediante Firebase Pub/Sub para procesamiento asíncrono durante picos de tráfico. Desarrollé un backend contenerizado en FastAPI desplegado en Google Cloud Run para transacciones y usuarios en PostgreSQL. En agosto de 2026, transferí con éxito la arquitectura estable del núcleo al equipo interno de ingeniería.',
      techStack: ['Angular 19', 'Signals', 'FastAPI (Python)', 'Firebase Pub/Sub', 'Google Cloud Run', 'PostgreSQL', 'Docker'],
      metrics: [
        'Procesamiento asíncrono de simulaciones mediante Firebase Pub/Sub durante exámenes masivos',
        'Microservicio FastAPI contenerizado con Docker en Google Cloud Run con autoescalado',
        'Arquitectura fundacional desarrollada y mantenida hasta el traspaso al equipo interno en agosto de 2026',
        'Panel administrativo reactivo desarrollado con Angular 19 Signals y PrimeNG'
      ],
      liveUrl: 'https://kuantumeduca.com',
      badge: 'Plataforma en Producción · Traspasada Ago 2026',
      featured: false,
      icon: 'fa-graduation-cap'
    },
    {
      id: 'qr-plates-tickets',
      title: 'QR-Plates-Tickets (Papeletas)',
      category: 'ai-cloud',
      subtitle: 'Sistema de Detección de Placas y Multas con Visión Computacional',
      shortDesc: 'Prueba de concepto de emisión automatizada de papeletas integrando detección YOLOv5, EasyOCR y verificación por código QR.',
      fullDesc: 'Desarrollé una solución de visión computacional para emisión automatizada de infracciones vehiculares. Utiliza un modelo YOLOv5 con pesos personalizados para detección de vehículos y matrículas, extracción de caracteres mediante EasyOCR/Tesseract y verificación cruzada de tickets con código QR.',
      techStack: ['Python', 'YOLOv5', 'OpenCV', 'Detección QR', 'EasyOCR / Tesseract', 'SQLite'],
      metrics: [
        'Modelo de detección de placas YOLOv5 integrado con extracción de texto OCR',
        'Pipeline automatizado para verificación cruzada de tickets con códigos QR',
        'Manejo modular de captura de cámara y procesamiento de imágenes'
      ],
      repoUrl: 'https://github.com/Just-a-Spider/QR-Plates-Tickets',
      badge: 'Herramienta de Visión Computacional',
      featured: false,
      icon: 'fa-camera'
    },
    {
      id: 'gatilin-digital',
      title: 'Gatilín Digital',
      category: 'fullstack',
      subtitle: 'Plataforma Web de Seguimiento y Documentación Festiva',
      shortDesc: 'Aplicación web y plataforma de documentación para cofradías durante el Festival de Negritos de Huánuco 2024, desarrollada con Django REST Framework, Angular 16 y PostgreSQL en Heroku.',
      fullDesc: 'Desarrollé una aplicación web de documentación cultural y seguimiento en tiempo real para las cofradías de danza durante el tradicional Festival de los Negritos de Huánuco 2024. Construida con Django REST Framework para la API y Angular 16 para el frontend reactivo, con base de datos PostgreSQL y despliegue en Heroku. Reconocimiento oficial otorgado por la Municipalidad Distrital de Amarilis.',
      techStack: ['Django REST Framework', 'Angular 16', 'PostgreSQL', 'Heroku', 'TypeScript'],
      metrics: [
        'Reconocimiento Oficial de la Municipalidad Distrital de Amarilis (2024)',
        'Seguimiento de rutas e itinerarios de cofradías de danza en tiempo real',
        'Archivo histórico y cronograma festivo digitalizado'
      ],
      badge: 'Reconocimiento Municipal Oficial',
      featured: false,
      icon: 'fa-map-marked-alt'
    }
  ],
  skillsList: [
    {
      name: 'Desarrollo Web y Backend',
      badge: 'Stack Principal',
      icon: 'fa-server',
      desc: 'Diseño de APIs escalables, arquitecturas modulares e interfaces web reactivas.',
      skills: [
        { name: 'Angular 22 (Signals)', highlight: true },
        { name: 'FastAPI (Python)', highlight: true },
        { name: 'PostgreSQL y pgvector', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'Python 3.13', highlight: true },
        { name: 'Django & DRF', highlight: true },
        { name: 'TailwindCSS', highlight: true },
        { name: 'Server-Driven UI (SDUI)' },
        { name: 'APIs RESTful' },
        { name: 'SQLite' }
      ]
    },
    {
      name: 'IA, RAG y Sistemas Vectoriales',
      badge: 'Arquitectura de IA y Datos',
      icon: 'fa-brain',
      desc: 'Bases de datos vectoriales, recuperación de embeddings y plataformas LLM contextuales.',
      skills: [
        { name: 'pgvector (Índice HNSW)', highlight: true },
        { name: 'Google GenAI (Gemini)', highlight: true },
        { name: 'Arquitectura RAG', highlight: true },
        { name: 'Streaming SSE Typewriter', highlight: true },
        { name: 'Telemetría en Redis Streams' },
        { name: 'API OpenAI Whisper' },
        { name: 'YOLOv5 Visión Computacional' },
        { name: 'Fundamentos de OpenCV' }
      ]
    },
    {
      name: 'Sistemas, Embebidos y CAD',
      badge: 'Bajo Nivel e Ingeniería',
      icon: 'fa-microchip',
      desc: 'Exploración de sistemas operativos, hardware embebido y formatos CAD.',
      skills: [
        { name: 'C (libctru / devkitARM)', highlight: true },
        { name: 'Rust (Tokio async)', highlight: true },
        { name: 'Generación DXF R2018', highlight: true },
        { name: 'Scripting AutoLISP', highlight: true },
        { name: 'Emulación /dev/uinput en Linux' },
        { name: 'Sockets Berkeley TCP' },
        { name: 'Fundamentos Go Tooling' },
        { name: 'Empaquetado RPM Linux' }
      ]
    },
    {
      name: 'Nube, DevOps e Infraestructura',
      badge: 'Nube y Operaciones',
      icon: 'fa-cloud',
      desc: 'Despliegue de microservicios contenerizados y gestión de entornos cloud.',
      skills: [
        { name: 'Docker & Compose', highlight: true },
        { name: 'Google Cloud Run', highlight: true },
        { name: 'Caddy 2 (HTTP/3)', highlight: true },
        { name: 'Firebase Pub/Sub y Admin', highlight: true },
        { name: 'Administración Linux' },
        { name: 'Git y GitHub' },
        { name: 'Hetzner Cloud' },
        { name: 'Nginx' }
      ]
    }
  ],
  experiencesList: [
    {
      role: 'Desarrollador Full-Stack y Arquitecto Fundacional',
      company: 'Kuantum Innovation',
      period: 'Feb 2025 – Ago 2026',
      location: 'Perú (Remoto)',
      highlights: [
        'Único arquitecto y desarrollador de Kuantum Educa desde cero, diseñando el esquema de datos y contratos de API.',
        'Diseñé un backend orientado a eventos con Firebase Cloud Functions y Pub/Sub para procesar asíncronamente simulaciones concurrentes.',
        'Desarrollé y desplegué un microservicio en FastAPI contenerizado con Docker en Google Cloud Run para transacciones en PostgreSQL.',
        'Diseñé y probé un módulo de emparejamiento vocacional con PostgreSQL pgvector en entornos de staging.',
        'Traspasé con éxito la arquitectura estable del núcleo al equipo interno de ingeniería en agosto de 2026.'
      ],
      stack: ['Angular 19', 'Signals', 'FastAPI', 'Python', 'Firebase Pub/Sub', 'PostgreSQL', 'Docker', 'Cloud Run']
    },
    {
      role: 'Desarrollador Full-Stack y Admin Cloud',
      company: 'Plataforma E-learning "Comienza Pro"',
      period: 'Ago 2025 – Nov 2025',
      location: 'Perú (Remoto)',
      highlights: [
        'Gestioné el aprovisionamiento, configuración Linux y mantenimiento continuo de servidores en la nube de Hetzner.',
        'Personalicé y administré la plataforma de e-learning para dar soporte a 9 cursos especializados con una interfaz intuitiva.'
      ],
      stack: ['Linux', 'Hetzner Cloud', 'Moodle', 'PHP', 'MySQL', 'Nginx']
    }
  ],
  recognitionsList: [
    {
      title: '1er Puesto — Concurso de Programación',
      entity: 'Universidad de Huánuco (UDH)',
      date: '2023',
      icon: 'fa-trophy'
    },
    {
      title: '1er Puesto — I Concurso de Proyectos de Investigación e Innovación "Pitch Day 2023"',
      entity: 'Universidad de Huánuco (UDH)',
      date: '2023',
      icon: 'fa-medal'
    },
    {
      title: 'Reconocimiento por el Proyecto Tecnológico "Gatilín Digital"',
      entity: 'Municipalidad Distrital de Amarilis',
      date: '2024',
      icon: 'fa-award'
    }
  ]
};
