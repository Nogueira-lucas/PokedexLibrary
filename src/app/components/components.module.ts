import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CommonModule } from '@angular/common';
import { PokeCardComponent } from './pokecard/pokecard.component';
import { PokeToolbarComponent } from './poketoolbar/poketoolbar.component';
import { PokeSearchBarComponent } from './pokesearchbar/pokeseachbar.component';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from '../services/loading/interceptor.service';

const views = [
  PokeCardComponent,
  PokeToolbarComponent,
  PokeSearchBarComponent
]

@NgModule({
  declarations: [
    ...views
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...views
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ]
})
export class ComponentsModule {}