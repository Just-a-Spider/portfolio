import { Component, signal, computed, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang, ProjectData } from './i18n';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  // Internationalization Service
  readonly i18n = new TranslationService();
  readonly t = this.i18n.t;
  readonly currentLang = this.i18n.currentLang;

  // Active Navigation & Section Tracking
  readonly SECTIONS = ['overview', 'about', 'projects', 'skills', 'experience', 'contact'];
  readonly activeSection = signal<string>('overview');
  readonly isScrolled = signal<boolean>(false);
  readonly mobileMenuOpen = signal<boolean>(false);

  // Project Filtering & Details Modal
  readonly selectedCategory = signal<string>('all');
  readonly selectedProject = signal<ProjectData | null>(null);

  // Interactive Project Widgets State
  readonly kuantumArchitectureTab = signal<'flow' | 'decisions'>('flow');
  readonly sysmonTerminalTab = signal<'telemetry' | 'macros' | 'packet'>('telemetry');
  readonly isSysmonKillingProcess = signal<boolean>(false);

  // Toast Notification
  readonly toastMessage = signal<string | null>(null);
  private toastTimeout: any = null;

  // Profile Static References
  readonly profile = {
    name: 'Gustavo Andre Argandoña Becerra',
    shortName: 'Andre Argandoña',
    location: 'Huánuco, Perú',
    email: 'andre_arg_0116@outlook.com',
    github: 'https://github.com/Just-a-Spider',
    linkedin: 'https://www.linkedin.com/in/andre-argando%C3%B1a-3011a6263/',
    cvEn: 'cv-andre-argandona-en.pdf',
    cvEs: 'cv-andre-argandona-es.pdf'
  };

  // Reactive Data
  readonly aboutData = computed(() => this.t().about);
  readonly projects = computed(() => this.t().projectsList);
  readonly skillCategories = computed(() => this.t().skillsList);
  readonly experiences = computed(() => this.t().experiencesList);
  readonly recognitions = computed(() => this.t().recognitionsList);

  readonly featuredProjects = computed(() => this.projects().filter(p => p.featured));
  readonly regularProjects = computed(() => {
    const cat = this.selectedCategory();
    const list = this.projects().filter(p => !p.featured);
    if (cat === 'all') return list;
    return list.filter(p => p.category === cat);
  });

  ngAfterViewInit() {
    this.initScrollObserver();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  setLang(lang: Lang) {
    this.i18n.setLang(lang);
  }

  scrollToSection(sectionId: string) {
    this.mobileMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection.set(sectionId);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  openProjectModal(project: ProjectData) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  copyEmail() {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.showToast(this.t().hero.copiedToast);
    });
  }

  showToast(msg: string) {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastMessage.set(msg);
    this.toastTimeout = setTimeout(() => {
      this.toastMessage.set(null);
    }, 2800);
  }

  getResumeLink(): string {
    return this.currentLang() === 'es' ? this.profile.cvEs : this.profile.cvEn;
  }

  // Interactive SysMon Demo Widget
  simulateKillProcess() {
    this.isSysmonKillingProcess.set(true);
    setTimeout(() => {
      this.isSysmonKillingProcess.set(false);
      this.showToast('Signal SIGKILL [9] dispatched to PID 4821 via /dev/uinput');
    }, 700);
  }

  // ScrollSpy with IntersectionObserver
  private initScrollObserver() {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    this.SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
}
