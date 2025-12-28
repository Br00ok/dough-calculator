import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

export interface FormValues {
  numPizzas: number;
  ballWeight: number;
  hydration: number;
  usePreferment: boolean;
  prefermentPercentage: number;
}

@Component({
  selector: 'app-calculator-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  template: `
    <div class="card bg-base-100 shadow-xl mb-4 min-h-100">
      <div class="card-body">
        <!-- Number of pizzas -->
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text font-semibold">{{ 'FORM.NUM_PIZZAS' | translate }}</span>
          </label>
          <input
            aria-label="number of pizzas"
            type="number"
            [(ngModel)]="formValues.numPizzas"
            class="input input-bordered w-full"
            min="1"
          />
        </div>

        <!-- Ball weight -->
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text font-semibold">{{ 'FORM.BALL_WEIGHT' | translate }}</span>
          </label>
          <input
            aria-label="dough ball weight in grams"
            type="number"
            [(ngModel)]="formValues.ballWeight"
            class="input input-bordered w-full"
            min="100"
            step="10"
          />
        </div>

        <!-- Hydration -->
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text font-semibold">{{ 'FORM.HYDRATION' | translate }}</span>
            <span class="label-text-alt font-bold text-lg">{{ formValues.hydration }}%</span>
          </label>
          <input
            aria-label="dough hydration percentage"
            type="range"
            [(ngModel)]="formValues.hydration"
            min="0"
            max="100"
            class="range range-primary"
            step="1"
          />
          <div class="w-full flex justify-between text-xs px-2 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        <!-- Use preferment -->
        <div class="form-control mb-2">
          <label class="label cursor-pointer justify-start gap-3">
            <input
              aria-label="use preferment checkbox"
              type="checkbox"
              [(ngModel)]="formValues.usePreferment"
              class="checkbox checkbox-primary"
            />
            <span class="label-text font-semibold">{{ 'FORM.USE_PREFERMENT' | translate }}</span>
          </label>
        </div>

        <!-- Preferment block -->
        <div
          class="bg-primary/10 p-4 rounded-box mb-4 overflow-hidden transition-all duration-300"
          [class.hidden]="!formValues.usePreferment"
          [class.h-auto]="formValues.usePreferment"
        >
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-semibold">{{
                'FORM.PREFERMENT_PERCENTAGE' | translate
              }}</span>
              <span class="label-text-alt font-bold text-lg"
                >{{ formValues.prefermentPercentage }}%</span
              >
            </label>
            <input
              aria-label="preferment percentage"
              type="range"
              [(ngModel)]="formValues.prefermentPercentage"
              min="0"
              max="100"
              class="range range-primary"
              step="1"
            />
            <div class="w-full flex justify-between text-xs px-2 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <!-- Calculate button -->
        <button (click)="onCalculate()" class="btn btn-primary btn-block btn-lg mt-2">
          {{ 'FORM.CALCULATE' | translate }}
        </button>
      </div>
    </div>
  `,
})
export class CalculatorFormComponent {
  @Output() calculate = new EventEmitter<FormValues>();

  formValues: FormValues = {
    numPizzas: 3,
    ballWeight: 280,
    hydration: 68,
    usePreferment: true,
    prefermentPercentage: 30,
  };

  onCalculate(): void {
    this.calculate.emit(this.formValues);
  }
}
