import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PT_BR } from 'src/assets/i18n/pt';
import { EN_US } from 'src/assets/i18n/en';


const locales = [PT_BR, EN_US];

@Injectable({providedIn: 'root'})
export class PokemonTranslationService {
  constructor(private translateService: TranslateService) {}

  initLocation() {
    this.translateService.addLangs(['pt', 'en']);
    this.translateService.setDefaultLang('pt');
    this.translateService.use('pt');

    locales.forEach( (locale) => {
      this.translateService
        .setTranslation(locale.language, locale.component, true);
    });
  }

  setLang(lang) {
    this.translateService.use(lang);
    window.localStorage.setItem('lang', lang);
  }
}

