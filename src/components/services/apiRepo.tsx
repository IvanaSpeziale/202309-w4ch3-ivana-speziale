import { Character, Fighter } from '../model/character';
import { King } from '../model/character';
import { Squire } from '../model/character';
import { Advisor } from '../model/character';

export type AnyCharacter = King | Fighter | Advisor | Squire;

export class ApiRepo {
  apiUrl = 'http://localhost:3000/characters';

  async getCharacters(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
