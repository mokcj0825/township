import type { ConversionRule, ItemAmount, CalculationResult, ProductionStep } from '../types/simple';

export class SimpleConversionEngine {
  private rules: ConversionRule[] = [];
  private baseItems: Set<string> = new Set();
  private derivedItems: Set<string> = new Set();

  constructor(rules: ConversionRule[]) {
    this.rules = rules;
    this.analyzeItems();
  }

  // Analyze items based on corps flag
  private analyzeItems(): void {
    this.baseItems.clear();
    this.derivedItems.clear();

    // Items marked as corps are base items
    this.rules.forEach(rule => {
      if (rule.corps) {
        this.baseItems.add(rule.id);
      } else {
        // Items that are outputs of non-corps rules are derived items
        rule.outputs.forEach(output => {
          this.derivedItems.add(output.item);
        });
      }
    });
  }

  // Get all base items (corps)
  getBaseItems(): string[] {
    return Array.from(this.baseItems);
  }

  // Get all derived items
  getDerivedItems(): string[] {
    return Array.from(this.derivedItems);
  }

  // Get all available items (base + derived)
  getAllItems(): string[] {
    return [...this.getBaseItems(), ...this.getDerivedItems()];
  }

  // Check if an item is a base item
  isBaseItem(item: string): boolean {
    return this.baseItems.has(item);
  }

  // Get rules that produce a specific item
  private getRulesForItem(item: string): ConversionRule[] {
    return this.rules.filter(rule => 
      rule.outputs.some(output => output.item === item)
    );
  }

  // Calculate requirements for producing a target item
  calculateRequirements(targetItem: string, targetAmount: number): CalculationResult {
    const requiredBaseItems = new Map<string, number>();
    const productionSteps: ProductionStep[] = [];
    const waste = new Map<string, number>();
    const processed = new Set<string>();

    // Start the recursive calculation
    this.calculateRecursive(
      targetItem, 
      targetAmount, 
      requiredBaseItems, 
      productionSteps, 
      waste, 
      processed
    );

    return {
      targetItem,
      targetAmount,
      requiredBaseItems,
      productionSteps,
      waste
    };
  }

  private calculateRecursive(
    item: string,
    amount: number,
    requiredBaseItems: Map<string, number>,
    productionSteps: ProductionStep[],
    waste: Map<string, number>,
    processed: Set<string>
  ): void {
    // If it's a base item, add to requirements
    if (this.isBaseItem(item)) {
      const current = requiredBaseItems.get(item) || 0;
      requiredBaseItems.set(item, current + amount);
      return;
    }

    // Avoid infinite loops
    if (processed.has(item)) {
      return;
    }
    processed.add(item);

    // Find rules that produce this item
    const rules = this.getRulesForItem(item);
    
    if (rules.length === 0) {
      // No rule produces this item, treat as base item
      const current = requiredBaseItems.get(item) || 0;
      requiredBaseItems.set(item, current + amount);
      return;
    }

    // Use the first rule (in a real system, you might want to choose the best one)
    const rule = rules[0];
    const outputAmount = rule.outputs.find(o => o.item === item)?.amount || 1;
    const batchesNeeded = Math.ceil(amount / outputAmount);
    const actualOutput = batchesNeeded * outputAmount;

    // Create production step
    const step: ProductionStep = {
      ruleId: rule.id,
      inputs: rule.inputs.map(input => ({
        ...input,
        amount: input.amount * batchesNeeded
      })),
      outputs: rule.outputs.map(output => ({
        ...output,
        amount: output.amount * batchesNeeded
      })),
      batches: batchesNeeded
    };

    productionSteps.push(step);

    // Calculate waste (excess output) - only for the target item, not intermediate items
    if (actualOutput > amount) {
      const excess = actualOutput - amount;
      const currentWaste = waste.get(item) || 0;
      waste.set(item, currentWaste + excess);
    }

    // Recursively process inputs
    rule.inputs.forEach(input => {
      const inputAmount = input.amount * batchesNeeded;
      this.calculateRecursive(
        input.item,
        inputAmount,
        requiredBaseItems,
        productionSteps,
        waste,
        processed // Use the same processed set to avoid duplicate processing
      );
    });
  }

  // Add a new conversion rule
  addRule(rule: ConversionRule): void {
    this.rules.push(rule);
    this.analyzeItems(); // Re-analyze items
  }

  // Get all conversion rules
  getAllRules(): ConversionRule[] {
    return [...this.rules];
  }

  // Get all categories
  getCategories(): string[] {
    const categories = new Set<string>();
    this.rules.forEach(rule => {
      if (rule.category) {
        categories.add(rule.category);
      }
    });
    return Array.from(categories);
  }

  // Get rules by category
  getRulesByCategory(category: string): ConversionRule[] {
    return this.rules.filter(rule => rule.category === category);
  }

  // Get items by category
  getItemsByCategory(category: string): string[] {
    const items = new Set<string>();
    this.getRulesByCategory(category).forEach(rule => {
      rule.outputs.forEach(output => {
        items.add(output.item);
      });
    });
    return Array.from(items);
  }

  // Format calculation result for display
  formatResult(result: CalculationResult): string {
    let output = `\n=== Production Calculation for ${result.targetAmount} ${result.targetItem} ===\n\n`;
    
    output += `🌾 BASE ITEMS REQUIRED:\n`;
    for (const [item, amount] of result.requiredBaseItems) {
      output += `- ${item}: ${Math.ceil(amount)} units\n`;
    }
    output += '\n';

    output += `🔄 PRODUCTION STEPS:\n`;
    result.productionSteps.forEach((step, index) => {
      output += `${index + 1}. ${step.ruleId} (${step.batches} batches)\n`;
      output += `   Inputs: ${step.inputs.map(i => `${i.amount} ${i.item}`).join(', ')}\n`;
      output += `   Outputs: ${step.outputs.map(o => `${o.amount} ${o.item}`).join(', ')}\n\n`;
    });

    if (result.waste.size > 0) {
      output += `🗑️ WASTE/REMAINDERS:\n`;
      for (const [item, amount] of result.waste) {
        output += `- ${item}: ${amount.toFixed(2)} units\n`;
      }
    }

    return output;
  }
}
