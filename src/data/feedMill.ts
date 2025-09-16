import type { ConversionRule } from '../types/simple';

// Feed Mill - produces various animal feeds
export const feedMillRules: ConversionRule[] = [
  {
    id: 'cow-feed',
    inputs: [{ item: 'wheat', amount: 1 }],
    outputs: [{ item: 'cow-feed', amount: 1 }],
    corps: false,
    category: 'feed-mill'
  },
  {
    id: 'chicken-feed',
    inputs: [{ item: 'wheat', amount: 1 }],
    outputs: [{ item: 'chicken-feed', amount: 1 }],
    corps: false,
    category: 'feed-mill'
  },
  {
    id: 'sheep-feed',
    inputs: [{ item: 'wheat', amount: 1 }],
    outputs: [{ item: 'sheep-feed', amount: 1 }],
    corps: false,
    category: 'feed-mill'
  },
  {
    id: 'bee-feed',
    inputs: [{ item: 'wheat', amount: 1 }],
    outputs: [{ item: 'bee-feed', amount: 1 }],
    corps: false,
    category: 'feed-mill'
  },
  {
    id: 'pig-feed',
    inputs: [{ item: 'wheat', amount: 1 }],
    outputs: [{ item: 'pig-feed', amount: 1 }],
    corps: false,
    category: 'feed-mill'
  },
  {
    id: 'substrate',
    inputs: [{ item: 'wheat', amount: 1 }],
    outputs: [{ item: 'substrate', amount: 1 }],
    corps: false,
    category: 'feed-mill'
  }
];
