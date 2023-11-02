/* import { useCallback, useMemo, useState } from 'react';
import { ApiRepo } from '../components/services/apiRepo';
import { Fighter, King, Squire, Advisor } from '../components/model/character';

export type AnyCharacter = King | Fighter | Advisor | Squire;

export function useCharacters() {
  const [characters, setCharacters] = useState<AnyCharacter[]>([]);
  const repo = useMemo(() => new ApiRepo(), []);
  const loadCharacters = useCallback(async () => {
    try {
      const loadedCharacters = await repo.getCharacters();
      setCharacters(loadedCharacters);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);
  return {
    characters,
    loadCharacters,
  };
} */
