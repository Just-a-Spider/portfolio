import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlobatarComponent } from '@just-a-spider/blobatar-ng';
import { Lang, TranslationSchema } from '../../i18n';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, BlobatarComponent],
  templateUrl: './playground.html',
  styleUrl: './playground.css'
})
export class PlaygroundComponent {
  t = input.required<TranslationSchema>();
  currentLang = input.required<Lang>();
  toast = output<string>();

  readonly seed = signal<string>('spider');
  readonly expression = signal<string>('happy');
  readonly gaze = signal<boolean>(true);
  readonly animate = signal<boolean>(true);
  readonly copied = signal<boolean>(false);

  readonly availableExpressions = [
    'happy',
    'thinking',
    'wink',
    'smug',
    'idle',
    'love',
    'surprised',
    'shy'
  ];

  updateSeed(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.seed.set(input.value.trim() || 'blobatar');
    }
  }

  setExpression(expr: string) {
    this.expression.set(expr);
  }

  toggleGaze() {
    this.gaze.update(v => !v);
  }

  toggleAnimate() {
    this.animate.update(v => !v);
  }

  copyInstallCommand() {
    const cmd = 'pnpm add @just-a-spider/blobatar-ng blobatar';
    navigator.clipboard?.writeText(cmd);
    this.copied.set(true);
    this.toast.emit(this.t().playground.copiedToast);
    setTimeout(() => this.copied.set(false), 2500);
  }
}
