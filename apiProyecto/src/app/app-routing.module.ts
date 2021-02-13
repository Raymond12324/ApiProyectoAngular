import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeTableComponent } from './components/poke-table/poke-table.component';


const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
