export const CATEGORIES = [
  'Technology',
  'Politics',
  'Environment',
  'Business & Economy'
] as const;

export type Category = typeof CATEGORIES[number];