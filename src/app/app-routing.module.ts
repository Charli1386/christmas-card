import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card/:id', component: CardsComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
