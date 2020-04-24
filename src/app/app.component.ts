import { Component, OnInit } from '@angular/core';
import { PokemonTranslationService } 
  from './services/translations/translation.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  constructor(
    private translate: PokemonTranslationService
  ) {}
  
  ngOnInit() {
    this.translate.initLocation();
  }


}
