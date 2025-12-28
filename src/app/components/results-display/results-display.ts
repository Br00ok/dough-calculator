import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CalculationResult } from '../../models/calculation.interface';

@Component({
  selector: 'app-results-display',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div *ngIf="result" class="card bg-base-100 shadow-xl mb-6">
      <div class="card-body">
        <h2 class="text-3xl card-title justify-center mb-4">
          📋 {{ 'RESULTS.TITLE' | translate }}
        </h2>

        <div class="stats shadow mb-4">
          <div class="stat place-items-center">
            <div class="stat-title">{{ 'RESULTS.TOTAL_WEIGHT' | translate }}</div>
            <div class="stat-value text-primary">{{ result.totalWeight }}g</div>
          </div>
        </div>

        <div *ngIf="result.preferment">
          <div class="mb-4">
            <h3 class="font-bold mb-2">🥖 {{ 'RESULTS.PREFERMENT' | translate }}</h3>
            <div class="overflow-x-auto">
              <table class="table table-zebra">
                <tbody>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.FLOUR' | translate }}</td>
                    <td class="text-right font-bold">{{ result.preferment.flour }}g</td>
                  </tr>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.WATER' | translate }}</td>
                    <td class="text-right font-bold">{{ result.preferment.water }}g</td>
                  </tr>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.YEAST' | translate }}</td>
                    <td class="text-right font-bold">{{ result.preferment.yeast }}g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mb-4">
            <h3 class="font-bold mb-2">🍕 {{ 'RESULTS.FINAL_DOUGH' | translate }}</h3>
            <div class="overflow-x-auto">
              <table class="table table-zebra">
                <tbody>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.FLOUR' | translate }}</td>
                    <td class="text-right font-bold">{{ result.finalDough!.flour }}g</td>
                  </tr>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.WATER' | translate }}</td>
                    <td class="text-right font-bold">{{ result.finalDough!.water }}g</td>
                  </tr>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.SALT' | translate }}</td>
                    <td class="text-right font-bold">{{ result.finalDough!.salt }}g</td>
                  </tr>
                  <tr>
                    <td class="font-medium">{{ 'RESULTS.YEAST' | translate }}</td>
                    <td class="text-right font-bold">{{ result.finalDough!.yeast }}g</td>
                  </tr>
                  <tr class="border-t-2">
                    <td class="font-semibold">{{ 'RESULTS.ADD_PREFERMENT' | translate }}</td>
                    <td class="text-right font-bold text-primary">
                      {{ 'RESULTS.ALL' | translate }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div *ngIf="!result.preferment">
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <tbody>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.FLOUR' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalFlour }}g</td>
                </tr>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.WATER' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalWater }}g</td>
                </tr>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.SALT' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalSalt }}g</td>
                </tr>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.YEAST' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalYeast }}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div *ngIf="result.preferment" class="mb-4">
          <h3 class="font-bold mb-2">🧮 {{ 'RESULTS.TOTAL_INGREDIENTS' | translate }}</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <tbody>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.FLOUR' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalFlour }}g</td>
                </tr>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.WATER' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalWater }}g</td>
                </tr>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.SALT' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalSalt }}g</td>
                </tr>
                <tr>
                  <td class="font-medium">{{ 'RESULTS.YEAST' | translate }}</td>
                  <td class="text-right font-bold">{{ result.totalYeast }}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ResultsDisplayComponent {
  @Input() result: CalculationResult | null = null;
}
