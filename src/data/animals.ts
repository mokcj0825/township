import type { ConversionRule } from '../types/simple';

// Animals - produce various animal products from feed
export const animalRules: ConversionRule[] = [
  {
    id: 'milk',
    inputs: [{ item: 'cow-feed', amount: 3 }],
    outputs: [{ item: 'milk', amount: 3 }],
    corps: false,
    category: 'animals'
  },
  {
    id: 'egg',
    inputs: [{ item: 'chicken-feed', amount: 2 }],
    outputs: [{ item: 'egg', amount: 2 }],
    corps: false,
    category: 'animals'
  },
  {
    id: 'wool',
    inputs: [{ item: 'sheep-feed', amount: 2 }],
    outputs: [{ item: 'wool', amount: 1 }],
    corps: false,
    category: 'animals'
  },
  {
    id: 'honeycomb',
    inputs: [{ item: 'bee-feed', amount: 1 }],
    outputs: [{ item: 'honeycombs', amount: 2 }],
    corps: false,
    category: 'animals'
  },
  {
    id: 'bacon',
    inputs: [{ item: 'pig-feed', amount: 4 }],
    outputs: [{ item: 'bacon', amount: 2 }],
    corps: false,
    category: 'animals'
  },
  {
    id: 'mushroom',
    inputs: [{ item: 'substrate', amount: 2 }],
    outputs: [{ item: 'mushroom', amount: 3 }],
    corps: false,
    category: 'animals'
  }
];
