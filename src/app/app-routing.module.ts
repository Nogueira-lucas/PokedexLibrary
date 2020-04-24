import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonStorageComponent } from './pages/pokemon-storage/pokemon-storage.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonStorageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
