import type { ConversionRule } from '../types/simple';

// Sugar Factory - produces various sugar-based products
export const sugarFactoryRules: ConversionRule[] = [
  {
    id: 'sugar',
    inputs: [{ item: 'sugarcane', amount: 1 }],
    outputs: [{ item: 'sugar', amount: 1 }],
    corps: false,
    category: 'sugar-factory'
  },
  {
    id: 'syrup',
    inputs: [{ item: 'sugarcane', amount: 2 }],
    outputs: [{ item: 'syrup', amount: 1 }],
    corps: false,
    category: 'sugar-factory'
  },
  {
    id: 'caramel',
    inputs: [{ item: 'sugarcane', amount: 3 }],
    outputs: [{ item: 'caramel', amount: 1 }],
    corps: false,
    category: 'sugar-factory'
  },
  {
    id: 'honey caramel',
    inputs: [
      { item: 'sugarcane', amount: 1 },
      { item: 'honeycombs', amount: 1 }
    ],
    outputs: [{ item: 'honey caramel', amount: 1 }],
    corps: false,
    category: 'sugar-factory'
  }
];
