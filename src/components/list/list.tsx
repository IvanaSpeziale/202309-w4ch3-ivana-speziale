import { useEffect } from 'react';
import { Card } from '../card/card';
import { useCharacters } from '../../hooks/useCharacter';
import '../../card.css';
import React from 'react';

export function List() {
  const { characters, loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);
  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item) => (
        <Card key={item.name} character={item}></Card>
      ))}
    </ul>
  );
}
