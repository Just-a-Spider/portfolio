import { signal, Injectable } from '@angular/core';
import { Lang, TranslationSchema } from './types';
import { TRANSLATIONS_EN } from './en';
import { TRANSLATIONS_ES } from './es';

export const TRANSLATIONS: Record<Lang, TranslationSchema> = {
  en: TRANSLATIONS_EN,
  es: TRANSLATIONS_ES
};

@Injectable({
  providedIn: 'root'
})
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
