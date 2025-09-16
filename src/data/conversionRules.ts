import type { ConversionRule } from '../types/simple';
import { baseItems } from './baseItems';
import { feedMillRules } from './feedMill';
import { animalRules } from './animals';
import { dairyFactoryRules } from './dairyFactory';
import { bakeryRules } from './bakery';
import { sugarFactoryRules } from './sugarFactory';
import { fastFoodRestaurantRules } from './fastFoodRestaurant';

// Combine all conversion rules from different categories
export const conversionRules: ConversionRule[] = [
  ...baseItems,
  ...feedMillRules,
  ...animalRules,
  ...dairyFactoryRules,
  ...bakeryRules,
  ...sugarFactoryRules,
  ...fastFoodRestaurantRules
];
