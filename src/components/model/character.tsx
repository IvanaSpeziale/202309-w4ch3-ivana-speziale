export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: Category;
}
export enum Category {
  King = 'king',
  Fighter = 'fighter',
  Adviser = 'adviser',
  Squire = 'squire',
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
