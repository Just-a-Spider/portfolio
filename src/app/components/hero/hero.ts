import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  t = input.required<TranslationSchema>();
  currentLang = input.required<Lang>();
  profile = input.required<any>();

  viewProjects = output<void>();
  copyEmail = output<void>();

  getResumeLink(): string {
    return this.currentLang() === 'es' ? this.profile().cvEs : this.profile().cvEn;
  }
}
