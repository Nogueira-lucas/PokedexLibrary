import { Component, EventEmitter } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'poke-search-bar',
  templateUrl: './pokeseachbar.component.html',
  styles: ['./pokeseachbar.component.scss']
})
export class PokeSearchBarComponent {
  name = new FormControl('');
  nameSubmitted = new EventEmitter<string>();
  
  emitName() {
    console.log(this.name.value)
    this.nameSubmitted.emit(this.name.value)
  }
}