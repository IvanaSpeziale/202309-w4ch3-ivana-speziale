import React from 'react';
import { List } from './list/list';
import { AnyCharacter } from './card/card';

export default function App() {
  const example: AnyCharacter[] = [
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jamie',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: 'fighter',
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jamie',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: 'fighter',
    },
  ];

  return (
    <div>
      <List children={example}></List>
    </div>
  );
}
