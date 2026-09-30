import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  t = input.required<TranslationSchema>();
  currentLang = input.required<Lang>();
  activeSection = input.required<string>();
  isScrolled = input.required<boolean>();
  profile = input.required<any>();

  sectionSelected = output<string>();
  langChanged = output<Lang>();

  mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  onSelectSection(sectionId: string) {
    this.mobileMenuOpen.set(false);
    this.sectionSelected.emit(sectionId);
  }

  onSelectLang(lang: Lang) {
    this.langChanged.emit(lang);
  }

  getResumeLink(): string {
    return this.currentLang() === 'es' ? this.profile().cvEs : this.profile().cvEn;
  }
}
