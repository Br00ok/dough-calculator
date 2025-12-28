export interface CalculationResult {
  totalWeight: number;
  totalFlour: string;
  totalWater: string;
  totalSalt: string;
  totalYeast: string;
  preferment?: PrefermentIngredients;
  finalDough?: FinalDoughIngredients;
}

export interface PrefermentIngredients {
  flour: string;
  water: string;
  yeast: string;
}

export interface FinalDoughIngredients {
  flour: string;
  water: string;
  salt: string;
  yeast: string;
}
