import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import {TranslateModule } from '@ngx-translate/core';
import { PokemonStorageComponent } from './pages/pokemon-storage/pokemon-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonStorageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ComponentsModule,
    TranslateModule.forRoot({}),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
