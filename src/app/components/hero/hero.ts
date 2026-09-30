import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlobatarComponent } from '@just-a-spider/blobatar-ng';
import { Lang, TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, BlobatarComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  t = input.required<TranslationSchema>();
  currentLang = input.required<Lang>();
  profile = input.required<any>();

  viewProjects = output<void>();
  copyEmail = output<void>();
  expressionChanged = output<string>();

  readonly avatarSeed = signal<string>('spider');
  readonly avatarExpression = signal<string>('happy');
  private readonly expressions = ['happy', 'thinking', 'wink', 'smug', 'idle', 'love'];
  private exprIndex = 0;

  cycleExpression() {
    this.exprIndex = (this.exprIndex + 1) % this.expressions.length;
    const next = this.expressions[this.exprIndex];
    this.avatarExpression.set(next);
    this.expressionChanged.emit(next);
  }

  getResumeLink(): string {
    return this.currentLang() === 'es' ? this.profile().cvEs : this.profile().cvEn;
  }
}
