import React from 'react';
import { List } from './list/list';
import { AnyCharacter } from './card/card';
import { Category } from './model/character';

export default function App() {
  const example: AnyCharacter[] = [
    {
      isAlive: true,
      message: "You're all to die!",
      name: 'Joffrey',
      family: 'Baratheon',
      age: 18,
      reignYears: 1,
      category: Category.King, // Usa la enumeración para el tipo de personaje
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jaime',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: Category.Fighter, // Usa la enumeración para el tipo de personaje
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Daenerys',
      family: 'Targaryen',
      age: 18,
      weapon: 'dragons',
      skillLevel: 8,
      category: Category.Fighter, // Usa la enumeración para el tipo de personaje
    },
    {
      isAlive: true,
      message: 'I dunno know why, but I believe I am gonna die soon',
      name: 'Tyrion',
      family: 'Lannister',
      age: 40,
      adviseTo: {
        isAlive: true,
        message: 'I hit first and ask later',
        name: 'Daenerys',
        family: 'Targaryen',
        age: 18,
        weapon: 'dragons',
        skillLevel: 8,
        category: Category.Fighter, // Usa la enumeración para el tipo de personaje
      },
      category: Category.Adviser, // Usa la enumeración para el tipo de personaje
    },
    {
      isAlive: true,
      message: 'I am a real loser',
      name: 'Bronn',
      family: 'Nieve',
      age: 35,
      serveLevel: 5,
      servesTo: {
        isAlive: true,
        message: 'I hit first and ask later',
        name: 'Jamie',
        family: 'Lannister',
        age: 33,
        weapon: 'sword',
        skillLevel: 10,
        category: Category.Fighter, // Usa la enumeración para el tipo de personaje
      },
      category: Category.Squire, // Usa la enumeración para el tipo de personaje
    },
  ];

  return (
    <div>
      <List children={example}></List>
    </div>
  );
}
