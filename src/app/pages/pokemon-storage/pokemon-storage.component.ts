import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Result } from 'src/app/services/pokemon/pokemon-api.interface';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pokemon-storage',
  templateUrl: './pokemon-storage.component.html',
  styleUrls: ['./pokemon-storage.component.scss'],
})
export class PokemonStorageComponent implements OnInit {

  previousUrl: string;
  nextUrl: string;
  
  count: number;
  limit: number;
  index: number;
  pageOptions = [1, 2, 5];

  results: Array<Result> = [];

  defaultLang: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pokeService: PokemonService,
    private translation: TranslateService
  ) { }

  ngOnInit(): void {
    
    this.pokeService.getAll().subscribe(pokemonResponse => {
      this.count = pokemonResponse.count,
      this.results = pokemonResponse.results,
      this.nextUrl = pokemonResponse.next,
      this.previousUrl = pokemonResponse.previous
    });
    this.limit = this.pokeService.limit;
  }

  injectTranslationPagitator() {
    this.translation.get('paginator.RANGE_PAGE_LABEL_2').subscribe(translation => {
      this.paginator._intl.itemsPerPageLabel = translation
   });
  }

  searchPokemon(name: string) {
    this.pokeService.getByName(name).subscribe(pokemonResponse => {
      this.count                  = pokemonResponse.count,
      this.results                = pokemonResponse.results,
      this.nextUrl                = pokemonResponse.next,
      this.previousUrl            = pokemonResponse.previous
    });
  }

  changePage(event: PageEvent) {
    if (event.previousPageIndex < event.pageIndex)
      this.next();
    else if (event.previousPageIndex > event.pageIndex)
      this.previous();
  }

  get isLoading() {
    return !this.results;
  }

  next() {
    this.pokeService.changePage(this.nextUrl).subscribe(response => {
      this.count                  = response.count,
      this.results                = response.results,
      this.nextUrl                = response.next,
      this.previousUrl            = response.previous
    })
  }

  previous() {
    this.pokeService.changePage(this.previousUrl).subscribe(response => {
      this.count                  = response.count,
      this.results                = response.results,
      this.nextUrl                = response.next,
      this.previousUrl            = response.previous
    })
  }
}
