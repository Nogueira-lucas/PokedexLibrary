import { Species } from 'src/app/services/pokemon/pokemon-api.interface';

export interface PokeCardInterface {
  name: string;
  frontSprite: string;
  color: string;
  order: number;
  species: Array<string>;
  mainSkill: string;
}

export enum PokeColorEnum {
  BLACK = 'black',
  BLUE  = 'blue',
  BROWN = 'brown',
  GRAY  = 'gray',
  GREEN = 'green',
  PINK  = 'pink',
  PURPLE = 'purple',
  RED    = 'red',
  WHITE  = 'white',
  YELLOW = 'yellow',
}

