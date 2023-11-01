export interface Category {
  category: 'Fighter' | 'King' | 'Adviser' | 'Squire';
}

export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: Category;
}

export interface King extends Character {
  reignYears: number;
}

export interface Fighter extends Character {
  weapon: string;
  skillLevel: number;
}

export interface Advisor extends Character {
  adviseTo: Fighter;
}

export interface Squire extends Character {
  serveLevel: number;
  servesTo: Fighter;
}
