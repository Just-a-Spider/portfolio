import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the application', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('High-Precision Engineering');
  });

  it('should switch language and update playground text box placeholder and labels dynamically', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const inputEl = compiled.querySelector('#blobatar-seed-input') as HTMLInputElement;
    expect(inputEl).toBeTruthy();
    expect(inputEl.placeholder).toBe('Type any word, name, or hash (e.g. spider)...');

    // Switch language to Spanish
    app.setLang('es');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(inputEl.placeholder).toBe('Escribe cualquier palabra, nombre o hash (ej. spider)...');
    const labelEl = compiled.querySelector('label[for="blobatar-seed-input"]');
    expect(labelEl?.textContent?.trim()).toBe('Semilla / Texto de Entrada:');
  });

  it('should render all modular segmented components', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('app-hero')).toBeTruthy();
    expect(compiled.querySelector('app-playground')).toBeTruthy();
    expect(compiled.querySelector('app-projects')).toBeTruthy();
    expect(compiled.querySelector('app-skills')).toBeTruthy();
    expect(compiled.querySelector('app-experience')).toBeTruthy();
    expect(compiled.querySelector('app-contact')).toBeTruthy();
  });

  it('should render active blobatar SVG avatar in hero and playground', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const blobatars = compiled.querySelectorAll('blobatar');
    expect(blobatars.length).toBeGreaterThanOrEqual(2);

    const firstSvg = blobatars[0].querySelector('svg');
    expect(firstSvg).toBeTruthy();
    expect(firstSvg?.classList.contains('blobatar-animated')).toBe(true);
    expect(firstSvg?.classList.contains('blobatar-gaze')).toBe(true);
  });

  it('should toggle idle animation in playground and apply idle-frozen class', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const playgroundEl = compiled.querySelector('app-playground');
    expect(playgroundEl).toBeTruthy();

    const playgroundBlobatar = playgroundEl?.querySelector('blobatar');
    expect(playgroundBlobatar).toBeTruthy();
    expect(playgroundBlobatar?.classList.contains('idle-frozen')).toBe(false);

    const initialSvg = playgroundBlobatar?.querySelector('svg');
    expect(initialSvg?.innerHTML).toContain('mo-always');

    // Find the toggle button for idle motion (second toggle button)
    const toggleButtons = playgroundEl?.querySelectorAll('.toggle-btn') as NodeListOf<HTMLButtonElement>;
    expect(toggleButtons.length).toBe(2);

    const animateToggleBtn = toggleButtons[1];
    animateToggleBtn.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(playgroundBlobatar?.classList.contains('idle-frozen')).toBe(true);
    const toggledSvg = playgroundBlobatar?.querySelector('svg');
    expect(toggledSvg?.innerHTML).not.toContain('mo-always');
  });

  it('should contain hero grid inside app-container for consistent gutter spacing', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const heroEl = compiled.querySelector('app-hero');
    const containerInsideHero = heroEl?.querySelector('.app-container');
    const heroGrid = containerInsideHero?.querySelector('.hero-grid');
    expect(containerInsideHero).toBeTruthy();
    expect(heroGrid).toBeTruthy();
  });
});
