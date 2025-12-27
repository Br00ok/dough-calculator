import { Component } from '@angular/core';
import { FloatingInfoButton } from './components/floating-info-button/floating-info-button';
import { NumberSpinnerComponent } from './components/number-spinner/number-spinner';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FloatingInfoButton, NumberSpinnerComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  personCount: number = 1;
  hydrationLevel: number = 68;
  useBiga: boolean = false;
  bigaPercent: number = 30;
  flour: number = 0;
  water: number = 0;
  salt: number = 0;
  yeast: number = 0;
}
