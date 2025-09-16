import type { ConversionRule } from '../types/simple';

// Fast Food Restaurant - produces ready-to-eat food items
export const fastFoodRestaurantRules: ConversionRule[] = [
  {
    id: 'wheat-to-flour',
    inputs: [{ item: 'wheat', amount: 2 }],
    outputs: [{ item: 'flour', amount: 1 }],
    corps: false,
    category: 'fast-food-restaurant'
  },
  {
    id: 'pizza-making',
    inputs: [
      { item: 'flour', amount: 2 },
      { item: 'tomato', amount: 1 },
      { item: 'cheese', amount: 1 }
    ],
    outputs: [{ item: 'pizza', amount: 1 }],
    corps: false,
    category: 'fast-food-restaurant'
  },
  {
    id: 'burger-making',
    inputs: [
      { item: 'flour', amount: 1 },
      { item: 'tomato', amount: 1 },
      { item: 'cheese', amount: 1 }
    ],
    outputs: [{ item: 'burger', amount: 1 }],
    corps: false,
    category: 'fast-food-restaurant'
  },
  {
    id: 'sandwich-making',
    inputs: [
      { item: 'flour', amount: 1 },
      { item: 'cheese', amount: 1 },
      { item: 'tomato', amount: 1 }
    ],
    outputs: [{ item: 'sandwich', amount: 1 }],
    corps: false,
    category: 'fast-food-restaurant'
  }
];
