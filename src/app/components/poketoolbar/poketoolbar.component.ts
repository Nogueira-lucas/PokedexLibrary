import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PokemonTranslationService } from 'src/app/services/translations/translation.service';

@Component({
  selector: 'poke-toolbar',
  templateUrl: './poketoolbar.component.html',
  styleUrls: ['./poketoolbar.component.scss']
})
export class PokeToolbarComponent {
  @Input() isVisible: boolean = true;

  constructor(private translate: TranslateService) {}

  setLanguage(language: string) {
    this.translate.use(language)
  }
}