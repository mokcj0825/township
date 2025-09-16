import type { ConversionRule } from '../types/simple';

// Dairy Factory - processes animal products into dairy items
export const dairyFactoryRules: ConversionRule[] = [
  {
    id: 'cream',
    inputs: [{ item: 'milk', amount: 1 }],
    outputs: [{ item: 'cream', amount: 1 }],
    corps: false,
    category: 'dairy-factory'
  },
  {
    id: 'cheese',
    inputs: [{ item: 'milk', amount: 2 }],
    outputs: [{ item: 'cheese', amount: 1 }],
    corps: false,
    category: 'dairy-factory'
  },
  {
    id: 'butter',
    inputs: [{ item: 'milk', amount: 3 }],
    outputs: [{ item: 'butter', amount: 1 }],
    corps: false,
    category: 'dairy-factory'
  },
  {
    id: 'yogurt',
    inputs: [{ item: 'milk', amount: 4 }],
    outputs: [{ item: 'yogurt', amount: 1 }],
    corps: false,
    category: 'dairy-factory'
  },
  {
    id: 'tofu',
    inputs: [{ item: 'soybean', amount: 5 }],
    outputs: [{ item: 'tofu', amount: 1 }],
    corps: false,
    category: 'dairy-factory'
  },
  {
    id: 'plant milk',
    inputs: [{ item: 'soybean', amount: 3 }],
    outputs: [{ item: 'plant milk', amount: 1 }],
    corps: false,
    category: 'dairy-factory'
  }
];
