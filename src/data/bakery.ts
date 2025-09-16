import type { ConversionRule } from '../types/simple';

// Bakery - produces various baked goods
export const bakeryRules: ConversionRule[] = [
  {
    id: 'bread',
    inputs: [{ item: 'wheat', amount: 2 }],
    outputs: [{ item: 'bread', amount: 1 }],
    corps: false,
    category: 'bakery'
  },
  {
    id: 'cookies',
    inputs: [{ item: 'wheat', amount: 2 }, { item: 'egg', amount: 1 }],
    outputs: [{ item: 'cookies', amount: 3 }],
    corps: false,
    category: 'bakery'
  },
  {
    id: 'bagel',
    inputs: [{ item: 'wheat', amount: 2 }, { item: 'egg', amount: 3 }, { item: 'sugar', amount: 1 }],
    outputs: [{ item: 'bagel', amount: 2 }],
    corps: false,
    category: 'bakery'
  },
  {
    id: 'pizza',
    inputs: [
      { item: 'wheat', amount: 2 },
      { item: 'tomato', amount: 2 },
      { item: 'cheese', amount: 1 }
    ],
    outputs: [{ item: 'pizza', amount: 1 }],
    corps: false,
    category: 'bakery'
  },
  {
    id: 'potato bread',
    inputs: [
      { item: 'wheat', amount: 2 },
      { item: 'potato', amount: 2 },
      { item: 'egg', amount: 4 }
    ],
    outputs: [{ item: 'potato bread', amount: 1 }],
    corps: false,
    category: 'bakery'
  },
  {
    id: 'mushroom turnover',
    inputs: [
      { item: 'wheat', amount: 3 },
      { item: 'mushroom', amount: 2 },
      { item: 'potato', amount: 4 }
    ],
    outputs: [{ item: 'mushroom turnover', amount: 1 }],
    corps: false,
    category: 'bakery'
  },
  {
    id: 'apple strudel',
    inputs: [
      { item: 'wheat', amount: 2 },
      { item: 'apple', amount: 2 },
      { item: 'sugar', amount: 1 }
    ],
    outputs: [{ item: 'apple strudel', amount: 1 }],
    corps: false,
    category: 'bakery'
  }
];
