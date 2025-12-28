import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorFormComponent, FormValues } from './components/calculator-form/calculator-form';
import { ResultsDisplayComponent } from './components/results-display/results-display';
import { DoughCalculatorService } from './services/dough-calculator.service';
import { CalculationResult } from './models/calculation.interface';
import { FloatingInfoButton } from './components/floating-info-button/floating-info-button';
import { InstallButton } from './components/install-button/install-button';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CalculatorFormComponent,
    ResultsDisplayComponent,
    FloatingInfoButton,
    InstallButton,
    TranslatePipe,
  ],
  template: `
    <div [attr.data-theme]="theme" class="min-h-screen bg-base-200 p-4">
      <main class="max-w-md mx-auto">
        <div class="flex justify-between mt-2 mb-2">
          <app-install-button></app-install-button>
          <app-floating-info-button></app-floating-info-button>
        </div>

        <div class="text-center mb-6 pt-4 flex flex-col items-center justify-center">
          <div class="avatar placeholder mb-3">
            <div class="bg-primary text-primary-content rounded-full p-2">
              <span class="text-3xl">🍕</span>
            </div>
          </div>
          <h1 class="text-3xl font-bold max-w-3/4">{{ 'APP.TITLE' | translate }}</h1>
          <p class="text-base-content/70 mt-1">{{ 'APP.SUBTITLE' | translate }}</p>
        </div>

        <div class="flex justify-end gap-2 mb-4">
          <button (click)="toggleLanguage()" class="btn btn-sm">
            <span *ngIf="currentLang === 'en'">🌐EN</span>
            <span *ngIf="currentLang === 'es'">🌐ES</span>
            <span *ngIf="currentLang === 'ca'">🌐CA</span>
          </button>
          <button (click)="toggleTheme()" class="btn btn-sm">
            <span *ngIf="theme === 'dark'">🌙 {{ 'THEME.DARK' | translate }}</span>
            <span *ngIf="theme === 'light'">☀️ {{ 'THEME.LIGHT' | translate }}</span>
          </button>
        </div>

        <app-calculator-form (calculate)="onCalculate($event)"></app-calculator-form>
        <div #resultsSection>
          <app-results-display [result]="result"></app-results-display>
        </div>
      </main>
    </div>
  `,
})
export class AppComponent {
  @ViewChild('resultsSection') resultsSection!: ElementRef;
  result: CalculationResult | null = null;
  theme: 'light' | 'dark' = 'dark';
  currentLang: 'en' | 'es' | 'ca' = 'en';

  private translate = inject(TranslateService);
  private calculatorService = inject(DoughCalculatorService);

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      this.theme = saved as 'light' | 'dark';
    }
    this.applyTheme();

    this.translate.addLangs(['en', 'es', 'ca']);
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('language');
    if (savedLang && ['en', 'es', 'ca'].includes(savedLang)) {
      this.currentLang = savedLang as 'en' | 'es' | 'ca';
      this.translate.use(savedLang);
    } else {
      const browserLang = this.translate.getBrowserLang();
      this.currentLang = browserLang?.match(/en|es|ca/)
        ? (browserLang as 'en' | 'es' | 'ca')
        : 'en';
      this.translate.use(this.currentLang);
    }
  }

  toggleLanguage(): void {
    const languages: ('en' | 'es' | 'ca')[] = ['en', 'es', 'ca'];
    const currentIndex = languages.indexOf(this.currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    this.currentLang = languages[nextIndex];

    this.translate.use(this.currentLang);
    localStorage.setItem('language', this.currentLang);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  onCalculate(values: FormValues): void {
    this.result = this.calculatorService.calculate(
      values.numPizzas,
      values.ballWeight,
      values.hydration,
      values.usePreferment,
      values.prefermentPercentage
    );

    setTimeout(() => {
      this.resultsSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  }
}
