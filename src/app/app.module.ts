import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
