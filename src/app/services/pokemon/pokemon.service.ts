import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonListApiResponse, Result } from './pokemon-api.interface';
import { SpeciesReponse } from './species.interface';
import { PokemonDetails } from './details.interface';
import { PokemonSpeciesInterface } from './specie.interface';

@Injectable({providedIn: 'root'})
export class PokemonService {

  limit  = 12;
  pageNumber = 0

  constructor(private http: HttpClient) {}

  getDetails(url: string) {
    return this.http.get<PokemonDetails>(url);
  }

  getByName(name: string) {
    return this.http
      .get<PokemonListApiResponse>(`${environment.urlBase}/pokemon/${name}`);
  }

  changePage(url) {
    return this.http.get<PokemonListApiResponse>(url);
  }

  getAll(): Observable<PokemonListApiResponse>{
    return this.http.get<PokemonListApiResponse>
      (`${environment.urlBase}/pokemon/?offset=${this.pageNumber}&limit=${this.limit}`);
  }

  getSpecies(url: string) {
    return this.http.get<PokemonSpeciesInterface>(url);
  }
}