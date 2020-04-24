import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonDetails } from 'src/app/services/pokemon/details.interface';
import { PokemonSpeciesInterface } from 'src/app/services/pokemon/specie.interface';
import { PokeCardInterface } from './pokecard.interface';

@Component({
  selector: 'poke-card-component',
  styleUrls: ['./pokecard.component.scss'],
  templateUrl: './pokecard.component.html'
})
export class PokeCardComponent implements OnInit{
  @Input() url: string;

  pokemonDetails$: Observable<PokemonDetails>;

  name: string;
  imageUrl: string;
  color: string;
  order: number;
  species: string[];
  mainSkill: string;

  constructor(
    private pokeService: PokemonService  
  ) {}

  ngOnInit(): void {
    this.init();
    this.pokemonDetails$.subscribe(details => {
      this.name = details.name
      this.imageUrl = details.sprites.front_default
      this.order = details.order
      this.mainSkill = details.abilities[0].ability.name
      this.pokeService.getSpecies(details.species.url)
        .subscribe(specie => {
          this.color = specie.color.name
          this.species = specie.egg_groups.map(egg => egg.name)
      });
    });
  }

  init() {
    this.pokemonDetails$ = this.pokeService.getDetails(this.url);
  }

  get backgroundColor() {
    if(this.color)
      return `poke-card-background-${this.color.toString().toLowerCase()}`;
  }
}