import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: 'christmas-card', component: HomeComponent },
  { path: 'christmas-card/card/:id', component: CardsComponent },
  { path: '*', redirectTo: '/christmas-card', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
