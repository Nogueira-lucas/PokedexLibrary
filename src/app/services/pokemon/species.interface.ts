export interface SpeciesReponse {
  color: Color;
  egg_groups: EggGroups[];
}

export interface Color {
  name: string;
  url: string;
}

export interface EggGroups {
  name: string;
  url: string;
}