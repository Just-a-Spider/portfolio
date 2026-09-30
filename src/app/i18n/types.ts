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
  npmUrl?: string;
  badge?: string;
  featured: boolean;
  icon: string;
  architectureDetails?: {
    flow: string[];
    keyDecisions: string[];
  };
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategoryData {
  name: string;
  badge: string;
  icon: string;
  desc: string;
  skills: SkillItem[];
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

export interface HeroMetric {
  val: string;
  unit: string;
  lbl: string;
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
    metrics: HeroMetric[];
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
    npm: string;
    keyHighlights: string;
    tabFlow: string;
    tabDecisions: string;
  };
  playground: {
    tag: string;
    title: string;
    subtitle: string;
    seedLabel: string;
    seedPlaceholder: string;
    expressionLabel: string;
    gazeLabel: string;
    animateLabel: string;
    copyBtn: string;
    copiedToast: string;
    activeGaze: string;
    clickToCycle: string;
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
    npm: string;
    close: string;
  };
  projectsList: ProjectData[];
  skillsList: SkillCategoryData[];
  experiencesList: ExperienceData[];
  recognitionsList: RecognitionData[];
}
