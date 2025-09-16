// Simple types for conversion-based system

export interface ConversionRule {
  id: string;
  inputs: ItemAmount[];
  outputs: ItemAmount[];
  corps: boolean; // true if this is a base item (corp), false if it's a conversion rule
  category?: string; // optional category/group for organization
}

export interface ItemAmount {
  item: string;
  amount: number;
}

export interface Item {
  name: string;
  isBase: boolean; // true if it's a corp/base item, false if it's derived
}

export interface CalculationResult {
  targetItem: string;
  targetAmount: number;
  requiredBaseItems: Map<string, number>;
  productionSteps: ProductionStep[];
  waste: Map<string, number>;
}

export interface ProductionStep {
  ruleId: string;
  inputs: ItemAmount[];
  outputs: ItemAmount[];
  batches: number;
}
