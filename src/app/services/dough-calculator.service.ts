import { Injectable } from '@angular/core';
import { CalculationResult } from '../models/calculation.interface';

@Injectable({ providedIn: 'root' })
export class DoughCalculatorService {
  calculate(
    numPizzas: number,
    ballWeight: number,
    hydration: number,
    usePreferment: boolean,
    prefermentPercentage: number
  ): CalculationResult {
    const totalWeight = numPizzas * ballWeight;
    const flourFactor = 100 / (100 + hydration + 2.8 + 0.1);

    let totalFlour = totalWeight * flourFactor;
    let totalWater = totalFlour * (hydration / 100);
    let totalSalt = totalFlour * 0.028;
    let totalYeast = totalFlour * 0.001;

    let flourPreferment = 0;
    let waterPreferment = 0;
    let yeastPreferment = 0;
    let flourFinalDough = totalFlour;
    let waterFinalDough = totalWater;
    let yeastFinalDough = totalYeast;

    if (usePreferment) {
      flourPreferment = totalFlour * (prefermentPercentage / 100);
      waterPreferment = flourPreferment * 0.5;
      yeastPreferment = totalYeast * 0.9;

      flourFinalDough = totalFlour - flourPreferment;
      waterFinalDough = totalWater - waterPreferment;
      yeastFinalDough = totalYeast - yeastPreferment;
    }

    return {
      totalWeight,
      totalFlour: totalFlour.toFixed(1),
      totalWater: totalWater.toFixed(1),
      totalSalt: totalSalt.toFixed(1),
      totalYeast: totalYeast.toFixed(1),
      preferment: usePreferment
        ? {
            flour: flourPreferment.toFixed(1),
            water: waterPreferment.toFixed(1),
            yeast: yeastPreferment.toFixed(2),
          }
        : undefined,
      finalDough: usePreferment
        ? {
            flour: flourFinalDough.toFixed(1),
            water: waterFinalDough.toFixed(1),
            salt: totalSalt.toFixed(1),
            yeast: yeastFinalDough.toFixed(2),
          }
        : undefined,
    };
  }
}
