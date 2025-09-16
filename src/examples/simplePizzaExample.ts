import { SimpleConversionEngine } from '../classes/SimpleConversionEngine';
import { conversionRules } from '../data/conversionRules';

// Simple example using your data-driven approach
export function runSimplePizzaExample(): void {
  console.log('🍕 Simple Pizza Calculation Example\n');
  console.log('=' .repeat(50));

  // Create the conversion engine with your rules
  const engine = new SimpleConversionEngine(conversionRules);

  // Show what items are detected as base vs derived
  console.log('📋 ITEM ANALYSIS:');
  console.log('Base Items (Corps):', engine.getBaseItems());
  console.log('Derived Items:', engine.getDerivedItems());
  console.log('');

  // Calculate requirements for 4 pizzas
  console.log('🎯 CALCULATING FOR 4 PIZZAS:');
  const result = engine.calculateRequirements('pizza', 4);
  console.log(engine.formatResult(result));

  // Test different quantities
  console.log('\n🧪 TESTING DIFFERENT QUANTITIES:');
  const quantities = [1, 2, 4, 8];
  
  quantities.forEach(quantity => {
    console.log(`\n--- ${quantity} Pizza(s) ---`);
    const testResult = engine.calculateRequirements('pizza', quantity);
    
    console.log('Base Items Needed:');
    for (const [item, amount] of testResult.requiredBaseItems) {
      console.log(`  ${item}: ${Math.ceil(amount)} units`);
    }
    
    if (testResult.waste.size > 0) {
      console.log('Waste:');
      for (const [item, amount] of testResult.waste) {
        console.log(`  ${item}: ${amount.toFixed(2)} units`);
      }
    }
  });

  console.log('\n' + '=' .repeat(50));
  console.log('✅ Example completed!');
}

// Test the specific calculation you mentioned
export function testSpecificCalculation(): void {
  console.log('\n🎯 TESTING YOUR SPECIFIC EXAMPLE:');
  console.log('Input: 4 pizza');
  console.log('Expected: 8 milk, 4 tomato, 25 wheat, 3 corn, remain 1 cow feed\n');

  const engine = new SimpleConversionEngine(conversionRules);
  const result = engine.calculateRequirements('pizza', 4);

  console.log('ACTUAL RESULTS:');
  console.log('Base Items Required:');
  for (const [item, amount] of result.requiredBaseItems) {
    console.log(`  ${item}: ${Math.ceil(amount)} units`);
  }

  console.log('\nWaste/Remainders:');
  for (const [item, amount] of result.waste) {
    console.log(`  ${item}: ${amount.toFixed(2)} units`);
  }

  // Compare with expected
  console.log('\n📊 COMPARISON:');
  const expected = {
    wheat: 25,
    corn: 3,
    tomato: 4,
    milk: 8,
    cow_feed: 1 // remainder
  };

  console.log('Expected vs Actual:');
  Object.entries(expected).forEach(([item, expectedAmount]) => {
    const actualAmount = result.requiredBaseItems.get(item) || result.waste.get(item) || 0;
    const status = Math.abs(actualAmount - expectedAmount) < 0.1 ? '✅' : '❌';
    console.log(`  ${item}: Expected ${expectedAmount}, Got ${actualAmount.toFixed(1)} ${status}`);
  });
}
